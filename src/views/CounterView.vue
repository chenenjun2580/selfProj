<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const count = ref(0)
const easterEgg = ref(false)
const popEffects = ref<{ id: number; x: number; y: number; text: string }[]>([])
const shakeCount = ref(0)
let effectId = 0

const progress = computed(() => Math.min((count.value / 100) * 100, 100))

const milestones = [10, 25, 50, 75, 90, 95, 99, 100]

const clickTexts = [
  '+1', '+1 继续！', '+1 别停', '+1 就这？',
  '+1 冲冲冲', '+1 搞快点', '+1 不够！', '+1 🤏',
]

const milestonePhrases: Record<number, string> = {
  10: '哦？有点意思了',
  25: '四分之一了！',
  50: '已经一半了，累不累？',
  75: '快了快了！还剩25下',
  90: '倒计时！10、9...',
  95: '就5下了！',
  99: '最后一下！！！',
}

const easterEggs = [
  '🎉 恭喜！你成功浪费了人生的100次点击！',
  '🏆 获得成就：【毫无意义の执着】',
  '💯 满分！但满分并没有什么卵用',
  '🎊 彩蛋解锁：你真是够闲的',
  '🌟 你已成功证明：点100次屏幕手真的会酸',
  '👑 整活大师称号已解锁！',
]

const emojis = ['😂', '🤣', '💀', '🔥', '🎯', '👆', '💪', '🤌', '🎭', '😎', '🫵', '🤪']

function handleClick(e: MouseEvent) {
  if (easterEgg.value) return

  count.value++
  shakeCount.value = 5

  // 飘出文字
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  const text = clickTexts[Math.floor(Math.random() * clickTexts.length)]

  popEffects.value.push({ id: ++effectId, x, y, text })
  if (popEffects.value.length > 12) {
    popEffects.value = popEffects.value.slice(-12)
  }

  // 里程碑提示
  if (milestones.includes(count.value)) {
    const phrase = milestonePhrases[count.value]
    if (phrase) {
      popEffects.value.push({ id: ++effectId, x: 50, y: 20, text: phrase })
    }
  }

  // 100 触发彩蛋
  if (count.value >= 100) {
    easterEgg.value = true
  }

  setTimeout(() => {
    shakeCount.value = 0
  }, 400)
}

function reset() {
  count.value = 0
  easterEgg.value = false
  popEffects.value = []
}
</script>

<template>
  <div class="counter-page" :class="{ shake: shakeCount > 0 }">
    <!-- 背景粒子 -->
    <div class="bg-particles">
      <div v-for="i in 20" :key="i" class="bg-dot" :style="{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        animationDuration: 3 + Math.random() * 4 + 's',
      }"></div>
    </div>

    <!-- 顶部进度条 -->
    <div class="progress-bar-wrap">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      <span class="progress-label">{{ count }} / 100</span>
    </div>

    <!-- 数字显示 -->
    <div class="count-display" :class="{ milestone: milestones.includes(count) && count > 0, egg: easterEgg }">
      <span class="count-number">{{ count }}</span>
      <span class="count-sub">次点击</span>
    </div>

    <!-- 点击区域 -->
    <div
      v-if="!easterEgg"
      class="click-area"
      @click="handleClick"
    >
      <div class="click-circle">
        <span class="click-emoji">👆</span>
        <span class="click-label">点这里</span>
      </div>

      <!-- 弹出效果 -->
      <TransitionGroup name="pop">
        <div
          v-for="effect in popEffects"
          :key="effect.id"
          class="pop-effect"
          :style="{ left: effect.x + '%', top: effect.y + '%' }"
        >
          {{ effect.text }}
        </div>
      </TransitionGroup>
    </div>

    <!-- 彩蛋弹窗 -->
    <Transition name="egg">
      <div v-if="easterEgg" class="easter-egg-overlay" @click.self>
        <div class="easter-egg-card">
          <div class="egg-emojis">
            <span v-for="e in emojis.slice(0, 6)" :key="e">{{ e }}</span>
          </div>
          <div class="egg-text">{{ easterEggs[Math.floor(Math.random() * easterEggs.length)] }}</div>
          <div class="egg-score">
            <span class="big-100">💯</span>
          </div>
          <div class="egg-sub">
            你已完成 100 次整活点击<br/>
            <span class="egg-hint">这大概就是你今天的运动量了</span>
          </div>
          <div class="egg-confetti">
            <span v-for="i in 20" :key="i" class="confetti" :style="{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: 2 + Math.random() * 3 + 's',
              backgroundColor: ['#FF1744','#FF6D00','#FFD600','#00E676','#00B0FF','#D500F9'][i % 6],
            }"></span>
          </div>
          <button class="again-btn" @click="reset">再整一次 🔄</button>
        </div>
      </div>
    </Transition>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="router.replace('/')">← 返回</button>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.counter-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
}

