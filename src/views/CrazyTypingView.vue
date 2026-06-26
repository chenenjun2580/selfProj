<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const messages = ref<{ id: number; text: string; x: number; y: number; rotation: number; size: number; color: string; opacity: number }[]>([])
const longPressProgress = ref(0)
const isClosing = ref(false)
let msgId = 0
let spawnInterval: ReturnType<typeof setInterval> | null = null
let shakeInterval: ReturnType<typeof setInterval> | null = null
let longPressTimer: ReturnType<typeof setInterval> | null = null
const crazyTexts = [
  '啊啊啊啊啊啊啊！！！',
  '精神状态良好😇',
  '不想活了',
  '哈哈哈哈哈哈',
  '创飞全世界！！！',
  '发疯中...',
  '毁灭吧',
  '平等地恨所有人',
  '精神状态不太稳定',
  '扭曲爬行',
  '阴暗地蠕动',
  '发烂发臭！',
  '彻底疯狂！！！',
  '一拳打爆地球',
  '发疯自由',
  '破防了',
  '啊啊啊啊！',
  '彻底疯狂',
  '世界爆炸吧',
  '疯掉了',
  '创飞地球！',
  '阴暗爬行',
  '精神失控',
  '我不活了',
  '毁灭吧世界',
  '疯了疯了',
  '彻底疯狂',
  '抓狂中...',
  '发疯.jpg',
  '当场发疯',
  '扭曲尖叫',
  '彻底疯狂中',
  '发癫',
  '扭曲蠕动',
  '发烂发臭',
  '阴暗地爬行',
  '精神崩溃',
  '发疯！！！',
  '精神状态：疯',
  '发疯文学.jpg',
  '彻底疯狂啊啊',
  '疯狂打滚',
  '发疯日常',
  '精神状态：癫',
  '扭曲发疯中',
]

const crazyColors = [
  '#FF1744', '#FF6D00', '#FFD600', '#00E676',
  '#00B0FF', '#D500F9', '#FF4081', '#FF3D00',
  '#76FF03', '#FFEA00', '#E040FB', '#18FFFF',
]

const crazyEmojis = ['😇', '🤯', '😤', '💥', '🔥', '😱', '💀', '🤪', '😈', '👿', '🥴', '😵', '💢', '😡', '🤬']

function spawnMessage() {
  const text = crazyTexts[Math.floor(Math.random() * crazyTexts.length)]
  const hasEmoji = Math.random() > 0.5
  const finalText = hasEmoji
    ? crazyEmojis[Math.floor(Math.random() * crazyEmojis.length)] + ' ' + text + ' ' + crazyEmojis[Math.floor(Math.random() * crazyEmojis.length)]
    : text

  messages.value.push({
    id: ++msgId,
    text: finalText,
    x: Math.random() * 80 + 5,
    y: Math.random() * 70 + 5,
    rotation: (Math.random() - 0.5) * 30,
    size: 14 + Math.random() * 24,
    color: crazyColors[Math.floor(Math.random() * crazyColors.length)],
    opacity: 0.85 + Math.random() * 0.15,
  })

  // 保持最多50条消息
  if (messages.value.length > 50) {
    messages.value = messages.value.slice(-50)
  }
}

function startLongPress() {
  if (isClosing.value) return
  longPressProgress.value = 0

  longPressTimer = setInterval(() => {
    longPressProgress.value += 100 / 60 // 3秒 ≈ 60帧*50ms
    if (longPressProgress.value >= 100) {
      longPressProgress.value = 100
      closeCrazy()
    }
  }, 50)
}

function cancelLongPress() {
  if (longPressTimer) {
    clearInterval(longPressTimer)
    longPressTimer = null
  }
  longPressProgress.value = 0
}

function closeCrazy() {
  cancelLongPress()
  isClosing.value = true
  if (spawnInterval) clearInterval(spawnInterval)
  if (shakeInterval) clearInterval(shakeInterval)

  setTimeout(() => {
    messages.value = []
    setTimeout(() => {
      router.replace('/')
    }, 400)
  }, 600)
}

