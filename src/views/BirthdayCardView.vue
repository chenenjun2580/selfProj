<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isFlipped = ref(false)
const isAnimating = ref(false)
const showSparkles = ref(false)
const cardOpened = ref(false)

// 贺卡内页的祝福语
const blessings = [
  '愿你的每一天都如阳光般灿烂',
  '愿所有美好如期而至',
  '愿你被世界温柔以待',
  '愿你眼里有星辰，心中有山海',
  '愿你所求皆如愿，所行皆坦途',
  '愿你笑靥如花，一生不减芳华',
  '愿你历尽千帆，归来仍是少年',
  '愿你前程似锦，未来可期',
  '愿岁岁常欢愉，年年皆胜意',
  '愿时光能缓，故人不散',
]

const currentBlessing = ref('')

// 闪烁小点
const sparkleDots = ref<Array<{
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
}>>([])

const colors = ['#FFD700', '#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77', '#FF5E9C', '#FFB347']

function flipCard() {
  if (isAnimating.value) return
  isAnimating.value = true
  isFlipped.value = !isFlipped.value

  if (isFlipped.value) {
    // 翻开
    setTimeout(() => {
      cardOpened.value = true
      currentBlessing.value = blessings[Math.floor(Math.random() * blessings.length)]
      generateSparkles()
      showSparkles.value = true
      isAnimating.value = false
    }, 600)
  } else {
    // 合上
    showSparkles.value = false
    cardOpened.value = false
    setTimeout(() => {
      isAnimating.value = false
    }, 600)
  }
}

function generateSparkles() {
  const dots: typeof sparkleDots.value = []
  for (let i = 0; i < 25; i++) {
    dots.push({
      id: i,
      x: 15 + Math.random() * 70,
      y: 10 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 3 + Math.random() * 6,
      delay: Math.random() * 1.5,
    })
  }
  sparkleDots.value = dots
}

function goBack() {
  router.replace('/')
}

onMounted(() => {
  // 入场微动画
  setTimeout(() => {
    // 页面已就绪
  }, 300)
})
</script>

<template>
  <div class="card-page">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <!-- 漂浮装饰 -->
      <div class="floating-decor decor-1">🎈</div>
      <div class="floating-decor decor-2">🎀</div>
      <div class="floating-decor decor-3">⭐</div>
      <div class="floating-decor decor-4">🎁</div>
      <div class="floating-decor decor-5">🌟</div>
      <div class="floating-decor decor-6">💝</div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 提示文字 -->
    <p class="hint-text">{{ isFlipped ? '点击贺卡合上 📬' : '点击贺卡翻开 💌' }}</p>

    <!-- 贺卡容器 -->
    <div class="card-wrapper" @click="flipCard">
      <div class="card-3d" :class="{ flipped: isFlipped }">
        <!-- 正面（封面） -->
        <div class="card-face card-front">
          <div class="front-pattern"></div>
          <div class="front-content">
            <div class="front-emoji">💌</div>
            <h2 class="front-title">生日贺卡</h2>
            <div class="front-subtitle">Happy Birthday</div>
            <div class="front-ribbon">
              <div class="ribbon-left"></div>
              <div class="ribbon-center">🎂</div>
              <div class="ribbon-right"></div>
            </div>
            <p class="front-tip">点击翻开 →</p>
          </div>
        </div>

        <!-- 背面（内页） -->
        <div class="card-face card-back">
          <div class="back-content">
            <div class="back-header">
              <span class="back-emoji">🎉</span>
              <span class="back-title">生日快乐</span>
              <span class="back-emoji">🎉</span>
            </div>
            <div class="back-divider"></div>
            <div class="back-blessing" :class="{ show: cardOpened }">
              {{ currentBlessing }}
            </div>
            <div class="back-divider"></div>
            <p class="back-footer">
              愿你每一天<br/>都充满欢笑与幸福
            </p>
            <div class="back-signature">💗 来自你的好友</div>
          </div>
          <!-- 内页装饰 -->
          <div class="back-corner-tl"></div>
          <div class="back-corner-tr"></div>
          <div class="back-corner-bl"></div>
          <div class="back-corner-br"></div>
        </div>
      </div>
    </div>

    <!-- 闪烁光点（翻开后出现） -->
    <div
      v-for="dot in sparkleDots"
      v-show="showSparkles"
      :key="dot.id"
      class="sparkle-dot"
      :style="{
        left: dot.x + '%',
        top: dot.y + '%',
        width: dot.size + 'px',
        height: dot.size + 'px',
        backgroundColor: dot.color,
        animationDelay: dot.delay + 's',
      }"
    ></div>
  </div>
</template>

<style scoped>
.card-page {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
  user-select: none;
  -webkit-user-select: none;
}

/* 背景 */
.bg-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 40%, #2d1b4e 0%, #1a0f30 40%, #0a0518 100%);
}

/* 漂浮装饰 */
.floating-decor {
  position: absolute;
  font-size: 28px;
  opacity: 0.3;
  pointer-events: none;
  animation: floatAround 6s ease-in-out infinite;
}

