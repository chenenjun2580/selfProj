<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLayingDown = ref(false)
const zzzs = ref<{ id: number; x: number; y: number; scale: number; delay: number }[]>([])
const bubbleTexts = ref<{ id: number; text: string; delay: number }[]>([])
const clickReaction = ref('')
const floatingItems = ref<{ id: number; emoji: string; x: number; delay: number; duration: number }[]>([])
const bouncePerson = ref(false)
let zzzId = 0
let bubbleId = 0
let floatId = 0
let zzzInterval: ReturnType<typeof setInterval> | null = null
let bubbleInterval: ReturnType<typeof setInterval> | null = null
let reactionTimeout: ReturnType<typeof setTimeout> | null = null

const lazyQuotes = [
  '不想动...',
  '明天再说吧',
  '躺平真舒服',
  '努力不一定成功\n但不努力一定很轻松',
  '世上无难事\n只要肯放弃',
  '躺平是一种态度',
  '咸鱼翻身\n还是咸鱼',
  '不卷了不卷了',
  '摆烂使我快乐',
  '人生苦短\n及时躺平',
]

const clickResponses = [
  '别戳了，起不来',
  '哎呀，别烦我',
  'Zzz...别闹',
  '翻个身继续躺',
  '你戳任你戳',
  '我自岿然不动',
  '躺平中，勿扰',
  '努力？明天再说',
  '戳我也没用~',
]

const floatEmojis = ['🍃', '🌿', '🌸', '💤', '🦋', '☁️', '🫧']

function startLayingDown() {
  if (isLayingDown.value) return
  isLayingDown.value = true

  zzzInterval = setInterval(() => {
    zzzs.value.push({
      id: ++zzzId,
      x: 50 + (Math.random() - 0.5) * 80,
      y: -15 - Math.random() * 25,
      scale: 0.8 + Math.random() * 1,
      delay: 0,
    })
    if (zzzs.value.length > 8) {
      zzzs.value = zzzs.value.slice(-8)
    }
  }, 1500)

  bubbleInterval = setInterval(() => {
    const text = lazyQuotes[Math.floor(Math.random() * lazyQuotes.length)]
    bubbleTexts.value.push({
      id: ++bubbleId,
      text,
      delay: 0,
    })
    if (bubbleTexts.value.length > 3) {
      bubbleTexts.value = bubbleTexts.value.slice(-3)
    }
  }, 3000)

  // 漂浮物
  setInterval(() => {
    floatingItems.value.push({
      id: ++floatId,
      emoji: floatEmojis[Math.floor(Math.random() * floatEmojis.length)],
      x: Math.random() * 100,
      delay: 0,
      duration: 8 + Math.random() * 12,
    })
    if (floatingItems.value.length > 15) {
      floatingItems.value = floatingItems.value.slice(-15)
    }
  }, 2000)

  setTimeout(() => {
    zzzs.value.push({ id: ++zzzId, x: 48, y: -15, scale: 1.2, delay: 0 })
    bubbleTexts.value.push({ id: ++bubbleId, text: '我躺了，你随意', delay: 0 })
  }, 300)
}

function tryWakeUp() {
  bouncePerson.value = true
  setTimeout(() => { bouncePerson.value = false }, 400)

  if (reactionTimeout) clearTimeout(reactionTimeout)
  const resp = clickResponses[Math.floor(Math.random() * clickResponses.length)]
  clickReaction.value = resp
  reactionTimeout = setTimeout(() => { clickReaction.value = '' }, 1800)
}

function goBack() {
  if (zzzInterval) clearInterval(zzzInterval)
  if (bubbleInterval) clearInterval(bubbleInterval)
  if (reactionTimeout) clearTimeout(reactionTimeout)
  router.replace('/')
}

onMounted(() => {
  setTimeout(startLayingDown, 600)
})

