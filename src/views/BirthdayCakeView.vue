<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 阶段：idle -> blowing -> fireworks -> done
const phase = ref<'idle' | 'blowing' | 'fireworks' | 'done'>('idle')
const candleLit = ref(true)
const candleFlicker = ref(false)
const flameHeight = ref(1)
const fireworkParticles = ref<Array<{
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
  duration: number
}>>([])
const sparkles = ref<Array<{
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
}>>([])
const tipMessage = ref('对着麦克风吹气，或点击蜡烛吹灭它 🎂')
const blowStrength = ref(0)
const blowCount = ref(0)

let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null
let micStream: MediaStream | null = null
let animationId = 0
let fireworkTimer: ReturnType<typeof setTimeout> | null = null

const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8E53', '#C06FF5', '#FF5E9C', '#00E5FF']

// 初始化麦克风
async function initMic() {
  try {
    audioContext = new AudioContext()
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const source = audioContext.createMediaStreamSource(micStream)
    analyser = audioContext.createAnalyser()
    analyser.fftSize = 256
    source.connect(analyser)
    startMicLoop()
  } catch {
    // 没有麦克风，只靠点击
    tipMessage.value = '点击蜡烛吹灭它吧 🎂'
  }
}

function startMicLoop() {
  if (!analyser) return
  const dataArray = new Uint8Array(analyser.frequencyBinCount)

  function check() {
    if (phase.value !== 'idle') {
      animationId = requestAnimationFrame(check)
      return
    }
    analyser!.getByteFrequencyData(dataArray)
    // 检测低频 + 中频音量
    let sum = 0
    for (let i = 0; i < 64; i++) {
      sum += dataArray[i]
    }
    const avg = sum / 64
    blowStrength.value = avg

    if (avg > 40) {
      blowCount.value++
      candleFlicker.value = true
      flameHeight.value = Math.max(0.2, 1 - avg / 150)

      if (avg > 70 || blowCount.value > 30) {
        blowOut()
        return
      }
    } else {
      candleFlicker.value = false
      flameHeight.value = 1
      if (blowCount.value > 0) blowCount.value = Math.max(0, blowCount.value - 0.5)
    }
    animationId = requestAnimationFrame(check)
  }
  animationId = requestAnimationFrame(check)
}

function blowOut() {
  if (phase.value !== 'idle') return
  phase.value = 'blowing'
  candleLit.value = false
  blowStrength.value = 0
  tipMessage.value = '🎉 蜡烛熄灭啦！'

  // 延迟后进入烟花阶段
  setTimeout(() => {
    phase.value = 'fireworks'
    launchFireworks()
  }, 800)
}

function launchFireworks() {
  const particleCount = 60
  const particles: typeof fireworkParticles.value = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      id: i,
      x: 10 + Math.random() * 80,
      y: 5 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 3 + Math.random() * 6,
      delay: Math.random() * 2,
      duration: 0.8 + Math.random() * 1.5,
    })
  }
  fireworkParticles.value = particles

  // 星星闪烁
  const starCount = 30
  const stars: typeof sparkles.value = []
  for (let i = 0; i < starCount; i++) {
    stars.push({
      id: i + 1000,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    })
  }
  sparkles.value = stars

  tipMessage.value = '🎂 生日快乐！愿你岁岁平安，万事顺意！🎉'

  // 持续发射烟花
  fireworkTimer = setInterval(() => {
    const newParticles: typeof fireworkParticles.value = []
    const count = 40 + Math.floor(Math.random() * 30)
    const startId = Date.now()
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: startId + i,
        x: 10 + Math.random() * 80,
        y: 5 + Math.random() * 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 6,
        delay: Math.random() * 1.5,
        duration: 0.8 + Math.random() * 1.5,
      })
    }
    fireworkParticles.value = [...fireworkParticles.value.slice(-120), ...newParticles]
  }, 1500)

  // 5秒后可以返回
  setTimeout(() => {
    phase.value = 'done'
    tipMessage.value = '点击下方按钮重新点燃蜡烛 🔥'
  }, 5000)
}

