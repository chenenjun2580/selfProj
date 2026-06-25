<script setup lang="ts">
import { ref, onMounted, onUnmounted, onActivated, onDeactivated, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { stickerList, type StickerData } from '@/data/stickers'

const containerRef = ref<HTMLDivElement>()
const tooltipVisible = ref(false)
const tooltipData = ref<StickerData | null>(null)
const tooltipPos = ref({ x: 0, y: 0 })

const emit = defineEmits<{
  (e: 'zoom', distance: number): void
  (e: 'sticker-click', data: StickerData): void
}>()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let stickerMeshes: THREE.Mesh[] = []
let animationId: number
let clock: THREE.Clock
let raycaster: THREE.Raycaster
let mouse = new THREE.Vector2()
let hoveredMesh: THREE.Mesh | null = null

// Tooltip debounce
let tooltipTimer: ReturnType<typeof setTimeout> | null = null

// Zoom emit throttle
let lastZoomEmit = 0

// 搜索动画状态
let searchAnimTarget: THREE.Mesh | null = null
let searchAnimPhase: 'idle' | 'rotating' | 'zooming' | 'holding' | 'reversing' = 'idle'
let searchAnimStartTime = 0
let searchAnimCamStart: THREE.Vector3 | null = null
let searchAnimCamTarget: THREE.Vector3 | null = null
let searchAnimTargetOriginalPos: THREE.Vector3 | null = null
let searchAnimTargetNormal: THREE.Vector3 | null = null
let searchAnimTargetOriginalScale: THREE.Vector3 | null = null
let searchAnimTargetOriginalOpacity = 0

const SPHERE_RADIUS = 4.5
const STICKER_W = 0.7
const STICKER_H = 0.9

function fibonacciSphere(samples: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const phi = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = phi * i
    points.push(new THREE.Vector3(
      Math.cos(theta) * radius * SPHERE_RADIUS,
      y * SPHERE_RADIUS,
      Math.sin(theta) * radius * SPHERE_RADIUS
    ))
  }
  return points
}

function createStickerTexture(data: StickerData): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  const size = 128
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // 背景 - 圆角矩形 (坐标等比缩放)
  const r = 12
  const pad = 3
  const w = size - pad * 2
  const h = size - pad * 2
  const x = pad
  const y = pad

  // 柔和阴影
  ctx.shadowColor = 'rgba(0,0,0,0.08)'
  ctx.shadowBlur = 6
  ctx.shadowOffsetX = 1
  ctx.shadowOffsetY = 2

  // 主体背景
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()

  // 纸张纹理微噪点
  ctx.fillStyle = data.color
  ctx.fill()

  ctx.shadowColor = 'transparent'
  ctx.shadowBlur = 0
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0

  // 纸张纹理
  const imageData = ctx.getImageData(0, 0, size, size)
  const pixels = imageData.data
  for (let i = 0; i < pixels.length; i += 4) {
    const noise = (Math.random() - 0.5) * 12
    pixels[i] = Math.min(255, Math.max(0, pixels[i] + noise))
    pixels[i + 1] = Math.min(255, Math.max(0, pixels[i + 1] + noise))
    pixels[i + 2] = Math.min(255, Math.max(0, pixels[i + 2] + noise))
  }
  ctx.putImageData(imageData, 0, 0)

  // 顶部彩色胶条
  const tapeH = 11
  const tapeW = 60
  const tapeX = (size - tapeW) / 2
  ctx.beginPath()
  ctx.moveTo(tapeX + 4, 5)
  ctx.lineTo(tapeX + tapeW - 4, 5)
  ctx.quadraticCurveTo(tapeX + tapeW, 5, tapeX + tapeW, 5 + 4)
  ctx.lineTo(tapeX + tapeW, 5 + tapeH - 4)
  ctx.quadraticCurveTo(tapeX + tapeW, 5 + tapeH, tapeX + tapeW - 4, 5 + tapeH)
  ctx.lineTo(tapeX + 4, 5 + tapeH)
  ctx.quadraticCurveTo(tapeX, 5 + tapeH, tapeX, 5 + tapeH - 4)
  ctx.lineTo(tapeX, 5 + 4)
  ctx.quadraticCurveTo(tapeX, 5, tapeX + 4, 5)
  ctx.closePath()
  ctx.fillStyle = data.tagColor
  ctx.globalAlpha = 0.65
  ctx.fill()
  ctx.globalAlpha = 1

  // Emoji
  ctx.font = '18px "Segoe UI Emoji", "Apple Color Emoji", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.emoji, size / 2, 40)

  // 分类标签
  ctx.font = 'bold 7.5px "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.fillStyle = 'black'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.category, size / 2, 59)

  // 文字
  ctx.font = 'bold 10px "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.fillStyle = 'black'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.text, size / 2, 76)

  // 边缘轻微褶皱效果
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
  ctx.strokeStyle = 'rgba(180,160,140,0.35)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.colorSpace = THREE.SRGBColorSpace
  texture.generateMipmaps = false
  return texture
}