.counter-page.shake {
  animation: pageShake 0.4s ease;
}

@keyframes pageShake {
  0%, 100% { transform: translate(0); }
  10% { transform: translate(-4px, 2px); }
  30% { transform: translate(4px, -2px); }
  50% { transform: translate(-3px, -1px); }
  70% { transform: translate(3px, 1px); }
  90% { transform: translate(-1px, -2px); }
}

/* 背景粒子 */
.bg-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: dotFloat linear infinite;
}

@keyframes dotFloat {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50% { transform: translateY(-20px); opacity: 0.6; }
}

/* 进度条 */
.progress-bar-wrap {
  width: 80%;
  max-width: 340px;
  height: 28px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00E676, #76FF03, #FFEA00, #FF6D00, #FF1744);
  border-radius: 14px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
}

.progress-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

/* 数字显示 */
.count-display {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.count-number {
  font-size: 96px;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.count-sub {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
}

.count-display.milestone .count-number {
  color: #76FF03;
  text-shadow: 0 0 60px rgba(118, 255, 3, 0.5);
  animation: numBounce 0.5s ease;
}

.count-display.egg .count-number {
  color: #FFD600;
  font-size: 120px;
  text-shadow: 0 0 80px rgba(255, 214, 0, 0.6);
  animation: numGlow 0.8s ease-in-out infinite;
}

@keyframes numBounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes numGlow {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

/* 点击区域 */
.click-area {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.click-circle {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(118, 255, 3, 0.15), rgba(118, 255, 3, 0.05));
  border: 3px solid rgba(118, 255, 3, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  animation: circlePulse 2s ease-in-out infinite;
  transition: all 0.15s ease;
}

.click-circle:active {
  transform: scale(0.9);
  border-color: #76FF03;
  box-shadow: 0 0 40px rgba(118, 255, 3, 0.3);
}

@keyframes circlePulse {
  0%, 100% { box-shadow: 0 0 20px rgba(118, 255, 3, 0.1); }
  50% { box-shadow: 0 0 40px rgba(118, 255, 3, 0.25); }
}

.click-emoji {
  font-size: 40px;
}

.click-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* 弹出效果 */
.pop-effect {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.pop-enter-active {
  animation: popIn 0.5s ease-out;
}

.pop-leave-active {
  animation: popOut 0.3s ease-in;
}

@keyframes popIn {
  0% { opacity: 0; transform: translate(-50%, 0) scale(0.5); }
  100% { opacity: 1; transform: translate(-50%, -40px) scale(1); }
}

@keyframes popOut {
  0% { opacity: 1; transform: translate(-50%, -40px) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -60px) scale(0.5); }
}

/* 彩蛋弹窗 */
.easter-egg-overlay {
  position: absolute;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.easter-egg-card {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 2px solid rgba(255, 214, 0, 0.4);
  border-radius: 20px;
  padding: 32px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: cardPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes cardPop {
  0% { transform: scale(0.3); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.egg-emojis {
  font-size: 36px;
  letter-spacing: 8px;
  margin-bottom: 12px;
}

.egg-text {
  color: #FFD600;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  line-height: 1.5;
}

.egg-score {
  margin: 8px 0;
}

.big-100 {
  font-size: 64px;
}

.egg-sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 16px;
}

.egg-hint {
  color: rgba(255, 255, 255, 0.35);
  font-size: 11px;
}

.egg-confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.confetti {
  position: absolute;
  top: -10px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  animation: confettiFall linear infinite;
}

@keyframes confettiFall {
  0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(calc(100vh)) rotate(720deg); opacity: 0; }
}

.again-btn {
  padding: 12px 36px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #FFD600, #FF6D00);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.3s ease;
}

.again-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 214, 0, 0.4);
}

.again-btn:active {
  transform: scale(0.95);
}

/* 过渡 */
.egg-enter-active {
  transition: all 0.4s ease;
}

.egg-leave-active {
  transition: all 0.3s ease;
}

.egg-enter-from,
.egg-leave-to {
  opacity: 0;
}

.back-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  z-index: 30;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
