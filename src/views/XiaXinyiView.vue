<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pageReady = ref(false)

// ========= 表白话语（自动轮播） =========
const loveLines = [
  '夏馨怡，遇见你，是我这辈子最美丽的意外',
  '世界很大，我的心却很小，只装得下你——夏馨怡',
  '春风十里，不如你。夏馨怡，我只喜欢你',
  '你是我的半截的诗，不许别人更改一个字',
  '一屋两人，三餐四季，余生只想和你',
  '夏馨怡，余生很长，请多指教',
  '星河滚烫，你是人间理想',
  '你一笑，我整颗心都化了',
  '想和你一起看每一天的日出日落',
  '执子之手，与子偕老，唯愿与你',
  '愿你所求皆如愿，所行化坦途',
  '今晚月色真美，夏馨怡，你也一样',
  '做我的猫，我养你呀',
  '你是我平淡生活里的璀璨星辰',
  '每次见到你，心跳都会漏一拍',
  '风吹起你的头发，也吹乱了我的心',
  '山有木兮木有枝，心悦君兮君不知',
  '有幸相遇，恰好合拍，满心满眼都是你',
  '你是年少的欢喜，喜欢的少年是你',
  '世间美好与你环环相扣',
  '夏馨怡，我想把所有温柔都给你',
  '有你的地方，就是我想去的远方',
  '你是我写不完的温柔，爱不尽的风景',
  '往后余生，风雪是你，平淡是你，清贫也是你',
  '夏馨怡，我喜欢你，比你想象中还要喜欢',
  '只要你在，我的世界就一直亮着',
  '愿我能护你周全，免你惊，免你苦',
  '遇见你之后，我的人生才算真正开始',
  '你眼里有星河，我心里有你',
  '夏馨怡，往后每一个日夜，我都想有你陪',
]
const currentLine = ref(0)

let lineTimer: ReturnType<typeof setInterval> | null = null

function goBack() {
  router.replace('/')
}

onMounted(() => {
  requestAnimationFrame(() => {
    pageReady.value = true
  })
  // 情话轮播
  lineTimer = setInterval(() => {
    currentLine.value = (currentLine.value + 1) % loveLines.length
  }, 4000)
})

onUnmounted(() => {
  if (lineTimer) clearInterval(lineTimer)
})
</script>

<template>
  <div class="love-page">
    <!-- 星空背景 -->
    <div class="stars-bg">
      <div class="stars-layer stars-1"></div>
      <div class="stars-layer stars-2"></div>
      <div class="stars-layer stars-3"></div>
    </div>

    <!-- 爱心飘浮粒子 -->
    <div class="floating-hearts">
      <span
        v-for="n in 20"
        :key="n"
        class="heart-particle"
        :style="{
          left: (Math.random() * 100) + '%',
          animationDelay: (Math.random() * 10) + 's',
          animationDuration: (8 + Math.random() * 10) + 's',
          fontSize: (12 + Math.random() * 22) + 'px',
          opacity: 0.15 + Math.random() * 0.25,
        }"
      >❤️</span>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" :class="{ visible: pageReady }" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 内容区 -->
    <div class="content-area" :class="{ visible: pageReady }">
      <!-- 主标题 -->
      <div class="title-wrap">
        <div class="deco-line"></div>
        <h1 class="title">致夏馨怡</h1>
        <div class="deco-line"></div>
      </div>
      <p class="subtitle">一份认真准备的心意</p>

      <!-- 情话轮播 -->
      <div class="line-stage">
        <Transition name="line-fade" mode="out-in">
          <p class="love-line" :key="currentLine">{{ loveLines[currentLine] }}</p>
        </Transition>
      </div>

      <!-- 轮播指示点 -->
      <div class="dots">
        <span
          v-for="(_, i) in loveLines"
          :key="i"
          class="dot"
          :class="{ active: i === currentLine }"
        ></span>
      </div>

      <!-- 结尾落款 -->
      <div class="signature">
        <span class="sign-heart">💗</span>
        <span class="sign-text">永远喜欢你的人</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.love-page {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: radial-gradient(ellipse at bottom, #1a0a2e 0%, #0d0618 40%, #05020a 100%);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
}

/* 星空背景 */
.stars-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.stars-layer {
  position: absolute;
  inset: 0;
}
.stars-1 {
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1.5px 1.5px at 15% 75%, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 45% 90%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.7), transparent);
  background-size: 200px 200px;
  animation: starsTwinkle 3s ease-in-out infinite alternate;
}
.stars-2 {
  background-image:
    radial-gradient(1px 1px at 20% 45%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1.5px 1.5px at 60% 25%, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.5), transparent);
  background-size: 300px 300px;
  animation: starsTwinkle 4s ease-in-out infinite alternate-reverse;
}
.stars-3 {
  background-image:
    radial-gradient(1px 1px at 25% 15%, rgba(255,255,255,0.9), transparent),
    radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1.5px 1.5px at 35% 55%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1px 1px at 65% 75%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 95% 20%, rgba(255,255,255,0.8), transparent);
  background-size: 250px 250px;
  animation: starsTwinkle 3.5s ease-in-out infinite alternate;
}
@keyframes starsTwinkle {
  0% { opacity: 0.6; }
  100% { opacity: 1; }
}

/* 爱心飘浮 */
.floating-hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.heart-particle {
  position: absolute;
  bottom: -40px;
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  z-index: 110;
  backdrop-filter: blur(12px);
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.back-btn.visible {
  opacity: 1;
  transform: translateX(0);
}
.back-btn:hover {
  background: rgba(255,255,255,0.12);
  color: #fff;
  border-color: rgba(255,255,255,0.25);
}

/* 内容区 */
.content-area {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 480px;
  padding: 110px 28px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.content-area.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 主标题 */
.title-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}
.deco-line {
  width: 46px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,150,200,0.7));
  border-radius: 2px;
}
.deco-line:last-child {
  background: linear-gradient(90deg, rgba(255,150,200,0.7), transparent);
}
.title {
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 6px;
  background: linear-gradient(135deg, #ff9a9e, #fbc2eb, #a18cd1, #ff9a9e);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleShine 3s ease infinite;
}
@keyframes titleShine {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.subtitle {
  font-size: 15px;
  color: rgba(255, 200, 220, 0.6);
  margin-top: 12px;
  letter-spacing: 3px;
}

/* 情话舞台 */
.line-stage {
  margin-top: 48px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.love-line {
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 225, 235, 0.95);
  letter-spacing: 1.5px;
  line-height: 1.8;
  text-shadow: 0 0 24px rgba(255, 120, 170, 0.35);
}
.line-fade-enter-active,
.line-fade-leave-active {
  transition: all 0.6s ease;
}
.line-fade-enter-from {
  opacity: 0;
  transform: translateY(18px) scale(0.96);
}
.line-fade-leave-to {
  opacity: 0;
  transform: translateY(-18px) scale(0.96);
}

/* 轮播指示点 */
.dots {
  display: flex;
  gap: 8px;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 380px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}
.dot.active {
  background: #ff6b9d;
  box-shadow: 0 0 10px rgba(255, 107, 157, 0.6);
  transform: scale(1.4);
}

/* 结尾落款 */
.signature {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: breathe 2.5s ease-in-out infinite;
}
.sign-heart {
  font-size: 34px;
  animation: heartBeat 1.2s ease-in-out infinite;
}
@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.25); }
  60% { transform: scale(1); }
}
@keyframes breathe {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
.sign-text {
  font-size: 16px;
  color: rgba(255, 200, 220, 0.7);
  letter-spacing: 4px;
}
</style>
