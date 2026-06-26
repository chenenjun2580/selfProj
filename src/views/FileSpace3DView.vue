<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'

// ========== DeepSeek API ==========
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || ''
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions'

// ========== 文件数据 ==========
interface SpaceFile {
  id: string
  name: string
  type: 'image' | 'document' | 'other'
  ext: string
  size: string
  description: string
  dataUrl?: string
  textContent?: string        // 文档文本内容
  rawFile?: File              // 上传的原始文件
  position: THREE.Vector3
  mesh?: THREE.Object3D
  label?: CSS2DObject
}

const spaceFiles = ref<SpaceFile[]>([])
const selectedFile = ref<SpaceFile | null>(null)
const showPreview = ref(false)
const previewFile = ref<SpaceFile | null>(null)
const previewTab = ref<'preview' | 'info'>('preview')
const chatMessages = ref<{ role: string; content: string }[]>([])
const userInput = ref('')
const isAIThinking = ref(false)

// ========== Three.js 场景 ==========
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let labelRenderer: CSS2DRenderer
let controls: OrbitControls
let animationId: number
let container: HTMLDivElement
let raycaster: THREE.Raycaster
let mouse: THREE.Vector2
let isMouseDown = false
let mouseMoved = false
let clickStartPos = { x: 0, y: 0 }

// 文件颜色映射
const fileColors: Record<string, number> = {
  image: 0x4fc3f7,
  document: 0xffb74d,
  other: 0x81c784,
}

function initScene() {
  container = document.getElementById('three-container') as HTMLDivElement
  const w = container.clientWidth
  const h = container.clientHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0a0a1a)
  scene.fog = new THREE.Fog(0x0a0a1a, 30, 60)

  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100)
  camera.position.set(15, 12, 18)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  container.appendChild(renderer.domElement)

  labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(w, h)
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = '0'
  labelRenderer.domElement.style.left = '0'
  labelRenderer.domElement.style.pointerEvents = 'none'
  container.appendChild(labelRenderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 5
  controls.maxDistance = 50
  controls.maxPolarAngle = Math.PI / 2.2
  controls.target.set(0, 1, 0)

  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()

  // 灯光
  const ambientLight = new THREE.AmbientLight(0x404060, 0.6)
  scene.add(ambientLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5)
  dirLight.position.set(10, 20, 10)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 2048
  dirLight.shadow.mapSize.height = 2048
  scene.add(dirLight)

  const fillLight = new THREE.DirectionalLight(0x8888ff, 0.4)
  fillLight.position.set(-10, 5, -10)
  scene.add(fillLight)

  const pointLight = new THREE.PointLight(0xff4488, 0.3, 20)
  pointLight.position.set(0, 5, 0)
  scene.add(pointLight)

  // 地面
  const groundGeo = new THREE.PlaneGeometry(40, 40)
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a20,
    roughness: 0.8,
    metalness: 0.2,
    transparent: true,
    opacity: 0.9,
  })
  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.01
  ground.receiveShadow = true
  scene.add(ground)

  // 网格
  const gridHelper = new THREE.GridHelper(40, 40, 0x4444aa, 0x222266)
  gridHelper.position.y = 0
  scene.add(gridHelper)

  // 环境粒子
  createParticles()

  // 鼠标/触摸事件
  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  renderer.domElement.addEventListener('pointerup', onPointerUp)
  renderer.domElement.addEventListener('pointermove', onPointerMove)

  window.addEventListener('resize', onResize)

  animate()
}

function createParticles() {
  const count = 500
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60
    positions[i * 3 + 1] = Math.random() * 15
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60
    const c = new THREE.Color().setHSL(0.65 + Math.random() * 0.2, 0.6, 0.3 + Math.random() * 0.3)
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const mat = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const points = new THREE.Points(geo, mat)
  scene.add(points)
}