onUnmounted(() => {
  if (zzzInterval) clearInterval(zzzInterval)
  if (bubbleInterval) clearInterval(bubbleInterval)
  if (reactionTimeout) clearTimeout(reactionTimeout)
})
</script>

<template>
  <div class="lazy-page">
    <!-- 背景层 -->
    <div class="bg-layer">
      <div class="sky"></div>
      <!-- 太阳 -->
      <div class="sun">
        <div class="sun-core"></div>
        <div class="sun-ray r0"></div>
        <div class="sun-ray r1"></div>
        <div class="sun-ray r2"></div>
        <div class="sun-ray r3"></div>
        <div class="sun-ray r4"></div>
        <div class="sun-ray r5"></div>
        <div class="sun-ray r6"></div>
        <div class="sun-ray r7"></div>
      </div>
      <!-- 云朵 -->
      <div class="cloud c1"></div>
      <div class="cloud c2"></div>
      <div class="cloud c3"></div>
      <!-- 远处的树 -->
      <div class="tree t1">
        <div class="tree-top"></div>
        <div class="tree-trunk"></div>
      </div>
      <div class="tree t2">
        <div class="tree-top"></div>
        <div class="tree-trunk"></div>
      </div>
      <!-- 地板 -->
      <div class="floor">
        <div class="floor-grass"></div>
      </div>
      <!-- 草地装饰 -->
      <div class="grass-deco g1">🌱</div>
      <div class="grass-deco g2">🌿</div>
      <div class="grass-deco g3">🌾</div>
      <div class="grass-deco g4">🌼</div>
      <div class="grass-deco g5">🌻</div>
      <div class="grass-deco g6">🍀</div>
      <div class="grass-deco g7">🪷</div>
      <!-- 蘑菇 -->
      <div class="mushroom m1">
        <div class="mush-cap"></div>
        <div class="mush-stem"></div>
      </div>
      <div class="mushroom m2">
        <div class="mush-cap"></div>
        <div class="mush-stem"></div>
      </div>
    </div>

    <!-- 漂浮物（树叶花瓣） -->
    <div class="float-layer">
      <div
        v-for="item in floatingItems"
        :key="item.id"
        class="float-item"
        :style="{
          left: item.x + '%',
          animationDuration: item.duration + 's',
        }"
      >{{ item.emoji }}</div>
    </div>

    <!-- 顶部标题 -->
    <div class="top-title">
      <span class="title-emoji">🛌</span>
      <span class="title-text">躺平模拟器</span>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 主场景 -->
    <div class="scene" @click="tryWakeUp">
      <!-- 点击反馈文字 -->
      <Transition name="reaction-pop">
        <div v-if="clickReaction" class="click-reaction">{{ clickReaction }}</div>
      </Transition>

      <!-- 散落物品 -->
      <div class="props-layer">
        <div class="prop chips">🍟</div>
        <div class="prop cola">🥤</div>
        <div class="prop phone">📱</div>
        <div class="prop remote">🎮</div>
        <div class="prop candy">🍬</div>
      </div>

      <!-- 小人容器 -->
      <div class="character-area" :class="{ bounce: bouncePerson }">
        <!-- 站立状态 -->
        <div v-if="!isLayingDown" class="character standing">
          <div class="stand-head">
            <div class="hair"></div>
            <div class="face">
              <div class="eyebrow left"></div>
              <div class="eyebrow right"></div>
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="mouth tired"></div>
            </div>
          </div>
          <div class="stand-neck"></div>
          <div class="stand-body">
            <div class="shirt-collar"></div>
          </div>
          <div class="stand-arm left">
            <div class="hand"></div>
          </div>
          <div class="stand-arm right">
            <div class="hand"></div>
          </div>
          <div class="stand-leg left">
            <div class="shoe"></div>
          </div>
          <div class="stand-leg right">
            <div class="shoe"></div>
          </div>
        </div>

        <!-- 躺平状态 -->
        <div v-if="isLayingDown" class="character laying">
          <!-- 整个躺平小人是一体的，水平排列 -->
          <div class="laying-whole">
            <!-- 腿脚（最右边） -->
            <div class="laying-legs">
              <div class="laying-shoe left"></div>
              <div class="laying-shoe right"></div>
            </div>
            <!-- 身体 -->
            <div class="laying-torso">
              <div class="laying-belly"></div>
            </div>
            <!-- 头 + 枕头 -->
            <div class="laying-head-area">
              <div class="pillow"></div>
              <div class="laying-head">
                <div class="hair"></div>
                <div class="face relaxed">
                  <div class="eye-closed left"></div>
                  <div class="eye-closed right"></div>
                  <div class="blush left"></div>
                  <div class="blush right"></div>
                  <div class="mouth smile"></div>
                </div>
              </div>
              <!-- 枕在头下的手臂 -->
              <div class="laying-arm under-head"></div>
            </div>
            <!-- 放松的另一只手 -->
            <div class="laying-arm relaxed"></div>
          </div>
        </div>
      </div>

      <!-- Zzz 飘出 -->
      <TransitionGroup name="zzz-fly" tag="div" class="zzz-layer">
        <div
          v-for="z in zzzs"
          :key="z.id"
          class="zzz"
          :style="{
            left: z.x + '%',
            top: z.y + '%',
            transform: `scale(${z.scale})`,
          }"
        >
          <span>Z</span>
          <span class="z2">z</span>
          <span class="z3">z</span>
        </div>
      </TransitionGroup>

      <!-- 气泡语录 -->
      <TransitionGroup name="bubble-fly" tag="div" class="bubble-layer">
        <div
          v-for="b in bubbleTexts"
          :key="b.id"
          class="speech-bubble"
        >
          <p v-for="(line, i) in b.text.split('\n')" :key="i">{{ line }}</p>
        </div>
      </TransitionGroup>

      <!-- 点击提示 -->
      <Transition name="fade">
        <div v-if="isLayingDown && !clickReaction" class="tap-hint">
          <span>👆 戳戳这个摆烂小人</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.lazy-page {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}

