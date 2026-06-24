<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { stickerList, type StickerData } from '@/data/stickers'

const containerRef = ref<HTMLDivElement>()
const tooltipVisible = ref(false)
const tooltipData = ref<StickerData | null>(null)
const tooltipPos = ref({ x: 0, y: 0 })

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

const SPHERE_RADIUS = 4.5
const STICKER_W = 0.55
const STICKER_H = 0.55

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
  const size = 256
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  // 背景 - 圆角矩形
  const r = 24
  const pad = 6
  const w = size - pad * 2
  const h = size - pad * 2
  const x = pad
  const y = pad

  // 柔和阴影
  ctx.shadowColor = 'rgba(0,0,0,0.08)'
  ctx.shadowBlur = 12
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 4

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
  const tapeH = 22
  const tapeW = 120
  const tapeX = (size - tapeW) / 2
  ctx.beginPath()
  ctx.moveTo(tapeX + 8, 10)
  ctx.lineTo(tapeX + tapeW - 8, 10)
  ctx.quadraticCurveTo(tapeX + tapeW, 10, tapeX + tapeW, 10 + 8)
  ctx.lineTo(tapeX + tapeW, 10 + tapeH - 8)
  ctx.quadraticCurveTo(tapeX + tapeW, 10 + tapeH, tapeX + tapeW - 8, 10 + tapeH)
  ctx.lineTo(tapeX + 8, 10 + tapeH)
  ctx.quadraticCurveTo(tapeX, 10 + tapeH, tapeX, 10 + tapeH - 8)
  ctx.lineTo(tapeX, 10 + 8)
  ctx.quadraticCurveTo(tapeX, 10, tapeX + 8, 10)
  ctx.closePath()
  ctx.fillStyle = data.tagColor
  ctx.globalAlpha = 0.65
  ctx.fill()
  ctx.globalAlpha = 1

  // Emoji
  ctx.font = '36px "Segoe UI Emoji", "Apple Color Emoji", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.emoji, size / 2, 80)

  // 分类标签
  ctx.font = 'bold 13px "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.fillStyle = '#999'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.category, size / 2, 118)

  // 文字
  ctx.font = 'bold 20px "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.fillStyle = '#444'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(data.text, size / 2, 152)

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
  ctx.strokeStyle = 'rgba(180,160,140,0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.colorSpace = THREE.SRGBColorSpace
  texture.generateMipmaps = true
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
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, 'rgba(255,255,255,0.15)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.06)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)

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

  // 场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#f8f8f8')

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
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
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
      // 点击回弹动画
      const originalScale = obj.scale.clone()
      const targetScale = originalScale.clone().multiplyScalar(0.85)
      const duration = 150
      const startTime = performance.now()

      function bounceAnim(time: number) {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out back
        const c1 = 1.70158
        const c3 = c1 + 1
        const val = 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2)

        if (progress < 0.5) {
          obj.scale.lerpVectors(targetScale, originalScale, progress * 2)
        } else {
          const p = (progress - 0.5) * 2
          obj.scale.lerpVectors(originalScale, targetScale, 1 - p + val * 0.3)
        }

        if (progress < 1) {
          requestAnimationFrame(bounceAnim)
        } else {
          obj.scale.copy(originalScale)
        }
      }
      requestAnimationFrame(bounceAnim)

      console.log('Clicked:', data.stickerData.text)
    }
  }
}

function animate() {
  animationId = requestAnimationFrame(animate)

  clock.getDelta()

  controls.update()

  // 更新每张便利贴使其始终面向相机（billboarding light）
  // 不强制billboard，保持原有朝向，这样更有立体感

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
    <div class="globe-title">
      <h1>文案素材导航</h1>
      <p>拖拽旋转 · 悬停预览 · 点击进入</p>
    </div>
  </div>
</template>

<style scoped>
.globe-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%);
  cursor: grab;
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
