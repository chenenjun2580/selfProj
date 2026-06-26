<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import mammoth from 'mammoth'
import * as pdfjsLib from 'pdfjs-dist'
import JSZip from 'jszip'

// 设置 pdfjs worker（使用 CDN 加载）
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js'

const router = useRouter()

// ============ 文件分析相关 ============
const GLM_API_KEY = import.meta.env.VITE_GLM_API_KEY || ''
const GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'

// 阿里云 OSS 配置
const OSS_CONFIG = {
  region: 'oss-cn-beijing',
  bucket: 'java-ai-chenenjun',
  accessKeyId: import.meta.env.VITE_OSS_ACCESS_KEY_ID || '',
  accessKeySecret: import.meta.env.VITE_OSS_ACCESS_KEY_SECRET || '',
  endpoint: 'oss-cn-beijing.aliyuncs.com'
}

const selectedFile = ref<File | null>(null)
const fileInfo = ref<{
  name: string
  size: string
  type: string
  extension: string
  mimeType: string
} | null>(null)
const isAnalyzing = ref(false)
const aiResponse = ref('')
const errorMsg = ref('')
const uploadProgress = ref(0)
const uploadStatus = ref('') // 'uploading' | 'uploaded' | ''

// 文件选择
function handleFileSelect(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  selectedFile.value = file
  aiResponse.value = ''
  errorMsg.value = ''
  uploadProgress.value = 0
  uploadStatus.value = ''

  // 解析文件信息
  const ext = file.name.split('.').pop()?.toLowerCase() || '未知'
  const sizeStr = file.size < 1024 * 1024
    ? (file.size / 1024).toFixed(1) + ' KB'
    : (file.size / (1024 * 1024)).toFixed(2) + ' MB'

  fileInfo.value = {
    name: file.name,
    size: sizeStr,
    type: getFileTypeDescription(ext, file.type),
    extension: ext.toUpperCase(),
    mimeType: file.type || '未知'
  }
}

function getFileTypeDescription(ext: string, mime: string): string {
  const map: Record<string, string> = {
    png: 'PNG 图片', jpg: 'JPEG 图片', jpeg: 'JPEG 图片',
    gif: 'GIF 图片', webp: 'WebP 图片', bmp: 'BMP 图片',
    svg: 'SVG 矢量图', ico: 'ICO 图标',
    pdf: 'PDF 文档', doc: 'Word 文档（旧版）', docx: 'Word 文档',
    xls: 'Excel 表格（旧版）', xlsx: 'Excel 表格',
    ppt: 'PowerPoint（旧版）', pptx: 'PowerPoint 演示文稿',
    txt: '纯文本文件', csv: 'CSV 数据文件', json: 'JSON 数据文件',
    xml: 'XML 文件', html: 'HTML 网页', css: 'CSS 样式表',
    js: 'JavaScript 脚本', ts: 'TypeScript 脚本', py: 'Python 脚本',
    java: 'Java 源文件', zip: 'ZIP 压缩包', rar: 'RAR 压缩包',
    '7z': '7Z 压缩包', mp3: 'MP3 音频', mp4: 'MP4 视频',
    avi: 'AVI 视频', mov: 'MOV 视频',
  }
  return map[ext] || (mime || '未知类型')
}