/* ========= 背景层 ========= */
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.sky {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #87CEEB 0%, #b5e3f5 30%, #d4f1c5 70%, #a8e6cf 100%);
}

/* 太阳 */
.sun {
  position: absolute;
  top: 8%;
  right: 12%;
  width: 60px;
  height: 60px;
}

.sun-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  background: #FFD93D;
  border-radius: 50%;
  box-shadow: 0 0 40px #FFD93D, 0 0 80px rgba(255, 217, 61, 0.4);
  animation: sunPulse 3s ease-in-out infinite;
}

@keyframes sunPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
}

.sun-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 16px;
  background: #FFD93D;
  border-radius: 2px;
  opacity: 0.7;
  transform-origin: center center;
}

.sun-ray.r0 { transform: translate(-50%, -50%) rotate(0deg) translateY(-30px); }
.sun-ray.r1 { transform: translate(-50%, -50%) rotate(45deg) translateY(-30px); }
.sun-ray.r2 { transform: translate(-50%, -50%) rotate(90deg) translateY(-30px); }
.sun-ray.r3 { transform: translate(-50%, -50%) rotate(135deg) translateY(-30px); }
.sun-ray.r4 { transform: translate(-50%, -50%) rotate(180deg) translateY(-30px); }
.sun-ray.r5 { transform: translate(-50%, -50%) rotate(225deg) translateY(-30px); }
.sun-ray.r6 { transform: translate(-50%, -50%) rotate(270deg) translateY(-30px); }
.sun-ray.r7 { transform: translate(-50%, -50%) rotate(315deg) translateY(-30px); }

.sun {
  animation: sunRotate 12s linear infinite;
}

@keyframes sunRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 云朵 */
.cloud {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  opacity: 0.9;
}

.cloud::before, .cloud::after {
  content: '';
  position: absolute;
  background: #fff;
  border-radius: 50%;
}

