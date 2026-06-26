<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 祝福卡片池
const blessingCards = [
  { emoji: '🎂', title: '生日快乐', desc: '愿你的每一天都如蛋糕般甜蜜，每一岁都闪耀光芒！', color: '#FFD166' },
  { emoji: '🌟', title: '前程似锦', desc: '愿你像星星一样，在属于自己的轨道上闪闪发光。', color: '#FFB347' },
  { emoji: '💖', title: '永远被爱', desc: '无论走到哪里，都有人爱你，有人懂你，有人陪你。', color: '#FF9AA2' },
  { emoji: '🎉', title: '天天开心', desc: '希望你的笑容比今天的烟花还灿烂！', color: '#FF6B6B' },
  { emoji: '🍀', title: '好运连连', desc: '幸运之神永远站在你这边，好事接二连三！', color: '#4ECDC4' },
  { emoji: '🌈', title: '梦想成真', desc: '所有美好的愿望，都会在合适的时机一一实现。', color: '#A78BFA' },
  { emoji: '🦋', title: '自由飞翔', desc: '愿你拥有破茧成蝶的勇气，飞向更广阔的天空。', color: '#60A5FA' },
  { emoji: '🌻', title: '向阳而生', desc: '做一朵向日葵，永远面朝阳光，把阴影甩在身后。', color: '#FBBF24' },
  { emoji: '🏆', title: '万事胜意', desc: '愿你所有的努力都不被辜负，所有的期待都如约而至。', color: '#F59E0B' },
  { emoji: '💎', title: '独一无二', desc: '你是这世界上独一无二的宝藏，请永远珍视自己。', color: '#8B5CF6' },
  { emoji: '🎀', title: '美好永驻', desc: '愿美好的事物永远围绕着你，像礼物上的蝴蝶结一样精致。', color: '#F472B6' },
  { emoji: '✨', title: '光芒万丈', desc: '你的存在本身就是一束光，照亮自己也温暖他人。', color: '#FACC15' },
]

// 状态
const stage = ref<'idle' | 'opening' | 'revealed'>('idle')
const currentCard = ref<typeof blessingCards[number] | null>(null)
const shakeBox = ref(false)
const lidOpen = ref(false)
const showSparkles = ref(false)

function openGift() {
  if (stage.value !== 'idle') return

  stage.value = 'opening'
  shakeBox.value = true

  // 震动一会儿后开盖
  setTimeout(() => {
    shakeBox.value = false
    lidOpen.value = true
    showSparkles.value = true

    // 随机选择一张祝福卡片
    const randomIndex = Math.floor(Math.random() * blessingCards.length)
    currentCard.value = blessingCards[randomIndex]
  }, 800)

  // 卡片弹出
  setTimeout(() => {
    stage.value = 'revealed'
  }, 1400)
}

function tryAgain() {
  stage.value = 'idle'
  lidOpen.value = false
  showSparkles.value = false
  currentCard.value = null
}

function goBack() {
  router.replace('/')
}
</script>

<template>
  <div class="gift-page" @click="stage === 'revealed' && tryAgain()">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <!-- 飘落的装饰 -->
      <div
        class="floating-item"
        v-for="i in 15"
        :key="i"
        :style="{
          left: Math.random() * 100 + '%',
          animationDelay: Math.random() * 8 + 's',
          animationDuration: (8 + Math.random() * 10) + 's',
          fontSize: (12 + Math.random() * 20) + 'px',
          opacity: 0.3 + Math.random() * 0.3,
        }"
      >{{ ['🎀','🎁','💝','🎈','🎊','🌟'][i % 6] }}</div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 主内容 -->
    <div class="main-content" @click.stop>
      <!-- 提示文字 -->
      <p v-if="stage === 'idle'" class="hint-text">🎀 点击礼物盒拆开惊喜 🎀</p>

      <!-- 礼物盒区域 -->
      <div class="gift-container" @click.stop="stage === 'idle' ? openGift() : (stage === 'revealed' ? tryAgain() : null)" :class="{ clickable: stage === 'idle' || stage === 'revealed' }">
        <!-- 盒子主体 -->
        <div class="gift-box" :class="{ shake: shakeBox }">
          <!-- 盒盖 -->
          <div class="box-lid" :class="{ open: lidOpen }">
            <div class="lid-top"></div>
            <div class="lid-front"></div>
            <div class="bow">
              <div class="bow-loop left"></div>
              <div class="bow-loop right"></div>
              <div class="bow-center"></div>
              <div class="bow-tail left"></div>
              <div class="bow-tail right"></div>
            </div>
          </div>
          <!-- 盒身 -->
          <div class="box-body">
            <div class="box-ribbon-v"></div>
            <div class="box-ribbon-h"></div>
          </div>
        </div>

        <!-- 弹出卡片 - 覆盖在礼物盒上 -->
        <Transition name="card-pop">
          <div
            v-if="stage === 'revealed' && currentCard"
            class="blessing-card"
            :style="{ '--card-color': currentCard.color }"
            @click.stop
          >
            <div class="card-tape"></div>
            <div class="card-emoji">{{ currentCard.emoji }}</div>
            <div class="card-title">{{ currentCard.title }}</div>
            <div class="card-desc">{{ currentCard.desc }}</div>
            <p class="card-hint">点击空白处再拆一次</p>
          </div>
        </Transition>

        <!-- 星星特效 -->
        <Transition name="sparkle-fade">
          <div v-if="showSparkles" class="sparkles">
            <span
              v-for="i in 12"
              :key="i"
              class="sparkle-star"
              :style="{
                left: (10 + Math.random() * 80) + '%',
                top: (10 + Math.random() * 80) + '%',
                animationDelay: Math.random() * 0.8 + 's',
                fontSize: (14 + Math.random() * 16) + 'px',
              }"
            >✨</span>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gift-page {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
}

