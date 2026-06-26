<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const bridgeProgress = ref(0)
const bridgeBuilt = ref(false)
const meeted = ref(false)
const stars = ref<{ id: number; x: number; y: number; delay: number; size: number }[]>([])

function buildBridge() {
  if (bridgeBuilt.value) return
  bridgeProgress.value += 20
  if (bridgeProgress.value >= 100) {
    bridgeProgress.value = 100
    bridgeBuilt.value = true
    setTimeout(() => {
      meeted.value = true
    }, 1200)
  }
}

onMounted(() => {
  // 生成星空
  for (let i = 0; i < 50; i++) {
    stars.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: 1 + Math.random() * 2.5,
    })
  }
})
</script>

<template>
  <div class="qixi-page" :class="{ met: meeted }">
    <!-- 星空背景 -->
    <div class="starry-sky">
      <div
        v-for="star in stars"
        :key="star.id"
        class="star"
        :style="{
          left: star.x + '%',
          top: star.y + '%',
          animationDelay: star.delay + 's',
          width: star.size + 'px',
          height: star.size + 'px',
        }"
      ></div>
    </div>

    <!-- 月亮 -->
    <div class="moon"></div>

    <!-- 银河 -->
    <div class="milky-way"></div>

    <!-- 鹊桥 -->
    <div class="bridge-container">
      <div class="bridge-pillars" :style="{ width: bridgeProgress + '%' }">
        <div
          v-for="i in 8"
          :key="i"
          class="magpie"
          :class="{ visible: bridgeProgress >= i * 12.5 }"
          :style="{ left: (i - 1) * 14.28 + '%' }"
        >
          <div class="magpie-body"></div>
          <div class="magpie-head"></div>
          <div class="magpie-wing"></div>
          <div class="magpie-beak"></div>
        </div>
      </div>
    </div>

    <!-- 牛郎 -->
    <div class="character niulang" :class="{ moving: bridgeBuilt && !meeted }">
      <div class="char-body">
        <div class="char-head">
          <div class="hat"></div>
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="mouth"></div>
        </div>
        <div class="char-torso">
          <div class="arm left-arm"></div>
          <div class="arm right-arm"></div>
        </div>
        <div class="char-legs">
          <div class="leg left-leg"></div>
          <div class="leg right-leg"></div>
        </div>
      </div>
      <div class="char-label">牛郎</div>
      <div class="ox">🐂</div>
    </div>

    <!-- 织女 -->
    <div class="character zhinv" :class="{ moving: bridgeBuilt && !meeted }">
      <div class="char-body">
        <div class="char-head">
          <div class="hair-bun"></div>
          <div class="eye left"></div>
          <div class="eye right"></div>
          <div class="mouth smile"></div>
        </div>
        <div class="char-torso dress">
          <div class="arm left-arm"></div>
          <div class="arm right-arm"></div>
        </div>
        <div class="dress-bottom"></div>
      </div>
      <div class="char-label">织女</div>
    </div>

    <!-- 相会爱心 -->
    <div v-if="meeted" class="meet-effect">
      <div class="heart-big">❤️</div>
      <div class="hearts-float">
        <span v-for="i in 12" :key="i" class="float-heart" :style="{ animationDelay: i * 0.3 + 's', left: 30 + Math.random() * 40 + '%' }">❤️</span>
      </div>
      <div class="meet-text">七夕快乐！</div>
    </div>

    <!-- 点击提示 / 按钮 -->
    <div v-if="!bridgeBuilt" class="click-hint">
      <button class="build-btn" @click="buildBridge">
        点击搭鹊桥 🕊️
      </button>
      <p class="hint-text">点击喜鹊来帮忙搭桥</p>
    </div>

    <!-- 进度提示 -->
    <div v-if="!bridgeBuilt && bridgeProgress > 0" class="progress-text">
      鹊桥搭建中... {{ bridgeProgress }}%
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="router.replace('/')">
      ← 返回
    </button>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.qixi-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #0a0a2e 0%, #1a1a4e 30%, #2d1b4e 60%, #1a1a3e 100%);
  position: relative;
  overflow: hidden;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  cursor: default;
}

/* 星空 */
.starry-sky {
  position: absolute;
  inset: 0;
}

.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.2); }
}

/* 月亮 */
.moon {
  position: absolute;
  top: 8%;
  right: 15%;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 35% 35%, #fffde7, #ffd54f);
  border-radius: 50%;
  box-shadow: 0 0 60px rgba(255, 235, 59, 0.5), 0 0 120px rgba(255, 235, 59, 0.2);
}

/* 银河 */
.milky-way {
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(200, 180, 255, 0.1) 15%,
    rgba(200, 180, 255, 0.6) 30%,
    rgba(180, 200, 255, 0.8) 50%,
    rgba(200, 180, 255, 0.6) 70%,
    rgba(200, 180, 255, 0.1) 85%,
    transparent 100%
  );
  box-shadow: 0 0 30px rgba(180, 150, 255, 0.4), 0 0 80px rgba(150, 120, 255, 0.15);
}

/* 鹊桥容器 */
.bridge-container {
  position: absolute;
  top: calc(40% - 30px);
  left: 10%;
  width: 80%;
  height: 60px;
  z-index: 10;
}