.cloud.c1 {
  top: 12%;
  left: 15%;
  width: 70px;
  height: 28px;
  animation: cloudDrift 20s linear infinite;
}

.cloud.c1::before {
  width: 34px; height: 34px;
  top: -18px; left: 14px;
}

.cloud.c1::after {
  width: 24px; height: 24px;
  top: -10px; left: 40px;
}

.cloud.c2 {
  top: 18%;
  left: 55%;
  width: 56px;
  height: 22px;
  animation: cloudDrift 25s linear infinite reverse;
}

.cloud.c2::before {
  width: 26px; height: 26px;
  top: -14px; left: 10px;
}

.cloud.c2::after {
  width: 20px; height: 20px;
  top: -8px; left: 30px;
}

.cloud.c3 {
  top: 8%;
  left: 75%;
  width: 48px;
  height: 20px;
  animation: cloudDrift 22s linear infinite;
  animation-delay: -8s;
}

.cloud.c3::before {
  width: 22px; height: 22px;
  top: -12px; left: 8px;
}

.cloud.c3::after {
  width: 18px; height: 18px;
  top: -7px; left: 26px;
}

@keyframes cloudDrift {
  0% { transform: translateX(0); }
  50% { transform: translateX(40px); }
  100% { transform: translateX(0); }
}

/* 树 */
.tree {
  position: absolute;
  bottom: 34%;
}

.tree.t1 { left: 8%; }
.tree.t2 { right: 6%; }

.tree-top {
  width: 50px;
  height: 50px;
  background: #66bb6a;
  border-radius: 50% 50% 40% 40%;
  position: relative;
  z-index: 2;
}

.tree.t2 .tree-top {
  background: #81c784;
  width: 44px;
  height: 44px;
}

.tree-trunk {
  width: 10px;
  height: 24px;
  background: #8d6e63;
  border-radius: 3px;
  margin: -4px auto 0;
  z-index: 1;
  position: relative;
}

/* 地板 */
.floor {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(180deg, #81c784 0%, #66bb6a 30%, #4caf50 100%);
  border-radius: 50% 50% 0 0 / 24px 24px 0 0;
}

.floor-grass {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 12px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 6px,
    #a5d6a7 6px,
    #a5d6a7 10px
  );
}

/* 草地装饰 */
.grass-deco {
  position: absolute;
  font-size: 20px;
  animation: grassWave 2s ease-in-out infinite;
  pointer-events: none;
}

.grass-deco.g1 { bottom: 28%; left: 18%; animation-delay: 0s; }
.grass-deco.g2 { bottom: 30%; left: 28%; animation-delay: 0.4s; font-size: 16px; }
.grass-deco.g3 { bottom: 27%; right: 22%; animation-delay: 0.8s; }
.grass-deco.g4 { bottom: 29%; right: 32%; animation-delay: 1.2s; font-size: 18px; }
.grass-deco.g5 { bottom: 28%; left: 38%; animation-delay: 1.6s; font-size: 22px; }
.grass-deco.g6 { bottom: 29%; right: 14%; animation-delay: 0.2s; font-size: 16px; }
.grass-deco.g7 { bottom: 27%; left: 72%; animation-delay: 1s; font-size: 18px; }

@keyframes grassWave {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

/* 蘑菇 */
.mushroom {
  position: absolute;
}

.mushroom.m1 { bottom: 29%; left: 42%; }
.mushroom.m2 { bottom: 28%; right: 42%; }

.mush-cap {
  width: 26px;
  height: 20px;
  background: #ff8a65;
  border-radius: 50% 50% 10% 10%;
  position: relative;
  z-index: 2;
}

.mush-cap::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 6px;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 8px 2px 0 #fff, 4px -2px 0 #fff;
}

.mushroom.m2 .mush-cap {
  background: #ef5350;
  width: 22px;
  height: 16px;
}