// 上传文件到阿里云 OSS（Query String 签名方式，无需自定义请求头）
async function uploadToOSS(file: File): Promise<string> {
  const ext = file.name.split('.').pop() || 'dat'
  const timestamp = Date.now()
  const randomStr = Math.random().toString(36).substring(2, 8)
  const objectKey = `uploads/${timestamp}_${randomStr}.${ext}`

  const host = `https://${OSS_CONFIG.bucket}.${OSS_CONFIG.endpoint}`
  const contentType = file.type || 'application/octet-stream'

  // 过期时间（5 分钟后）
  const expiration = new Date(Date.now() + 5 * 60 * 1000).toISOString()

  // 构造 Policy (base64)
  const policy = btoa(JSON.stringify({
    expiration: expiration,
    conditions: [
      { bucket: OSS_CONFIG.bucket },
      ['starts-with', '$key', 'uploads/'],
      { 'Content-Type': contentType },
      ['content-length-range', 0, 104857600] // 100MB 上限
    ]
  }))

  // 使用 Web Crypto API 计算 HMAC-SHA1 签名
  const encoder = new TextEncoder()
  const keyData = encoder.encode(OSS_CONFIG.accessKeySecret)
  const policyData = encoder.encode(policy)

  const cryptoKey = await crypto.subtle.importKey(
    'raw', keyData,
    { name: 'HMAC', hash: 'SHA-1' },
    false, ['sign']
  )
  const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, policyData)
  const signature = btoa(String.fromCharCode(...new Uint8Array(signatureBuffer)))

  // 构造 FormData
  const formData = new FormData()
  formData.append('key', objectKey)
  formData.append('policy', policy)
  formData.append('Signature', signature)
  formData.append('OSSAccessKeyId', OSS_CONFIG.accessKeyId)
  formData.append('success_action_status', '200')
  formData.append('Content-Type', contentType)
  formData.append('file', file)

  // 使用 XHR 上传以获取进度
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', host, true)

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        uploadProgress.value = Math.round((e.loaded / e.total) * 100)
      }
    }

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 204) {
        resolve(`${host}/${objectKey}`)
      } else {
        reject(new Error(`OSS 上传失败: HTTP ${xhr.status} - ${xhr.responseText}`))
      }
    }

    xhr.onerror = () => reject(new Error('网络错误，OSS 上传失败'))
    xhr.send(formData)
  })
}

