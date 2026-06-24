<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

let animationId: number
let ctx: CanvasRenderingContext2D
let width = 0
let height = 0

// ---------- 星云云团 ----------
interface NebulaCloud {
  x: number
  y: number
  radiusX: number
  radiusY: number
  color: string
  alpha: number
  speedX: number
  speedY: number
  phase: number
}

const nebulae: NebulaCloud[] = []

function initNebulae() {
  nebulae.length = 0
  const colors = [
    'rgba(138, 120, 180, ',    // 淡紫罗兰
    'rgba(100, 160, 200, ',    // 冰蓝
    'rgba(200, 170, 140, ',    // 浅香槟
    'rgba(160, 140, 200, ',    // 淡紫
    'rgba(120, 180, 210, ',    // 青蓝
  ]
  for (let i = 0; i < 8; i++) {
    nebulae.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radiusX: 200 + Math.random() * 500,
      radiusY: 150 + Math.random() * 350,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.03 + Math.random() * 0.06,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.12,
      phase: Math.random() * Math.PI * 2,
    })
  }
}

// ---------- 恒星 ----------
interface Star {
  x: number
  y: number
  radius: number
  baseAlpha: number
  alpha: number
  twinkleSpeed: number
  twinkleOffset: number
  color: string
  type: 'tiny' | 'medium' | 'large'
}

const stars: Star[] = []

function initStars() {
  stars.length = 0
  const count = Math.floor((width * height) / 600) // 密度适配屏幕
  const total = Math.min(count, 4000)

  for (let i = 0; i < total; i++) {
    const r = Math.random()
    let type: Star['type']
    let radius: number
    let baseAlpha: number
    let color: string

    if (r < 0.7) {
      type = 'tiny'
      radius = 0.3 + Math.random() * 0.6
      baseAlpha = 0.2 + Math.random() * 0.4
      color = Math.random() < 0.9 ? '#d0e0ff' : '#ffe8c0'
    } else if (r < 0.95) {
      type = 'medium'
      radius = 0.8 + Math.random() * 1.2
      baseAlpha = 0.4 + Math.random() * 0.5
      color = Math.random() < 0.85 ? '#c8dcff' : '#ffe8c0'
    } else {
      type = 'large'
      radius = 1.5 + Math.random() * 2.0
      baseAlpha = 0.6 + Math.random() * 0.4
      color = Math.random() < 0.8 ? '#b8d0ff' : '#fff0d0'
    }

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      baseAlpha,
      alpha: baseAlpha,
      twinkleSpeed: 0.3 + Math.random() * 1.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      color,
      type,
    })
  }
}

// ---------- 流星 ----------
interface Meteor {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  tailLength: number
  headAlpha: number
  color: string
}

const meteors: Meteor[] = []
let meteorTimer = 0
let nextMeteorDelay = 0

function spawnMeteor() {
  // 随机从边缘出现
  const edge = Math.random()
  let x: number, y: number
  if (edge < 0.4) {
    // 上边缘
    x = Math.random() * width
    y = -20
  } else if (edge < 0.7) {
    // 左边缘
    x = -20
    y = Math.random() * height * 0.6
  } else {
    // 右边缘
    x = width + 20
    y = Math.random() * height * 0.6
  }

  // 飞行角度：-30° 到 60°（斜向下为主）
  const angle = (-Math.PI / 6) + Math.random() * (Math.PI / 2)
  const speed = 1.5 + Math.random() * 3.5
  const vx = Math.cos(angle) * speed
  const vy = Math.sin(angle) * speed

  meteors.push({
    x,
    y,
    vx,
    vy,
    life: 0,
    maxLife: 60 + Math.random() * 120, // 1-3秒 @ 60fps
    tailLength: 40 + Math.random() * 80,
    headAlpha: 0.7 + Math.random() * 0.3,
    color: Math.random() < 0.7 ? '#a0d8ff' : '#c8e8ff',
  })
}

// ---------- 绘制星云 ----------
function drawNebulae(time: number) {
  for (const neb of nebulae) {
    const x = neb.x + Math.sin(time * 0.0001 + neb.phase) * 30
    const y = neb.y + Math.cos(time * 0.00013 + neb.phase) * 25

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, neb.radiusX)
    const alpha = neb.alpha + Math.sin(time * 0.0005 + neb.phase) * 0.015
    gradient.addColorStop(0, neb.color + String(alpha) + ')')
    gradient.addColorStop(0.4, neb.color + String(alpha * 0.6) + ')')
    gradient.addColorStop(0.7, neb.color + String(alpha * 0.2) + ')')
    gradient.addColorStop(1, neb.color + '0)')

    ctx.save()
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.ellipse(x, y, neb.radiusX, neb.radiusY, neb.phase * 0.3, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

// ---------- 绘制恒星 ----------
function drawStars(time: number) {
  for (const star of stars) {
    // 呼吸闪烁
    star.alpha = star.baseAlpha + Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset) * star.baseAlpha * 0.4

    const a = Math.max(0.05, star.alpha)
    const r = star.radius

    ctx.save()
    ctx.globalAlpha = a

    // 光点
    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, r * 2)
    gradient.addColorStop(0, star.color)
    gradient.addColorStop(0.3, star.color)
    gradient.addColorStop(1, 'transparent')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(star.x, star.y, r * 2.5, 0, Math.PI * 2)
    ctx.fill()

    // 大星星的星芒
    if (star.type === 'large' && a > 0.4) {
      drawStarBurst(star.x, star.y, r, a * 0.4, star.color)
    }

    ctx.restore()
  }
}