/* 背景 */
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 30%, #2d1b4e 0%, #1a1a2e 40%, #0f0f23 100%);
}

.floating-item {
  position: absolute;
  top: -40px;
  animation: floatDown linear infinite;
  pointer-events: none;
}

@keyframes floatDown {
  0% {
    transform: translateY(-40px) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
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
.main-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.hint-text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  letter-spacing: 2px;
  animation: hintPulse 2s ease-in-out infinite;
}

.hint-text.secondary {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  animation: none;
}

/* 卡片提示 */
.card-hint {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 4px;
}

@keyframes hintPulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

/* 礼物容器 */
.gift-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.gift-container.clickable {
  cursor: pointer;
}

/* 礼物盒 */
.gift-box {
  position: relative;
  width: 180px;
  height: 180px;
  transition: transform 0.3s ease;
}

.gift-container.clickable:hover .gift-box {
  transform: scale(1.05);
}

.gift-box.shake {
  animation: boxShake 0.8s ease;
}

@keyframes boxShake {
  0%, 100% { transform: translateX(0) rotate(0); }
  15% { transform: translateX(-8px) rotate(-3deg); }
  30% { transform: translateX(8px) rotate(3deg); }
  45% { transform: translateX(-6px) rotate(-2deg); }
  60% { transform: translateX(6px) rotate(2deg); }
  75% { transform: translateX(-3px) rotate(-1deg); }
  90% { transform: translateX(3px) rotate(1deg); }
}

/* 盒盖 */
.box-lid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 3;
  transform-origin: left bottom;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.box-lid.open {
  transform: rotate(-25deg) translate(-10px, -20px);
}

.lid-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(180deg, #ff6b6b, #ee5a5a);
  border-radius: 8px 8px 0 0;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
}

.lid-front {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, #ff5252, #e04848);
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

/* 蝴蝶结 */
.bow {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

.bow-loop {
  position: absolute;
  width: 28px;
  height: 20px;
  background: #ffd166;
  border-radius: 50%;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

.bow-loop.left {
  left: -26px;
  top: 0;
  transform: rotate(-20deg);
}

.bow-loop.right {
  left: -2px;
  top: 0;
  transform: rotate(20deg);
}

.bow-center {
  position: absolute;
  left: -8px;
  top: 6px;
  width: 16px;
  height: 12px;
  background: #ffd166;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.bow-tail {
  position: absolute;
  width: 4px;
  height: 22px;
  background: #ffd166;
  border-radius: 0 0 2px 2px;
  top: 14px;
}

.bow-tail.left {
  left: -4px;
  transform: rotate(15deg);
}

.bow-tail.right {
  left: 0px;
  transform: rotate(-15deg);
}

/* 盒身 */
.box-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, #ff6b6b 0%, #ff5252 50%, #ee4a4a 100%);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(255, 82, 82, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.15);
  z-index: 2;
}

.box-ribbon-v {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 100%;
  background: linear-gradient(180deg, #ffd166, #ffc233);
  box-shadow: inset 2px 0 4px rgba(255, 255, 255, 0.2), inset -2px 0 4px rgba(0, 0, 0, 0.1);
}

.box-ribbon-h {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #ffd166, #ffc233);
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

/* 祝福卡片 - 绝对定位覆盖在礼物盒上方 */
.blessing-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  padding: 28px 24px 24px;
  background: var(--card-color);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(168, 133, 247, 0.15);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 10;
  cursor: default;
}

.card-tape {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 18px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 8px 8px;
}

.card-emoji {
  font-size: 52px;
  animation: cardEmojiBounce 0.8s ease-out;
}

@keyframes cardEmojiBounce {
  0% { transform: scale(0) rotate(-30deg); }
  60% { transform: scale(1.2) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.card-title {
  font-size: 22px;
  font-weight: 900;
  color: #333;
  letter-spacing: 3px;
}

.card-desc {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  font-weight: 500;
}

/* 星星特效 */
.sparkles {
  position: absolute;
  inset: -60px;
  pointer-events: none;
  z-index: 5;
}

.sparkle-star {
  position: absolute;
  animation: sparklePop 1s ease-out forwards;
}

@keyframes sparklePop {
  0% {
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) translateY(-10px);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translateY(-30px);
  }
}

/* 过渡动画 */
.card-pop-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-pop-leave-active {
  transition: all 0.3s ease;
}

.card-pop-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) translateY(60px) scale(0.5);
}

.card-pop-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) translateY(-30px) scale(0.8);
}

.sparkle-fade-enter-active {
  transition: opacity 0.3s ease;
}

.sparkle-fade-leave-active {
  transition: opacity 0.5s ease;
}

.sparkle-fade-enter-from,
.sparkle-fade-leave-to {
  opacity: 0;
}

/* 响应式 */
@media (max-width: 480px) {
  .gift-box {
    width: 150px;
    height: 150px;
  }

  .box-lid {
    height: 58px;
  }

  .lid-top {
    height: 24px;
  }

  .lid-front {
    height: 34px;
    top: 24px;
  }

  .box-body {
    height: 100px;
  }

  .blessing-card {
    width: 240px;
    padding: 24px 20px 20px;
  }

  .card-emoji {
    font-size: 42px;
  }

  .card-title {
    font-size: 18px;
  }

  .card-desc {
    font-size: 14px;
  }
}
</style>