// 调用智谱AI API 分析文件内容
async function analyzeFile() {
  if (!selectedFile.value) return

  isAnalyzing.value = true
  errorMsg.value = ''
  aiResponse.value = ''
  uploadProgress.value = 0
  uploadStatus.value = 'uploading'

  try {
    // 1. 上传文件到 OSS
    const fileUrl = await uploadToOSS(selectedFile.value)
    uploadStatus.value = 'uploaded'

    // 2. 调用智谱AI 分析
    const ext = fileInfo.value!.extension.toLowerCase()
    const mimeType = selectedFile.value.type || '未知'
    const isImage = selectedFile.value.type.startsWith('image/')

    // 文本类文件识别
    const readableTypes = ['text/', 'application/json', 'application/xml', 'application/javascript']
    const readableExts = ['txt', 'csv', 'json', 'xml', 'html', 'css', 'js', 'ts', 'py', 'java', 'log', 'md', 'yaml', 'yml']
    const isReadable = readableTypes.some(t => mimeType.startsWith(t)) || readableExts.includes(ext)

    const systemMsg = { role: 'system', content: '你是一个专业的文件分析助手，请用中文回答。' }

    let messages: any[] = []
    let model = ''

    if (isImage) {
      // 图片：使用视觉模型 glm-4.6v-flash，支持 image_url
      model = 'glm-4.6v-flash'
      messages = [
        systemMsg,
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: fileUrl }
            },
            {
              type: 'text',
              text: `请详细描述这张图片的内容，包括：
1. 图片中有什么内容？人物、物体、场景、文字等
2. 图片的整体风格和色调
3. 图片可能的用途或场景
4. 任何值得注意的细节

文件名：${selectedFile.value.name}
格式：${ext.toUpperCase()}`
            }
          ]
        }
      ]
    } else {
      // 非图片：先提取文本和图片
      const isDocx = ext === 'docx'
      const isPdf = ext === 'pdf'

      let docText = ''
      let imageUrls: string[] = []

      if (isReadable) {
        // 纯文本文件
        try {
          const text = await selectedFile.value.text()
          docText = text.length > 4000 ? text.substring(0, 4000) + '\n...(内容过长已截断)' : text
        } catch {
          docText = '(无法读取文件文本内容)'
        }
      } else if (isDocx) {
        // .docx：提取文本 + 内嵌图片
        const arrayBuffer = await selectedFile.value.arrayBuffer()
        try {
          // 提取文本
          const result = await mammoth.extractRawText({ arrayBuffer })
          docText = result.value
          docText = docText.length > 4000 ? docText.substring(0, 4000) + '\n...(内容过长已截断)' : docText
        } catch (e) {
          docText = `(文本解析失败: ${e})`
        }
        try {
          // 用 JSZip 解压提取图片
          const zip = await JSZip.loadAsync(arrayBuffer)
          const mediaFolder = zip.folder('word/media')
          if (mediaFolder) {
            let idx = 0
            const imgPromises: Promise<string | null>[] = []
            mediaFolder.forEach((_: string, entry: any) => {
              if (idx >= 5) return // 最多提取 5 张
              const fileExt = entry.name.split('.').pop()?.toLowerCase() || 'png'
              if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp'].includes(fileExt)) {
                idx++
                imgPromises.push(
                  entry.async('blob').then((blob: Blob) => {
                    const mime = `image/${fileExt === 'jpg' ? 'jpeg' : fileExt}`
                    const file = new File([blob], `docx_img_${idx}.${fileExt}`, { type: mime })
                    return uploadToOSS(file)
                  }).catch(() => null)
                )
              }
            })
            const results = await Promise.all(imgPromises)
            imageUrls = results.filter(Boolean) as string[]
          }
        } catch (e) {
          console.warn('提取 .docx 图片失败:', e)
        }
      } else if (isPdf) {
        // .pdf：提取文本 + 渲染每页为图片
        const arrayBuffer = await selectedFile.value.arrayBuffer()
        try {
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
          let allText = ''
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i)
            const content = await page.getTextContent()
            const pageText = content.items.map((item: any) => item.str).join(' ')
            allText += `[第${i}页] ${pageText}\n`
          }
          docText = allText.length > 4000 ? allText.substring(0, 4000) + '\n...(内容过长已截断)' : allText
        } catch (e) {
          docText = `(文本解析失败: ${e})`
        }
        try {
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
          const totalPages = Math.min(pdf.numPages, 5) // 最多渲染 5 页
          const imgPromises: Promise<string | null>[] = []
          for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i)
            const viewport = page.getViewport({ scale: 1.5 })
            const canvas = document.createElement('canvas')
            canvas.width = viewport.width
            canvas.height = viewport.height
            await page.render({ canvas, viewport } as any).promise
            // 转 blob 后上传
            const blob = await new Promise<Blob | null>(resolve => {
              canvas.toBlob(b => resolve(b), 'image/png')
            })
            if (blob) {
              const file = new File([blob], `pdf_page_${i}.png`, { type: 'image/png' })
              imgPromises.push(uploadToOSS(file).catch(() => null))
            }
          }
          const results = await Promise.all(imgPromises)
          imageUrls = results.filter(Boolean) as string[]
        } catch (e) {
          console.warn('渲染 .pdf 页面图片失败:', e)
        }
      } else {
        docText = '(该文件类型不支持文本预览)'
      }

      if (imageUrls.length > 0) {
        // 有图片：使用视觉模型 glm-4.6v-flash，同时分析图片和文字
        model = 'glm-4.6v-flash'
        const content: any[] = []
        for (const url of imageUrls) {
          content.push({ type: 'image_url', image_url: { url } })
        }
        content.push({
          type: 'text',
          text: `请分析以下文档：

文件名：${selectedFile.value.name}
文件扩展名：${ext.toUpperCase()}
MIME 类型：${mimeType}
文件大小：${fileInfo.value!.size}

提取的文档文字：
\`\`\`
${docText}
\`\`\`

请结合文档文字和上图（文档内嵌图片或页面截图），综合分析：
1. 这是什么类型的文件？
2. 该文件的用途是什么？
3. 文档内容包含什么？
4. 文档中的图片展示了什么信息？
5. 任何值得注意的信息`
        })
        messages = [systemMsg, { role: 'user', content }]
      } else {
        // 无图片：使用文本模型 glm-4.7-flashx
        model = 'glm-4.7-flashx'
        messages = [systemMsg, { role: 'user', content: `请分析以下文件：

文件名：${selectedFile.value.name}
文件扩展名：${ext.toUpperCase()}
MIME 类型：${mimeType}
文件大小：${fileInfo.value!.size}
文件 OSS URL：${fileUrl}

文件内容：
\`\`\`
${docText}
\`\`\`

请告诉我：
1. 这是什么类型的文件？
2. 该文件的用途是什么？
3. 对该文件内容的分析和总结
4. 任何值得注意的信息` }]
      }
    }

    // API 调用函数（含重试和降级）
    async function callGLM(modelToUse: string, msgsToUse: any[], retries = 3): Promise<Response> {
      for (let i = 0; i < retries; i++) {
        const res = await fetch(GLM_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GLM_API_KEY}` },
          body: JSON.stringify({
            model: modelToUse,
            messages: msgsToUse,
            max_tokens: 4096,
            temperature: 0.7,
            stream: false
          })
        })
        if (res.status === 429 && i < retries - 1) {
          const waitMs = (i + 1) * 4000 // 4s, 8s, 12s
          console.warn(`限流(429) ${modelToUse}，${waitMs / 1000}秒后重试...`)
          await new Promise(r => setTimeout(r, waitMs))
          continue
        }
        return res
      }
      return fetch(GLM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GLM_API_KEY}` },
        body: JSON.stringify({
          model: modelToUse,
          messages: msgsToUse,
          max_tokens: 4096,
          temperature: 0.7,
          stream: false
        })
      })
    }

    let response = await callGLM(model, messages)

    // 如果是视觉模型且限流，降级为文本模型重试
    if (response.status === 429 && model === 'glm-4.6v-flash') {
      console.warn('glm-4.6v-flash 限流，降级为 glm-4.7-flashx 文本分析')
      const fallbackModel = 'glm-4.7-flashx'
      // 构建文本降级消息
      let fallbackText = ''
      if (messages[1]?.content && Array.isArray(messages[1].content)) {
        // 从多模态内容中提取文本
        for (const item of messages[1].content) {
          if (item.type === 'text') fallbackText += item.text + '\n'
        }
      } else {
        fallbackText = messages[1]?.content || ''
      }
      fallbackText += '\n\n（注：原计划通过视觉模型分析图片，但由于模型限流已降级为文本分析）'
      const fallbackMessages = [systemMsg, { role: 'user', content: fallbackText }]
      response = await callGLM(fallbackModel, fallbackMessages)
    }

    if (!response.ok) {
      const errBody = await response.text()
      console.error('智谱AI API 错误响应:', errBody)
      let errMsg = `HTTP ${response.status}`
      try {
        const err = JSON.parse(errBody)
        errMsg = err.error?.message || err.message || errMsg
      } catch {}
      throw new Error(`智谱AI 请求失败: ${errMsg}`)
    }

    const data = await response.json()
    aiResponse.value = data.choices?.[0]?.message?.content || 'API 返回为空'
  } catch (e: any) {
    errorMsg.value = e.message || '分析失败，请稍后重试'
  } finally {
    isAnalyzing.value = false
    uploadStatus.value = ''
  }
}

