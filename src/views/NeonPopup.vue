<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div v-if="visible" class="neon-popup-overlay" @click.self="emit('close')">
    <div class="neon-popup-card">
      <!-- From Uiverse.io by Spacious74 -->
      <div class="card">
        <div class="lc cavity"></div>
        <div class="lc line"></div>
        <div class="led"></div>
        <div class="text">不知道要写什么</div>
      </div>
      <button class="neon-close-btn" @click="emit('close')">关闭</button>
    </div>
  </div>
</template>

<style scoped>
.neon-popup-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: neonFadeIn 0.25s ease;
  z-index: 9999;
}

@keyframes neonFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.neon-popup-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: neonPopIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes neonPopIn {
  from {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.neon-close-btn {
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

.neon-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0 0 #000;
}

.neon-close-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #000;
}

/* From Uiverse.io by Spacious74 */
.card {
  width: 270px;
  height: 220px;
  background-color: #e8e9eb;
  border-radius: 70px;
  box-shadow: inset 0px 35px 25px #ffffffe0, inset 10px 0px 25px #0000004b,
    inset 40px 0px 20px #ffffff, inset -10px 0px 25px #0000004b,
    inset -40px 0px 20px #fff, inset 0px 10px 10px #000000e0,
    inset 0px -15px 25px #00000036, 10px 25px 40px -10px #00000060;
  position: relative;
}

.card .line {
  width: 100%;
  height: 2px;
  background-color: #b4b2b2;
  margin-top: 30%;
  position: relative;
}

.line::after,
.line::before {
  content: "";
  position: absolute;
  width: 5%;
  height: 2px;
  background-color: #fff;
}

.line::before {
  right: 0;
}

.card .cavity {
  width: 150px;
  height: 20px;
  background: linear-gradient(180deg, #d6d6d6, #fff);
  border-radius: 200px;
  margin: auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 30%);
}

.card .led {
  width: 7px;
  aspect-ratio: 1;
  background-color: #66f66f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
  border-radius: 100px;
  box-shadow: 0 0 6px #3eff4b;
}

.card .text {
  text-align: center;
  margin-top: 70px;
  color: #00000036;
  font-weight: bolder;
}
</style>