onMounted(() => {
  // 初始爆发
  for (let i = 0; i < 15; i++) {
    setTimeout(() => spawnMessage(), i * 60)
  }

  // 持续生成
  spawnInterval = setInterval(() => {
    // 随机1-3条
    const count = 1 + Math.floor(Math.random() * 3)
    for (let i = 0; i < count; i++) {
      spawnMessage()
    }
  }, 400)

  // 屏幕抖动
  shakeInterval = setInterval(() => {
    const el = document.querySelector('.crazy-page') as HTMLElement
    if (el && !isClosing.value) {
      const sx = (Math.random() - 0.5) * 4
      const sy = (Math.random() - 0.5) * 4
      el.style.transform = `translate(${sx}px, ${sy}px)`
      setTimeout(() => {
        if (el) el.style.transform = 'translate(0, 0)'
      }, 80)
    }
  }, 200)
})

onUnmounted(() => {
  cancelLongPress()
  if (spawnInterval) clearInterval(spawnInterval)
  if (shakeInterval) clearInterval(shakeInterval)
})
</script>

<template>
  <div class="crazy-page" :class="{ closing: isClosing }">
    <!-- 疯狂文字 -->
    <TransitionGroup name="msg">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="crazy-msg"
        :style="{
          left: msg.x + '%',
          top: msg.y + '%',
          transform: `translate(-50%, -50%) rotate(${msg.rotation}deg)`,
          fontSize: msg.size + 'px',
          color: msg.color,
          opacity: msg.opacity,
        }"
      >
        {{ msg.text }}
      </div>
    </TransitionGroup>

    <!-- 长按关闭区域 -->
    <div
      v-if="!isClosing"
      class="close-zone"
      @mousedown.prevent="startLongPress"
      @mouseup.prevent="cancelLongPress"
      @mouseleave.prevent="cancelLongPress"
      @touchstart.prevent="startLongPress"
      @touchend.prevent="cancelLongPress"
      @touchcancel.prevent="cancelLongPress"
    >
      <div class="close-hint">
        <div class="close-circle" :style="{ background: `conic-gradient(#ff1744 ${longPressProgress}%, transparent 0)` }">
          <span class="close-icon">✕</span>
        </div>
        <span class="close-text">长按 {{ Math.ceil(3 - longPressProgress / 100 * 3) }} 秒关闭</span>
      </div>
    </div>

    <!-- 关闭动画 -->
    <div v-if="isClosing" class="closing-overlay">
      <div class="closing-text">已停止发疯...</div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.crazy-page {
  width: 100vw;
  height: 100vh;
  background: #1a1a2e;
  position: relative;
  overflow: hidden;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  transition: transform 0.08s linear;
}

.crazy-page.closing {
  background: #0a0a1a;
  transition: background 0.6s ease;
}

/* 疯狂消息 */
.crazy-msg {
  position: absolute;
  white-space: nowrap;
  font-weight: 900;
  pointer-events: none;
  text-shadow:
    2px 2px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000;
  animation: msgPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10;
}

@keyframes msgPop {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(var(--r, 0deg));
  }
}

/* TransitionGroup 动画 */
.msg-enter-active {
  animation: msgPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.msg-leave-active {
  transition: all 0.5s ease;
}

.msg-leave-to {
  opacity: 0 !important;
  transform: translate(-50%, -50%) scale(2) !important;
}

/* 关闭区域 */
.close-zone {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6));
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

.close-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.close-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 23, 68, 0.4); }
  50% { box-shadow: 0 0 40px rgba(255, 23, 68, 0.8); }
}

.close-icon {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  z-index: 1;
  text-shadow: 0 0 10px rgba(255, 23, 68, 0.8);
}

.close-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}

/* 关闭覆盖层 */
.closing-overlay {
  position: absolute;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: overlayIn 0.5s ease;
}

@keyframes overlayIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.closing-text {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  animation: closingPulse 0.8s ease-in-out infinite;
}

@keyframes closingPulse {
  0%, 100% { opacity: 0.5; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1.05); }
}
</style>