function relight() {
  if (fireworkTimer) {
    clearInterval(fireworkTimer)
    fireworkTimer = null
  }
  phase.value = 'idle'
  candleLit.value = true
  candleFlicker.value = false
  flameHeight.value = 1
  blowCount.value = 0
  blowStrength.value = 0
  fireworkParticles.value = []
  sparkles.value = []
  tipMessage.value = '对着麦克风吹气，或点击蜡烛吹灭它 🎂'
}

function goBack() {
  if (fireworkTimer) {
    clearInterval(fireworkTimer)
  }
  router.replace('/')
}

onMounted(() => {
  nextTick(() => {
    initMic()
  })
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  if (fireworkTimer) clearInterval(fireworkTimer)
  if (micStream) {
    micStream.getTracks().forEach((t) => t.stop())
  }
  if (audioContext) {
    audioContext.close()
  }
})
</script>

<template>
  <div class="birthday-page">
    <!-- 背景 -->
    <div class="bg-gradient"></div>

    <!-- 闪烁星星 -->
    <div
      v-for="star in sparkles"
      :key="star.id"
      class="sparkle-star"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        backgroundColor: star.color,
        animationDelay: star.delay + 's',
      }"
    ></div>

    <!-- 烟花粒子 -->
    <div
      v-for="p in fireworkParticles"
      :key="p.id"
      class="firework-particle"
      :style="{
        left: p.x + '%',
        top: p.y + '%',
        width: p.size + 'px',
        height: p.size + 'px',
        backgroundColor: p.color,
        animationDelay: p.delay + 's',
        animationDuration: p.duration + 's',
      }"
    ></div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 主内容 -->
    <div class="content">
      <!-- 蛋糕 -->
      <div class="cake-container" @click="blowOut">
        <!-- 蛋糕主体 -->
        <div class="cake">
          <!-- 顶层 -->
          <div class="cake-layer top-layer">
            <div class="icing-drip" v-for="i in 8" :key="i" :style="{ left: (i * 12.5 - 6) + '%' }"></div>
          </div>
          <!-- 中层 -->
          <div class="cake-layer middle-layer"></div>
          <!-- 底层 -->
          <div class="cake-layer bottom-layer"></div>
          <!-- 底座 -->
          <div class="cake-plate"></div>
        </div>

        <!-- 蜡烛 -->
        <div class="candle" :class="{ 'candle-out': !candleLit }">
          <div class="candle-body"></div>
          <div class="candle-wick"></div>
          <!-- 火焰 -->
          <div
            class="flame"
            :class="{ flicker: candleFlicker, out: !candleLit }"
            :style="{ transform: `scaleY(${flameHeight})` }"
          >
            <div class="flame-inner"></div>
            <div class="flame-outer"></div>
          </div>
        </div>
      </div>

      <!-- 提示文字 -->
      <p class="tip" :class="{ celebrating: phase === 'fireworks' || phase === 'done' }">
        {{ tipMessage }}
      </p>

      <!-- 重新点燃按钮 -->
      <button
        v-if="phase === 'done'"
        class="relight-btn"
        @click="relight"
      >
        🔥 再来一次
      </button>
    </div>
  </div>
</template>

<style scoped>
.birthday-page {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
  user-select: none;
  -webkit-user-select: none;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 30%, #1a0533 0%, #0d0221 40%, #050011 100%);
  z-index: 0;
}

