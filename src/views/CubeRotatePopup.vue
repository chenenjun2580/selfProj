<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div v-if="visible" class="cube-rotate-overlay" @click.self="emit('close')">
    <div class="cube-rotate-card">
      <!-- From Uiverse.io by ElsayedShamsEldeen -->
      <div class="cube-container">
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
      <button class="cube-close-btn" @click="emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
.cube-rotate-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: cubeFadeIn 0.25s ease;
  z-index: 9999;
}

@keyframes cubeFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.cube-rotate-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: cubePopIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes cubePopIn {
  from {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.cube-close-btn {
  padding: 10px 32px;
  border: 3px solid #000;
  border-radius: 8px;
  background: #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
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

/* From Uiverse.io by ElsayedShamsEldeen */
.cube-container {
  width: 200px;
  height: 200px;
  perspective: 800px;
  margin: 50px auto;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate 15s infinite linear;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  color: rgb(21, 153, 214);
  font-size: 18px;
  text-align: center;
  line-height: 200px;
  background: transparent;
  opacity: 0.9;
  border: 2px solid;
  border-image: linear-gradient(
    90deg,
    rgba(14, 8, 110, 1) 0%,
    rgba(15, 15, 167, 1) 26%,
    rgba(20, 45, 255, 1) 85%
  );
  box-shadow: 0 0 100px rgba(8, 178, 245, 0.61);
}

.front {
  transform: translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.back {
  transform: rotateY(180deg) translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.right {
  transform: rotateY(90deg) translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.left {
  transform: rotateY(-90deg) translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.top {
  transform: rotateX(90deg) translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.bottom {
  transform: rotateX(-90deg) translateZ(100px);
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.cube-container:hover .cube {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>