.mush-stem {
  width: 10px;
  height: 14px;
  background: #fff3e0;
  border-radius: 3px 3px 5px 5px;
  margin: -2px auto 0;
  z-index: 1;
  position: relative;
}

/* 漂浮物 */
.float-layer {
  position: fixed;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
}

.float-item {
  position: absolute;
  top: -30px;
  font-size: 20px;
  opacity: 0.7;
  animation: floatAcross linear infinite;
}

@keyframes floatAcross {
  0% {
    transform: translateY(-30px) rotate(0deg) translateX(0);
    opacity: 0;
  }
  10% { opacity: 0.7; }
  90% { opacity: 0.7; }
  100% {
    transform: translateY(105vh) rotate(360deg) translateX(60px);
    opacity: 0;
  }
}

/* 顶部标题 */
.top-title {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 28px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.title-emoji {
  font-size: 26px;
  animation: titleFloat 2s ease-in-out infinite;
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.title-text {
  font-size: 18px;
  font-weight: 800;
  color: #555;
  letter-spacing: 3px;
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
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.55);
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.85);
  color: #333;
}

/* 场景 */
.scene {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 点击反馈 */
.click-reaction {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
  background: rgba(255, 255, 255, 0.9);
  color: #e88;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  white-space: nowrap;
}

.reaction-pop-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.reaction-pop-leave-active {
  transition: all 0.4s ease-in;
}

.reaction-pop-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(10px) scale(0.5);
}

.reaction-pop-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px) scale(0.8);
}

/* 散落物品 */
.props-layer {
  position: absolute;
  bottom: 16%;
  left: 0;
  width: 100%;
  z-index: 15;
  pointer-events: none;
}

.prop {
  position: absolute;
  font-size: 28px;
  animation: propFloat 3s ease-in-out infinite;
}

.prop.chips { bottom: 20px; left: 10%; animation-delay: 0s; font-size: 30px; }
.prop.cola { bottom: 0px; left: 22%; animation-delay: 0.7s; font-size: 26px; }
.prop.phone { bottom: 10px; right: 14%; animation-delay: 1.4s; font-size: 24px; }
.prop.remote { bottom: -5px; right: 28%; animation-delay: 0.3s; font-size: 26px; }
.prop.candy { bottom: 24px; right: 8%; animation-delay: 1.8s; font-size: 22px; }

@keyframes propFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(5deg); }
}

/* 小人弹跳 */
.character-area.bounce {
  animation: personBounce 0.4s ease;
}

@keyframes personBounce {
  0% { transform: translateY(0); }
  30% { transform: translateY(-20px); }
  50% { transform: translateY(0); }
  70% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

/* 小人区域 */
.character-area {
  position: relative;
  width: 280px;
  height: 360px;
}

/* ========= 站立小人 ========= */
.character.standing {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: idleBreathe 3s ease-in-out infinite;
}

@keyframes idleBreathe {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
}

.stand-head {
  width: 80px;
  height: 80px;
  background: #ffcc80;
  border-radius: 50% 50% 45% 45%;
  position: relative;
  z-index: 3;
  box-shadow: inset 0 -6px 10px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06);
}

.hair {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 88px;
  height: 32px;
  background: #5c4033;
  border-radius: 50px 50px 0 0;
  z-index: 4;
}

.face {
  position: relative;
  width: 100%;
  height: 100%;
}

.eyebrow {
  position: absolute;
  top: 26px;
  width: 16px;
  height: 4px;
  background: #5c4033;
  border-radius: 2px;
}

.eyebrow.left { left: 18px; transform: rotate(-5deg); }
.eyebrow.right { right: 18px; transform: rotate(5deg); }

.eye {
  position: absolute;
  top: 34px;
  width: 11px;
  height: 13px;
  background: #333;
  border-radius: 50%;
}

.eye.left { left: 20px; }
.eye.right { right: 20px; }

