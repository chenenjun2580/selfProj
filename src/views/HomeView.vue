<script setup lang="ts">
import { ref } from 'vue'
import DeepSpaceBackground from '@/components/DeepSpaceBackground.vue'
import StickerGlobe from '@/components/StickerGlobe.vue'
import SearchBar from '@/components/SearchBar.vue'

const searchOffset = ref(0)

// 球体缩放: 默认距离11, 放大后距离变小
// 放大(距离<11) → 最右边, 缩小/默认(距离>=11) → 中间
function onZoom(distance: number) {
  searchOffset.value = distance < 11 ? 1 : 0
}
</script>

<template>
  <div class="home-page">
    <DeepSpaceBackground />
    <div
      class="search-wrapper"
      :style="{
        left: searchOffset === 0 ? '50%' : '',
        right: searchOffset > 0 ? '40px' : '',
        transform: searchOffset === 0 ? 'translateX(-50%)' : 'none',
      }"
    >
      <SearchBar />
    </div>
    <StickerGlobe @zoom="onZoom" />
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.search-wrapper {
  position: fixed;
  top: 28px;
  z-index: 10;
  transition: left 0.3s ease, right 0.3s ease, transform 0.3s ease;
}
</style>
