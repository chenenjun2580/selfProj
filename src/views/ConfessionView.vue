<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 阶段状态: initial | rejecting | celebrating
const phase = ref<'initial' | 'rejecting' | 'celebrating'>('initial')

// 逃跑按钮样式（初始为 static，逃跑时变为 fixed 定位）
const rejectBtnStyle = ref<Record<string, string>>({ position: 'static' })
const rejectHint = ref('')
const hintList = [
  '真的吗？再想想~',
  '你确定？💔',
  '不要这样嘛...',
  '给你一次反悔的机会！',
  '我的心要碎了 🥺',
  '再给你一次机会哦~',
  '你忍心吗？😢',
  '快说你喜欢我！',
]

// 庆祝弹窗列表
interface ConfettiCard {
  id: number
  emoji: string
  text: string
  x: number
  y: number
  rotate: number
  color: string
  delay: number
}
const confettiCards = ref<ConfettiCard[]>([])
let confettiTimer: ReturnType<typeof setInterval> | null = null
let confettiId = 0

// 祝福语批次
const blessings = [
  // 第一批 - 核心告白
  { emoji: '💕', text: '遇见你，是我最美丽的意外' },
  { emoji: '🌹', text: '你是我余生所有的欢喜' },
  { emoji: '✨', text: '星光不问赶路人，时光不负有心人' },
  { emoji: '💖', text: '世界很大，我的心却很小，只装得下你' },
  // 第二批 - 甜蜜祝福
  { emoji: '🎀', text: '愿你的每一天都如糖果般甜蜜' },
  { emoji: '🌸', text: '春风十里，不如你' },
  { emoji: '🌙', text: '今晚月色真美，你也一样' },
  { emoji: '🍀', text: '幸运是遇见你，幸福是拥有你' },
  // 第三批 - 浪漫承诺
  { emoji: '💍', text: '执子之手，与子偕老' },
  { emoji: '🏠', text: '一屋两人，三餐四季' },
  { emoji: '🎵', text: '你是我的单曲循环' },
  { emoji: '🌈', text: '风雨同舟，余生共度' },
  // 第四批 - 暖心祝福
  { emoji: '🔥', text: '愿你三冬暖，愿你春不寒' },
  { emoji: '⭐', text: '愿你天黑有灯，下雨有伞' },
  { emoji: '🎂', text: '愿你此生尽兴，赤诚善良' },
  { emoji: '💫', text: '愿你所求皆如愿，所行化坦途' },
  // 第五批 - 俏皮收尾
  { emoji: '🐱', text: '做我的猫，我养你呀' },
  { emoji: '🍭', text: '你是我的半截的诗，不许别人更改一个字' },
  { emoji: '🎈', text: '偷偷告诉你，我喜欢你很久了' },
  { emoji: '💌', text: '这是第520封情书，请查收' },
  // 第六批 - 甜蜜日常
  { emoji: '☀️', text: '早安晚安，都不如有你心安' },
  { emoji: '🍰', text: '想和你一起吃遍全世界的甜品' },
  { emoji: '📖', text: '你是我翻山越岭也要见到的人' },
  { emoji: '🎬', text: '我们的故事，未完待续' },
  // 第七批 - 心动瞬间
  { emoji: '💓', text: '每次见到你，心跳都会漏一拍' },
  { emoji: '🌅', text: '想和你看每一天的日出日落' },
  { emoji: '🎧', text: '耳机分你一半，心跳分你全部' },
  { emoji: '🌊', text: '对你的喜欢，像海一样深' },
  // 第八批 - 可爱告白
  { emoji: '🐰', text: '我可能是盐吃多了，不然怎么闲得老想你' },
  { emoji: '🧸', text: '你愿意做我的小熊软糖吗' },
  { emoji: '🦋', text: '你一笑，我整颗心都化了' },
  { emoji: '🌻', text: '做你的向日葵，永远朝着你的方向' },
  // 第九批 - 深情告白
  { emoji: '💎', text: '你是我平淡生活里的璀璨星辰' },
  { emoji: '🗝️', text: '你打开了我的心门，就别想走了' },
  { emoji: '🌌', text: '银河滚烫，你是人间理想' },
  { emoji: '🕯️', text: '你是灯火，照亮我的整个宇宙' },
  // 第十批 - 未来期许
  { emoji: '🚀', text: '想和你一起去探索整个世界' },
  { emoji: '📸', text: '往后余生，所有的风景都想和你分享' },
  { emoji: '🎪', text: '生活是一场马戏，有你才精彩' },
  { emoji: '🏰', text: '我会为你建一座城堡，里面装满爱' },
]

const cardColors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#F0B5D2', '#D4A5D4']