function createFileObject(file: SpaceFile): THREE.Object3D {
  const group = new THREE.Group()
  const color = fileColors[file.type] || fileColors.other

  if (file.type === 'image') {
    // 3D 相框
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.7,
      roughness: 0.2,
    })
    const frameW = 1.8, frameH = 1.4, depth = 0.08
    // 相框外框
    const outer = new THREE.BoxGeometry(frameW + 0.12, frameH + 0.12, depth)
    const outerMesh = new THREE.Mesh(outer, frameMat)
    outerMesh.position.z = -depth / 2
    group.add(outerMesh)

    // 相框内图片
    if (file.dataUrl) {
      const img = new Image()
      img.src = file.dataUrl
      const texture = new THREE.Texture(img)
      texture.needsUpdate = true
      const imgMat = new THREE.MeshBasicMaterial({ map: texture })
      const imgGeo = new THREE.PlaneGeometry(frameW, frameH)
      const imgMesh = new THREE.Mesh(imgGeo, imgMat)
      imgMesh.position.z = depth / 2 + 0.01
      group.add(imgMesh)
    } else {
      const imgMat = new THREE.MeshStandardMaterial({ color: 0x333355 })
      const imgGeo = new THREE.PlaneGeometry(frameW, frameH)
      const imgMesh = new THREE.Mesh(imgGeo, imgMat)
      imgMesh.position.z = depth / 2 + 0.01
      group.add(imgMesh)
      // 占位图标
      const iconMat = new THREE.MeshStandardMaterial({ color })
      const iconGeo = new THREE.CircleGeometry(0.3, 16)
      const icon = new THREE.Mesh(iconGeo, iconMat)
      icon.position.z = 0.05
      group.add(icon)
    }
  } else if (file.type === 'document') {
    // 书本模型
    const pageMat = new THREE.MeshStandardMaterial({
      color: 0xfff8e7,
      roughness: 0.8,
    })
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x222244,
      roughness: 0.4,
      metalness: 0.3,
    })

    const bookW = 1.2, bookH = 0.08, bookD = 1.6
    // 封面
    const cover = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
    cover.position.y = 0.04
    group.add(cover)
    // 封底
    const back = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
    back.position.y = -0.04
    group.add(back)
    // 书页
    const pages = new THREE.Mesh(new THREE.BoxGeometry(bookW - 0.05, 0.06, bookD - 0.05), pageMat)
    pages.position.y = 0
    group.add(pages)
    // 书脊高亮
    const spineMat = new THREE.MeshStandardMaterial({ color })
    const spine = new THREE.Mesh(new THREE.BoxGeometry(0.04, bookH + 0.08, bookD), spineMat)
    spine.position.set(-bookW / 2 + 0.02, 0, 0)
    group.add(spine)
  } else {
    // 通用 - 六棱柱
    const geo = new THREE.CylinderGeometry(0.5, 0.5, 0.8, 6)
    const mat = new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.5 })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    group.add(mesh)
    // 发光环
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.75, 32), ringMat)
    ring.rotation.x = -Math.PI / 2
    ring.position.y = -0.5
    group.add(ring)
  }

  group.position.copy(file.position)
  group.castShadow = true
  group.userData.fileId = file.id

  // 随机旋转
  group.rotation.y = Math.random() * Math.PI * 2
  group.rotation.x = (Math.random() - 0.5) * 0.1

  return group
}

function createLabel(file: SpaceFile): CSS2DObject {
  const div = document.createElement('div')
  div.className = 'file-label'
  div.textContent = file.name
  div.style.cssText = `
    color: #fff;
    font-size: 12px;
    background: rgba(0,0,0,0.7);
    padding: 4px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.15);
    pointer-events: none;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    font-family: 'Segoe UI', sans-serif;
  `
  const label = new CSS2DObject(div)
  label.position.set(file.position.x, file.position.y + 1.5, file.position.z)
  return label
}

function addFileToScene(file: SpaceFile) {
  const mesh = createFileObject(file)
  scene.add(mesh)
  file.mesh = mesh

  const label = createLabel(file)
  scene.add(label)
  file.label = label
}

