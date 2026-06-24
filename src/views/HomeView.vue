<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="home">
    <h1>Vue 3 项目已就绪 🚀</h1>
    <div class="card">
      <button @click="counter.increment">
        Count: {{ counter.count }}
      </button>
    </div>
    <p class="tip">编辑 <code>src/views/HomeView.vue</code> 开始开发</p>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #42d392, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card {
  margin: 1.5rem 0;
}

button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}

button:hover {
  border-color: #42d392;
  background: #2a2a2a;
}

.tip {
  color: #888;
  font-size: 0.9rem;
}

code {
  background: #2a2a2a;
  padding: 0.2em 0.5em;
  border-radius: 4px;
  color: #42d392;
}
</style>