function clearFile() {
  selectedFile.value = null
  fileInfo.value = null
  aiResponse.value = ''
  errorMsg.value = ''
  uploadProgress.value = 0
  uploadStatus.value = ''
}

// ============ 模拟实时数据 ============
const realtimeData = ref({
  users: 12847,
  orders: 3562,
  revenue: 894200,
  growth: 23.5
})

const chartData = ref([
  { label: '周一', value: 120 },
  { label: '周二', value: 200 },
  { label: '周三', value: 150 },
  { label: '周四', value: 280 },
  { label: '周五', value: 190 },
  { label: '周六', value: 320 },
  { label: '周日', value: 250 }
])

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  // Dashboard 页面内容较多，需要允许滚动
  document.documentElement.style.overflow = 'auto'
  document.documentElement.style.height = 'auto'
  document.body.style.overflow = 'auto'
  document.body.style.height = 'auto'
  const app = document.getElementById('app')
  if (app) {
    app.style.height = 'auto'
    app.style.minHeight = '100vh'
  }

  timer = setInterval(() => {
    realtimeData.value.users += Math.floor(Math.random() * 10)
    realtimeData.value.orders += Math.floor(Math.random() * 5)
    realtimeData.value.revenue += Math.floor(Math.random() * 1000)
  }, 3000)
})

