<script setup lang="ts">
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import DeepSpaceBackground from '@/components/DeepSpaceBackground.vue'
import StickerGlobe from '@/components/StickerGlobe.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { StickerData } from '@/data/stickers'

const router = useRouter()
const searchOffset = ref(0)
const globeRef = ref<InstanceType<typeof StickerGlobe> | null>(null)

// 过渡动画状态
const expanding = ref(false)
const expandSticker = ref<StickerData | null>(null)
const expandOrigin = ref({ x: 0, y: 0 })

// 球体缩放: 默认距离11, 放大后距离变小
function onZoom(distance: number) {
  searchOffset.value = distance < 11 ? 1 : 0
}

function onSearch(keyword: string) {
  // 隐形跳转口令：AAA 跳通用告白页，夏馨怡 跳专属告白页
  const kw = keyword.trim().toUpperCase()
  if (kw === '冯若兮宝宝') {
    router.push('/love-images')
    return
  }
  if (kw === '夏馨怡') {
    router.push('/xia-xinyi')
    return
  }
  globeRef.value?.searchSticker(keyword)
}

function onStickerClick(data: StickerData) {
  // 记录便签数据，从屏幕中心展开
  expandSticker.value = data
  expandOrigin.value = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }

  // 触发展开动画
  requestAnimationFrame(() => {
    expanding.value = true
  })

  // 动画结束后跳转
  setTimeout(() => {
    const dataStr = encodeURIComponent(JSON.stringify(data))
    router.push({ path: '/sticker', query: { data: dataStr } })
  }, 700)
}

// 从详情页返回时，清除过渡动画残留
onActivated(() => {
  expanding.value = false
  expandSticker.value = null
})
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
      <SearchBar @search="onSearch" />
    </div>
    <StickerGlobe ref="globeRef" @zoom="onZoom" @sticker-click="onStickerClick" />

    <!-- 全屏过渡动画层 -->
    <div v-if="expandSticker" class="expand-overlay" :class="{ active: expanding }">
      <div
        class="expand-card"
        :style="{
          background: expandSticker.color,
          left: expandOrigin.x + 'px',
          top: expandOrigin.y + 'px',
        }"
      >
        <div class="expand-tape" :style="{ background: expandSticker.tagColor }"></div>
        <div class="expand-emoji">{{ expandSticker.emoji }}</div>
        <div class="expand-category" :style="{ color: expandSticker.tagColor }">
          {{ expandSticker.category }}系列
        </div>
        <div class="expand-text">{{ expandSticker.text }}</div>
      </div>
    </div>
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

/* 全屏过渡动画层 */
.expand-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.expand-overlay.active {
  opacity: 1;
}

.expand-card {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  transform: translate(-50%, -50%) scale(0);
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-overlay.active .expand-card {
  transform: translate(-50%, -50%) scale(calc(max(100vw, 100vh) / 28));
  border-radius: 0;
}

/* 卡片内部元素 */
.expand-tape {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 14%;
  border-radius: 0 0 8px 8px;
  opacity: 0.65;
}

.expand-emoji {
  font-size: 14px;
  line-height: 1;
  transition: font-size 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-overlay.active .expand-emoji {
  font-size: 120px;
}

.expand-category {
  font-size: 4px;
  font-weight: 600;
  margin-top: 1px;
  opacity: 0.8;
  transition: font-size 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-overlay.active .expand-category {
  font-size: 24px;
  margin-top: 8px;
}

.expand-text {
  font-size: 5px;
  font-weight: 700;
  color: #333;
  margin-top: 1px;
  letter-spacing: 0.5px;
  transition: font-size 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.expand-overlay.active .expand-text {
  font-size: 42px;
  margin-top: 10px;
}
</style>
