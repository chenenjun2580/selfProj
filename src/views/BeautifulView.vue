<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TruckPopup from './TruckPopup.vue'
import KeyboardPopup from './KeyboardPopup.vue'
import CubePopup from './CubePopup.vue'
import SunPopup from './SunPopup.vue'
import BearPopup from './BearPopup.vue'
import CoffeePopup from './CoffeePopup.vue'
import SwitchPopup from './SwitchPopup.vue'
import CameraPopup from './CameraPopup.vue'
import NeonPopup from './NeonPopup.vue'
import CubeRotatePopup from './CubeRotatePopup.vue'

const router = useRouter()

// 颜色数据
const colors = [
  { hex: '#e11d48', name: '小车', desc: '热情似火的玫瑰红' },
  { hex: '#f472b6', name: '键盘', desc: '少女心爆棚的樱花粉' },
  { hex: '#fb923c', name: '方块', desc: '温暖活力的日落橙' },
  { hex: '#facc15', name: '太阳', desc: '明亮欢快的阳光黄' },
  { hex: '#84cc16', name: '小熊', desc: '生机盎然的青草绿' },
  { hex: '#10b981', name: '咖啡', desc: '清新自然的翡翠青' },
  { hex: '#0ea5e9', name: '手柄', desc: '广阔自由的天空蓝' },
  { hex: '#3b82f6', name: '相机', desc: '深邃沉稳的宝石靛' },
  { hex: '#8b5cf6', name: '卡片', desc: '神秘优雅的薰衣草紫' },
  { hex: '#a78bfa', name: '立方体', desc: '温柔梦幻的薄雾雪' },
]

// 弹窗状态
const popupVisible = ref(false)
const popupColor = ref<{ hex: string; name: string; desc: string } | null>(null)

// 星星背景
const stars = ref<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])
for (let i = 0; i < 50; i++) {
  stars.value.push({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 3,
  })
}

function showPopup(color: { hex: string; name: string; desc: string }) {
  popupColor.value = color
  popupVisible.value = true
}

function closePopup() {
  popupVisible.value = false
}

function goBack() {
  router.replace('/')
}

onMounted(() => {
  // 入场
})
</script>

<template>
  <div class="beautiful-page">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <!-- 星星 -->
      <div
        v-for="star in stars"
        :key="star.id"
        class="star"
        :style="{
          left: star.x + '%',
          top: star.y + '%',
          width: star.size + 'px',
          height: star.size + 'px',
          animationDelay: star.delay + 's',
        }"
      ></div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- From Uiverse.io by chase2k25 -->
    <div class="body-wrapper">
      <div class="comic-panel">
        <div class="container-items">
          <button
            v-for="color in colors"
            :key="color.hex"
            class="item-color"
            :style="{ '--color': color.hex }"
            :data-name="color.name"
            @click="showPopup(color)"
          ></button>
        </div>
      </div>
    </div>

    <!-- 弹窗遮罩 -->
    <Teleport to="body">
      <div v-if="popupVisible" class="popup-overlay" @click.self="closePopup">
        <!-- 第一个颜色：卡车组件 -->
        <TruckPopup
          v-if="popupColor && popupColor.hex === '#e11d48'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第二个颜色：键盘组件 -->
        <KeyboardPopup
          v-if="popupColor && popupColor.hex === '#f472b6'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第三个颜色：方块组件 -->
        <CubePopup
          v-if="popupColor && popupColor.hex === '#fb923c'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第四个颜色：太阳组件 -->
        <SunPopup
          v-if="popupColor && popupColor.hex === '#facc15'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第五个颜色：小熊组件 -->
        <BearPopup
          v-if="popupColor && popupColor.hex === '#84cc16'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第六个颜色：咖啡组件 -->
        <CoffeePopup
          v-if="popupColor && popupColor.hex === '#10b981'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第七个颜色：手柄组件 -->
        <SwitchPopup
          v-if="popupColor && popupColor.hex === '#0ea5e9'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第八个颜色：相机组件 -->
        <CameraPopup
          v-if="popupColor && popupColor.hex === '#3b82f6'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第九个颜色：卡片组件 -->
        <NeonPopup
          v-if="popupColor && popupColor.hex === '#8b5cf6'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 第十个颜色：旋转立方体组件 -->
        <CubeRotatePopup
          v-if="popupColor && popupColor.hex === '#a78bfa'"
          :visible="popupVisible"
          @close="closePopup"
        />

        <!-- 其他颜色：默认弹窗 -->
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.beautiful-page {
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
  position: fixed;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 20%, #1a1a2e 0%, #16213e 40%, #0f0f23 100%);
}

.star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: starTwinkle 2s ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
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

/* From Uiverse.io by chase2k25 */
.body-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  padding-top: 70px;
}

.comic-panel {
  background: #ffffff;
  border: 4px solid #000;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
}

.container-items {
  display: flex;
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.item-color {
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 48px;
  border: none;
  outline: none;
  margin: -4px;
  background-color: transparent;
  transition: 300ms ease-out;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.item-color::after {
  position: absolute;
  content: "";
  inset: 0;
  width: 40px;
  height: 40px;
  background-color: var(--color);
  border-radius: 6px;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 0 #000;
  pointer-events: none;
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.item-color::before {
  content: attr(data-name);
  position: absolute;
  left: 50%;
  top: calc(100% + 6px);
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 8px;
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms ease;
  z-index: 100000;
  white-space: nowrap;
}

.item-color:hover::before {
  opacity: 1;
}

.item-color:hover {
  transform: scale(1.5) translateY(-5px);
  z-index: 99999;
}

.item-color:active::after {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 0 #000;
}

.item-color:hover + * {
  transform: scale(1.3) translateY(-3px);
  z-index: 9999;
}

.item-color:hover + * + * {
  transform: scale(1.15);
  z-index: 999;
}

.item-color:has(+ *:hover) {
  transform: scale(1.3) translateY(-3px);
  z-index: 9999;
}

.item-color:has(+ * + *:hover) {
  transform: scale(1.15);
  z-index: 999;
}

/* 弹窗 */
.popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.popup-card {
  background: #ffffff;
  border: 4px solid #000;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 6px 6px 0 0 #000;
  width: 300px;
  max-width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  animation: popIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.popup-color-block {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 0 #000;
}

.popup-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.popup-name {
  font-size: 24px;
  font-weight: 900;
  color: #111;
}

.popup-hex {
  font-size: 18px;
  font-weight: 700;
  color: #555;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
}

.popup-desc {
  font-size: 14px;
  color: #888;
  margin-top: 2px;
}

.popup-actions {
  display: flex;
  gap: 12px;
  width: 100%;
}

.popup-copy-btn,
.popup-close-btn {
  flex: 1;
  padding: 10px 0;
  border: 3px solid #000;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 3px 3px 0 0 #000;
  transition: all 150ms ease;
}

.popup-copy-btn {
  background: #fef3c7;
  color: #000;
}

.popup-close-btn {
  background: #f0f0f0;
  color: #333;
}

.popup-copy-btn:hover,
.popup-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0 0 #000;
}

.popup-copy-btn:active,
.popup-close-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #000;
}

/* 响应式 */
@media (max-width: 480px) {
  .item-color {
    width: 32px;
    height: 40px;
  }
  .item-color::after {
    width: 32px;
    height: 32px;
  }
  .comic-panel {
    padding: 0.8rem;
  }
}
</style>