onUnmounted(() => {
  // 恢复全局样式
  document.documentElement.style.overflow = ''
  document.documentElement.style.height = ''
  document.body.style.overflow = ''
  document.body.style.height = ''
  const app = document.getElementById('app')
  if (app) {
    app.style.height = ''
    app.style.minHeight = ''
  }
  if (timer) clearInterval(timer)
})

function logout() {
  router.replace('/')
}
</script>

<template>
  <div class="dashboard-page">
    <!-- 顶部导航 -->
    <header class="dashboard-header">
      <div class="header-left">
        <h1>数据可视化面板</h1>
        <span class="subtitle">Dashboard</span>
      </div>
      <div class="header-right">
        <span class="user-info">管理员：root</span>
        <button class="logout-btn" @click="logout">退出登录</button>
      </div>
    </header>

    <!-- 统计卡片 -->
    <section class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon users-icon">👥</div>
        <div class="stat-info">
          <span class="stat-label">用户总数</span>
          <span class="stat-value">{{ realtimeData.users.toLocaleString() }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orders-icon">📦</div>
        <div class="stat-info">
          <span class="stat-label">订单数量</span>
          <span class="stat-value">{{ realtimeData.orders.toLocaleString() }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon revenue-icon">💰</div>
        <div class="stat-info">
          <span class="stat-label">营收总额</span>
          <span class="stat-value">¥{{ realtimeData.revenue.toLocaleString() }}</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon growth-icon">📈</div>
        <div class="stat-info">
          <span class="stat-label">增长率</span>
          <span class="stat-value growth-up">+{{ realtimeData.growth }}%</span>
        </div>
      </div>
    </section>

    <!-- 文件分析工具 -->
    <section class="file-analyzer-section">
      <div class="chart-card full-width">
        <h3>🤖 AI 文件分析工具</h3>
        <p class="section-desc">选择本地文件上传至 OSS，AI 将根据文件实际内容进行分析</p>

        <div class="file-upload-area">
          <input
            type="file"
            id="file-input"
            class="file-input-hidden"
            @change="handleFileSelect"
            accept="*/*"
          />
          <label for="file-input" class="file-upload-label">
            <span class="upload-icon">📁</span>
            <span>点击选择文件</span>
            <span class="upload-hint">支持图片、文档、代码等所有格式</span>
          </label>

          <div v-if="fileInfo" class="file-detail-card">
            <div class="file-detail-header">
              <span class="file-icon">{{ fileInfo.extension === 'PNG' || fileInfo.extension === 'JPG' || fileInfo.extension === 'JPEG' || fileInfo.extension === 'GIF' || fileInfo.extension === 'WEBP' ? '🖼️' : '📄' }}</span>
              <div class="file-detail-info">
                <span class="file-name">{{ fileInfo.name }}</span>
                <span class="file-meta">{{ fileInfo.size }} · {{ fileInfo.type }}</span>
              </div>
              <button class="clear-btn" @click="clearFile">✕</button>
            </div>
            <div class="file-detail-tags">
              <span class="file-tag">扩展名: {{ fileInfo.extension }}</span>
              <span class="file-tag">MIME: {{ fileInfo.mimeType }}</span>
            </div>

            <!-- 上传进度 -->
            <div v-if="uploadStatus === 'uploading'" class="upload-progress">
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" :style="{ width: uploadProgress + '%' }"></div>
              </div>
              <span class="progress-text">上传至 OSS... {{ uploadProgress }}%</span>
            </div>
            <div v-if="uploadStatus === 'uploaded'" class="upload-done">
              ✅ 文件已上传至 OSS，正在分析...
            </div>

            <button
              class="analyze-btn"
              @click="analyzeFile"
              :disabled="isAnalyzing"
            >
              <span v-if="isAnalyzing" class="spinner"></span>
              {{ isAnalyzing ? (uploadStatus === 'uploading' ? '上传中...' : 'AI 分析中...') : '🚀 上传并分析' }}
            </button>
          </div>
        </div>

        <!-- AI 返回结果 -->
        <div v-if="errorMsg" class="result-card error-card">
          <span class="result-icon">❌</span>
          <p>{{ errorMsg }}</p>
        </div>

        <div v-if="aiResponse" class="result-card success-card">
          <div class="result-header">
            <span class="result-icon">✅</span>
            <span>智谱AI 分析结果</span>
          </div>
          <div class="result-content" v-text="aiResponse"></div>
        </div>
      </div>
    </section>

    <!-- 图表区域 -->
    <section class="charts-grid">
      <div class="chart-card">
        <h3>本周数据趋势</h3>
        <div class="bar-chart">
          <div
            v-for="(item, index) in chartData"
            :key="index"
            class="bar-item"
          >
            <div class="bar-wrapper">
              <div
                class="bar"
                :style="{ height: (item.value / 350) * 100 + '%' }"
              ></div>
            </div>
            <span class="bar-label">{{ item.label }}</span>
            <span class="bar-value">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h3>系统状态</h3>
        <div class="status-list">
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>服务器运行中</span>
            <span class="status-tag">正常</span>
          </div>
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>数据库连接</span>
            <span class="status-tag">正常</span>
          </div>
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>API 服务</span>
            <span class="status-tag">正常</span>
          </div>
          <div class="status-item">
            <span class="status-dot warning"></span>
            <span>缓存服务</span>
            <span class="status-tag warn">延迟</span>
          </div>
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>消息队列</span>
            <span class="status-tag">正常</span>
          </div>
        </div>
      </div>

      <div class="chart-card full-width">
        <h3>数据表格预览</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>名称</th>
              <th>类别</th>
              <th>数值</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 6" :key="i">
              <td>{{ 1000 + i }}</td>
              <td>数据项 {{ i }}</td>
              <td>类别 {{ ['A', 'B', 'C'][(i - 1) % 3] }}</td>
              <td>{{ Math.floor(Math.random() * 10000).toLocaleString() }}</td>
              <td><span class="badge" :class="i % 2 === 0 ? 'badge-success' : 'badge-warning'">{{ i % 2 === 0 ? '已完成' : '进行中' }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.dashboard-page {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #e0e0e0;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  padding: 0 0 40px;
  overflow-y: auto;
  /* 隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.dashboard-page::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

/* Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
}

.header-left h1 {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 12px;
  color: #888;
  margin-left: 4px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info {
  font-size: 14px;
  color: #aaa;
}

.logout-btn {
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #e0e0e0;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s;
}

.logout-btn:hover {
  background: rgba(231, 76, 60, 0.2);
  border-color: #e74c3c;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px 40px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.users-icon { background: rgba(102, 126, 234, 0.15); }
.orders-icon { background: rgba(118, 75, 162, 0.15); }
.revenue-icon { background: rgba(39, 174, 96, 0.15); }
.growth-icon { background: rgba(241, 196, 15, 0.15); }

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-label {
  font-size: 13px;
  color: #888;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
}

.growth-up {
  color: #2ecc71 !important;
}

/* ======== 文件分析区域 ======== */
.file-analyzer-section {
  padding: 0 40px 20px;
}

.section-desc {
  color: #888;
  font-size: 13px;
  margin-bottom: 20px;
}

.file-upload-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.file-input-hidden {
  display: none;
}

.file-upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px;
  border: 2px dashed rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.02);
}

.file-upload-label:hover {
  border-color: rgba(102, 126, 234, 0.5);
  background: rgba(102, 126, 234, 0.05);
}

.upload-icon {
  font-size: 36px;
}

.upload-hint {
  font-size: 12px;
  color: #666;
}

/* 文件详情卡片 */
.file-detail-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
}

.file-detail-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.file-icon {
  font-size: 32px;
}

.file-detail-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.file-name {
  font-size: 15px;
  font-weight: 600;
  color: #e0e0e0;
  word-break: break-all;
}

.file-meta {
  font-size: 12px;
  color: #888;
}

.clear-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: #888;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.clear-btn:hover {
  color: #e74c3c;
  border-color: #e74c3c;
}