// ========== 交互 ==========
function onPointerDown(e: PointerEvent) {
  isMouseDown = true
  mouseMoved = false
  clickStartPos.x = e.clientX
  clickStartPos.y = e.clientY
}

function onPointerMove(e: PointerEvent) {
  if (isMouseDown) {
    const dx = e.clientX - clickStartPos.x
    const dy = e.clientY - clickStartPos.y
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) mouseMoved = true
  }
}

function onPointerUp(e: PointerEvent) {
  if (mouseMoved) { isMouseDown = false; return }
  isMouseDown = false

  mouse.x = (e.offsetX / renderer.domElement.clientWidth) * 2 - 1
  mouse.y = -(e.offsetY / renderer.domElement.clientHeight) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const meshes: THREE.Object3D[] = []
  scene.traverse(obj => {
    if (obj.userData.fileId) meshes.push(obj)
  })
  const intersects = raycaster.intersectObjects(meshes, true)
  if (intersects.length > 0) {
    let obj = intersects[0].object
    while (obj.parent && !obj.userData.fileId) obj = obj.parent
    if (obj.userData.fileId) {
      const file = spaceFiles.value.find((f: SpaceFile) => f.id === obj.userData.fileId)
      if (file) selectFile(file)
    }
  }
}

function selectFile(file: SpaceFile) {
  selectedFile.value = file
  // 高亮
  spaceFiles.value.forEach((f: SpaceFile) => {
    if (f.mesh) {
      f.mesh.children.forEach((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial
          if (mat && mat.emissive) {
            mat.emissive.setHex(f.id === file.id ? 0x4444ff : 0x000000)
            mat.emissiveIntensity = f.id === file.id ? 0.3 : 0
          }
        }
      })
    }
  })
  // 聚焦
  if (file.mesh) {
    const pos = file.mesh.position.clone()
    controls.target.lerp(pos, 0.3)
  }
  // 打开预览
  openPreview(file)
  // AI 自动介绍
  if (!isAIThinking.value) {
    askAI(`请介绍这个文件：${file.name}，类型：${file.type}，格式：${file.ext}，大小：${file.size}`)
  }
}

function openPreview(file: SpaceFile) {
  previewFile.value = file
  previewTab.value = 'preview'
  showPreview.value = true
}

function closePreview() {
  showPreview.value = false
  previewFile.value = null
}

// ========== DeepSeek AI ==========
async function askAI(prompt: string) {
  isAIThinking.value = true
  chatMessages.value.push({ role: 'user', content: prompt })
  try {
    const res = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `你是一个3D文件空间导航助手。用户在一个3D虚拟空间中浏览文件。
当前空间中有 ${spaceFiles.value.length} 个文件。
你可以帮助他们找到文件、描述文件内容、推荐查看顺序等。
请用中文回答，简洁明了。`,
          },
          ...chatMessages.value.map((m: { role: string; content: string }) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
          })),
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false,
      }),
    })
    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content || '抱歉，我没有理解。'
    chatMessages.value.push({ role: 'assistant', content: reply })
  } catch {
    chatMessages.value.push({ role: 'assistant', content: 'AI 服务暂时不可用，请稍后重试。' })
  } finally {
    isAIThinking.value = false
  }
}

async function sendMessage() {
  if (!userInput.value.trim() || isAIThinking.value) return
  const msg = userInput.value.trim()
  userInput.value = ''
  await askAI(msg)

  // 检查是否涉及导航指令
  navigateAI(msg)
}