function getRandomColor() {
  return cardColors[Math.floor(Math.random() * cardColors.length)]
}

// 点击"我也喜欢你"
function onAccept() {
  phase.value = 'celebrating'
  // 移除逃跑阶段的拦截
  removeBlockers()
  startConfetti()
}

// 点击"我不喜欢你" / 鼠标移入
function onRejectHover() {
  if (phase.value !== 'initial' && phase.value !== 'rejecting') return

  phase.value = 'rejecting'

  const vw = window.innerWidth
  const vh = window.innerHeight
  const btnW = 200
  const btnH = 52

  const maxX = vw - btnW - 40
  const maxY = vh - btnH - 40

  const x = 20 + Math.random() * maxX
  const y = 20 + Math.random() * maxY

  rejectBtnStyle.value = {
    position: 'fixed',
    left: x + 'px',
    top: y + 'px',
    transform: 'none',
  }

  rejectHint.value = hintList[Math.floor(Math.random() * hintList.length)]
}

// 阻止退出
function blockBack(e: PopStateEvent) {
  e.preventDefault()
  history.pushState(null, '', window.location.href)
}

function blockBeforeUnload(e: BeforeUnloadEvent) {
  e.preventDefault()
  e.returnValue = ''
  return ''
}

function addBlockers() {
  history.pushState(null, '', window.location.href)
  window.addEventListener('popstate', blockBack)
  window.addEventListener('beforeunload', blockBeforeUnload)
}

function removeBlockers() {
  window.removeEventListener('popstate', blockBack)
  window.removeEventListener('beforeunload', blockBeforeUnload)
}

// 庆祝弹窗
function startConfetti() {
  let batchIndex = 0
  const batchSize = 2

  function spawnBatch() {
    if (batchIndex >= blessings.length) {
      if (confettiTimer) clearInterval(confettiTimer)
      confettiTimer = null
      return
    }

    const end = Math.min(batchIndex + batchSize, blessings.length)
    for (let i = batchIndex; i < end; i++) {
      const blessing = blessings[i]
      const card: ConfettiCard = {
        id: confettiId++,
        emoji: blessing.emoji,
        text: blessing.text,
        x: 20 + Math.random() * 60, // 百分比位置
        y: 15 + Math.random() * 70,
        rotate: (Math.random() - 0.5) * 30,
        color: getRandomColor(),
        delay: Math.random() * 0.3,
      }
      confettiCards.value.push(card)
    }
    batchIndex = end
  }

  // 立即出第一批
  spawnBatch()
  confettiTimer = setInterval(spawnBatch, 500)
}

function dismissCard(id: number) {
  confettiCards.value = confettiCards.value.filter(c => c.id !== id)
}

function goHome() {
  removeBlockers()
  if (confettiTimer) clearInterval(confettiTimer)
  router.replace('/')
}

onMounted(() => {
  // 初始阶段就设置拦截（逃跑阶段才真正激活）
  addBlockers()
})

onUnmounted(() => {
  removeBlockers()
  if (confettiTimer) clearInterval(confettiTimer)
})
</script>