.file-detail-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.file-tag {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(102, 126, 234, 0.15);
  color: #8899dd;
}

/* 分析按钮 */
.analyze-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.analyze-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
}

.analyze-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 上传进度 */
.upload-progress {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 12px;
  color: #888;
}

.upload-done {
  font-size: 13px;
  color: #2ecc71;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 结果卡片 */
.result-card {
  margin-top: 16px;
  padding: 20px;
  border-radius: 12px;
}

.error-card {
  background: rgba(231, 76, 60, 0.08);
  border: 1px solid rgba(231, 76, 60, 0.2);
  color: #e74c3c;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
}

.success-card {
  background: rgba(46, 204, 113, 0.06);
  border: 1px solid rgba(46, 204, 113, 0.15);
}

.result-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #2ecc71;
  margin-bottom: 12px;
}

.result-icon {
  font-size: 16px;
}

.result-content {
  font-size: 14px;
  line-height: 1.8;
  color: #ccc;
  white-space: pre-wrap;
  word-break: break-word;
}

/* Charts */
.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 40px;
}

.chart-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.chart-card.full-width {
  grid-column: 1 / -1;
}

.chart-card h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ccc;
}

/* Bar Chart */
.bar-chart {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  padding-bottom: 4px;
}

.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.bar-wrapper {
  width: 36px;
  height: 160px;
  display: flex;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
  overflow: hidden;
}