.mouth {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 10px;
  border-bottom: 3px solid #888;
  border-radius: 0 0 12px 12px;
}

.mouth.tired {
  border-bottom-color: #aaa;
  width: 26px;
}

.stand-neck {
  width: 22px;
  height: 12px;
  background: #f5c18b;
  border-radius: 4px;
  margin-top: -2px;
  z-index: 2;
}

.stand-body {
  width: 66px;
  height: 74px;
  background: linear-gradient(180deg, #42a5f5 0%, #1e88e5 100%);
  border-radius: 16px 16px 8px 8px;
  margin-top: -4px;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.shirt-collar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 14px solid #fff;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.stand-arm {
  position: absolute;
  width: 18px;
  height: 56px;
  background: #ffcc80;
  border-radius: 9px;
  top: 98px;
  z-index: 1;
  animation: armSwing 2s ease-in-out infinite;
}

.stand-arm.left {
  left: 48px;
  transform-origin: top center;
  animation-delay: 0s;
}

.stand-arm.right {
  right: 48px;
  transform-origin: top center;
  animation-delay: 1s;
}

.hand {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 18px;
  background: #ffcc80;
  border-radius: 50%;
}

@keyframes armSwing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(6deg); }
}

.stand-leg {
  position: absolute;
  bottom: -52px;
  width: 20px;
  height: 52px;
  background: #5c6bc0;
  border-radius: 0 0 8px 8px;
  z-index: 0;
}

.stand-leg.left { left: 12px; }
.stand-leg.right { right: 12px; }

.shoe {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 14px;
  background: #37474f;
  border-radius: 8px 12px 4px 4px;
}

/* ========= 躺平小人 ========= */
.character.laying {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 120px;
  animation: layDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes layDown {
  0% { transform: translateX(-50%) scale(0.6); opacity: 0; }
  60% { transform: translateX(-50%) scale(1.03); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
}

/* 躺平整体布局：水平排列 */
.laying-whole {
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: flex-end;
}

/* 腿脚 - 最右边 */
.laying-legs {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  margin-left: -6px;
}

.laying-shoe {
  width: 32px;
  height: 22px;
  background: #37474f;
  border-radius: 10px 14px 6px 6px;
  position: relative;
}

.laying-shoe.left {
  transform: rotate(-8deg);
}

.laying-shoe.right {
  transform: rotate(5deg);
}

/* 身体 */
.laying-torso {
  width: 72px;
  height: 64px;
  background: linear-gradient(180deg, #42a5f5 0%, #1e88e5 100%);
  border-radius: 14px;
  position: relative;
  z-index: 2;
  margin-left: -6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: breatheBelly 3s ease-in-out infinite;
}

@keyframes breatheBelly {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.04); }
}

.laying-belly {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 34px;
  height: 28px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
}

/* 头部区域（枕头 + 头 + 枕下的手臂） */
.laying-head-area {
  position: relative;
  width: 100px;
  height: 86px;
  margin-left: -8px;
  z-index: 3;
}

.pillow {
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 90px;
  height: 52px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08), inset 0 3px 8px rgba(0, 0, 0, 0.04);
}

.pillow::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 14px;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.laying-head {
  position: absolute;
  bottom: 24px;
  left: 14px;
  width: 68px;
  height: 68px;
  background: #ffcc80;
  border-radius: 50% 50% 45% 45%;
  z-index: 4;
  box-shadow: inset 0 -5px 8px rgba(0, 0, 0, 0.06);
  animation: snooze 3s ease-in-out infinite;
}