function createStickerMesh(data: StickerData, position: THREE.Vector3): THREE.Mesh {
  const texture = createStickerTexture(data)
  // 随机不透明度 0.82 ~ 0.98，让便利贴有自然的层次感
  const randomOpacity = 0.82 + Math.random() * 0.16
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
    roughness: 0.55,
    metalness: 0.02,
    transparent: true,
    opacity: randomOpacity,
    depthWrite: true,
  })

  const geometry = new THREE.PlaneGeometry(STICKER_W, STICKER_H)
  const mesh = new THREE.Mesh(geometry, material)

  mesh.position.copy(position)

  // 计算法线方向（球心向外）
  const normal = position.clone().normalize()

  // 使用四元数让便利贴精确面朝法线方向，同时保证文字正立
  // 构建局部坐标系：normal 为 Z 轴（面朝方向），up 为世界 Y 轴
  const quaternion = new THREE.Quaternion()
  const up = new THREE.Vector3(0, 1, 0)
  const m4 = new THREE.Matrix4()

  // 特殊情况：normal 与 up 平行时（北极/南极），使用不同的 up
  if (Math.abs(normal.dot(up)) > 0.999) {
    const altUp = new THREE.Vector3(1, 0, 0)
    m4.lookAt(position.clone().add(normal), position, altUp)
  } else {
    m4.lookAt(position.clone().add(normal), position, up)
  }

  quaternion.setFromRotationMatrix(m4)
  mesh.quaternion.copy(quaternion)

  // 轻微随机倾斜错落（在局部坐标系中）
  mesh.rotateZ((Math.random() - 0.5) * 0.3)
  mesh.rotateY((Math.random() - 0.5) * 0.3)

  // 略微向外凸起
  mesh.position.add(normal.clone().multiplyScalar(0.12 + Math.random() * 0.06))

  mesh.userData = {
    stickerData: data,
    originalPosition: mesh.position.clone(),
    originalRotation: mesh.rotation.clone(),
    normal: normal,
  }

  return mesh
}

function createGlowSprite(): THREE.Sprite {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255,255,255,0.15)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.06)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({
    map: texture,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.5,
  })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(1.8, 1.8, 1)
  return sprite
}