.bar {
  width: 100%;
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 6px 6px 0 0;
  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 4px;
}

.bar-label {
  font-size: 11px;
  color: #777;
}

.bar-value {
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
}

/* Status List */
.status-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot.online {
  background: #2ecc71;
  box-shadow: 0 0 8px rgba(46, 204, 113, 0.5);
}

.status-dot.warning {
  background: #f39c12;
  box-shadow: 0 0 8px rgba(243, 156, 18, 0.5);
}

.status-tag {
  margin-left: auto;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 12px;
  background: rgba(46, 204, 113, 0.12);
  color: #2ecc71;
}

.status-tag.warn {
  background: rgba(243, 156, 18, 0.12);
  color: #f39c12;
}

/* Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.data-table th {
  text-align: left;
  padding: 12px 16px;
  color: #888;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  color: #ccc;
}

.data-table tbody tr:hover {
  background: rgba(255, 255, 255, 0.02);
}

.badge {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 12px;
}

.badge-success {
  background: rgba(46, 204, 113, 0.12);
  color: #2ecc71;
}

.badge-warning {
  background: rgba(243, 156, 18, 0.12);
  color: #f39c12;
}

/* Responsive */
@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
  }
  .charts-grid {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  .dashboard-header {
    padding: 16px 20px;
  }
  .file-analyzer-section {
    padding: 0 20px 20px;
  }
}
</style>