function navigateAI(msg: string) {
  const lower = msg.toLowerCase()
  for (const file of spaceFiles.value) {
    if (lower.includes(file.name.toLowerCase()) || lower.includes(file.ext.toLowerCase())) {
      selectFile(file)
      break
    }
    if ((lower.includes('图片') || lower.includes('image') || lower.includes('照片')) && file.type === 'image') {
      selectFile(file)
      break
    }
    if ((lower.includes('文档') || lower.includes('document') || lower.includes('文件')) && file.type === 'document') {
      selectFile(file)
      break
    }
  }
  if (lower.includes('全景') || lower.includes('全部') || lower.includes('俯瞰')) {
    controls.target.set(0, 1, 0)
    camera.position.set(15, 12, 18)
    selectedFile.value = null
    spaceFiles.value.forEach((f: SpaceFile) => {
      if (f.mesh) {
        f.mesh.children.forEach((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh && child.material && (child.material as any).emissive) {
            (child.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000)
          }
        })
      }
    })
  }
}

// ========== 添加示例文件 ==========
const sampleFiles: SpaceFile[] = [
  { id: '1', name: '日落照片.jpg', type: 'image', ext: 'JPG', size: '2.3 MB', description: '一张美丽的日落照片', position: new THREE.Vector3(-3, 0.5, -2), dataUrl: '' },
  { id: '2', name: '项目报告.docx', type: 'document', ext: 'DOCX', size: '1.1 MB', description: 'Q3 项目进度报告', position: new THREE.Vector3(3, 0.5, -1.5) },
  { id: '3', name: '团队合影.png', type: 'image', ext: 'PNG', size: '4.5 MB', description: '2024 年团队合影', position: new THREE.Vector3(-2, 0.5, 3), dataUrl: '' },
  { id: '4', name: '技术方案.pdf', type: 'document', ext: 'PDF', size: '3.2 MB', description: '系统架构设计方案', position: new THREE.Vector3(4, 0.5, 2.5) },
  { id: '5', name: '产品截图.png', type: 'image', ext: 'PNG', size: '1.8 MB', description: '产品主页截图', position: new THREE.Vector3(-4, 0.5, -3.5), dataUrl: '' },
  { id: '6', name: '会议纪要.docx', type: 'document', ext: 'DOCX', size: '0.5 MB', description: '周一例会纪要', position: new THREE.Vector3(2, 0.5, -4) },
  { id: '7', name: '数据分析.zip', type: 'other', ext: 'ZIP', size: '8.2 MB', description: '用户行为数据包', position: new THREE.Vector3(-1, 0.5, -4.5) },
  { id: '8', name: 'API文档.pdf', type: 'document', ext: 'PDF', size: '2.1 MB', description: 'REST API 接口文档', position: new THREE.Vector3(-3.5, 0.5, 4) },
]

function initSampleFiles() {
  spaceFiles.value = sampleFiles
  nextTick(() => {
    spaceFiles.value.forEach((f: SpaceFile) => addFileToScene(f))
  })
}

// ========== 上传文件到 3D 空间 ==========
async function handleUpload(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  const ext = file.name.split('.').pop() || ''
  const type: SpaceFile['type'] = file.type.startsWith('image/') ? 'image' :
    ['docx', 'doc', 'pdf', 'txt', 'xlsx', 'pptx'].includes(ext) ? 'document' : 'other'
  const size = file.size < 1024 * 1024
    ? (file.size / 1024).toFixed(1) + ' KB'
    : (file.size / (1024 * 1024)).toFixed(2) + ' MB'

  const newFile: SpaceFile = {
    id: Date.now().toString(),
    name: file.name,
    type,
    ext: ext.toUpperCase(),
    size,
    description: `${file.name}`,
    rawFile: file,
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      0.5,
      (Math.random() - 0.5) * 8
    ),
  }

  if (type === 'image') {
    const reader = new FileReader()
    reader.onload = (e) => {
      newFile.dataUrl = e.target?.result as string
      spaceFiles.value.push(newFile)
      addFileToScene(newFile)
      askAI(`新的图片文件已添加到空间：${file.name}，请介绍一下`)
    }
    reader.readAsDataURL(file)
  } else if (type === 'document') {
    // 尝试读取文本内容
    try {
      const text = await file.text()
      newFile.textContent = text.length > 5000 ? text.substring(0, 5000) + '\n...(内容过长已截断)' : text
    } catch { /* ignore */ }
    spaceFiles.value.push(newFile)
    addFileToScene(newFile)
  } else {
    spaceFiles.value.push(newFile)
    addFileToScene(newFile)
  }
  input.value = ''
}