function initScene() {
  if (!containerRef.value) return

  // 场景 - 透明背景，让星空背景透过来
  scene = new THREE.Scene()

  // 相机
  camera = new THREE.PerspectiveCamera(
    50,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    100
  )
  camera.position.set(0, 0.5, 11)
  camera.lookAt(0, 0, 0)

  // 渲染器 - 抗锯齿
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  // 限制像素比为1.5，大幅提升性能
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.shadowMap.enabled = false
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  containerRef.value.appendChild(renderer.domElement)

  // OrbitControls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.4
  controls.minDistance = 6
  controls.maxDistance = 18
  controls.maxPolarAngle = Math.PI * 0.8
  controls.target.set(0, 0, 0)
  controls.update()

  // Raycaster
  raycaster = new THREE.Raycaster()
  raycaster.params.Points.threshold = 0.5
  raycaster.params.Line!.threshold = 0.5

  // 灯光系统
  // 环境光
  const ambientLight = new THREE.AmbientLight('#ffffff', 3.5)
  scene.add(ambientLight)

  // 半球光 - 天空/地面
  const hemiLight = new THREE.HemisphereLight('#dcefff', '#f0e6d3', 1.8)
  scene.add(hemiLight)

  // 主方向光
  const keyLight = new THREE.DirectionalLight('#ffffff', 2.5)
  keyLight.position.set(8, 6, 8)
  scene.add(keyLight)

  // 补光
  const fillLight = new THREE.DirectionalLight('#c8d6ff', 1.5)
  fillLight.position.set(-5, -2, -3)
  scene.add(fillLight)

  // 底部补光
  const rimLight = new THREE.DirectionalLight('#ffe8d6', 1.2)
  rimLight.position.set(0, -4, 2)
  scene.add(rimLight)

  // 创建便利贴
  const points = fibonacciSphere(stickerList.length)

  stickerList.forEach((data, index) => {
    const mesh = createStickerMesh(data, points[index])
    // 给每张便利贴添加光晕
    const glow = createGlowSprite()
    mesh.add(glow)
    scene.add(mesh)
    stickerMeshes.push(mesh)
  })

  // 球体边缘淡蓝色玻璃反光轮廓环
  const ringGeometry = new THREE.TorusGeometry(SPHERE_RADIUS + 0.05, 0.03, 64, 128)
  const ringMaterial = new THREE.MeshStandardMaterial({
    color: '#c8e0f0',
    roughness: 0.3,
    metalness: 0.1,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  })
  const ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = Math.PI / 2
  scene.add(ring)

  // 另一个角度轮廓环
  const ring2 = new THREE.Mesh(ringGeometry.clone(), ringMaterial.clone())
  ring2.rotation.x = Math.PI / 3
  ring2.rotation.y = Math.PI / 4
  ring2.material = ringMaterial.clone()
  ring2.material.opacity = 0.15
  scene.add(ring2)

  // 时钟
  clock = new THREE.Clock()

  // 事件
  renderer.domElement.addEventListener('mousemove', onMouseMove)
  renderer.domElement.addEventListener('click', onClick)
  renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('resize', onResize)

  animate()
}

function onMouseMove(event: MouseEvent) {
  if (!containerRef.value || !renderer) return
  const rect = containerRef.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  updateHover(event.clientX, event.clientY)
}

function onTouchMove(event: TouchEvent) {
  if (!containerRef.value || !renderer) return
  if (event.touches.length === 1) {
    const touch = event.touches[0]
    const rect = containerRef.value.getBoundingClientRect()
    mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1
    updateHover(touch.clientX, touch.clientY)
  }
}

