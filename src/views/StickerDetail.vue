<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { StickerData } from '@/data/stickers'

const route = useRoute()
const router = useRouter()

const stickerData = ref<StickerData | null>(null)
const pageReady = ref(false)

onMounted(() => {
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
    <!-- 返回按钮 -->
    <button class="back-btn" :class="{ visible: pageReady }" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- From Uiverse.io by Praashoo7 -->
    <div class="card" :class="{ active: pageReady }">
      <div class="sticker-emoji">{{ stickerData.emoji }}</div>
      <div class="heading">{{ stickerData.text }}</div>
      <div class="category-tag" :style="{ borderColor: stickerData.tagColor, color: stickerData.tagColor }">
        {{ stickerData.category }}系列
      </div>
      <div class="icons">
        <a href="#" class="icon-btn like-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#" class="icon-btn share-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37063L8.08259 9.16716C7.54305 8.4449 6.72433 8 5.8 8C4.14315 8 2.8 9.34315 2.8 11C2.8 12.6569 4.14315 14 5.8 14C6.72433 14 7.54305 13.5551 8.08259 12.8328L15.0227 16.6294C15.0077 16.7508 15 16.8745 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C17.0757 14 16.2569 14.4449 15.7174 15.1672L8.77731 11.3706C8.79235 11.2492 8.8 11.1255 8.8 11C8.8 10.8745 8.79235 10.7508 8.77731 10.6294L15.7174 6.83284C16.2569 7.5551 17.0757 8 18 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#" class="icon-btn save-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
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
  background: #0a0a0f;
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
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
  background: rgba(255,255,255,0.12);
  color: #fff;
  border-color: rgba(255,255,255,0.25);
}

/* From Uiverse.io by Praashoo7 */
.card {
  position: relative;
  width: 19em;
  height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #171717;
  color: white;
  font-family: Montserrat;
  font-weight: bold;
  padding: 1em 2em 1em 1em;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  row-gap: 1em;
  opacity: 0;
  transform: scale(0.7) translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.card.active {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* 便签 emoji */
.sticker-emoji {
  font-size: 5em;
  z-index: 5;
  animation: move 10s ease-in-out infinite;
  cursor: grab;
}
.sticker-emoji:active {
  cursor: grabbing;
}

.icons svg {
  width: 20px;
  height: 20px;
}

/* 分类标签 */
.category-tag {
  z-index: 2;
  font-size: 0.8em;
  font-weight: 600;
  padding: 0.25em 1em;
  border: 1px solid;
  border-radius: 1em;
  transition: 0.4s ease-in-out;
  opacity: 0.8;
}

.card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  inset: -3px;
  border-radius: 10px;
  background: radial-gradient(#858585, transparent, transparent);
  transform: translate(-5px, 250px);
  transition: 0.4s ease-in-out;
  z-index: -1;
}
.card:hover::before {
  width: 150%;
  height: 100%;
  margin-left: -4.25em;
}
.card::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 20px;
  background: rgb(23, 23, 23, 0.7);
  transition: all 0.4s ease-in-out;
  z-index: -1;
}

.heading {
  z-index: 2;
  transition: 0.4s ease-in-out;
}
.card:hover .heading {
  letter-spacing: 0.025em;
}

.heading::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 1;
  box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
    60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
    520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
  z-index: -1;
  transition: 1s ease;
  animation: 1s glowing-stars linear alternate infinite;
  animation-delay: 0s;
}
.icons::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 1;
  box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
    110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
    220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
  z-index: -1;
  transition: 1.5s ease;
  animation: 1s glowing-stars linear alternate infinite;
  animation-delay: 0.4s;
}
.icons::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 1;
  box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
    380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
    200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
    120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
  z-index: -1;
  transition: 2s ease;
  animation: 1s glowing-stars linear alternate infinite;
  animation-delay: 0.8s;
}
.card:hover .heading::before,
.card:hover .icons::before,
.card:hover .icons::after {
  filter: blur(3px);
}