// ========== 动画循环 ==========
function animate() {
  animationId = requestAnimationFrame(animate)
  controls.update()
  // 文件轻微浮动
  spaceFiles.value.forEach((f: SpaceFile, i: number) => {
    if (f.mesh) {
      f.mesh.position.y = f.position.y + Math.sin(Date.now() * 0.001 + i * 1.5) * 0.08
      f.mesh.rotation.y += 0.002
    }
    if (f.label) {
      f.label.position.y = f.position.y + 1.6 + Math.sin(Date.now() * 0.001 + i * 1.5) * 0.08
    }
  })
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
}

function onResize() {
  const w = container.clientWidth
  const h = container.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
  labelRenderer.setSize(w, h)
}

function autoNavigate() {
  if (!selectedFile.value) {
    if (spaceFiles.value.length > 0) {
      selectFile(spaceFiles.value[0])
    }
    return
  }
  const idx = spaceFiles.value.findIndex((f: SpaceFile) => f.id === selectedFile.value!.id)
  const next = (idx + 1) % spaceFiles.value.length
  selectFile(spaceFiles.value[next])
}

onMounted(() => {
  nextTick(() => {
    initScene()
    initSampleFiles()
    setTimeout(() => askAI('欢迎来到3D文件空间！空间中有几个文件？请帮我介绍一下。'), 800)
  })
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  renderer?.dispose()
  labelRenderer?.domElement?.remove()
  renderer?.domElement?.remove()
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="file-space">
    <!-- 顶部栏 -->
    <div class="top-bar">
      <div class="logo">
        <span class="logo-icon">✦</span>
        <span>3D 文件空间</span>
      </div>
      <div class="top-actions">
        <label class="upload-btn">
          <input type="file" @change="handleUpload" hidden />
          <span>📤 上传文件</span>
        </label>
        <button class="nav-btn" @click="autoNavigate" title="自动浏览">
          <span>🎯</span>
        </button>
        <button class="nav-btn" @click="controls.target.set(0,1,0); camera.position.set(15,12,18)" title="全景视图">
          <span>🌐</span>
        </button>
      </div>
    </div>

    <!-- 3D 场景 -->
    <div id="three-container" class="three-container">
      <!-- 选中文件信息浮层 -->
      <div v-if="selectedFile" class="file-info-card">
        <div class="file-info-type">{{ selectedFile.type === 'image' ? '🖼️' : selectedFile.type === 'document' ? '📄' : '📦' }}</div>
        <div class="file-info-name">{{ selectedFile.name }}</div>
        <div class="file-info-meta">{{ selectedFile.ext }} · {{ selectedFile.size }}</div>
        <div class="file-info-desc">{{ selectedFile.description }}</div>
      </div>

      <!-- 操作提示 -->
      <div class="hint">🖱 点击选择文件 · 拖拽旋转 · 滚轮缩放</div>
    </div>

    <!-- AI 侧边栏 -->
    <div class="ai-panel">
      <div class="ai-header">
        <span class="ai-icon">🤖</span>
        <span>AI 导航助手</span>
        <span v-if="isAIThinking" class="thinking-dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </div>
      <div class="ai-messages" ref="chatRef">
        <div v-for="(msg, i) in chatMessages" :key="i"
          :class="['msg', msg.role === 'assistant' ? 'msg-ai' : 'msg-user']">
          <div class="msg-avatar">{{ msg.role === 'assistant' ? '🤖' : '👤' }}</div>
          <div class="msg-content">{{ msg.content }}</div>
        </div>
      </div>
      <div class="ai-input">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="问 AI 导航助手..." />
        <button @click="sendMessage" :disabled="isAIThinking || !userInput.trim()">发送</button>
      </div>
      <div class="ai-suggestions">
        <button @click="askAI('帮我看看空间里有哪些文件')">📋 查看文件</button>
        <button @click="askAI('推荐一个好看的图片文件')">🖼️ 推荐图片</button>
        <button @click="askAI('有哪些文档需要处理')">📄 查看文档</button>
      </div>
    </div>

    <!-- 文件预览弹窗 -->
    <transition name="fade">
      <div v-if="showPreview && previewFile" class="preview-overlay" @click.self="closePreview">
        <div class="preview-modal">
          <div class="preview-header">
            <div class="preview-header-left">
              <span class="preview-icon">{{ previewFile.type === 'image' ? '🖼️' : previewFile.type === 'document' ? '📄' : '📦' }}</span>
              <div>
                <div class="preview-title">{{ previewFile.name }}</div>
                <div class="preview-meta">{{ previewFile.ext }} · {{ previewFile.size }}</div>
              </div>
            </div>
            <div class="preview-header-right">
              <div class="preview-tabs">
                <button :class="{ active: previewTab === 'preview' }" @click="previewTab = 'preview'">预览</button>
                <button :class="{ active: previewTab === 'info' }" @click="previewTab = 'info'">信息</button>
              </div>
              <button class="preview-close" @click="closePreview">✕</button>
            </div>
          </div>
          <div class="preview-body">
            <!-- 预览 tab -->
            <div v-show="previewTab === 'preview'" class="preview-content">
              <!-- 图片预览 -->
              <div v-if="previewFile.type === 'image' && previewFile.dataUrl" class="preview-image-wrap">
                <img :src="previewFile.dataUrl" :alt="previewFile.name" class="preview-image" />
              </div>
              <!-- 文档文本预览 -->
              <div v-else-if="previewFile.type === 'document' && previewFile.textContent" class="preview-text-wrap">
                <pre class="preview-text">{{ previewFile.textContent }}</pre>
              </div>
              <!-- 无法预览 -->
              <div v-else class="preview-empty">
                <div class="preview-empty-icon">{{ previewFile.type === 'image' ? '🖼️' : '📄' }}</div>
                <div class="preview-empty-text">该文件无法直接预览</div>
                <div class="preview-empty-desc">
                  {{ previewFile.type === 'image' ? '图片没有数据内容' : '文档内容未加载' }}<br>
                  上传实际文件后可查看完整内容
                </div>
              </div>
            </div>
            <!-- 信息 tab -->
            <div v-show="previewTab === 'info'" class="preview-info">
              <div class="info-row"><span class="info-label">文件名</span><span class="info-value">{{ previewFile.name }}</span></div>
              <div class="info-row"><span class="info-label">类型</span><span class="info-value">{{ previewFile.type === 'image' ? '图片' : previewFile.type === 'document' ? '文档' : '其他' }}</span></div>
              <div class="info-row"><span class="info-label">格式</span><span class="info-value">{{ previewFile.ext }}</span></div>
              <div class="info-row"><span class="info-label">大小</span><span class="info-value">{{ previewFile.size }}</span></div>
              <div class="info-row"><span class="info-label">描述</span><span class="info-value">{{ previewFile.description }}</span></div>
              <div class="info-row info-desc">
                <span class="info-label">AI 分析</span>
                <span class="info-value">在右侧 AI 面板中可以询问关于此文件的更多信息</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.file-space {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #0a0a1a;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: linear-gradient(180deg, rgba(10,10,26,0.95) 0%, transparent 100%);
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.logo-icon {
  font-size: 24px;
  background: linear-gradient(135deg, #4fc3f7, #7c4dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.top-actions {
  display: flex;
  gap: 8px;
}

.upload-btn, .nav-btn {
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}

.upload-btn:hover, .nav-btn:hover {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.3);
}

.nav-btn {
  padding: 8px 12px;
  font-size: 16px;
}

.three-container {
  flex: 1;
  position: relative;
}

.file-info-card {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10,10,26,0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  padding: 16px 24px;
  text-align: center;
  z-index: 5;
  min-width: 200px;
}

.file-info-type { font-size: 32px; margin-bottom: 4px; }
.file-info-name { color: #fff; font-size: 16px; font-weight: 600; }
.file-info-meta { color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 2px; }
.file-info-desc { color: rgba(255,255,255,0.7); font-size: 13px; margin-top: 6px; }

.hint {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.3);
  font-size: 13px;
  z-index: 5;
}

.ai-panel {
  position: absolute;
  right: 16px;
  top: 70px;
  bottom: 16px;
  width: 320px;
  background: rgba(10,10,26,0.88);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  overflow: hidden;
}

.ai-header {
  padding: 14px 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.ai-icon { font-size: 20px; }

.thinking-dots span {
  animation: blink 1.4s infinite;
  font-size: 24px;
  line-height: 1;
}

.thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
.thinking-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

.ai-messages {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ai-messages::-webkit-scrollbar { width: 4px; }
.ai-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }

.msg {
  display: flex;
  gap: 8px;
  max-width: 100%;
}

.msg-user { flex-direction: row-reverse; }

.msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.msg-content {
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #ddd;
}

.msg-ai .msg-content {
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.15);
}

.msg-user .msg-content {
  background: rgba(124, 77, 255, 0.1);
  border: 1px solid rgba(124, 77, 255, 0.15);
}

.ai-input {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.ai-input input {
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 13px;
  outline: none;
}

.ai-input input::placeholder { color: rgba(255,255,255,0.3); }
.ai-input input:focus { border-color: rgba(79, 195, 247, 0.4); }

.ai-input button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #4fc3f7, #7c4dff);
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.ai-input button:disabled { opacity: 0.4; cursor: not-allowed; }

.ai-suggestions {
  display: flex;
  gap: 6px;
  padding: 8px 12px 12px;
  flex-wrap: wrap;
}

.ai-suggestions button {
  padding: 5px 10px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
}

.ai-suggestions button:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

/* ==================== 预览弹窗 ==================== */
.preview-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-modal {
  width: 720px;
  max-width: 90vw;
  max-height: 85vh;
  background: rgba(15,15,35,0.95);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.preview-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.preview-icon { font-size: 28px; }

.preview-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.preview-meta {
  color: rgba(255,255,255,0.4);
  font-size: 12px;
  margin-top: 2px;
}

.preview-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.preview-tabs {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 3px;
}

.preview-tabs button {
  padding: 5px 14px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.preview-tabs button.active {
  background: rgba(79,195,247,0.2);
  color: #4fc3f7;
}

.preview-tabs button:hover:not(.active) { color: rgba(255,255,255,0.8); }

.preview-close {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.5);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.preview-close:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.preview-body {
  flex: 1;
  overflow: hidden;
  display: flex;
}

.preview-content {
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.preview-image-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 4px 30px rgba(0,0,0,0.3);
}

.preview-text-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
}

.preview-text {
  color: #ccc;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: 'Cascadia Code', 'Fira Code', monospace;
  margin: 0;
}

.preview-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 20px;
  color: rgba(255,255,255,0.3);
}

.preview-empty-icon { font-size: 48px; }
.preview-empty-text { font-size: 18px; font-weight: 600; color: rgba(255,255,255,0.5); }
.preview-empty-desc { font-size: 13px; text-align: center; line-height: 1.6; }

.preview-info {
  flex: 1;
  padding: 24px 20px;
  overflow: auto;
}

.info-row {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.info-label {
  width: 80px;
  flex-shrink: 0;
  color: rgba(255,255,255,0.4);
  font-size: 13px;
}

.info-value {
  flex: 1;
  color: #ddd;
  font-size: 13px;
}

.info-desc .info-value {
  color: rgba(255,255,255,0.4);
  font-style: italic;
  font-size: 12px;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