.bridge-pillars {
  position: relative;
  height: 100%;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* 喜鹊 */
.magpie {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.magpie.visible {
  opacity: 1;
  animation: magpieFly 0.6s ease-out;
}

@keyframes magpieFly {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(-20deg); }
  60% { opacity: 1; transform: translate(-50%, -50%) scale(1.2) rotate(5deg); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
}

.magpie-body {
  width: 28px;
  height: 16px;
  background: linear-gradient(180deg, #4a4a4a, #2d2d2d);
  border-radius: 50%;
  position: relative;
}

.magpie-head {
  position: absolute;
  top: -6px;
  right: -4px;
  width: 12px;
  height: 10px;
  background: #333;
  border-radius: 50%;
}

.magpie-wing {
  position: absolute;
  top: -10px;
  left: 4px;
  width: 16px;
  height: 10px;
  background: linear-gradient(135deg, #555, #3a3a3a);
  border-radius: 50% 50% 0 0;
  transform: rotate(-15deg);
}

.magpie-beak {
  position: absolute;
  top: -4px;
  right: -8px;
  width: 6px;
  height: 3px;
  background: #ff8f00;
  border-radius: 0 3px 3px 0;
}

/* 角色通用 */
.character {
  position: absolute;
  top: 28%;
  z-index: 15;
  transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
}

.niulang {
  left: 8%;
}

.zhinv {
  right: 8%;
}

.niulang.moving {
  left: 35%;
  top: 32%;
}

.zhinv.moving {
  right: 35%;
  top: 32%;
}

.met .niulang,
.met .zhinv {
  left: 40%;
  right: auto;
  top: 30%;
}

.met .zhinv {
  left: 48%;
  right: auto;
}

.char-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.char-head {
  width: 32px;
  height: 32px;
  background: #ffe0bd;
  border-radius: 50%;
  position: relative;
}

.hat {
  position: absolute;
  top: -10px;
  left: -2px;
  width: 36px;
  height: 14px;
  background: #5d4037;
  border-radius: 8px 8px 2px 2px;
}

.hair-bun {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 12px;
  background: #2d1b00;
  border-radius: 50%;
}

.eye {
  position: absolute;
  top: 10px;
  width: 5px;
  height: 5px;
  background: #333;
  border-radius: 50%;
}

.eye.left { left: 8px; }
.eye.right { right: 8px; }

.mouth {
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 3px;
  background: #e57373;
  border-radius: 0 0 3px 3px;
}

.mouth.smile {
  width: 8px;
  height: 4px;
  border-radius: 0 0 4px 4px;
}

.char-torso {
  width: 24px;
  height: 30px;
  background: #1565c0;
  border-radius: 4px;
  position: relative;
  margin-top: -2px;
}

.char-torso.dress {
  background: linear-gradient(180deg, #e91e63, #f48fb1);
  border-radius: 4px 4px 0 0;
}

.dress-bottom {
  width: 36px;
  height: 16px;
  background: linear-gradient(180deg, #f48fb1, #f8bbd0);
  border-radius: 0 0 8px 8px;
  margin-top: -2px;
}

.arm {
  position: absolute;
  top: 4px;
  width: 6px;
  height: 20px;
  background: #ffe0bd;
  border-radius: 3px;
  transform-origin: top center;
}

.left-arm {
  left: -6px;
  transform: rotate(15deg);
}

.right-arm {
  right: -6px;
  transform: rotate(-15deg);
}

.niulang.moving .right-arm {
  animation: waveArm 0.8s ease-in-out infinite;
}

.zhinv.moving .left-arm {
  animation: waveArm 0.8s ease-in-out infinite 0.4s;
}

@keyframes waveArm {
  0%, 100% { transform: rotate(-15deg); }
  50% { transform: rotate(-50deg); }
}

.char-legs {
  display: flex;
  gap: 4px;
  margin-top: -2px;
}

.leg {
  width: 8px;
  height: 22px;
  background: #5d4037;
  border-radius: 0 0 3px 3px;
}

.char-label {
  text-align: center;
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.ox {
  text-align: center;
  font-size: 24px;
  margin-top: 2px;
  animation: oxBounce 1.5s ease-in-out infinite;
}

@keyframes oxBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* 相会效果 */
.meet-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  pointer-events: none;
  animation: meetFadeIn 1s ease-out;
}

@keyframes meetFadeIn {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

.heart-big {
  font-size: 80px;
  text-align: center;
  animation: heartBeat 1s ease-in-out infinite;
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.2); }
  60% { transform: scale(1); }
}

.hearts-float {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 200px;
}

.float-heart {
  position: absolute;
  bottom: 0;
  font-size: 16px;
  opacity: 0;
  animation: heartFloat 3s ease-out infinite;
}

@keyframes heartFloat {
  0% { opacity: 0; transform: translateY(0) scale(0.5); }
  20% { opacity: 1; }
  80% { opacity: 0.6; }
  100% { opacity: 0; transform: translateY(-180px) scale(1.2); }
}

.meet-text {
  text-align: center;
  color: #ff4081;
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  text-shadow: 0 0 20px rgba(255, 64, 129, 0.6);
  animation: textGlow 2s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% { text-shadow: 0 0 20px rgba(255, 64, 129, 0.6); }
  50% { text-shadow: 0 0 40px rgba(255, 64, 129, 0.9), 0 0 80px rgba(255, 64, 129, 0.4); }
}

/* 按钮 */
.click-hint {
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.build-btn {
  padding: 14px 36px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.4);
  transition: all 0.3s ease;
  animation: btnPulse 2s ease-in-out infinite;
}

.build-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 30px rgba(233, 30, 99, 0.6);
}

.build-btn:active {
  transform: translateY(0) scale(0.95);
}

@keyframes btnPulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(233, 30, 99, 0.4); }
  50% { box-shadow: 0 4px 30px rgba(233, 30, 99, 0.7); }
}

.hint-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.progress-text {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  color: #ffcc80;
  font-size: 14px;
  text-shadow: 0 0 10px rgba(255, 183, 77, 0.5);
  animation: fadeInOut 0.5s ease;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(5px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
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