.decor-1 { top: 8%; left: 10%; animation-delay: 0s; }
.decor-2 { top: 12%; right: 12%; animation-delay: 1s; font-size: 24px; }
.decor-3 { top: 35%; left: 6%; animation-delay: 2s; font-size: 22px; }
.decor-4 { bottom: 20%; right: 8%; animation-delay: 0.5s; }
.decor-5 { bottom: 30%; left: 12%; animation-delay: 1.5s; font-size: 24px; }
.decor-6 { top: 55%; right: 5%; animation-delay: 2.5s; }

@keyframes floatAround {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.25; }
  50% { transform: translateY(-20px) rotate(15deg); opacity: 0.4; }
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

/* 提示文字 */
.hint-text {
  position: relative;
  z-index: 10;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-bottom: 20px;
  animation: hintPulse 2s ease-in-out infinite;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* 3D 翻卡容器 */
.card-wrapper {
  position: relative;
  z-index: 10;
  perspective: 1200px;
  cursor: pointer;
  transition: transform 0.3s;
}

.card-wrapper:hover {
  transform: translateY(-4px);
}

.card-3d {
  position: relative;
  width: 320px;
  height: 420px;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-3d.flipped {
  transform: rotateY(180deg);
}

/* 卡面通用 */
.card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

/* === 正面（封面） === */
.card-front {
  background: linear-gradient(145deg, #ff9a9e 0%, #fecfef 30%, #fad0c4 60%, #ffd1ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.front-pattern {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%);
  pointer-events: none;
}

.front-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.front-emoji {
  font-size: 64px;
  animation: emojiBounce 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

@keyframes emojiBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.front-title {
  font-size: 32px;
  font-weight: bold;
  color: #5c2d6e;
  text-shadow: 0 2px 4px rgba(255,255,255,0.5);
  letter-spacing: 4px;
}

.front-subtitle {
  font-size: 14px;
  color: #8b5e9e;
  letter-spacing: 6px;
  text-transform: uppercase;
}

.front-ribbon {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.ribbon-left,
.ribbon-right {
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff8a94);
  border-radius: 2px;
}

.ribbon-right {
  background: linear-gradient(90deg, #ff8a94, transparent);
}

.ribbon-center {
  font-size: 24px;
}

.front-tip {
  margin-top: 16px;
  font-size: 13px;
  color: rgba(92, 45, 110, 0.6);
  animation: tipBlink 2s ease-in-out infinite;
}

@keyframes tipBlink {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* === 背面（内页） === */
.card-back {
  background: linear-gradient(145deg, #fff8f0 0%, #fff0f5 30%, #fdf5e6 60%, #fff0f5 100%);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.back-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  width: 100%;
}

.back-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.back-emoji {
  font-size: 28px;
}

.back-title {
  font-size: 26px;
  font-weight: bold;
  color: #d4587c;
  letter-spacing: 3px;
}

.back-divider {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #e8b4c8, transparent);
}

.back-blessing {
  font-size: 18px;
  color: #6b3a5a;
  line-height: 1.8;
  padding: 10px 20px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  opacity: 0;
  transform: translateY(10px);
}

.back-blessing.show {
  opacity: 1;
  transform: translateY(0);
}

.back-footer {
  font-size: 14px;
  color: #a08090;
  line-height: 1.8;
}

.back-signature {
  font-size: 13px;
  color: #d4587c;
  font-style: italic;
}

/* 内页角花 */
.back-corner-tl,
.back-corner-tr,
.back-corner-bl,
.back-corner-br {
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: #e8b4c8;
  border-style: solid;
  pointer-events: none;
}

.back-corner-tl { top: 15px; left: 15px; border-width: 2px 0 0 2px; border-radius: 8px 0 0 0; }
.back-corner-tr { top: 15px; right: 15px; border-width: 2px 2px 0 0; border-radius: 0 8px 0 0; }
.back-corner-bl { bottom: 15px; left: 15px; border-width: 0 0 2px 2px; border-radius: 0 0 0 8px; }
.back-corner-br { bottom: 15px; right: 15px; border-width: 0 2px 2px 0; border-radius: 0 0 8px 0; }

/* 闪烁光点 */
.sparkle-dot {
  position: absolute;
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;
  animation: sparkleIn 0.6s ease-out forwards, sparkleFloat 2s ease-in-out infinite;
  opacity: 0;
}

@keyframes sparkleIn {
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes sparkleFloat {
  0%, 100% { opacity: 0.4; transform: scale(1) translateY(0); }
  50% { opacity: 0.9; transform: scale(1.5) translateY(-8px); }
}

/* 响应式 */
@media (max-width: 480px) {
  .card-3d {
    width: 280px;
    height: 370px;
  }
  .front-title { font-size: 26px; }
  .front-emoji { font-size: 52px; }
  .back-title { font-size: 22px; }
  .back-blessing { font-size: 16px; }
}
</style>
