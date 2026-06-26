<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
  type: 'circle' | 'star' | 'spark'
}

interface Firework {
  x: number
  y: number
  particles: Particle[]
  time: number
}

const fireworks = ref<Firework[]>([])
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animId = 0

const colors = [
  '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF',
  '#FF8E53', '#C471ED', '#12D8FA', '#FF4081',
  '#00E676', '#FFEA00', '#FF3D00', '#2979FF',
  '#AA00FF', '#00E5FF', '#FF1744', '#76FF03',
]

function createFirework(x: number, y: number): Firework {
  const particleCount = 60 + Math.floor(Math.random() * 80)
  const baseColor = colors[Math.floor(Math.random() * colors.length)]
  const particles: Particle[] = []

  // 随机选择烟花形状
  const shape = Math.random()
  let angles: number[] = []

  if (shape < 0.4) {
    // 圆形烟花
    for (let i = 0; i < particleCount; i++) {
      angles.push((i / particleCount) * Math.PI * 2)
    }
  } else if (shape < 0.7) {
    // 随机方向烟花
    for (let i = 0; i < particleCount; i++) {
      angles.push(Math.random() * Math.PI * 2)
    }
  } else {
    // 星形烟花
    const points = 5 + Math.floor(Math.random() * 4)
    for (let i = 0; i < particleCount; i++) {
      const starAngle = ((i / particleCount) * Math.PI * 2 * points)
      const spread = (Math.random() - 0.5) * 0.3
      angles.push(starAngle + spread)
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const speed = 1.5 + Math.random() * 5
    const angle = angles[i]
    const colorVariant = Math.random() < 0.3
      ? colors[Math.floor(Math.random() * colors.length)]
      : baseColor

    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: 0.6 + Math.random() * 0.8,
      color: colorVariant,
      size: 1.5 + Math.random() * 3,
      type: (['circle', 'circle', 'circle', 'star', 'spark'][Math.floor(Math.random() * 5)]) as Particle['type'],
    })
  }

  return { x, y, particles, time: 0 }
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
  const alpha = p.life / p.maxLife
  ctx.globalAlpha = alpha * 0.9

  if (p.type === 'circle') {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.fill()
    // 光晕
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
    ctx.fillStyle = p.color
    ctx.globalAlpha = alpha * 0.15
    ctx.fill()
  } else if (p.type === 'star') {
    drawStar(ctx, p.x, p.y, p.size * 2, p.size, 5, p.color)
    ctx.globalAlpha = alpha * 0.2
    drawStar(ctx, p.x, p.y, p.size * 3.5, p.size * 1.5, 5, p.color)
  } else if (p.type === 'spark') {
    ctx.beginPath()
    ctx.moveTo(p.x, p.y - p.size * 2)
    ctx.lineTo(p.x - p.size * 0.7, p.y + p.size)
    ctx.lineTo(p.x + p.size * 1.5, p.y - p.size * 0.4)
    ctx.lineTo(p.x - p.size * 1.5, p.y - p.size * 0.4)
    ctx.lineTo(p.x + p.size * 0.7, p.y + p.size)
    ctx.closePath()
    ctx.fillStyle = p.color
    ctx.fill()
  }

  ctx.globalAlpha = 1
}

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, outerR: number, innerR: number, points: number, color: string) {
  ctx.beginPath()
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    const angle = (i * Math.PI) / points - Math.PI / 2
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
}

function animate() {
  if (!ctx || !canvasRef.value) return

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  // 绘制背景的微弱拖尾效果
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
  ctx.fillRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  for (let f = fireworks.value.length - 1; f >= 0; f--) {
    const fw = fireworks.value[f]
    fw.time += 1 / 60

    let allDead = true
    for (let p = fw.particles.length - 1; p >= 0; p--) {
      const particle = fw.particles[p]
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.05 // 重力
      particle.vx *= 0.99
      particle.vy *= 0.99
      particle.life -= 1 / 60

      if (particle.life <= 0) {
        fw.particles.splice(p, 1)
      } else {
        allDead = false
        drawParticle(ctx!, particle)
      }
    }

    if (allDead || fw.time > 3) {
      fireworks.value.splice(f, 1)
    }
  }

  animId = requestAnimationFrame(animate)
}

function handleClick(e: MouseEvent) {
  const rect = canvasRef.value!.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  fireworks.value.push(createFirework(x, y))

  // 有时添加多个烟花
  if (Math.random() < 0.4) {
    setTimeout(() => {
      fireworks.value.push(
        createFirework(
          x + (Math.random() - 0.5) * 100,
          y + (Math.random() - 0.5) * 80,
        ),
      )
    }, 80 + Math.random() * 120)
  }
}

function handleResize() {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
}

function goBack() {
  router.replace('/')
}

onMounted(() => {
  if (!canvasRef.value) return
  ctx = canvasRef.value.getContext('2d')
  handleResize()
  window.addEventListener('resize', handleResize)
  animate()

  // 自动放几个烟花
  const autoFire = () => {
    if (!canvasRef.value) return
    const w = canvasRef.value.width
    const h = canvasRef.value.height
    fireworks.value.push(
      createFirework(
        w * 0.2 + Math.random() * w * 0.6,
        h * 0.2 + Math.random() * h * 0.4,
      ),
    )
  }

  autoFire()
  setTimeout(autoFire, 400)
  setTimeout(autoFire, 900)
})
</script>

<template>
  <div class="firework-page">
    <canvas
      ref="canvasRef"
      class="firework-canvas"
      @click="handleClick"
    />

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 提示文字 -->
    <div class="hint">
      <span class="hint-icon">🎆</span>
      <span>点击屏幕任意位置 绽放烟花</span>
    </div>
  </div>
</template>

<style scoped>
.firework-page {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #0a0a1a;
  cursor: crosshair;
}

.firework-canvas {
  position: absolute;
  inset: 0;
  display: block;
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

/* 底部提示 */
.hint {
  position: fixed;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  animation: hintFloat 3s ease-in-out infinite;
  pointer-events: none;
}

.hint-icon {
  font-size: 18px;
  animation: iconBounce 1s ease-in-out infinite;
}

@keyframes hintFloat {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-6px); }
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
</style>
