<script setup lang="ts">
defineProps<{ visible: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <!-- From Uiverse.io by csemszepp -->
  <div class="cube-popup-wrapper" @click.self="$emit('close')">
    <div class="cube-popup-card">
      <div class="container">
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
        <div class="cube">
          <div style="--x:-1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:0; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
          <div style="--x:1; --y:0;">
            <span style="--i:3;"></span>
            <span style="--i:2;"></span>
            <span style="--i:1;"></span>
          </div>
        </div>
      </div>
      <button class="cube-close-btn" @click="$emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by csemszepp */
.cube-popup-wrapper {
  position: fixed;
  inset: 0;
  z-index: 10000;
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

.cube-popup-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.container {
  position: relative;
  top: -80px;
  transform: skewY(-20deg);
  animation: animate 5s linear infinite;
}

.cube {
  position: relative;
  z-index: 2;
}

.cube:nth-child(2) {
  z-index: 1;
  translate: -60px -60px;
}

.cube:nth-child(3) {
  z-index: 3;
  translate: 60px 60px;
}

.cube div {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  translate: calc(-70px * var(--x)) calc(-60px * var(--y));
}

.cube span {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #dcdcdc;
  z-index: calc(1 * var(--i));
  transition: 1.5s;
}

.cube span:hover {
  transition: 0s;
  background: #ef4149;
  filter: drop-shadow(0 0 30px #ef4149);
}

.cube span:hover::before,
.cube span:hover::after {
  transition: 0s;
  background: #ef4149;
}

.cube span::before {
  content: "";
  position: absolute;
  left: -40px;
  width: 40px;
  height: 100%;
  background: #fff;
  transform-origin: right;
  transform: skewY(45deg);
  transition: 1.5s;
}

.cube span::after {
  content: "";
  position: absolute;
  top: -40px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: #f2f2f2;
  transform-origin: bottom;
  transform: skewX(45deg);
  transition: 1.5s;
}

.cube-close-btn {
  padding: 10px 32px;
  border: 3px solid #000;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  background: #f0f0f0;
  color: #333;
  box-shadow: 3px 3px 0 0 #000;
  transition: all 150ms ease;
}

.cube-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0 0 #000;
}

.cube-close-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #000;
}
</style>