function updateHover(clientX: number, clientY: number) {
  if (!camera || !scene) return

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(stickerMeshes, false)

  // 重置之前hover的
  if (hoveredMesh && (!intersects.length || intersects[0].object !== hoveredMesh)) {
    const data = hoveredMesh.userData as any
    if (data.originalPosition) {
      hoveredMesh.position.copy(data.originalPosition)
      hoveredMesh.scale.set(1, 1, 1)
      ;(hoveredMesh.material as THREE.MeshStandardMaterial).emissive.set('#000000')
    }
    hoveredMesh = null

    if (tooltipTimer) clearTimeout(tooltipTimer)
    tooltipTimer = setTimeout(() => {
      tooltipVisible.value = false
    }, 150)
  }

  if (intersects.length > 0) {
    const obj = intersects[0].object as THREE.Mesh
    if (obj !== hoveredMesh && stickerMeshes.includes(obj)) {
      hoveredMesh = obj
      const data = obj.userData as any

      // 上浮 + 放大动画
      if (data.originalPosition && data.normal) {
        obj.position.copy(data.originalPosition).add(data.normal.clone().multiplyScalar(0.25))
        obj.scale.set(1.25, 1.25, 1.25)
      }
      ;(obj.material as THREE.MeshStandardMaterial).emissive.set('#ffffff')
      ;(obj.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.3

      // 更新tooltip
      if (tooltipTimer) clearTimeout(tooltipTimer)
      tooltipData.value = data.stickerData
      tooltipPos.value = { x: clientX, y: clientY }
      tooltipVisible.value = true
    }
  }
}

function onClick(event: MouseEvent) {
  if (!containerRef.value || !renderer || !camera || !scene) return
  const rect = containerRef.value.getBoundingClientRect()
  const mx = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const my = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(new THREE.Vector2(mx, my), camera)
  const intersects = raycaster.intersectObjects(stickerMeshes, false)

  if (intersects.length > 0) {
    const obj = intersects[0].object as THREE.Mesh
    const data = obj.userData as any
    if (data.stickerData) {
      // 发射点击事件给父组件处理跳转
      emit('sticker-click', data.stickerData as StickerData)
    }
  }
}

// 搜索便签
function searchSticker(keyword: string) {
  if (!keyword.trim()) return

  // 如果正在动画中，先取消
  cancelSearchAnim()

  // 查找匹配的便签（模糊匹配 text 字段）
  const lowerKeyword = keyword.trim().toLowerCase()
  let targetMesh: THREE.Mesh | null = null

  for (const mesh of stickerMeshes) {
    const data = mesh.userData.stickerData as StickerData
    if (data.text.toLowerCase().includes(lowerKeyword)) {
      targetMesh = mesh
      break
    }
  }

  if (!targetMesh) {
    console.log('未找到匹配的便签:', keyword)
    return
  }

  const userData = targetMesh.userData as any
  const normal = userData.normal as THREE.Vector3
  const pos = targetMesh.position.clone()

  // 获取便签当前的实际正面方向（PlaneGeometry 默认正面是 +Z 方向）
  const forward = new THREE.Vector3(0, 0, 1)
  forward.applyQuaternion(targetMesh.quaternion).normalize()

  // 相机目标位置：在便签正面方向上，距离球心一定距离
  // 先算出便签在球面上的大致位置，相机沿便签正面方向拉远
  const stickerWorldPos = normal.clone().multiplyScalar(SPHERE_RADIUS)
  const targetCamPos = stickerWorldPos.clone().add(forward.clone().multiplyScalar(11))

  searchAnimTarget = targetMesh
  searchAnimPhase = 'rotating'
  searchAnimStartTime = performance.now()
  searchAnimCamStart = camera.position.clone()
  searchAnimCamTarget = targetCamPos
  searchAnimTargetOriginalPos = pos.clone()
  searchAnimTargetNormal = normal.clone()
  searchAnimTargetOriginalScale = targetMesh.scale.clone()
  searchAnimTargetOriginalOpacity = (targetMesh.material as THREE.MeshStandardMaterial).opacity

  // 暂停自动旋转
  controls.autoRotate = false
}

function cancelSearchAnim() {
  if (searchAnimTarget) {
    const userData = searchAnimTarget.userData as any
    // 恢复便签
    searchAnimTarget.scale.copy(searchAnimTargetOriginalScale || new THREE.Vector3(1, 1, 1))
    if (userData.originalPosition) {
      searchAnimTarget.position.copy(userData.originalPosition)
    }
    ;(searchAnimTarget.material as THREE.MeshStandardMaterial).opacity = searchAnimTargetOriginalOpacity || 1
    ;(searchAnimTarget.material as THREE.MeshStandardMaterial).emissive.set('#000000')
    ;(searchAnimTarget.material as THREE.MeshStandardMaterial).emissiveIntensity = 0

    searchAnimTarget = null
  }
  searchAnimPhase = 'idle'
  searchAnimCamStart = null
  searchAnimCamTarget = null
  searchAnimTargetOriginalPos = null
  searchAnimTargetNormal = null
  searchAnimTargetOriginalScale = null
}

function updateSearchAnim(now: number) {
  if (!searchAnimTarget || searchAnimPhase === 'idle') return
  if (!searchAnimCamStart || !searchAnimCamTarget || !searchAnimTargetNormal) return

  const elapsed = (now - searchAnimStartTime) / 1000 // 秒

  if (searchAnimPhase === 'rotating') {
    const duration = 1.2 // 旋转阶段持续1.2秒
    let t = Math.min(elapsed / duration, 1)

    // easeInOutCubic
    t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    // 插值相机位置
    camera.position.lerpVectors(searchAnimCamStart, searchAnimCamTarget, t)

    // 让相机看向球心
    camera.lookAt(0, 0, 0)
    controls.target.set(0, 0, 0)
    controls.update()

    // 高亮目标便签
    const mat = searchAnimTarget.material as THREE.MeshStandardMaterial
    mat.emissive.set('#ffffff')
    mat.emissiveIntensity = 0.15 + t * 0.3

    if (t >= 1) {
      // 旋转完成，进入放大阶段
      searchAnimPhase = 'zooming'
      searchAnimStartTime = now
      // 记录当前便签的 scale 作为放大起点
      searchAnimTargetOriginalScale = searchAnimTarget.scale.clone()
      // 让便签略微浮出
      if (searchAnimTargetOriginalPos && searchAnimTargetNormal) {
        searchAnimTarget.position.copy(
          searchAnimTargetOriginalPos.clone().add(searchAnimTargetNormal.clone().multiplyScalar(0.15))
        )
      }
    }
  } else if (searchAnimPhase === 'zooming') {
    const duration = 0.8 // 放大阶段持续0.8秒
    let t = Math.min(elapsed / duration, 1)

    // easeOutBack - 超过目标后回弹
    const c1 = 1.70158
    const c3 = c1 + 1
    t = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)

    // 放大到 1.6x
    const fromScale = searchAnimTargetOriginalScale?.x || 1
    const toScale = 1.6
    const s = fromScale + (toScale - fromScale) * t
    searchAnimTarget.scale.set(s, s, s)

    // 增加不透明度，让它更突出
    const mat = searchAnimTarget.material as THREE.MeshStandardMaterial
    mat.opacity = Math.min(1, (searchAnimTargetOriginalOpacity || 0.9) + t * 0.15)
    mat.emissiveIntensity = 0.45

    if (t >= 1) {
      // 放大完成，保持片刻
      searchAnimPhase = 'holding'
      searchAnimStartTime = now
    }
  } else if (searchAnimPhase === 'holding') {
    // 保持放大状态 2 秒
    if (elapsed > 2.0) {
      // 开始反向恢复
      searchAnimPhase = 'reversing'
      searchAnimStartTime = now
      searchAnimTargetOriginalScale = searchAnimTarget.scale.clone()
    }
  } else if (searchAnimPhase === 'reversing') {
    const duration = 0.6
    let t = Math.min(elapsed / duration, 1)

    // easeInCubic
    t = t * t * t

    // 缩回原始大小
    const fromScale = searchAnimTargetOriginalScale?.x || 1.6
    const toScale = 1.0
    const s = fromScale + (toScale - fromScale) * t
    searchAnimTarget.scale.set(s, s, s)

    // 恢复不透明度
    const mat = searchAnimTarget.material as THREE.MeshStandardMaterial
    mat.opacity = (searchAnimTargetOriginalOpacity || 0.9) + (1 - t) * 0.1
    mat.emissiveIntensity = 0.45 * (1 - t)

    // 恢复位置
    if (searchAnimTargetOriginalPos) {
      searchAnimTarget.position.lerpVectors(
        searchAnimTarget.position.clone(),
        searchAnimTargetOriginalPos,
        t * 3
      )
    }

    if (t >= 1) {
      // 完全恢复
      if (searchAnimTargetOriginalPos) {
        searchAnimTarget.position.copy(searchAnimTargetOriginalPos)
      }
      searchAnimTarget.scale.set(1, 1, 1)
      mat.opacity = searchAnimTargetOriginalOpacity || 0.9
      mat.emissive.set('#000000')
      mat.emissiveIntensity = 0

      // 恢复自动旋转
      controls.autoRotate = true

      // 清理
      searchAnimTarget = null
      searchAnimPhase = 'idle'
      searchAnimCamStart = null
      searchAnimCamTarget = null
      searchAnimTargetOriginalPos = null
      searchAnimTargetNormal = null
      searchAnimTargetOriginalScale = null
    }
  }
}

