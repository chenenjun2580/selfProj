<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
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
  userShape?: string          // 用户自定义形状
  userColor?: string          // 用户自定义颜色
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

// ========== 搜索 & 自定义 & 拖拽 ==========
const searchQuery = ref('')
const showCustomize = ref(false)
const moveMode = ref(false)
let draggingFile: SpaceFile | null = null
let dragOffset = new THREE.Vector3()
let dragPlane = new THREE.Plane()

const shapeOptions = ['box', 'sphere', 'cylinder', 'cone', 'torus', 'icosahedron'] as const
type ShapeType = (typeof shapeOptions)[number]

const colorOptions = [
  { name: '蓝色', hex: '#4fc3f7' },
  { name: '紫色', hex: '#7c4dff' },
  { name: '橙色', hex: '#ffb74d' },
  { name: '粉色', hex: '#f06292' },
  { name: '绿色', hex: '#81c784' },
  { name: '红色', hex: '#e57373' },
  { name: '青色', hex: '#4dd0e1' },
  { name: '黄色', hex: '#ffd54f' },
  { name: '白色', hex: '#eeeeee' },
]

function changeShape(file: SpaceFile, shape: ShapeType) {
  if (!file.mesh) return
  file.userShape = shape
  applyCustomAppearance(file)
  closeCustomize()
  askAI(`已将 ${file.name} 的形状改为 ${shape}`)
}

function changeColor(file: SpaceFile, colorHex: string) {
  if (!file.mesh) return
  file.userColor = colorHex
  applyCustomAppearance(file)
  closeCustomize()
}

