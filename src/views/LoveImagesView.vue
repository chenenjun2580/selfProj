<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ========= 三张写死的图片，替换成你自己的图片路径 =========
const images = [
  { id: 1, src: 'https://i.imgs.ovh/2026/07/20/b66ae7a45e44a2c0e9371d3217826374.jpg', label: '永远 · 爱' },
  { id: 2, src: 'https://i.imgs.ovh/2026/07/20/3d4c836cbbae71ec4d08b2c4d21c7f2b.jpg', label: '宝宝 · 最爱' },
  { id: 3, src: 'https://i.imgs.ovh/2026/07/20/b860d76f7fd3ba5fb04280b7ff88d04d.jpg', label: '老婆 · 承诺' },
]

// 情话列表
const loveLines = [
  '遇见你，是我最美丽的意外',
  '世界很大，心却很小，只装得下你',
  '春风十里，不如你',
  '你是我的半截的诗，不许别人更改一个字',
  '一屋两人，三餐四季',
  '余生很长，请多指教',
  '星河滚烫，你是人间理想',
  '你一笑，我整颗心都化了',
  '想和你一起看每一天的日出日落',
  '执子之手，与子偕老',
  '愿你所求皆如愿，所行化坦途',
  '今晚月色真美，你也一样',
  '做我的猫，我养你呀',
  '你是我平淡生活里的璀璨星辰',
  '每次见到你，心跳都会漏一拍',
  '风吹起你的头发，也吹乱了我的心',
  '山有木兮木有枝，心悦君兮君不知',
  '有幸相遇，恰好合拍',
  '你是年少的欢喜，喜欢的少年是你',
  '世间美好与你环环相扣',
]
const currentLine = ref(0)
const pageReady = ref(false)

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
        v-for="n in 15"
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

    <!-- 内容区：品字形三图 -->
    <div class="content-area" :class="{ visible: pageReady }">
      <!-- 标题 -->
      <h1 class="title">💕 我爱你 冯若兮</h1>

      <!-- ====== 图1：上方大图（占位） ====== -->
      <div class="image-card image-main">
        <img :src="images[0].src" alt="主角图" class="love-img" />
        <div class="image-label">📸 {{ images[0].label }}</div>
      </div>

      <!-- ====== 图2 + 图3：下方并排 ====== -->
      <div class="image-row">
        <div class="image-card image-side">
          <img :src="images[1].src" alt="回忆图" class="love-img" />
          <div class="image-label">✨ {{ images[1].label }}</div>
        </div>
        <div class="image-card image-side">
          <img :src="images[2].src" alt="承诺图" class="love-img" />
          <div class="image-label">🌟 {{ images[2].label }}</div>
        </div>
      </div>

      <!-- 情话轮播 -->
      <Transition name="line-fade" mode="out-in">
        <p class="love-line" :key="currentLine">{{ loveLines[currentLine] }}</p>
      </Transition>
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
  max-width: 420px;
  padding: 100px 24px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.content-area.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 标题 */
.title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 32px;
  letter-spacing: 4px;
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

/* ====== 图片卡片通用 ====== */
.image-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid rgba(255, 180, 200, 0.25);
  box-shadow: 0 0 40px rgba(255, 100, 150, 0.12), 0 10px 30px rgba(0,0,0,0.3);
  transition: all 0.35s ease;
  width: 100%;
  /* 不再固定 aspect-ratio，让容器随图片自然撑高 */
}
.image-card:hover {
  border-color: rgba(255, 150, 200, 0.5);
  box-shadow: 0 0 60px rgba(255, 100, 150, 0.25), 0 14px 40px rgba(0,0,0,0.4);
  transform: translateY(-4px);
}
.love-img {
  width: 100%;
  height: auto;          /* 按原始比例自适应高度 */
  max-height: 70vh;      /* 防止图片过高超出屏幕 */
  display: block;
  object-fit: contain;   /* 完整显示不裁切，留黑边也比裁脸好 */
  background: rgba(0,0,0,0.15);
}
.image-label {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(8px);
  color: rgba(255,255,255,0.85);
  font-size: 13px;
  padding: 5px 16px;
  border-radius: 10px;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.image-card:hover .image-label {
  opacity: 0.7;
}

/* ====== 图1：上方大图 ====== */
.image-main {
  margin-bottom: 14px;
}

/* ====== 图2 + 图3：窄屏竖排，宽屏并排 ====== */
.image-row {
  display: flex;
  flex-direction: column;  /* 默认竖排，适合 9:16 照片 */
  gap: 14px;
  width: 100%;
}
.image-side {
  width: 100%;
}

/* 屏幕较宽时（平板/桌面），并排展示 */
@media (min-width: 500px) {
  .image-row {
    flex-direction: row;
  }
  .image-side {
    flex: 1;
    min-width: 0;
  }
  .image-side .love-img {
    max-height: 55vh;
  }
}

/* 情话轮播 */
.love-line {
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 200, 220, 0.9);
  text-align: center;
  margin-top: 32px;
  letter-spacing: 1px;
  line-height: 1.6;
  min-height: 30px;
}
.line-fade-enter-active,
.line-fade-leave-active {
  transition: all 0.5s ease;
}
.line-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.line-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