/* 闪烁星星 */
.sparkle-star {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: sparkle 2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

/* 烟花粒子 */
.firework-particle {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: fireworkBurst ease-out forwards;
  opacity: 0;
}

@keyframes fireworkBurst {
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(
      calc((var(--tx, 0) - 50) * 2px),
      calc((var(--ty, 0) - 50) * 2px)
    );
  }
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

/* 主内容 */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* 蛋糕容器 */
.cake-container {
  cursor: pointer;
  position: relative;
  transition: transform 0.3s;
}

.cake-container:hover {
  transform: scale(1.05);
}

.cake-container:active {
  transform: scale(0.97);
}

/* 蛋糕 */
.cake {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cake-layer {
  border-radius: 8px;
  position: relative;
}

.top-layer {
  width: 140px;
  height: 40px;
  background: linear-gradient(180deg, #ffb3ba 0%, #ff8a94 100%);
  border-radius: 10px 10px 4px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3);
  overflow: hidden;
  z-index: 3;
}

.icing-drip {
  position: absolute;
  bottom: -8px;
  width: 16px;
  height: 14px;
  background: #ff8a94;
  border-radius: 0 0 8px 8px;
}

.middle-layer {
  width: 170px;
  height: 50px;
  background: linear-gradient(180deg, #ffe0b2 0%, #ffcc80 100%);
  border-radius: 6px;
  margin-top: -2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3);
  z-index: 2;
}

.bottom-layer {
  width: 200px;
  height: 60px;
  background: linear-gradient(180deg, #c8e6c9 0%, #a5d6a7 100%);
  border-radius: 6px;
  margin-top: -2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.cake-plate {
  width: 240px;
  height: 16px;
  background: linear-gradient(180deg, #e0e0e0 0%, #bdbdbd 100%);
  border-radius: 50%;
  margin-top: -2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* 蜡烛 */
.candle {
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.5s;
  z-index: 10;
}

.candle.candle-out {
  opacity: 0.3;
}

.candle-body {
  width: 10px;
  height: 35px;
  background: linear-gradient(180deg, #fff9c4 0%, #fff176 50%, #ffd54f 100%);
  border-radius: 3px 3px 0 0;
  box-shadow: inset -2px 0 4px rgba(0, 0, 0, 0.1);
}

.candle-wick {
  width: 2px;
  height: 6px;
  background: #333;
  border-radius: 1px;
}

/* 火焰 */
.flame {
  position: relative;
  width: 18px;
  height: 26px;
  margin-top: -2px;
  transition: transform 0.1s, opacity 0.3s;
  transform-origin: bottom center;
}

.flame.out {
  opacity: 0;
  transform: scaleY(0) !important;
}

.flame.flicker {
  animation: flickerAnim 0.1s infinite alternate;
}

@keyframes flickerAnim {
  0% { transform: scaleY(1) scaleX(1) rotate(-2deg); }
  100% { transform: scaleY(0.6) scaleX(1.3) rotate(2deg); }
}

.flame-outer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 26px;
  background: radial-gradient(ellipse at 50% 80%, #ff9800 0%, #ff5722 40%, transparent 70%);
  border-radius: 50% 50% 20% 20%;
  animation: flameDance 0.3s ease-in-out infinite alternate;
}

.flame-inner {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 16px;
  background: radial-gradient(ellipse at 50% 80%, #fff 0%, #ffeb3b 50%, transparent 80%);
  border-radius: 50% 50% 20% 20%;
  z-index: 1;
}

@keyframes flameDance {
  0% { transform: translateX(-50%) scaleX(1) scaleY(1); }
  100% { transform: translateX(-50%) scaleX(0.85) scaleY(1.05); }
}

/* 提示文字 */
.tip {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  text-align: center;
  max-width: 300px;
  line-height: 1.6;
  transition: all 0.5s;
}

.tip.celebrating {
  color: #ffd93d;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 0 20px rgba(255, 217, 61, 0.5);
  animation: celebratePulse 1.5s ease-in-out infinite;
}

@keyframes celebratePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* 重新点燃按钮 */
.relight-btn {
  padding: 12px 32px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.4);
  transition: all 0.3s;
  animation: btnPulse 2s ease-in-out infinite;
}

.relight-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 107, 107, 0.6);
}

@keyframes btnPulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(255, 107, 107, 0.4); }
  50% { box-shadow: 0 4px 30px rgba(255, 107, 107, 0.7); }
}

/* 响应式 */
@media (max-width: 480px) {
  .top-layer { width: 110px; height: 32px; }
  .middle-layer { width: 135px; height: 40px; }
  .bottom-layer { width: 160px; height: 48px; }
  .cake-plate { width: 190px; height: 14px; }
  .candle { top: -44px; }
  .candle-body { width: 8px; height: 28px; }
  .flame { width: 14px; height: 22px; }
  .flame-outer { width: 14px; height: 22px; }
  .flame-inner { width: 8px; height: 14px; }
}
</style>
