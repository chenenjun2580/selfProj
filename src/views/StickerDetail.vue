<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { StickerData } from '@/data/stickers'

const route = useRoute()
const router = useRouter()

const stickerData = ref<StickerData | null>(null)
const pageReady = ref(false)

onMounted(() => {
  // 从 query 解析便签数据
  const dataStr = route.query.data as string
  if (dataStr) {
    try {
      stickerData.value = JSON.parse(decodeURIComponent(dataStr))
    } catch {
      router.replace('/')
      return
    }
  } else {
    router.replace('/')
    return
  }

  // 延迟触发入场动画
  requestAnimationFrame(() => {
    pageReady.value = true
  })
})

function goBack() {
  pageReady.value = false
  setTimeout(() => {
    router.push('/')
  }, 300)
}
</script>

<template>
  <div class="detail-page" v-if="stickerData">
    <!-- 背景层 -->
    <div class="detail-bg" :class="{ active: pageReady }">
      <div class="bg-particles"></div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" :class="{ visible: pageReady }" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 便签卡片 -->
    <div class="detail-card" :class="{ active: pageReady }">
      <!-- 顶部彩色胶条 -->
      <div class="card-tape" :style="{ background: stickerData.tagColor }"></div>

      <!-- Emoji -->
      <div class="card-emoji" :class="{ show: pageReady }">{{ stickerData.emoji }}</div>

      <!-- 分类标签 -->
      <div class="card-category" :class="{ show: pageReady }">
        <span class="category-badge" :style="{ background: stickerData.tagColor + '30', color: stickerData.tagColor, borderColor: stickerData.tagColor }">
          {{ stickerData.category }}系列
        </span>
      </div>

      <!-- 主标题 -->
      <h1 class="card-title" :class="{ show: pageReady }">{{ stickerData.text }}</h1>

      <!-- 装饰线 -->
      <div class="card-divider" :class="{ show: pageReady }"></div>

      <!-- 描述内容 -->
      <p class="card-desc" :class="{ show: pageReady }">
        这里是「{{ stickerData.text }}」的详细内容区域。<br/>
        你可以在这里添加更多文案、图片或相关素材。
      </p>

      <!-- 底部装饰 -->
      <div class="card-footer" :class="{ show: pageReady }">
        <div class="color-dot" v-for="i in 5" :key="i" :style="{ background: stickerData.tagColor, opacity: 1 - i * 0.15 }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* 背景 */
.detail-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 40%, #0a0a12 100%);
  opacity: 0;
  transition: opacity 0.6s ease;
}
.detail-bg.active {
  opacity: 1;
}

.bg-particles {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.2), transparent),
    radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.25), transparent),
    radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,0.35), transparent),
    radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.2), transparent),
    radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.25), transparent);
  background-size: 200px 200px;
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.8);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  z-index: 110;
  backdrop-filter: blur(12px);
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.back-btn.visible {
  opacity: 1;
  transform: translateX(0);
}
.back-btn:hover {
  background: rgba(255,255,255,0.14);
  color: #fff;
  border-color: rgba(255,255,255,0.25);
}

/* 便签卡片 */
.detail-card {
  position: relative;
  width: 420px;
  max-width: 90vw;
  padding: 50px 40px 40px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 28px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 80px rgba(100,100,255,0.05);
  text-align: center;
  transform: scale(0.7) translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.detail-card.active {
  transform: scale(1) translateY(0);
  opacity: 1;
}

/* 顶部胶条 */
.card-tape {
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 26px;
  border-radius: 0 0 14px 14px;
  opacity: 0.7;
}

/* Emoji */
.card-emoji {
  font-size: 80px;
  line-height: 1;
  margin-bottom: 16px;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
}
.card-emoji.show {
  opacity: 1;
  transform: scale(1);
}

/* 分类标签 */
.card-category {
  margin-bottom: 12px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease 0.25s;
}
.card-category.show {
  opacity: 1;
  transform: translateY(0);
}
.category-badge {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid;
  letter-spacing: 0.5px;
}

/* 主标题 */
.card-title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.5s ease 0.35s;
}
.card-title.show {
  opacity: 1;
  transform: translateY(0);
}

/* 装饰线 */
.card-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  margin: 0 auto 20px;
  border-radius: 1px;
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.5s ease 0.45s;
}
.card-divider.show {
  opacity: 1;
  transform: scaleX(1);
}

/* 描述 */
.card-desc {
  font-size: 15px;
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
  letter-spacing: 0.5px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease 0.5s;
}
.card-desc.show {
  opacity: 1;
  transform: translateY(0);
}

/* 底部圆点 */
.card-footer {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease 0.6s;
}
.card-footer.show {
  opacity: 1;
  transform: translateY(0);
}
.color-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