// 暴露方法给父组件
defineExpose({
  searchSticker,
})

function animate() {
  animationId = requestAnimationFrame(animate)

  clock.getDelta()

  controls.update()

  // 搜索动画
  updateSearchAnim(performance.now())

  // 发射缩放距离（节流，每200ms才发射一次）
  const now = performance.now()
  if (now - lastZoomEmit > 200) {
    lastZoomEmit = now
    emit('zoom', camera.position.distanceTo(controls.target))
  }

  renderer.render(scene, camera)
}

function onResize() {
  if (!containerRef.value || !camera || !renderer) return
  const w = containerRef.value.clientWidth
  const h = containerRef.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => {
  nextTick(() => {
    initScene()
  })
})

// KeepAlive 相关：离开时暂停渲染，返回时恢复
onDeactivated(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = 0
  }
})

onActivated(() => {
  if (!animationId) {
    animate()
  }
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.domElement.removeEventListener('mousemove', onMouseMove)
    renderer.domElement.removeEventListener('click', onClick)
    renderer.domElement.removeEventListener('touchmove', onTouchMove)
    renderer.dispose()
  }
  window.removeEventListener('resize', onResize)
  if (tooltipTimer) clearTimeout(tooltipTimer)
})
</script>

<template>
  <div class="globe-wrapper">
    <div ref="containerRef" class="globe-container"></div>

    <!-- Tooltip -->
    <Transition name="tooltip-fade">
      <div
        v-if="tooltipVisible && tooltipData"
        class="sticker-tooltip"
        :style="{
          left: tooltipPos.x + 'px',
          top: tooltipPos.y + 'px',
        }"
      >
        <span class="tooltip-emoji">{{ tooltipData.emoji }}</span>
        <span class="tooltip-text">{{ tooltipData.text }}</span>
        <span class="tooltip-category">{{ tooltipData.category }}系列</span>
      </div>
    </Transition>

    <!-- 标题 -->
    <!-- <div class="globe-title">
      <h1>文案素材导航</h1>
      <p>拖拽旋转 · 悬停预览 · 点击进入</p>
    </div> -->
  </div>
</template>

<style scoped>
.globe-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  cursor: grab;
  z-index: 1;
}

.globe-wrapper:active {
  cursor: grabbing;
}

.globe-container {
  width: 100%;
  height: 100%;
}

.globe-container :deep(canvas) {
  display: block;
}

/* Tooltip */
.sticker-tooltip {
  position: fixed;
  transform: translate(-50%, -120%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
}

.tooltip-emoji {
  font-size: 24px;
  line-height: 1;
}

.tooltip-text {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.5px;
}

.tooltip-category {
  font-size: 12px;
  color: #999;
  padding: 2px 8px;
  background: #f5f5f5;
  border-radius: 10px;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -110%);
}

/* 标题 */
.globe-title {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  pointer-events: none;
}

.globe-title h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #444;
  letter-spacing: 2px;
  margin-bottom: 6px;
  background: linear-gradient(135deg, #888, #bbb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.globe-title p {
  font-size: 0.85rem;
  color: #bbb;
  letter-spacing: 1px;
}
</style>