@keyframes snooze {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.face.relaxed {
  position: relative;
  width: 100%;
  height: 100%;
}

.eye-closed {
  position: absolute;
  top: 30px;
  width: 14px;
  height: 5px;
  border-bottom: 3px solid #5c4033;
  border-radius: 0 0 7px 7px;
}

.eye-closed.left { left: 16px; }
.eye-closed.right { right: 16px; }

.blush {
  position: absolute;
  top: 36px;
  width: 14px;
  height: 8px;
  background: rgba(255, 150, 150, 0.4);
  border-radius: 50%;
}

.blush.left { left: 8px; }
.blush.right { right: 8px; }

.mouth.smile {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 10px;
  border-bottom: 3px solid #e88;
  border-radius: 0 0 14px 14px;
}

/* 手臂 */
.laying-arm {
  position: absolute;
  background: #ffcc80;
  border-radius: 8px;
}

/* 枕在头下的手臂 */
.laying-arm.under-head {
  bottom: 22px;
  left: 12px;
  width: 48px;
  height: 14px;
  z-index: 5;
  transform: rotate(-5deg);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

/* 放松的另一只手臂 - 从身体延伸 */
.laying-arm.relaxed {
  bottom: 32px;
  left: 182px;
  width: 14px;
  height: 42px;
  z-index: 0;
  transform: rotate(12deg);
  transform-origin: top center;
  animation: armRelax 3s ease-in-out infinite;
}

@keyframes armRelax {
  0%, 100% { transform: rotate(12deg); }
  50% { transform: rotate(16deg); }
}

/* Zzz 层 */
.zzz-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 20;
}

.zzz {
  position: absolute;
  font-size: 24px;
  font-weight: 900;
  color: #5c6bc0;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -4px;
}

.zzz span {
  display: block;
  line-height: 0.8;
}

.zzz .z2 {
  font-size: 1.3em;
  margin-left: 8px;
}

.zzz .z3 {
  font-size: 1.6em;
  margin-left: 16px;
}

.zzz-fly-enter-active {
  transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.zzz-fly-leave-active {
  transition: all 1.5s ease-in;
}

.zzz-fly-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.3);
}

.zzz-fly-enter-to {
  opacity: 0;
  transform: translateY(-120px) scale(1.8);
}

.zzz-fly-leave-to {
  opacity: 0;
  transform: translateY(-200px) scale(2.5);
}

/* 气泡语录层 */
.bubble-layer {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.speech-bubble {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 10px 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.speech-bubble p {
  margin: 0;
  font-size: 14px;
  color: #555;
  font-weight: 600;
  line-height: 1.6;
  white-space: nowrap;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(255, 255, 255, 0.9);
}

.bubble-fly-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bubble-fly-leave-active {
  transition: all 0.5s ease-in;
}

.bubble-fly-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.5);
}

.bubble-fly-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(0.8);
}

/* 点击提示 */
.tap-hint {
  position: absolute;
  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  animation: hintFloat 2.5s ease-in-out infinite;
  pointer-events: none;
}

@keyframes hintFloat {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.3; }
  50% { transform: translateX(-50%) translateY(-6px); opacity: 0.55; }
}

.fade-enter-active {
  transition: all 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

/* 响应式 */
@media (max-width: 480px) {
  .character-area {
    width: 220px;
    height: 300px;
  }

  .character.laying {
    width: 220px;
    height: 100px;
  }

  .laying-whole {
    height: 75px;
  }

  .stand-head, .laying-head {
    width: 60px;
    height: 60px;
  }

  .hair {
    width: 68px;
    height: 26px;
  }

  .stand-body { width: 52px; height: 60px; }
  .stand-arm { width: 14px; height: 44px; top: 80px; }
  .stand-arm.left { left: 38px; }
  .stand-arm.right { right: 38px; }
  .stand-leg { width: 16px; height: 42px; bottom: -42px; }

  .laying-torso { width: 58px; height: 52px; }
  .laying-head-area { width: 82px; height: 72px; }
  .pillow { width: 72px; height: 42px; }
  .laying-head { width: 56px; height: 56px; bottom: 20px; left: 10px; }
  .laying-arm.under-head { width: 38px; height: 12px; bottom: 18px; left: 10px; }
  .laying-arm.relaxed { left: 150px; }
}
</style>
