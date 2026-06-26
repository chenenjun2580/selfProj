<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ visible: boolean }>()
defineEmits<{ close: [] }>()

const snapChecked = ref(false)

function toggleSnap() {
  snapChecked.value = !snapChecked.value
  if (snapChecked.value) {
    setTimeout(() => {
      snapChecked.value = false
    }, 5000)
  }
}
</script>

<template>
  <!-- From Uiverse.io by chase2k25 -->
  <div class="camera-popup-wrapper" @click.self="$emit('close')">
    <div class="camera-popup-card">
      <div class="container">
        <div class="camera-wrapper">
          <input type="checkbox" id="snap" class="shutter-input" :checked="snapChecked" />

          <div class="flash-overlay"></div>

          <div class="camera-body">
            <div class="rainbow-stripe"></div>
            <div class="viewfinder"></div>
            <div class="flash-unit"></div>

            <div class="lens-housing">
              <div class="lens-ring"></div>
              <div class="lens-glass">
                <div class="aperture"></div>
              </div>
            </div>

            <div class="label-plate">ONE-STEP</div>

            <div class="shutter-btn">
              <label for="snap" class="shutter-label" @click="toggleSnap"></label>
            </div>

            <div class="bottom-lip"></div>
          </div>

          <div class="film-slot">
            <div class="film-image">
              <div class="film-content"></div>
            </div>
          </div>
        </div>
      </div>
      <button class="camera-close-btn" @click="$emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by chase2k25 */
.camera-popup-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  --plastic-beige: #f4f1ea;
  --plastic-shadow: #dcd8cf;
  --lens-black: #111;
  --stripe-red: #e73639;
  --stripe-orange: #f28c31;
  --stripe-yellow: #fcd958;
  --stripe-green: #67b848;
  --stripe-blue: #2c93d8;
  margin: 0;
  background-color: #222;
  height: 450px;
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  font-family: "Righteous", cursive;
  overflow: hidden;
  background-image: repeating-linear-gradient(
      45deg,
      #1a1a1a 0,
      #1a1a1a 1px,
      transparent 1px,
      transparent 10px
    ),
    radial-gradient(#333, #000);
  border-radius: 16px;
  position: relative;
}

.camera-wrapper {
  position: relative;
  width: 340px;
  height: 400px;
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.shutter-input {
  display: none;
}

.camera-body {
  position: relative;
  width: 320px;
  height: 340px;
  background-color: var(--plastic-beige);
  border-radius: 30px 30px 40px 40px;
  box-shadow:
    inset 0 0 20px rgba(0, 0, 0, 0.1),
    0 20px 40px rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  overflow: hidden;
}

.camera-body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 30px;
  box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.8);
  pointer-events: none;
  z-index: 20;
}

.rainbow-stripe {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  background: linear-gradient(
    to right,
    var(--stripe-red) 20%,
    var(--stripe-orange) 20% 40%,
    var(--stripe-yellow) 40% 60%,
    var(--stripe-green) 60% 80%,
    var(--stripe-blue) 80%
  );
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.bottom-lip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: #e6e2d8;
  border-top: 2px solid #ccc;
  z-index: 15;
}

.lens-housing {
  width: 180px;
  height: 180px;
  background: #111;
  border-radius: 50%;
  margin-top: 40px;
  position: relative;
  z-index: 5;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.4),
    0 0 0 4px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lens-ring {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px dashed #444;
  position: absolute;
  animation: focus-turn 10s linear infinite;
}

@keyframes focus-turn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.lens-glass {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #444, #000 70%);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 10px #000;
}

.lens-glass::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at 60% 40%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 10%
    ),
    radial-gradient(
      circle at 40% 60%,
      rgba(100, 0, 255, 0.2) 0%,
      transparent 20%
    ),
    linear-gradient(
      135deg,
      transparent 45%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 55%
    );
}

.aperture {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: #050505;
  border-radius: 50%;
  border: 1px solid #333;
}

.viewfinder {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 60px;
  height: 50px;
  background: #222;
  border-radius: 5px;
  border: 4px solid #ccc;
  box-shadow: inset 0 0 10px #000;
  overflow: hidden;
}

.viewfinder::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
}

.flash-unit {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 80px;
  height: 30px;
  background: #eee;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-image: repeating-linear-gradient(
    90deg,
    #ddd 0,
    #ddd 2px,
    transparent 2px,
    transparent 4px
  );
}

.shutter-btn {
  position: absolute;
  bottom: 40px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #ff4d4d, #cc0000);
  border-radius: 50%;
  border: 4px solid #ddd;
  cursor: pointer;
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.4);
  z-index: 20;
  transition: transform 0.1s;
}

.shutter-btn:active {
  transform: scale(0.95);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.label-plate {
  position: absolute;
  bottom: 40px;
  left: 30px;
  font-size: 0.8rem;
  color: #888;
  background: #e6e2d8;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.film-slot {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 280px;
  background: #fff;
  padding: 15px 15px 50px 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.film-image {
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  position: relative;
}

.film-content {
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E"),
    linear-gradient(to bottom, #87ceeb, #228b22);
  background-size: cover;
  opacity: 0;
}

.film-content::after {
  content: "⛰";
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 4rem;
  color: #333;
  opacity: 0.8;
}

.film-content::before {
  content: "☀";
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3rem;
  color: yellow;
  opacity: 0.8;
}

#snap:checked ~ .film-slot {
  transform: translate(-50%, 220px) rotate(-2deg);
  z-index: 5;
}

#snap:checked ~ .film-slot .film-content {
  animation: develop 4s ease-in forwards;
  animation-delay: 0.6s;
}

@keyframes develop {
  0% {
    opacity: 0;
    filter: grayscale(100%) contrast(200%);
  }
  50% {
    opacity: 0.5;
    filter: grayscale(50%) contrast(150%);
  }
  100% {
    opacity: 1;
    filter: grayscale(0%) contrast(100%) sepia(20%);
  }
}

.flash-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  z-index: 100;
}

#snap:checked ~ .flash-overlay {
  animation: flash-bang 0.2s ease-out;
}

@keyframes flash-bang {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

#snap:checked ~ .camera-body .shutter-btn {
  transform: scale(0.95);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
}

.shutter-label {
  width: 100%;
  height: 100%;
  display: block;
}

.camera-close-btn {
  margin-top: 24px;
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

.camera-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0 0 #000;
}

.camera-close-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #000;
}
</style>
