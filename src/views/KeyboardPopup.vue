<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="keyboard-overlay" @click.self="emit('close')">
      <div class="keyboard-card">
        <div class="keyboard">
          <div class="row">
            <div class="key function-key">esc</div>
            <div class="key function-key">F1</div>
            <div class="key function-key">F2</div>
            <div class="key function-key">F3</div>
            <div class="key function-key">F4</div>
            <div class="key function-key">F5</div>
            <div class="key function-key">F6</div>
            <div class="key function-key">F7</div>
            <div class="key function-key">F8</div>
            <div class="key function-key">F9</div>
            <div class="key function-key">F10</div>
            <div class="key function-key">F11</div>
            <div class="key function-key">F12</div>
            <div class="key eject-key">⏏</div>
          </div>

          <div class="row">
            <div class="key">`</div>
            <div class="key">1</div>
            <div class="key">2</div>
            <div class="key">3</div>
            <div class="key">4</div>
            <div class="key">5</div>
            <div class="key">6</div>
            <div class="key">7</div>
            <div class="key">8</div>
            <div class="key">9</div>
            <div class="key">0</div>
            <div class="key">-</div>
            <div class="key">=</div>
            <div class="key delete-key">delete</div>
          </div>

          <div class="row">
            <div class="key tab-key">tab</div>
            <div class="key">Q</div>
            <div class="key">W</div>
            <div class="key">E</div>
            <div class="key">R</div>
            <div class="key">T</div>
            <div class="key">Y</div>
            <div class="key">U</div>
            <div class="key">I</div>
            <div class="key">O</div>
            <div class="key">P</div>
            <div class="key">[</div>
            <div class="key">]</div>
            <div class="key backslash-key">\</div>
          </div>

          <div class="row">
            <div class="key caps-lock-key">caps lock</div>
            <div class="key">A</div>
            <div class="key">S</div>
            <div class="key">D</div>
            <div class="key">F</div>
            <div class="key">G</div>
            <div class="key">H</div>
            <div class="key">J</div>
            <div class="key">K</div>
            <div class="key">L</div>
            <div class="key">;</div>
            <div class="key">'</div>
            <div class="key return-key">return</div>
          </div>

          <div class="row">
            <div class="key shift-key">shift</div>
            <div class="key">Z</div>
            <div class="key">X</div>
            <div class="key">C</div>
            <div class="key">V</div>
            <div class="key">B</div>
            <div class="key">N</div>
            <div class="key">M</div>
            <div class="key">,</div>
            <div class="key">.</div>
            <div class="key">/</div>
            <div class="key shift-key">shift</div>
          </div>

          <div class="row">
            <div class="key">fn</div>
            <div class="key ctrl-key">ctrl</div>
            <div class="key alt-key">⌥</div>
            <div class="key command-key">⌘</div>
            <div class="key space-key"></div>
            <div class="key command-key">⌘</div>
            <div class="key alt-key">⌥</div>
            <div class="key arrow-key">◀</div>
            <div class="key arrow-key">▼</div>
            <div class="key arrow-key">▲</div>
            <div class="key arrow-key">▶</div>
          </div>
        </div>
        <button class="keyboard-close-btn" @click="emit('close')">关闭</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.keyboard-overlay {
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

.keyboard-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

.keyboard-close-btn {
  width: 120px;
  padding: 10px 0;
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

.keyboard-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0 0 #000;
}

.keyboard-close-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 0 #000;
}

/* From Uiverse.io by LightAndy1 */
.keyboard {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border-radius: 16px;
  background-color: #d3d3d3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 600px;
  max-width: 90vw;
  user-select: none;
}

.row {
  display: flex;
  gap: 3px;
}

.key {
  background-color: #f0f0f0;
  border: 1px solid #bbb;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  min-width: 35px;
  text-align: center;
  padding: 8px 5px;
  font-size: 10px;
  color: #333;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.key:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.key:active {
  transform: translateY(2px);
}

.function-key {
  max-height: 25px;
  padding: 4px;
}

.eject-key {
  margin-left: 15px;
  padding: 4px 20px;
}

.delete-key {
  padding: 8px 20px;
}

.tab-key,
.backslash-key,
.caps-lock-key,
.return-key {
  flex: 2;
}

.shift-key {
  flex: 3;
}

.space-key {
  flex: 5;
  padding: 8px;
  min-width: 175px;
}

.command-key,
.alt-key {
  min-width: 35px;
  padding: 2px;
  font-size: 16px;
}

.arrow-key {
  min-width: 30px;
}

@media (max-width: 640px) {
  .keyboard {
    padding: 10px;
    gap: 3px;
  }
  .key {
    min-width: 22px;
    padding: 6px 2px;
    font-size: 8px;
    border-radius: 4px;
  }
  .function-key {
    max-height: 20px;
    padding: 2px;
  }
  .eject-key {
    margin-left: 8px;
    padding: 2px 10px;
  }
  .delete-key {
    padding: 6px 12px;
  }
  .space-key {
    min-width: 80px;
  }
}
</style>