<template>
  <div class="confession-page">
    <!-- 星空背景 -->
    <div class="stars-bg">
      <div class="stars-layer stars-1"></div>
      <div class="stars-layer stars-2"></div>
      <div class="stars-layer stars-3"></div>
    </div>

    <!-- 粒子飘浮 -->
    <div class="floating-particles">
      <span v-for="n in 20" :key="n" class="particle" :style="{
        left: (Math.random() * 100) + '%',
        animationDelay: (Math.random() * 8) + 's',
        animationDuration: (6 + Math.random() * 8) + 's',
        fontSize: (10 + Math.random() * 20) + 'px',
        opacity: 0.15 + Math.random() * 0.3,
      }">❤️</span>
    </div>

    <!-- 初始弹窗 -->
    <Transition name="modal-fade">
      <div v-if="phase === 'initial' || phase === 'rejecting'" class="modal-overlay">
        <div class="confession-modal">
          <div class="modal-emoji">💗</div>
          <h2 class="modal-title">我喜欢你</h2>
          <p class="modal-subtitle" v-if="phase === 'rejecting' && rejectHint">{{ rejectHint }}</p>
          <div class="modal-actions">
            <button class="btn-accept" @click="onAccept">
              <span>💕</span> 我也喜欢你
            </button>
            <button
              class="btn-reject"
              :style="rejectBtnStyle"
              @click.prevent="onRejectHover"
              @mouseenter="onRejectHover"
              @touchstart.prevent="onRejectHover"
            >
              <span>😢</span> 我不喜欢你
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 庆祝阶段 - 满屏弹窗 -->
    <div v-if="phase === 'celebrating'" class="celebrate-stage">
      <TransitionGroup name="confetti-pop">
        <div
          v-for="card in confettiCards"
          :key="card.id"
          class="confetti-card"
          :style="{
            left: card.x + '%',
            top: card.y + '%',
            transform: `translate(-50%, -50%) rotate(${card.rotate}deg)`,
            '--card-color': card.color,
            animationDelay: card.delay + 's',
          }"
          @click="dismissCard(card.id)"
        >
          <span class="card-emoji">{{ card.emoji }}</span>
          <p class="card-text">{{ card.text }}</p>
        </div>
      </TransitionGroup>

      <!-- 返回按钮 -->
      <button class="home-btn" @click="goHome">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        <span>返回首页</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.confession-page {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: radial-gradient(ellipse at bottom, #1a0a2e 0%, #0d0618 40%, #05020a 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 星空背景 */
.stars-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.stars-layer {
  position: absolute;
  inset: 0;
  background: transparent;
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
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1.5px 1.5px at 5% 35%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1px 1px at 55% 85%, rgba(255,255,255,0.6), transparent);
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

/* 飘浮粒子 */
.floating-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.particle {
  position: absolute;
  bottom: -40px;
  animation: floatUp linear infinite;
}
@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* 弹窗遮罩 */
.modal-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(4px);
}

/* 告白弹窗 */
.confession-modal {
  background: rgba(30, 15, 60, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 150, 200, 0.3);
  border-radius: 28px;
  padding: 48px 44px 40px;
  text-align: center;
  box-shadow:
    0 0 80px rgba(255, 100, 150, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.4);
  max-width: 420px;
  width: 90%;
}

.modal-emoji {
  font-size: 64px;
  animation: heartBeat 1.2s ease-in-out infinite;
  margin-bottom: 16px;
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.25); }
  30% { transform: scale(1); }
  45% { transform: scale(1.2); }
  60% { transform: scale(1); }
}

.modal-title {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-subtitle {
  font-size: 16px;
  color: rgba(255, 200, 220, 0.85);
  margin-bottom: 8px;
  min-height: 24px;
  transition: all 0.3s ease;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 28px;
  align-items: center;
  position: relative;
  min-height: 160px;
  justify-content: center;
}

/* 接受按钮 */
.btn-accept {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 200px;
  padding: 14px 24px;
  border: none;
  border-radius: 16px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(135deg, #ff6b9d, #c94b8c);
  box-shadow: 0 4px 20px rgba(255, 107, 157, 0.4);
  transition: all 0.3s ease;
}
.btn-accept:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(255, 107, 157, 0.6);
}
.btn-accept:active {
  transform: scale(0.97);
}

/* 拒绝按钮 - 会逃跑 */
.btn-reject {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 200px;
  padding: 14px 24px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 20;
  /* 逃跑时用绝对定位，初始时在正常流中 */
  position: static;
}
.btn-reject:hover {
  border-color: rgba(255, 255, 255, 0.35);
  color: rgba(255, 255, 255, 0.9);
}

/* 弹窗过渡 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.modal-fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

/* 庆祝阶段 */
.celebrate-stage {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}

/* 祝福卡片 */
.confetti-card {
  position: absolute;
  background: rgba(20, 10, 40, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid var(--card-color);
  border-radius: 18px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 140px;
  max-width: 200px;
  pointer-events: auto;
  cursor: pointer;
  box-shadow:
    0 0 30px rgba(255, 150, 200, 0.15),
    0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.confetti-card:hover {
  transform: translate(-50%, -50%) rotate(0deg) scale(1.08) !important;
  box-shadow:
    0 0 50px rgba(255, 150, 200, 0.35),
    0 12px 32px rgba(0, 0, 0, 0.4);
}
.confetti-card:active {
  transform: translate(-50%, -50%) rotate(0deg) scale(0.9) !important;
}

.card-emoji {
  font-size: 32px;
  line-height: 1;
}
.card-text {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 1.4;
  margin: 0;
}

/* 弹窗入场动画 */
.confetti-pop-enter-active {
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.confetti-pop-leave-active {
  transition: all 0.35s ease;
}
.confetti-pop-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(20deg) scale(0.3) !important;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(0deg) scale(0);
  }
  70% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rotate, 0deg)) scale(1.08);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rotate, 0deg)) scale(1);
  }
}

/* 返回首页按钮 */
.home-btn {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  padding: 12px 28px;
  border-radius: 14px;
  font-size: 15px;
  cursor: pointer;
  z-index: 30;
  pointer-events: auto;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease both;
}
.home-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