.sticker-emoji:active {
  cursor: grabbing;
}
.sticker-emoji:active + .heading::before {
  box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
    240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
    246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
    260px 45px #9b40fc, 262px 40px #9b40fc;
  animation: none;
  filter: blur(0);
  border-radius: 2px;
  width: 0.45em;
  height: 0.45em;
  scale: 0.65;
  transform: translateX(9em) translateY(1em);
}
.sticker-emoji:active ~ .icons::before {
  box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
    262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
    275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
    275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
  animation: none;
  filter: blur(0);
  border-radius: 2px;
  width: 0.45em;
  height: 0.45em;
  scale: 0.65;
  transform: translateX(9em) translateY(1em);
}
.sticker-emoji:active ~ .icons::after {
  box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
    250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
    262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
    274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
    234px 60px #9b40fc, 234px 60px #9b40fc;
  animation: none;
  filter: blur(0);
  border-radius: 2px;
  width: 0.45em;
  height: 0.45em;
  scale: 0.65;
  transform: translateX(9em) translateY(1.25em);
}

.heading::after {
  content: "";
  top: -8.5%;
  left: -8.5%;
  position: absolute;
  width: 7.5em;
  height: 7.5em;
  border: none;
  outline: none;
  border-radius: 50%;
  background: #f9f9fb;
  box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
    0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
  transition: 0.4s ease-in-out;
  z-index: -1;
}
.card:hover .heading::after {
  box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
    0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 1em;
  z-index: 1;
}

.icon-btn {
  position: relative;
  transition: 0.4s ease-in-out;
}
.icon-btn:after {
  content: "";
  position: absolute;
  width: 0.5em;
  height: 0.5em;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
    0px 0px 10px rgba(192, 192, 192, 0.5);
  border-radius: 50%;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.icon-btn svg path {
  stroke: #808080;
  transition: 0.4s ease-in-out;
}
.like-btn:hover svg path {
  stroke: #ff6b6b;
}
.share-btn:hover svg path {
  stroke: #4ecdc4;
}
.save-btn:hover svg path {
  stroke: #ffe66d;
}
.icon-btn svg {
  transition: 0.3s ease-in-out;
}
.icon-btn:hover svg {
  scale: 1.25;
}
.icon-btn:hover:after {
  scale: 4;
  transform: translateX(0.09em) translateY(0.09em);
}

.like-btn::before {
  content: "";
  position: absolute;
  top: -700%;
  left: 1050%;
  rotate: -45deg;
  width: 5em;
  height: 1px;
  background: linear-gradient(90deg, #ffffff, transparent);
  animation: 4s shootingStar ease-in-out infinite;
  transition: 1s ease;
  animation-delay: 1s;
}
.share-btn::before {
  content: "";
  position: absolute;
  top: -1300%;
  left: 850%;
  rotate: -45deg;
  width: 5em;
  height: 1px;
  background: linear-gradient(90deg, #ffffff, transparent);
  animation: 4s shootingStar ease-in-out infinite;
  animation-delay: 3s;
}
.save-btn::before {
  content: "";
  position: absolute;
  top: -2100%;
  left: 850%;
  rotate: -45deg;
  width: 5em;
  height: 1px;
  background: linear-gradient(90deg, #ffffff, transparent);
  animation: 4s shootingStar ease-in-out infinite;
  animation-delay: 5s;
}
.card:hover .like-btn::before,
.card:hover .share-btn::before,
.card:hover .save-btn::before {
  filter: blur(3px);
}
.sticker-emoji:active ~ .icons .like-btn::before,
.sticker-emoji:active ~ .icons .share-btn::before,
.sticker-emoji:active ~ .icons .save-btn::before {
  animation: none;
  opacity: 0;
}

@keyframes shootingStar {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-55em) translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateX(-70em) translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
}

@keyframes move {
  0% {
    transform: translateX(0em) translateY(0em);
  }
  25% {
    transform: translateY(-1em) translateX(-1em);
    rotate: -10deg;
  }
  50% {
    transform: translateY(1em) translateX(-1em);
  }
  75% {
    transform: translateY(-1.25em) translateX(1em);
    rotate: 10deg;
  }
  100% {
    transform: translateX(0em) translateY(0em);
  }
}

@keyframes glowing-stars {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