function drawStarBurst(x: number, y: number, radius: number, alpha: number, color: string) {
  const len = radius * 6
  const glowLen = radius * 10

  ctx.save()
  ctx.globalAlpha = alpha

  // 十字星芒
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 2) {
    const grad = ctx.createLinearGradient(
      x, y,
      x + Math.cos(angle) * glowLen, y + Math.sin(angle) * glowLen
    )
    grad.addColorStop(0, color)
    grad.addColorStop(1, 'transparent')

    ctx.strokeStyle = grad
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(x + Math.cos(angle) * radius * 0.8, y + Math.sin(angle) * radius * 0.8)
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len)
    ctx.stroke()
  }

  // 斜向小星芒
  for (let angle = Math.PI / 4; angle < Math.PI * 2; angle += Math.PI / 2) {
    const grad = ctx.createLinearGradient(
      x, y,
      x + Math.cos(angle) * glowLen * 0.6, y + Math.sin(angle) * glowLen * 0.6
    )
    grad.addColorStop(0, color)
    grad.addColorStop(1, 'transparent')

    ctx.strokeStyle = grad
    ctx.lineWidth = 0.3
    ctx.beginPath()
    ctx.moveTo(x + Math.cos(angle) * radius * 0.6, y + Math.sin(angle) * radius * 0.6)
    ctx.lineTo(x + Math.cos(angle) * len * 0.6, y + Math.sin(angle) * len * 0.6)
    ctx.stroke()
  }

  ctx.restore()
}

// ---------- 绘制流星 ----------
function drawMeteors() {
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i]

    // 头部光点
    const headGrad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 4)
    headGrad.addColorStop(0, `rgba(255,255,255,${m.headAlpha})`)
    headGrad.addColorStop(0.4, `rgba(255,255,255,${m.headAlpha * 0.6})`)
    headGrad.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.save()
    ctx.fillStyle = headGrad
    ctx.beginPath()
    ctx.arc(m.x, m.y, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    // 拖尾
    const tailGrad = ctx.createLinearGradient(
      m.x, m.y,
      m.x - m.vx * m.tailLength * 0.05, m.y - m.vy * m.tailLength * 0.05
    )
    const tailAlpha = m.headAlpha * 0.5
    tailGrad.addColorStop(0, `rgba(200,230,255,${tailAlpha})`)
    tailGrad.addColorStop(0.3, `rgba(160,210,255,${tailAlpha * 0.5})`)
    tailGrad.addColorStop(0.6, `rgba(120,180,240,${tailAlpha * 0.2})`)
    tailGrad.addColorStop(1, 'rgba(100,160,220,0)')

    ctx.save()
    ctx.strokeStyle = tailGrad
    ctx.lineWidth = 1.2
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(m.x, m.y)
    const tailSteps = 30
    for (let j = 1; j <= tailSteps; j++) {
      const t = j / tailSteps
      const px = m.x - m.vx * t * m.tailLength * 0.05
      const py = m.y - m.vy * t * m.tailLength * 0.05
      ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.restore()
  }
}

// ---------- 更新 ----------
function updateMeteors() {
  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i]
    m.x += m.vx
    m.y += m.vy
    m.life++

    // 淡出
    if (m.life > m.maxLife * 0.7) {
      const fadeProgress = (m.life - m.maxLife * 0.7) / (m.maxLife * 0.3)
      m.headAlpha = (0.7 + Math.random() * 0.3) * (1 - fadeProgress)
    }

    // 超出屏幕或生命周期结束
    if (m.life >= m.maxLife || m.x < -100 || m.x > width + 100 || m.y < -100 || m.y > height + 100) {
      meteors.splice(i, 1)
    }
  }

  // 随机生成流星
  meteorTimer++
  if (meteorTimer >= nextMeteorDelay) {
    spawnMeteor()
    meteorTimer = 0
    nextMeteorDelay = 180 + Math.floor(Math.random() * 300) // 3-8秒
    // 极小概率同时出现两颗
    if (Math.random() < 0.15) {
      setTimeout(() => {
        if (meteors.length < 2) spawnMeteor()
      }, 200 + Math.random() * 600)
    }
  }
}

// ---------- 背景渐变 ----------
function drawBackgroundGradient() {
  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0, '#0a0e1a')
  grad.addColorStop(0.25, '#0f1428')
  grad.addColorStop(0.5, '#111830')
  grad.addColorStop(0.75, '#0d1225')
  grad.addColorStop(1, '#080c18')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)
}

// ---------- 主动画循环 ----------
function animate(time: number) {
  ctx.clearRect(0, 0, width, height)

  drawBackgroundGradient()
  drawNebulae(time)
  drawStars(time)
  updateMeteors()
  drawMeteors()

  animationId = requestAnimationFrame(animate)
}

// ---------- 尺寸调整 ----------
function resize() {
  if (!canvasRef.value) return
  width = window.innerWidth
  height = window.innerHeight
  canvasRef.value.width = width
  canvasRef.value.height = height
  initNebulae()
  initStars()
}

onMounted(() => {
  nextTick(() => {
    if (!canvasRef.value) return
    ctx = canvasRef.value.getContext('2d')!
    resize()
    animationId = requestAnimationFrame(animate)
  })
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvasRef" class="deep-space-canvas"></canvas>
</template>

<style scoped>
.deep-space-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