function applyCustomAppearance(file: SpaceFile) {
  if (!file.mesh) return
  // 在现有的 group 中更新 mesh
  const group = file.mesh
  // 移除旧的子 mesh
  const toRemove: THREE.Object3D[] = []
  group.children.forEach(child => {
    if (child instanceof THREE.Mesh) {
      (child as THREE.Mesh).geometry?.dispose()
      if (Array.isArray((child as THREE.Mesh).material)) {
        ((child as THREE.Mesh).material as THREE.Material[]).forEach(m => m.dispose())
      } else {
        ((child as THREE.Mesh).material as THREE.Material)?.dispose()
      }
      toRemove.push(child)
    }
  })
  toRemove.forEach(child => { if (child.parent === group) group.remove(child) })

  const mainColor = new THREE.Color(file.userColor || fileColors[file.type] || fileColors.other)
  const hasShape = !!file.userShape
  const shapeName = file.userShape || 'box'

  if (hasShape) {
    // 使用自定义形状
    const geo = createShapeGeo(shapeName)
    let mat: THREE.Material
    if (file.type === 'image' && file.dataUrl) {
      mat = new THREE.MeshStandardMaterial({ map: createTextureFromDataUrl(file.dataUrl), color: 0xffffff })
    } else {
      mat = new THREE.MeshStandardMaterial({ color: mainColor, metalness: 0.3, roughness: 0.5 })
    }
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    group.add(mesh)
  } else {
    // 恢复默认外观（只改颜色）
    if (file.type === 'image') {
      const frameMat = new THREE.MeshStandardMaterial({
        color: file.userColor ? mainColor : 0xdddddd,
        metalness: 0.7, roughness: 0.2,
      })
      const frameW = 1.8, frameH = 1.4, depth = 0.08
      const outerMesh = new THREE.Mesh(new THREE.BoxGeometry(frameW + 0.12, frameH + 0.12, depth), frameMat)
      outerMesh.position.z = -depth / 2
      group.add(outerMesh)
      if (file.dataUrl) {
        const imgMat = new THREE.MeshBasicMaterial({ map: createTextureFromDataUrl(file.dataUrl) })
        const imgMesh = new THREE.Mesh(new THREE.PlaneGeometry(frameW, frameH), imgMat)
        imgMesh.position.z = depth / 2 + 0.01
        group.add(imgMesh)
      } else {
        const imgMat = new THREE.MeshStandardMaterial({ color: file.userColor ? mainColor : 0x333355 })
        const imgMesh = new THREE.Mesh(new THREE.PlaneGeometry(frameW, frameH), imgMat)
        imgMesh.position.z = depth / 2 + 0.01
        group.add(imgMesh)
      }
    } else if (file.type === 'document') {
      const pageMat = new THREE.MeshStandardMaterial({ color: 0xfff8e7, roughness: 0.8 })
      const coverMat = new THREE.MeshStandardMaterial({
        color: file.userColor ? mainColor : 0x222244,
        roughness: 0.4, metalness: 0.3,
      })
      const bookW = 1.2, bookH = 0.08, bookD = 1.6
      const cover = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
      cover.position.y = 0.04; group.add(cover)
      const back = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
      back.position.y = -0.04; group.add(back)
      const pages = new THREE.Mesh(new THREE.BoxGeometry(bookW - 0.05, 0.06, bookD - 0.05), pageMat)
      pages.position.y = 0; group.add(pages)
      const spineMat = new THREE.MeshStandardMaterial({ color: mainColor })
      const spine = new THREE.Mesh(new THREE.BoxGeometry(0.04, bookH + 0.08, bookD), spineMat)
      spine.position.set(-bookW / 2 + 0.02, 0, 0); group.add(spine)
    } else {
      const geo = createShapeGeo('cylinder')
      const mat = new THREE.MeshStandardMaterial({ color: mainColor, metalness: 0.3, roughness: 0.5 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.castShadow = true; group.add(mesh)
    }
  }
}

function closeCustomize() {
  showCustomize.value = false
}

function resetAppearance() {
  if (!selectedFile.value) return
  delete selectedFile.value.userShape
  delete selectedFile.value.userColor
  applyCustomAppearance(selectedFile.value)
  closeCustomize()
  askAI(`已将 ${selectedFile.value.name} 恢复为默认外观`)
}

watch(searchQuery, (val: string) => {
  if (!val) {
    spaceFiles.value.forEach((f: SpaceFile) => {
      if (f.mesh) f.mesh.visible = true
      if (f.label) f.label.visible = true
    })
  }
})

// 搜索
function getFilteredFiles(): SpaceFile[] {
  if (!searchQuery.value.trim()) return spaceFiles.value
  const q = searchQuery.value.toLowerCase()
  return spaceFiles.value.filter((f: SpaceFile) =>
    f.name.toLowerCase().includes(q) ||
    f.ext.toLowerCase().includes(q) ||
    f.type.toLowerCase().includes(q) ||
    f.description.toLowerCase().includes(q)
  )
}

function highlightSearch() {
  const results = getFilteredFiles()
  spaceFiles.value.forEach((f: SpaceFile) => {
    const matched = results.includes(f)
    if (f.mesh) {
      f.mesh.visible = matched
    }
    if (f.label) {
      f.label.visible = matched
    }
  })
  if (results.length === 1) {
    selectFile(results[0])
  } else if (results.length > 0 && selectedFile.value && !results.includes(selectedFile.value)) {
    // 如果当前选中的不在结果中，选第一个
    selectFile(results[0])
  }
  if (results.length === 0 && selectedFile.value) {
    // 无结果时取消选中
    selectedFile.value = null
    showPreview.value = false
    previewFile.value = null
  }
}

// ========== Three.js 场景 ==========
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let labelRenderer: CSS2DRenderer
let controls: OrbitControls
let animationId: number
let container: HTMLDivElement
let raycaster: THREE.Raycaster
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

function createShapeGeo(shape: string): THREE.BufferGeometry {
  switch (shape) {
    case 'sphere': return new THREE.SphereGeometry(0.6, 24, 24)
    case 'cylinder': return new THREE.CylinderGeometry(0.5, 0.5, 1, 24)
    case 'cone': return new THREE.ConeGeometry(0.6, 1, 24)
    case 'torus': return new THREE.TorusGeometry(0.45, 0.15, 16, 32)
    case 'icosahedron': return new THREE.IcosahedronGeometry(0.55)
    default: return new THREE.BoxGeometry(1, 1, 1)
  }
}

function createTextureFromDataUrl(dataUrl: string): THREE.Texture {
  const img = new Image()
  img.src = dataUrl
  const tex = new THREE.Texture(img)
  tex.needsUpdate = true
  return tex
}

function createFileObject(file: SpaceFile): THREE.Object3D {
  const group = new THREE.Group()
  const hasShape = !!file.userShape
  const hasColor = !!file.userColor
  const mainColor = new THREE.Color(file.userColor || fileColors[file.type] || fileColors.other)
  const mainShape = file.userShape || ''

  if (file.type === 'image') {
    if (hasShape) {
      const geo = createShapeGeo(mainShape)
      const imgMat = file.dataUrl
        ? new THREE.MeshStandardMaterial({ map: createTextureFromDataUrl(file.dataUrl), color: 0xffffff })
        : new THREE.MeshStandardMaterial({ color: mainColor })
      const mesh = new THREE.Mesh(geo, imgMat)
      mesh.castShadow = true
      group.add(mesh)
    } else {
      const frameMat = new THREE.MeshStandardMaterial({
        color: hasColor ? mainColor : 0xdddddd,
        metalness: 0.7,
        roughness: 0.2,
      })
      const frameW = 1.8, frameH = 1.4, depth = 0.08
      const outerMesh = new THREE.Mesh(new THREE.BoxGeometry(frameW + 0.12, frameH + 0.12, depth), frameMat)
      outerMesh.position.z = -depth / 2
      group.add(outerMesh)
      if (file.dataUrl) {
        const imgMat2 = new THREE.MeshBasicMaterial({ map: createTextureFromDataUrl(file.dataUrl) })
        const imgMesh = new THREE.Mesh(new THREE.PlaneGeometry(frameW, frameH), imgMat2)
        imgMesh.position.z = depth / 2 + 0.01
        group.add(imgMesh)
      } else {
        const imgMat2 = new THREE.MeshStandardMaterial({ color: hasColor ? mainColor : 0x333355 })
        const imgMesh = new THREE.Mesh(new THREE.PlaneGeometry(frameW, frameH), imgMat2)
        imgMesh.position.z = depth / 2 + 0.01
        group.add(imgMesh)
        const icon = new THREE.Mesh(new THREE.CircleGeometry(0.3, 16), new THREE.MeshStandardMaterial({ color: mainColor }))
        icon.position.z = 0.05
        group.add(icon)
      }
    }
  } else if (file.type === 'document') {
    if (hasShape) {
      const geo = createShapeGeo(mainShape)
      const mat = new THREE.MeshStandardMaterial({ color: mainColor, metalness: 0.3, roughness: 0.5 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.castShadow = true
      group.add(mesh)
    } else {
      const pageMat = new THREE.MeshStandardMaterial({ color: 0xfff8e7, roughness: 0.8 })
      const coverMat = new THREE.MeshStandardMaterial({ color: hasColor ? mainColor : 0x222244, roughness: 0.4, metalness: 0.3 })
      const bookW = 1.2, bookH = 0.08, bookD = 1.6
      const cover = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
      cover.position.y = 0.04
      group.add(cover)
      const back = new THREE.Mesh(new THREE.BoxGeometry(bookW, bookH, bookD), coverMat)
      back.position.y = -0.04
      group.add(back)
      const pages = new THREE.Mesh(new THREE.BoxGeometry(bookW - 0.05, 0.06, bookD - 0.05), pageMat)
      pages.position.y = 0
      group.add(pages)
      const spineMat = new THREE.MeshStandardMaterial({ color: mainColor })
      const spine = new THREE.Mesh(new THREE.BoxGeometry(0.04, bookH + 0.08, bookD), spineMat)
      spine.position.set(-bookW / 2 + 0.02, 0, 0)
      group.add(spine)
    }
  } else {
    const geo = createShapeGeo(file.userShape || 'cylinder')
    const mat = new THREE.MeshStandardMaterial({ color: mainColor, metalness: 0.3, roughness: 0.5 })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    group.add(mesh)
    const ringMat = new THREE.MeshBasicMaterial({
      color: mainColor,
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
function getIntersectFile(): SpaceFile | null {
  const meshes: THREE.Object3D[] = []
  scene.traverse(obj => {
    if (obj.userData.fileId) meshes.push(obj)
  })
  const intersects = raycaster.intersectObjects(meshes, true)
  if (intersects.length > 0) {
    let obj = intersects[0].object
    while (obj.parent && !obj.userData.fileId) obj = obj.parent
    if (obj.userData.fileId) {
      return spaceFiles.value.find((f: SpaceFile) => f.id === obj.userData.fileId) || null
    }
  }
  return null
}

function getDragPoint(e: PointerEvent, targetPos: THREE.Vector3): THREE.Vector3 | null {
  const rect = renderer.domElement.getBoundingClientRect()
  const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const my = -((e.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(new THREE.Vector2(mx, my), camera)
  // 创建一个垂直于视线且穿过目标点的平面
  const camDir = new THREE.Vector3()
  camera.getWorldDirection(camDir)
  dragPlane.setFromNormalAndCoplanarPoint(camDir, targetPos)
  const hit = new THREE.Vector3()
  const result = raycaster.ray.intersectPlane(dragPlane, hit)
  return result
}

function onPointerDown(e: PointerEvent) {
  isMouseDown = true
  mouseMoved = false
  clickStartPos.x = e.clientX
  clickStartPos.y = e.clientY

  if (moveMode.value) {
    const rect = renderer.domElement.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const my = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(new THREE.Vector2(mx, my), camera)
    const file = getIntersectFile()
    if (file && file.mesh) {
      draggingFile = file
      selectedFile.value = file
      // 计算鼠标在拖拽平面上的点与文件位置的偏移
      const dp = getDragPoint(e, file.mesh.position)
      if (dp) {
        dragOffset.copy(file.mesh.position).sub(dp)
      }
      controls.enabled = false
      renderer.domElement.style.cursor = 'grabbing'
    }
    return
  }
}

function onPointerMove(e: PointerEvent) {
  if (draggingFile && draggingFile.mesh) {
    const dp = getDragPoint(e, draggingFile.mesh.position)
    if (dp) {
      // 新位置 = 鼠标在平面上的点 + 偏移
      const newPos = dp.clone().add(dragOffset)
      // 限制在场景范围内
      newPos.x = Math.max(-18, Math.min(18, newPos.x))
      newPos.z = Math.max(-18, Math.min(18, newPos.z))
      newPos.y = draggingFile.position.y // 保持原高度
      draggingFile.mesh.position.copy(newPos)
      draggingFile.position.copy(newPos)
      if (draggingFile.label) {
        draggingFile.label.position.copy(newPos)
        draggingFile.label.position.y += 1.6
      }
    }
    return
  }

  if (isMouseDown) {
    const dx = e.clientX - clickStartPos.x
    const dy = e.clientY - clickStartPos.y
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) mouseMoved = true
  }
  // 拖拽模式鼠标悬浮时改变指针
  if (moveMode.value) {
    const rect = renderer.domElement.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const my = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(new THREE.Vector2(mx, my), camera)
    const file = getIntersectFile()
    renderer.domElement.style.cursor = file ? 'grab' : 'default'
  }
}

function onPointerUp(e: PointerEvent) {
  if (draggingFile) {
    draggingFile = null
    controls.enabled = true
    renderer.domElement.style.cursor = 'default'
    return
  }

  if (mouseMoved) { isMouseDown = false; return }
  isMouseDown = false

  if (moveMode.value) return

  const rect = renderer.domElement.getBoundingClientRect()
  const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const my = -((e.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(new THREE.Vector2(mx, my), camera)
  const file = getIntersectFile()
  if (file) selectFile(file)
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
  { id: '6', name: '陈雨彤.docx', type: 'document', ext: 'DOCX', size: '0.5 MB', description: '你没有权限', position: new THREE.Vector3(2, 0.5, -4) },
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
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input v-model="searchQuery" @input="highlightSearch" placeholder="搜索文件名、类型..." />
        <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''; highlightSearch()">✕</button>
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
        <button :class="['nav-btn', 'move-btn', { active: moveMode }]" @click="moveMode = !moveMode" title="移动文件">
          <span>✋</span>
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
        <div class="file-info-actions">
          <button class="customize-btn" @click.stop="showCustomize = true">
            <span>🎨</span> 自定义外观
          </button>
        </div>
      </div>

      <!-- 操作提示 -->
      <div class="hint">
        {{ moveMode ? '✋ 点击文件并拖拽移动位置' : '🖱 点击选择文件 · 拖拽旋转 · 滚轮缩放' }}
      </div>
      <div v-if="moveMode" class="move-indicator">移动模式已开启</div>
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

    <!-- 搜索结果显示 -->
    <div v-if="searchQuery && getFilteredFiles().length > 0" class="search-result-count">
      找到 {{ getFilteredFiles().length }} 个文件
    </div>
    <div v-if="searchQuery && getFilteredFiles().length === 0" class="search-result-count no-result">
      未找到匹配文件
    </div>

    <!-- 自定义外观弹窗 -->
    <transition name="fade">
      <div v-if="showCustomize && selectedFile" class="customize-overlay" @click.self="closeCustomize">
        <div class="customize-modal">
          <div class="customize-header">
            <span>🎨 自定义外观</span>
            <button class="preview-close" @click="closeCustomize">✕</button>
          </div>
          <div class="customize-body">
            <div class="customize-section">
              <div class="customize-label">选择形状</div>
              <div class="shape-grid">
                <button v-for="shape in shapeOptions" :key="shape"
                  :class="['shape-btn', { active: selectedFile?.userShape === shape }]"
                  @click="selectedFile && changeShape(selectedFile, shape)">
                  <span class="shape-icon">
                    {{ shape === 'box' ? '📦' : shape === 'sphere' ? '⚪' : shape === 'cylinder' ? '🥫' : shape === 'cone' ? '🔺' : shape === 'torus' ? '🍩' : '🔮' }}
                  </span>
                  <span>{{ shape }}</span>
                </button>
              </div>
            </div>
            <div class="customize-section">
              <div class="customize-label">选择颜色</div>
              <div class="color-grid">
                <button v-for="c in colorOptions" :key="c.hex"
                  :class="['color-btn', { active: selectedFile?.userColor === c.hex }]"
                  :style="{ background: c.hex }"
                  @click="selectedFile && changeColor(selectedFile, c.hex)"
                  :title="c.name">
                </button>
              </div>
            </div>
            <button class="reset-btn" @click="resetAppearance" v-if="selectedFile?.userShape || selectedFile?.userColor">
              🔄 重置为默认外观
            </button>
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

.move-btn { transition: all 0.2s; }
.move-btn.active {
  background: rgba(79,195,247,0.2);
  border-color: #4fc3f7;
  box-shadow: 0 0 12px rgba(79,195,247,0.2);
}

.move-indicator {
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(79,195,247,0.15);
  border: 1px solid rgba(79,195,247,0.3);
  border-radius: 8px;
  padding: 4px 14px;
  color: #4fc3f7;
  font-size: 12px;
  animation: pulse-indicator 2s infinite;
}

@keyframes pulse-indicator {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
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

/* ==================== 搜索栏 ==================== */
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 6px 12px;
  width: 260px;
  transition: all 0.2s;
}

.search-bar:focus-within {
  border-color: rgba(79,195,247,0.4);
  background: rgba(255,255,255,0.08);
}

.search-icon { font-size: 14px; opacity: 0.5; }

.search-bar input {
  flex: 1;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 13px;
  outline: none;
}
.search-bar input::placeholder { color: rgba(255,255,255,0.3); }

.search-clear {
  border: none;
  background: rgba(255,255,255,0.1);
  color: #fff;
  width: 20px; height: 20px;
  border-radius: 50%;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-result-count {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(10,10,26,0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 6px 16px;
  color: #4fc3f7;
  font-size: 13px;
}
.search-result-count.no-result { color: #e57373; }

/* ==================== 文件信息按钮 ==================== */
.file-info-actions {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.customize-btn {
  padding: 6px 16px;
  border: 1px solid rgba(79,195,247,0.3);
  border-radius: 8px;
  background: rgba(79,195,247,0.1);
  color: #4fc3f7;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.customize-btn:hover {
  background: rgba(79,195,247,0.2);
  border-color: rgba(79,195,247,0.6);
}

/* ==================== 自定义弹窗 ==================== */
.customize-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(6px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}

.customize-modal {
  width: 420px;
  max-width: 90vw;
  background: rgba(15,15,35,0.95);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.customize-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.customize-body {
  padding: 20px;
}

.customize-section {
  margin-bottom: 20px;
}

.customize-label {
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.shape-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.shape-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 8px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
}

.shape-btn:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.2);
  color: #fff;
}

.shape-btn.active {
  border-color: #4fc3f7;
  background: rgba(79,195,247,0.12);
  color: #4fc3f7;
}

.shape-icon { font-size: 24px; }

.color-grid {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.color-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.color-btn:hover { transform: scale(1.15); }
.color-btn.active { border-color: #fff; box-shadow: 0 0 12px rgba(255,255,255,0.2); }

.reset-btn {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.reset-btn:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}
</style>
