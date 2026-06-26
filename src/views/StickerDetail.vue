<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { StickerData } from '@/data/stickers'

const route = useRoute()
const router = useRouter()

const stickerData = ref<StickerData | null>(null)
const pageReady = ref(false)
const isConfession = ref(false)
const isBirthday = ref(false)
const isBirthdayCard = ref(false)
const isBirthdayPrank = ref(false)
const isGiftBox = ref(false)
const isFirework = ref(false)
const isBeautiful = ref(false)

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

  const id = stickerData.value?.id || ''

  // 判断是否为告白情话
  if (id === 'emo-3') {
    isConfession.value = true
  }
  // 判断是否为生日贺卡（翻盖贺卡）
  if (id === 'birthday-3') {
    isBirthdayCard.value = true
  }
  // 判断是否为生日搞怪（年龄恶搞）
  if (id === 'birthday-6') {
    isBirthdayPrank.value = true
  }
  // 判断是否为礼物盲盒（周岁纪念、礼物文案）
  if (id === 'birthday-2' || id === 'birthday-8') {
    isGiftBox.value = true
  }
  // 判断是否为生日系列（蛋糕吹蜡烛）
  if (id.startsWith('birthday-') && id !== 'birthday-3' && id !== 'birthday-6' && id !== 'birthday-2' && id !== 'birthday-8') {
    isBirthday.value = true
  }
  // 判断是否为烟花秀（节日祝福）
  if (id === 'bless-9') {
    isFirework.value = true
  }
  // 判断是否为好看的
  if (id.startsWith('beautiful-')) {
    isBeautiful.value = true
  }

  requestAnimationFrame(() => {
    pageReady.value = true
  })
})

function goBack() {
  pageReady.value = false
  setTimeout(() => {
    router.replace('/')
  }, 300)
}

function onSaveClick() {
  if (isConfession.value) {
    router.push('/confession')
  } else if (isBirthdayCard.value) {
    router.push('/birthday-card')
  } else if (isBirthdayPrank.value) {
    router.push('/birthday-prank')
  } else if (isGiftBox.value) {
    router.push('/gift-box')
  } else if (isFirework.value) {
    router.push('/firework')
  } else if (isBirthday.value) {
    router.push('/birthday-cake')
  } else if (isBeautiful.value) {
    router.push('/beautiful')
  }
}
</script>

<template>
  <div class="detail-page" v-if="stickerData">
    <!-- From Uiverse.io by amir_6539 - 星空背景 -->
    <div class="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>

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
        <button
          class="play-btn"
          :class="{ 'confession-btn': isConfession, 'birthday-btn': isBirthday || isBirthdayCard || isBirthdayPrank || isGiftBox, 'beautiful-btn': isBeautiful, 'firework-btn': isFirework }"
          @click="onSaveClick"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36px" height="36px">
            <rect width="36" height="36" x="0" y="0" fill="#fdd835"></rect>
            <path fill="#e53935" d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"></path>
            <path fill="#b71c1c" d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"></path>
            <path fill="#212121" d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"></path>
            <path fill="#01579b" d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"></path>
            <path fill="#212121" d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"></path>
            <path fill="#81d4fa" d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"></path>
            <path fill="#212121" d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"></path>
            <path fill="#e1f5fe" d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"></path>
          </svg>
          <span class="now">click!</span>
          <span class="play">me</span>
        </button>
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
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
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

/* From Uiverse.io by barisdogansutcu */
.play-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  color: white;
  text-shadow: 2px 2px rgb(116, 116, 116);
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px black;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 17px;
  background-color: hsl(49deg 98% 60%);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.play-btn:active {
  transform: scale(0.9);
  transition: all 100ms ease;
}

.play-btn svg {
  transition: all 0.5s ease;
  z-index: 2;
}

.play {
  transition: all 0.5s ease;
  transition-delay: 300ms;
}

.play-btn:hover svg {
  transform: scale(3) translate(50%);
}

.now {
  position: absolute;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  z-index: 2;
}

.play-btn:hover .now {
  transform: translateX(10px);
  transition-delay: 300ms;
}

.play-btn:hover .play {
  transform: translateX(200%);
  transition-delay: 300ms;
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
.play-btn::before {
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
.card:hover .play-btn::before {
  filter: blur(3px);
}
.sticker-emoji:active ~ .icons .like-btn::before,
.sticker-emoji:active ~ .icons .share-btn::before,
.sticker-emoji:active ~ .icons .play-btn::before {
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

/* 生日按钮样式 */
.birthday-btn {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%) !important;
  border-color: #ff9a9e !important;
  color: #fff !important;
  animation: birthdayGlow 2s ease-in-out infinite;
}

.birthday-btn:hover {
  background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%) !important;
  box-shadow: 0 0 24px rgba(255, 154, 158, 0.5);
}

@keyframes birthdayGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(255, 154, 158, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 154, 158, 0.6); }
}

/* 告白按钮样式 */
.confession-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
  border-color: #f5576c !important;
  color: #fff !important;
  animation: confessionGlow 2s ease-in-out infinite;
}

.confession-btn:hover {
  box-shadow: 0 0 24px rgba(245, 87, 108, 0.5);
}

@keyframes confessionGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(245, 87, 108, 0.3); }
  50% { box-shadow: 0 0 20px rgba(245, 87, 108, 0.6); }
}

/* 好看的按钮样式 */
.beautiful-btn {
  background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%) !important;
  border-color: #a18cd1 !important;
  color: #fff !important;
  animation: beautifulGlow 2s ease-in-out infinite;
}

.beautiful-btn:hover {
  box-shadow: 0 0 24px rgba(161, 140, 209, 0.5);
}

@keyframes beautifulGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(161, 140, 209, 0.3); }
  50% { box-shadow: 0 0 20px rgba(161, 140, 209, 0.6); }
}
/* From Uiverse.io by amir_6539 */ 
.container {
  height: 100%;
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow:
    501px 811px #fff,
    1450px 1324px #fff,
    1093px 1780px #fff,
    1469px 678px #fff,
    904px 741px #fff,
    1160px 781px #fff,
    1841px 1962px #fff,
    1630px 1667px #fff,
    1788px 676px #fff,
    367px 1734px #fff,
    1343px 156px #fff,
    1283px 1142px #fff,
    1062px 378px #fff,
    1395px 467px #fff,
    1017px 1891px #fff,
    137px 1114px #fff,
    1767px 1403px #fff,
    1543px 11px #fff,
    1078px 181px #fff,
    1189px 1574px #fff,
    1697px 1551px #fff,
    439px 472px #fff,
    1491px 677px #fff,
    1364px 599px #fff,
    34px 382px #fff,
    1221px 1584px #fff,
    1266px 1499px #fff,
    169px 1907px #fff,
    1219px 1125px #fff,
    659px 18px #fff,
    1731px 1959px #fff,
    332px 1216px #fff,
    1913px 788px #fff,
    80px 712px #fff,
    326px 1605px #fff,
    574px 1502px #fff,
    473px 1653px #fff,
    404px 975px #fff,
    322px 1797px #fff,
    425px 1321px #fff,
    1121px 1797px #fff,
    731px 647px #fff,
    891px 1584px #fff,
    1523px 109px #fff,
    1379px 244px #fff,
    865px 1064px #fff,
    493px 956px #fff,
    624px 1380px #fff,
    440px 619px #fff,
    1630px 767px #fff,
    955px 1196px #fff,
    62px 729px #fff,
    126px 946px #fff,
    1256px 896px #fff,
    1444px 256px #fff,
    661px 1628px #fff,
    1078px 1716px #fff,
    300px 737px #fff,
    1734px 413px #fff,
    1296px 129px #fff,
    1771px 1678px #fff,
    977px 1764px #fff,
    1879px 549px #fff,
    665px 1531px #fff,
    89px 701px #fff,
    1084px 1183px #fff,
    1597px 1576px #fff,
    1354px 1774px #fff,
    554px 1471px #fff,
    1469px 287px #fff,
    887px 106px #fff,
    1962px 766px #fff,
    638px 805px #fff,
    1651px 741px #fff,
    1517px 1826px #fff,
    24px 1152px #fff,
    507px 558px #fff,
    1262px 652px #fff,
    246px 1048px #fff,
    1077px 421px #fff,
    1866px 1847px #fff,
    1986px 1561px #fff,
    704px 632px #fff,
    1991px 1875px #fff,
    1227px 395px #fff,
    45px 1116px #fff,
    247px 786px #fff,
    890px 607px #fff,
    787px 1235px #fff,
    557px 524px #fff,
    1582px 1285px #fff,
    1725px 1366px #fff,
    952px 747px #fff,
    251px 458px #fff,
    1500px 1250px #fff,
    1999px 1734px #fff,
    1336px 1955px #fff,
    1705px 1464px #fff,
    728px 697px #fff,
    594px 510px #fff,
    1345px 1990px #fff,
    1919px 1803px #fff,
    1117px 966px #fff,
    1629px 97px #fff,
    1046px 1196px #fff,
    810px 1092px #fff,
    722px 976px #fff,
    406px 18px #fff,
    1665px 1860px #fff,
    1758px 1628px #fff,
    1183px 463px #fff,
    564px 239px #fff,
    13px 1767px #fff,
    1482px 1472px #fff,
    1700px 347px #fff,
    1362px 244px #fff,
    1141px 1708px #fff,
    22px 885px #fff,
    374px 1309px #fff,
    1034px 1037px #fff,
    1725px 1086px #fff,
    1343px 1921px #fff,
    596px 903px #fff,
    1061px 478px #fff,
    18px 1409px #fff,
    729px 1364px #fff,
    264px 911px #fff,
    677px 1442px #fff,
    123px 33px #fff,
    1303px 646px #fff,
    1945px 792px #fff,
    1305px 938px #fff,
    918px 1536px #fff,
    620px 948px #fff,
    183px 646px #fff,
    695px 687px #fff,
    881px 272px #fff,
    1521px 1212px #fff,
    1423px 1022px #fff,
    1545px 1271px #fff,
    1393px 348px #fff,
    685px 1910px #fff,
    1446px 856px #fff,
    73px 1201px #fff,
    736px 999px #fff,
    673px 796px #fff,
    469px 850px #fff,
    1912px 142px #fff,
    1278px 664px #fff,
    184px 1990px #fff,
    1173px 1312px #fff,
    782px 1879px #fff,
    323px 1035px #fff,
    611px 908px #fff,
    565px 1449px #fff,
    748px 1713px #fff,
    1047px 490px #fff,
    1040px 1872px #fff,
    1818px 1659px #fff,
    1806px 1327px #fff,
    386px 575px #fff,
    1550px 463px #fff,
    148px 687px #fff,
    651px 1683px #fff,
    1588px 1194px #fff,
    1831px 2px #fff,
    581px 876px #fff,
    1396px 1743px #fff,
    1212px 1810px #fff,
    421px 1920px #fff,
    658px 1461px #fff,
    1859px 1809px #fff,
    1456px 388px #fff,
    186px 1627px #fff,
    1528px 1145px #fff,
    171px 97px #fff,
    674px 1072px #fff,
    676px 1052px #fff,
    1165px 1131px #fff,
    1088px 781px #fff,
    1231px 948px #fff,
    330px 257px #fff,
    426px 1046px #fff,
    549px 652px #fff,
    1338px 74px #fff,
    1749px 364px #fff,
    931px 369px #fff,
    383px 1428px #fff,
    1558px 389px #fff,
    927px 133px #fff,
    234px 1888px #fff,
    1785px 1617px #fff,
    556px 643px #fff,
    401px 275px #fff,
    406px 1644px #fff,
    1253px 1852px #fff,
    1599px 883px #fff,
    744px 1721px #fff,
    524px 1297px #fff,
    1226px 1177px #fff,
    1679px 55px #fff,
    874px 1811px #fff,
    838px 790px #fff,
    1241px 430px #fff,
    1676px 652px #fff,
    1191px 568px #fff,
    53px 1990px #fff,
    1163px 237px #fff,
    61px 223px #fff,
    592px 456px #fff,
    1844px 271px #fff,
    1324px 1488px #fff,
    1373px 717px #fff,
    1822px 709px #fff,
    1464px 941px #fff,
    1445px 1118px #fff,
    991px 1414px #fff,
    1964px 1076px #fff,
    108px 172px #fff,
    641px 1722px #fff,
    1539px 427px #fff,
    1697px 45px #fff,
    1301px 1353px #fff,
    1060px 329px #fff,
    967px 1396px #fff,
    493px 301px #fff,
    1228px 1406px #fff,
    1211px 1653px #fff,
    444px 1822px #fff,
    1746px 353px #fff,
    1449px 381px #fff,
    671px 887px #fff,
    650px 138px #fff,
    30px 1839px #fff,
    1094px 1405px #fff,
    273px 796px #fff,
    1618px 1964px #fff,
    1045px 1849px #fff,
    1472px 1155px #fff,
    1529px 1312px #fff,
    728px 448px #fff,
    44px 1908px #fff,
    691px 818px #fff,
    254px 293px #fff,
    1981px 1133px #fff,
    1307px 375px #fff,
    196px 316px #fff,
    1241px 1975px #fff,
    1138px 1706px #fff,
    1769px 463px #fff,
    1768px 1428px #fff,
    1730px 590px #fff,
    1780px 523px #fff,
    1862px 1526px #fff,
    1613px 909px #fff,
    1266px 1781px #fff,
    470px 352px #fff,
    699px 1682px #fff,
    1002px 614px #fff,
    1209px 133px #fff,
    1842px 518px #fff,
    1422px 1836px #fff,
    1720px 1901px #fff,
    470px 1788px #fff,
    1355px 1387px #fff,
    146px 1162px #fff,
    933px 80px #fff,
    681px 1063px #fff,
    313px 1341px #fff,
    740px 1498px #fff,
    168px 1014px #fff,
    345px 1355px #fff,
    1498px 1562px #fff,
    1626px 1358px #fff,
    890px 403px #fff,
    663px 562px #fff,
    1481px 168px #fff,
    22px 719px #fff,
    774px 1041px #fff,
    1899px 829px #fff,
    430px 158px #fff,
    430px 361px #fff,
    1592px 1334px #fff,
    224px 323px #fff,
    1639px 1131px #fff,
    7px 271px #fff,
    1646px 1514px #fff,
    1605px 1444px #fff,
    1820px 1665px #fff,
    1549px 1641px #fff,
    1609px 1377px #fff,
    486px 1098px #fff,
    229px 613px #fff,
    542px 1694px #fff,
    318px 256px #fff,
    1861px 918px #fff,
    889px 892px #fff,
    442px 1524px #fff,
    19px 422px #fff,
    1935px 1908px #fff,
    828px 109px #fff,
    862px 1248px #fff,
    1275px 560px #fff,
    906px 63px #fff,
    337px 1605px #fff,
    1691px 918px #fff,
    1414px 679px #fff,
    1726px 749px #fff,
    1540px 1149px #fff,
    1337px 1466px #fff,
    446px 430px #fff,
    676px 1616px #fff,
    840px 326px #fff,
    976px 977px #fff,
    1840px 642px #fff,
    1273px 804px #fff,
    1071px 928px #fff,
    1292px 1675px #fff,
    29px 1148px #fff,
    1585px 135px #fff,
    1007px 563px #fff,
    1035px 78px #fff,
    1174px 574px #fff,
    120px 1304px #fff,
    845px 1292px #fff,
    861px 540px #fff,
    234px 232px #fff,
    1940px 1367px #fff,
    759px 639px #fff,
    1775px 1381px #fff,
    906px 372px #fff,
    1104px 1165px #fff,
    1524px 911px #fff,
    1882px 330px #fff,
    1389px 700px #fff,
    300px 1629px #fff,
    220px 1614px #fff,
    563px 140px #fff,
    1611px 1586px #fff,
    793px 1316px #fff,
    325px 1070px #fff,
    1722px 1462px #fff,
    1406px 1120px #fff,
    1169px 1768px #fff,
    1956px 1053px #fff,
    959px 1587px #fff,
    585px 1566px #fff,
    370px 204px #fff,
    1606px 1416px #fff,
    443px 1606px #fff,
    1499px 1102px #fff,
    1943px 105px #fff,
    1121px 1594px #fff,
    1512px 32px #fff,
    871px 1425px #fff,
    433px 100px #fff,
    294px 1471px #fff,
    1688px 1755px #fff,
    1666px 591px #fff,
    1034px 300px #fff,
    734px 1178px #fff,
    1342px 313px #fff,
    1616px 1590px #fff,
    1763px 1472px #fff,
    632px 1935px #fff,
    1708px 872px #fff,
    1871px 915px #fff,
    1829px 1020px #fff,
    1599px 578px #fff,
    42px 585px #fff,
    1163px 1382px #fff,
    1744px 1272px #fff,
    984px 1426px #fff,
    1786px 1584px #fff,
    1813px 379px #fff,
    1867px 1127px #fff,
    97px 567px #fff,
    626px 988px #fff,
    1178px 79px #fff,
    1703px 211px #fff,
    961px 1785px #fff,
    110px 975px #fff,
    953px 1941px #fff,
    1027px 1790px #fff,
    1665px 107px #fff,
    11px 964px #fff,
    1718px 1147px #fff,
    21px 1728px #fff,
    1358px 1922px #fff,
    872px 65px #fff,
    1191px 1635px #fff,
    762px 681px #fff,
    1519px 1033px #fff,
    906px 566px #fff,
    1074px 657px #fff,
    1093px 415px #fff,
    51px 198px #fff,
    1075px 1418px #fff,
    1547px 1070px #fff,
    225px 920px #fff,
    850px 1974px #fff,
    981px 595px #fff,
    1425px 131px #fff,
    460px 917px #fff,
    56px 495px #fff,
    714px 428px #fff,
    920px 493px #fff,
    470px 1521px #fff,
    532px 821px #fff,
    1905px 71px #fff,
    883px 1501px #fff,
    294px 196px #fff,
    381px 1999px #fff,
    332px 793px #fff,
    1246px 408px #fff,
    233px 149px #fff,
    315px 231px #fff,
    1594px 1302px #fff,
    696px 1585px #fff,
    791px 136px #fff,
    479px 199px #fff,
    1627px 1413px #fff,
    1824px 924px #fff,
    1631px 342px #fff,
    1251px 1151px #fff,
    284px 1781px #fff,
    497px 1052px #fff,
    204px 1161px #fff,
    646px 1499px #fff,
    1762px 558px #fff,
    854px 1833px #fff,
    883px 945px #fff,
    44px 982px #fff,
    1101px 834px #fff,
    515px 1748px #fff,
    1578px 1435px #fff,
    819px 1258px #fff,
    776px 670px #fff,
    115px 385px #fff,
    1478px 434px #fff,
    885px 20px #fff,
    192px 1513px #fff,
    78px 1129px #fff,
    1774px 1105px #fff,
    955px 1149px #fff,
    1817px 1929px #fff,
    1106px 1832px #fff,
    1107px 1997px #fff,
    94px 23px #fff,
    243px 982px #fff,
    43px 1972px #fff,
    1798px 673px #fff,
    1131px 1589px #fff,
    841px 14px #fff,
    826px 345px #fff,
    687px 56px #fff,
    1084px 32px #fff,
    1887px 1878px #fff,
    153px 526px #fff,
    1828px 253px #fff,
    1947px 1105px #fff,
    886px 700px #fff,
    1307px 1723px #fff,
    1274px 651px #fff,
    1530px 837px #fff,
    1699px 1637px #fff,
    1703px 1331px #fff,
    1929px 1557px #fff,
    1763px 737px #fff,
    1118px 1680px #fff,
    1545px 692px #fff,
    1462px 1092px #fff,
    208px 1667px #fff,
    1393px 859px #fff,
    186px 1794px #fff,
    351px 1199px #fff,
    642px 1995px #fff,
    1061px 1726px #fff,
    1708px 115px #fff,
    1233px 1305px #fff,
    637px 1786px #fff,
    1730px 603px #fff,
    75px 1240px #fff,
    1704px 1326px #fff,
    584px 346px #fff,
    438px 1554px #fff,
    561px 513px #fff,
    1382px 225px #fff,
    467px 1674px #fff,
    1403px 815px #fff,
    1546px 1835px #fff,
    127px 1119px #fff,
    276px 591px #fff,
    688px 1458px #fff,
    765px 646px #fff,
    474px 984px #fff,
    171px 361px #fff,
    94px 1480px #fff,
    1962px 1666px #fff,
    909px 1037px #fff,
    1725px 222px #fff,
    253px 1355px #fff,
    1892px 1901px #fff,
    275px 1847px #fff,
    28px 1184px #fff,
    1725px 1382px #fff,
    882px 647px #fff,
    1935px 1046px #fff,
    10px 344px #fff,
    292px 1328px #fff,
    127px 1352px #fff,
    752px 929px #fff,
    1589px 384px #fff,
    284px 1829px #fff,
    381px 820px #fff,
    1229px 1125px #fff,
    777px 429px #fff,
    1811px 1499px #fff,
    1573px 287px #fff,
    295px 756px #fff,
    389px 616px #fff,
    781px 41px #fff,
    1092px 333px #fff,
    794px 1588px #fff,
    386px 1847px #fff,
    1802px 710px #fff,
    662px 60px #fff,
    640px 264px #fff,
    463px 746px #fff,
    1859px 799px #fff,
    763px 37px #fff,
    639px 396px #fff,
    357px 1071px #fff,
    1190px 1430px #fff,
    1814px 257px #fff,
    1382px 235px #fff,
    606px 1304px #fff,
    1939px 1470px #fff,
    1124px 349px #fff,
    307px 1567px #fff,
    310px 1323px #fff,
    1145px 922px #fff,
    1196px 1922px #fff,
    1647px 544px #fff,
    788px 1337px #fff,
    257px 632px #fff,
    1413px 414px #fff,
    590px 620px #fff,
    582px 794px #fff,
    1702px 1481px #fff,
    1055px 53px #fff,
    157px 346px #fff,
    50px 1901px #fff,
    1038px 1369px #fff,
    796px 1941px #fff,
    215px 194px #fff,
    1567px 1538px #fff,
    367px 800px #fff,
    1044px 489px #fff,
    1109px 1712px #fff,
    524px 327px #fff,
    525px 1252px #fff,
    1475px 1240px #fff,
    529px 436px #fff,
    795px 834px #fff,
    122px 1371px #fff,
    79px 482px #fff,
    520px 1249px #fff,
    336px 1878px #fff,
    188px 944px #fff,
    325px 1259px #fff,
    1491px 1942px #fff,
    620px 1054px #fff,
    1606px 1153px #fff,
    1448px 502px #fff,
    53px 1381px #fff,
    107px 1670px #fff,
    1380px 618px #fff,
    967px 1557px #fff,
    1116px 1722px #fff,
    1174px 1044px #fff,
    1805px 717px #fff,
    663px 394px #fff,
    1848px 1007px #fff,
    389px 802px #fff,
    49px 392px #fff,
    1650px 852px #fff,
    1678px 1012px #fff,
    335px 1009px #fff,
    1818px 1631px #fff,
    1568px 742px #fff,
    1162px 1991px #fff,
    52px 1190px #fff,
    1401px 928px #fff,
    119px 1549px #fff,
    537px 1529px #fff,
    2px 1709px #fff,
    122px 387px #fff,
    543px 2px #fff,
    27px 1971px #fff,
    507px 1377px #fff,
    1362px 1080px #fff,
    1031px 1544px #fff,
    1631px 1174px #fff,
    1603px 312px #fff,
    1626px 1422px #fff,
    1430px 615px #fff,
    1958px 1431px #fff,
    1946px 1412px #fff,
    1848px 247px #fff,
    984px 1808px #fff,
    1396px 225px #fff,
    319px 717px #fff,
    1252px 875px #fff,
    1619px 156px #fff,
    951px 1971px #fff,
    386px 355px #fff,
    1406px 1151px #fff,
    273px 1538px #fff,
    844px 1570px #fff,
    947px 151px #fff,
    1363px 525px #fff,
    209px 307px #fff,
    1923px 1718px #fff,
    993px 1741px #fff,
    1513px 353px #fff,
    1353px 61px #fff,
    664px 352px #fff,
    1382px 359px #fff,
    1487px 1707px #fff,
    657px 1045px #fff,
    1107px 490px #fff,
    1834px 1176px #fff,
    837px 1438px #fff,
    1947px 448px #fff,
    1196px 333px #fff,
    151px 555px #fff,
    18px 992px #fff,
    458px 748px #fff,
    1801px 890px #fff,
    1093px 1012px #fff,
    315px 1101px #fff,
    194px 323px #fff,
    754px 292px #fff,
    1737px 7px #fff,
    40px 840px #fff,
    1170px 805px #fff,
    176px 1753px #fff,
    805px 1148px #fff,
    1578px 1271px #fff,
    367px 1494px #fff,
    363px 1111px #fff,
    1955px 243px #fff,
    1451px 1093px #fff,
    375px 617px #fff,
    1223px 720px #fff,
    1178px 13px #fff,
    1456px 865px #fff,
    1440px 49px #fff,
    186px 1569px #fff,
    320px 1853px #fff,
    300px 539px #fff,
    1559px 509px #fff,
    1985px 1108px #fff,
    1588px 828px #fff,
    525px 1432px #fff,
    831px 363px #fff,
    141px 281px #fff,
    1319px 402px #fff,
    40px 456px #fff,
    1955px 478px #fff,
    1758px 818px #fff,
    1924px 688px #fff,
    1030px 953px #fff,
    1982px 210px #fff,
    917px 1401px #fff,
    1051px 1837px #fff,
    1045px 463px #fff,
    1744px 573px #fff,
    529px 1530px #fff,
    542px 469px #fff,
    1982px 324px #fff,
    1902px 1422px #fff,
    1968px 782px #fff,
    1666px 1561px #fff,
    955px 304px #fff,
    323px 778px #fff,
    272px 443px #fff,
    485px 581px #fff,
    1353px 1058px #fff,
    1257px 131px #fff,
    434px 98px #fff,
    1587px 1953px #fff,
    1749px 68px #fff,
    1984px 839px #fff,
    1518px 183px #fff,
    1071px 855px #fff,
    1662px 1994px #fff,
    1111px 106px #fff,
    1954px 838px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow:
    501px 811px #fff,
    1450px 1324px #fff,
    1093px 1780px #fff,
    1469px 678px #fff,
    904px 741px #fff,
    1160px 781px #fff,
    1841px 1962px #fff,
    1630px 1667px #fff,
    1788px 676px #fff,
    367px 1734px #fff,
    1343px 156px #fff,
    1283px 1142px #fff,
    1062px 378px #fff,
    1395px 467px #fff,
    1017px 1891px #fff,
    137px 1114px #fff,
    1767px 1403px #fff,
    1543px 11px #fff,
    1078px 181px #fff,
    1189px 1574px #fff,
    1697px 1551px #fff,
    439px 472px #fff,
    1491px 677px #fff,
    1364px 599px #fff,
    34px 382px #fff,
    1221px 1584px #fff,
    1266px 1499px #fff,
    169px 1907px #fff,
    1219px 1125px #fff,
    659px 18px #fff,
    1731px 1959px #fff,
    332px 1216px #fff,
    1913px 788px #fff,
    80px 712px #fff,
    326px 1605px #fff,
    574px 1502px #fff,
    473px 1653px #fff,
    404px 975px #fff,
    322px 1797px #fff,
    425px 1321px #fff,
    1121px 1797px #fff,
    731px 647px #fff,
    891px 1584px #fff,
    1523px 109px #fff,
    1379px 244px #fff,
    865px 1064px #fff,
    493px 956px #fff,
    624px 1380px #fff,
    440px 619px #fff,
    1630px 767px #fff,
    955px 1196px #fff,
    62px 729px #fff,
    126px 946px #fff,
    1256px 896px #fff,
    1444px 256px #fff,
    661px 1628px #fff,
    1078px 1716px #fff,
    300px 737px #fff,
    1734px 413px #fff,
    1296px 129px #fff,
    1771px 1678px #fff,
    977px 1764px #fff,
    1879px 549px #fff,
    665px 1531px #fff,
    89px 701px #fff,
    1084px 1183px #fff,
    1597px 1576px #fff,
    1354px 1774px #fff,
    554px 1471px #fff,
    1469px 287px #fff,
    887px 106px #fff,
    1962px 766px #fff,
    638px 805px #fff,
    1651px 741px #fff,
    1517px 1826px #fff,
    24px 1152px #fff,
    507px 558px #fff,
    1262px 652px #fff,
    246px 1048px #fff,
    1077px 421px #fff,
    1866px 1847px #fff,
    1986px 1561px #fff,
    704px 632px #fff,
    1991px 1875px #fff,
    1227px 395px #fff,
    45px 1116px #fff,
    247px 786px #fff,
    890px 607px #fff,
    787px 1235px #fff,
    557px 524px #fff,
    1582px 1285px #fff,
    1725px 1366px #fff,
    952px 747px #fff,
    251px 458px #fff,
    1500px 1250px #fff,
    1999px 1734px #fff,
    1336px 1955px #fff,
    1705px 1464px #fff,
    728px 697px #fff,
    594px 510px #fff,
    1345px 1990px #fff,
    1919px 1803px #fff,
    1117px 966px #fff,
    1629px 97px #fff,
    1046px 1196px #fff,
    810px 1092px #fff,
    722px 976px #fff,
    406px 18px #fff,
    1665px 1860px #fff,
    1758px 1628px #fff,
    1183px 463px #fff,
    564px 239px #fff,
    13px 1767px #fff,
    1482px 1472px #fff,
    1700px 347px #fff,
    1362px 244px #fff,
    1141px 1708px #fff,
    22px 885px #fff,
    374px 1309px #fff,
    1034px 1037px #fff,
    1725px 1086px #fff,
    1343px 1921px #fff,
    596px 903px #fff,
    1061px 478px #fff,
    18px 1409px #fff,
    729px 1364px #fff,
    264px 911px #fff,
    677px 1442px #fff,
    123px 33px #fff,
    1303px 646px #fff,
    1945px 792px #fff,
    1305px 938px #fff,
    918px 1536px #fff,
    620px 948px #fff,
    183px 646px #fff,
    695px 687px #fff,
    881px 272px #fff,
    1521px 1212px #fff,
    1423px 1022px #fff,
    1545px 1271px #fff,
    1393px 348px #fff,
    685px 1910px #fff,
    1446px 856px #fff,
    73px 1201px #fff,
    736px 999px #fff,
    673px 796px #fff,
    469px 850px #fff,
    1912px 142px #fff,
    1278px 664px #fff,
    184px 1990px #fff,
    1173px 1312px #fff,
    782px 1879px #fff,
    323px 1035px #fff,
    611px 908px #fff,
    565px 1449px #fff,
    748px 1713px #fff,
    1047px 490px #fff,
    1040px 1872px #fff,
    1818px 1659px #fff,
    1806px 1327px #fff,
    386px 575px #fff,
    1550px 463px #fff,
    148px 687px #fff,
    651px 1683px #fff,
    1588px 1194px #fff,
    1831px 2px #fff,
    581px 876px #fff,
    1396px 1743px #fff,
    1212px 1810px #fff,
    421px 1920px #fff,
    658px 1461px #fff,
    1859px 1809px #fff,
    1456px 388px #fff,
    186px 1627px #fff,
    1528px 1145px #fff,
    171px 97px #fff,
    674px 1072px #fff,
    676px 1052px #fff,
    1165px 1131px #fff,
    1088px 781px #fff,
    1231px 948px #fff,
    330px 257px #fff,
    426px 1046px #fff,
    549px 652px #fff,
    1338px 74px #fff,
    1749px 364px #fff,
    931px 369px #fff,
    383px 1428px #fff,
    1558px 389px #fff,
    927px 133px #fff,
    234px 1888px #fff,
    1785px 1617px #fff,
    556px 643px #fff,
    401px 275px #fff,
    406px 1644px #fff,
    1253px 1852px #fff,
    1599px 883px #fff,
    744px 1721px #fff,
    524px 1297px #fff,
    1226px 1177px #fff,
    1679px 55px #fff,
    874px 1811px #fff,
    838px 790px #fff,
    1241px 430px #fff,
    1676px 652px #fff,
    1191px 568px #fff,
    53px 1990px #fff,
    1163px 237px #fff,
    61px 223px #fff,
    592px 456px #fff,
    1844px 271px #fff,
    1324px 1488px #fff,
    1373px 717px #fff,
    1822px 709px #fff,
    1464px 941px #fff,
    1445px 1118px #fff,
    991px 1414px #fff,
    1964px 1076px #fff,
    108px 172px #fff,
    641px 1722px #fff,
    1539px 427px #fff,
    1697px 45px #fff,
    1301px 1353px #fff,
    1060px 329px #fff,
    967px 1396px #fff,
    493px 301px #fff,
    1228px 1406px #fff,
    1211px 1653px #fff,
    444px 1822px #fff,
    1746px 353px #fff,
    1449px 381px #fff,
    671px 887px #fff,
    650px 138px #fff,
    30px 1839px #fff,
    1094px 1405px #fff,
    273px 796px #fff,
    1618px 1964px #fff,
    1045px 1849px #fff,
    1472px 1155px #fff,
    1529px 1312px #fff,
    728px 448px #fff,
    44px 1908px #fff,
    691px 818px #fff,
    254px 293px #fff,
    1981px 1133px #fff,
    1307px 375px #fff,
    196px 316px #fff,
    1241px 1975px #fff,
    1138px 1706px #fff,
    1769px 463px #fff,
    1768px 1428px #fff,
    1730px 590px #fff,
    1780px 523px #fff,
    1862px 1526px #fff,
    1613px 909px #fff,
    1266px 1781px #fff,
    470px 352px #fff,
    699px 1682px #fff,
    1002px 614px #fff,
    1209px 133px #fff,
    1842px 518px #fff,
    1422px 1836px #fff,
    1720px 1901px #fff,
    470px 1788px #fff,
    1355px 1387px #fff,
    146px 1162px #fff,
    933px 80px #fff,
    681px 1063px #fff,
    313px 1341px #fff,
    740px 1498px #fff,
    168px 1014px #fff,
    345px 1355px #fff,
    1498px 1562px #fff,
    1626px 1358px #fff,
    890px 403px #fff,
    663px 562px #fff,
    1481px 168px #fff,
    22px 719px #fff,
    774px 1041px #fff,
    1899px 829px #fff,
    430px 158px #fff,
    430px 361px #fff,
    1592px 1334px #fff,
    224px 323px #fff,
    1639px 1131px #fff,
    7px 271px #fff,
    1646px 1514px #fff,
    1605px 1444px #fff,
    1820px 1665px #fff,
    1549px 1641px #fff,
    1609px 1377px #fff,
    486px 1098px #fff,
    229px 613px #fff,
    542px 1694px #fff,
    318px 256px #fff,
    1861px 918px #fff,
    889px 892px #fff,
    442px 1524px #fff,
    19px 422px #fff,
    1935px 1908px #fff,
    828px 109px #fff,
    862px 1248px #fff,
    1275px 560px #fff,
    906px 63px #fff,
    337px 1605px #fff,
    1691px 918px #fff,
    1414px 679px #fff,
    1726px 749px #fff,
    1540px 1149px #fff,
    1337px 1466px #fff,
    446px 430px #fff,
    676px 1616px #fff,
    840px 326px #fff,
    976px 977px #fff,
    1840px 642px #fff,
    1273px 804px #fff,
    1071px 928px #fff,
    1292px 1675px #fff,
    29px 1148px #fff,
    1585px 135px #fff,
    1007px 563px #fff,
    1035px 78px #fff,
    1174px 574px #fff,
    120px 1304px #fff,
    845px 1292px #fff,
    861px 540px #fff,
    234px 232px #fff,
    1940px 1367px #fff,
    759px 639px #fff,
    1775px 1381px #fff,
    906px 372px #fff,
    1104px 1165px #fff,
    1524px 911px #fff,
    1882px 330px #fff,
    1389px 700px #fff,
    300px 1629px #fff,
    220px 1614px #fff,
    563px 140px #fff,
    1611px 1586px #fff,
    793px 1316px #fff,
    325px 1070px #fff,
    1722px 1462px #fff,
    1406px 1120px #fff,
    1169px 1768px #fff,
    1956px 1053px #fff,
    959px 1587px #fff,
    585px 1566px #fff,
    370px 204px #fff,
    1606px 1416px #fff,
    443px 1606px #fff,
    1499px 1102px #fff,
    1943px 105px #fff,
    1121px 1594px #fff,
    1512px 32px #fff,
    871px 1425px #fff,
    433px 100px #fff,
    294px 1471px #fff,
    1688px 1755px #fff,
    1666px 591px #fff,
    1034px 300px #fff,
    734px 1178px #fff,
    1342px 313px #fff,
    1616px 1590px #fff,
    1763px 1472px #fff,
    632px 1935px #fff,
    1708px 872px #fff,
    1871px 915px #fff,
    1829px 1020px #fff,
    1599px 578px #fff,
    42px 585px #fff,
    1163px 1382px #fff,
    1744px 1272px #fff,
    984px 1426px #fff,
    1786px 1584px #fff,
    1813px 379px #fff,
    1867px 1127px #fff,
    97px 567px #fff,
    626px 988px #fff,
    1178px 79px #fff,
    1703px 211px #fff,
    961px 1785px #fff,
    110px 975px #fff,
    953px 1941px #fff,
    1027px 1790px #fff,
    1665px 107px #fff,
    11px 964px #fff,
    1718px 1147px #fff,
    21px 1728px #fff,
    1358px 1922px #fff,
    872px 65px #fff,
    1191px 1635px #fff,
    762px 681px #fff,
    1519px 1033px #fff,
    906px 566px #fff,
    1074px 657px #fff,
    1093px 415px #fff,
    51px 198px #fff,
    1075px 1418px #fff,
    1547px 1070px #fff,
    225px 920px #fff,
    850px 1974px #fff,
    981px 595px #fff,
    1425px 131px #fff,
    460px 917px #fff,
    56px 495px #fff,
    714px 428px #fff,
    920px 493px #fff,
    470px 1521px #fff,
    532px 821px #fff,
    1905px 71px #fff,
    883px 1501px #fff,
    294px 196px #fff,
    381px 1999px #fff,
    332px 793px #fff,
    1246px 408px #fff,
    233px 149px #fff,
    315px 231px #fff,
    1594px 1302px #fff,
    696px 1585px #fff,
    791px 136px #fff,
    479px 199px #fff,
    1627px 1413px #fff,
    1824px 924px #fff,
    1631px 342px #fff,
    1251px 1151px #fff,
    284px 1781px #fff,
    497px 1052px #fff,
    204px 1161px #fff,
    646px 1499px #fff,
    1762px 558px #fff,
    854px 1833px #fff,
    883px 945px #fff,
    44px 982px #fff,
    1101px 834px #fff,
    515px 1748px #fff,
    1578px 1435px #fff,
    819px 1258px #fff,
    776px 670px #fff,
    115px 385px #fff,
    1478px 434px #fff,
    885px 20px #fff,
    192px 1513px #fff,
    78px 1129px #fff,
    1774px 1105px #fff,
    955px 1149px #fff,
    1817px 1929px #fff,
    1106px 1832px #fff,
    1107px 1997px #fff,
    94px 23px #fff,
    243px 982px #fff,
    43px 1972px #fff,
    1798px 673px #fff,
    1131px 1589px #fff,
    841px 14px #fff,
    826px 345px #fff,
    687px 56px #fff,
    1084px 32px #fff,
    1887px 1878px #fff,
    153px 526px #fff,
    1828px 253px #fff,
    1947px 1105px #fff,
    886px 700px #fff,
    1307px 1723px #fff,
    1274px 651px #fff,
    1530px 837px #fff,
    1699px 1637px #fff,
    1703px 1331px #fff,
    1929px 1557px #fff,
    1763px 737px #fff,
    1118px 1680px #fff,
    1545px 692px #fff,
    1462px 1092px #fff,
    208px 1667px #fff,
    1393px 859px #fff,
    186px 1794px #fff,
    351px 1199px #fff,
    642px 1995px #fff,
    1061px 1726px #fff,
    1708px 115px #fff,
    1233px 1305px #fff,
    637px 1786px #fff,
    1730px 603px #fff,
    75px 1240px #fff,
    1704px 1326px #fff,
    584px 346px #fff,
    438px 1554px #fff,
    561px 513px #fff,
    1382px 225px #fff,
    467px 1674px #fff,
    1403px 815px #fff,
    1546px 1835px #fff,
    127px 1119px #fff,
    276px 591px #fff,
    688px 1458px #fff,
    765px 646px #fff,
    474px 984px #fff,
    171px 361px #fff,
    94px 1480px #fff,
    1962px 1666px #fff,
    909px 1037px #fff,
    1725px 222px #fff,
    253px 1355px #fff,
    1892px 1901px #fff,
    275px 1847px #fff,
    28px 1184px #fff,
    1725px 1382px #fff,
    882px 647px #fff,
    1935px 1046px #fff,
    10px 344px #fff,
    292px 1328px #fff,
    127px 1352px #fff,
    752px 929px #fff,
    1589px 384px #fff,
    284px 1829px #fff,
    381px 820px #fff,
    1229px 1125px #fff,
    777px 429px #fff,
    1811px 1499px #fff,
    1573px 287px #fff,
    295px 756px #fff,
    389px 616px #fff,
    781px 41px #fff,
    1092px 333px #fff,
    794px 1588px #fff,
    386px 1847px #fff,
    1802px 710px #fff,
    662px 60px #fff,
    640px 264px #fff,
    463px 746px #fff,
    1859px 799px #fff,
    763px 37px #fff,
    639px 396px #fff,
    357px 1071px #fff,
    1190px 1430px #fff,
    1814px 257px #fff,
    1382px 235px #fff,
    606px 1304px #fff,
    1939px 1470px #fff,
    1124px 349px #fff,
    307px 1567px #fff,
    310px 1323px #fff,
    1145px 922px #fff,
    1196px 1922px #fff,
    1647px 544px #fff,
    788px 1337px #fff,
    257px 632px #fff,
    1413px 414px #fff,
    590px 620px #fff,
    582px 794px #fff,
    1702px 1481px #fff,
    1055px 53px #fff,
    157px 346px #fff,
    50px 1901px #fff,
    1038px 1369px #fff,
    796px 1941px #fff,
    215px 194px #fff,
    1567px 1538px #fff,
    367px 800px #fff,
    1044px 489px #fff,
    1109px 1712px #fff,
    524px 327px #fff,
    525px 1252px #fff,
    1475px 1240px #fff,
    529px 436px #fff,
    795px 834px #fff,
    122px 1371px #fff,
    79px 482px #fff,
    520px 1249px #fff,
    336px 1878px #fff,
    188px 944px #fff,
    325px 1259px #fff,
    1491px 1942px #fff,
    620px 1054px #fff,
    1606px 1153px #fff,
    1448px 502px #fff,
    53px 1381px #fff,
    107px 1670px #fff,
    1380px 618px #fff,
    967px 1557px #fff,
    1116px 1722px #fff,
    1174px 1044px #fff,
    1805px 717px #fff,
    663px 394px #fff,
    1848px 1007px #fff,
    389px 802px #fff,
    49px 392px #fff,
    1650px 852px #fff,
    1678px 1012px #fff,
    335px 1009px #fff,
    1818px 1631px #fff,
    1568px 742px #fff,
    1162px 1991px #fff,
    52px 1190px #fff,
    1401px 928px #fff,
    119px 1549px #fff,
    537px 1529px #fff,
    2px 1709px #fff,
    122px 387px #fff,
    543px 2px #fff,
    27px 1971px #fff,
    507px 1377px #fff,
    1362px 1080px #fff,
    1031px 1544px #fff,
    1631px 1174px #fff,
    1603px 312px #fff,
    1626px 1422px #fff,
    1430px 615px #fff,
    1958px 1431px #fff,
    1946px 1412px #fff,
    1848px 247px #fff,
    984px 1808px #fff,
    1396px 225px #fff,
    319px 717px #fff,
    1252px 875px #fff,
    1619px 156px #fff,
    951px 1971px #fff,
    386px 355px #fff,
    1406px 1151px #fff,
    273px 1538px #fff,
    844px 1570px #fff,
    947px 151px #fff,
    1363px 525px #fff,
    209px 307px #fff,
    1923px 1718px #fff,
    993px 1741px #fff,
    1513px 353px #fff,
    1353px 61px #fff,
    664px 352px #fff,
    1382px 359px #fff,
    1487px 1707px #fff,
    657px 1045px #fff,
    1107px 490px #fff,
    1834px 1176px #fff,
    837px 1438px #fff,
    1947px 448px #fff,
    1196px 333px #fff,
    151px 555px #fff,
    18px 992px #fff,
    458px 748px #fff,
    1801px 890px #fff,
    1093px 1012px #fff,
    315px 1101px #fff,
    194px 323px #fff,
    754px 292px #fff,
    1737px 7px #fff,
    40px 840px #fff,
    1170px 805px #fff,
    176px 1753px #fff,
    805px 1148px #fff,
    1578px 1271px #fff,
    367px 1494px #fff,
    363px 1111px #fff,
    1955px 243px #fff,
    1451px 1093px #fff,
    375px 617px #fff,
    1223px 720px #fff,
    1178px 13px #fff,
    1456px 865px #fff,
    1440px 49px #fff,
    186px 1569px #fff,
    320px 1853px #fff,
    300px 539px #fff,
    1559px 509px #fff,
    1985px 1108px #fff,
    1588px 828px #fff,
    525px 1432px #fff,
    831px 363px #fff,
    141px 281px #fff,
    1319px 402px #fff,
    40px 456px #fff,
    1955px 478px #fff,
    1758px 818px #fff,
    1924px 688px #fff,
    1030px 953px #fff,
    1982px 210px #fff,
    917px 1401px #fff,
    1051px 1837px #fff,
    1045px 463px #fff,
    1744px 573px #fff,
    529px 1530px #fff,
    542px 469px #fff,
    1982px 324px #fff,
    1902px 1422px #fff,
    1968px 782px #fff,
    1666px 1561px #fff,
    955px 304px #fff,
    323px 778px #fff,
    272px 443px #fff,
    485px 581px #fff,
    1353px 1058px #fff,
    1257px 131px #fff,
    434px 98px #fff,
    1587px 1953px #fff,
    1749px 68px #fff,
    1984px 839px #fff,
    1518px 183px #fff,
    1071px 855px #fff,
    1662px 1994px #fff,
    1111px 106px #fff,
    1954px 838px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow:
    1925px 1320px #fff,
    693px 1778px #fff,
    1016px 711px #fff,
    1171px 563px #fff,
    661px 1919px #fff,
    1610px 44px #fff,
    1275px 140px #fff,
    1208px 1802px #fff,
    1473px 1587px #fff,
    11px 1117px #fff,
    853px 1757px #fff,
    1149px 937px #fff,
    1353px 428px #fff,
    270px 279px #fff,
    258px 1404px #fff,
    417px 1188px #fff,
    286px 561px #fff,
    393px 1765px #fff,
    147px 881px #fff,
    666px 1097px #fff,
    1425px 1278px #fff,
    806px 156px #fff,
    1252px 561px #fff,
    218px 52px #fff,
    1371px 1980px #fff,
    171px 745px #fff,
    1424px 89px #fff,
    137px 244px #fff,
    939px 1922px #fff,
    137px 1080px #fff,
    1757px 50px #fff,
    904px 536px #fff,
    1938px 1001px #fff,
    1172px 440px #fff,
    72px 1475px #fff,
    102px 121px #fff,
    804px 1671px #fff,
    1314px 270px #fff,
    440px 1341px #fff,
    1216px 511px #fff,
    1061px 1523px #fff,
    97px 274px #fff,
    704px 1318px #fff,
    52px 1872px #fff,
    1962px 296px #fff,
    111px 289px #fff,
    1157px 1236px #fff,
    1347px 1451px #fff,
    820px 286px #fff,
    1389px 1169px #fff,
    644px 841px #fff,
    1286px 522px #fff,
    955px 659px #fff,
    428px 1805px #fff,
    237px 557px #fff,
    1689px 1058px #fff,
    636px 1882px #fff,
    1349px 1664px #fff,
    1548px 432px #fff,
    1841px 504px #fff,
    302px 252px #fff,
    827px 1765px #fff,
    620px 123px #fff,
    207px 748px #fff,
    1454px 1234px #fff,
    1967px 1790px #fff,
    542px 33px #fff,
    742px 1214px #fff,
    255px 1402px #fff,
    74px 1772px #fff,
    699px 475px #fff,
    980px 1253px #fff,
    534px 1676px #fff,
    909px 202px #fff,
    1498px 1251px #fff,
    1796px 120px #fff,
    1409px 1263px #fff,
    1627px 995px #fff,
    969px 710px #fff,
    1674px 676px #fff,
    1832px 759px #fff,
    1623px 563px #fff,
    251px 1790px #fff,
    96px 1688px #fff,
    886px 239px #fff,
    778px 150px #fff,
    1767px 430px #fff,
    765px 1259px #fff,
    1189px 877px #fff,
    444px 1629px #fff,
    1560px 324px #fff,
    1952px 1097px #fff,
    712px 1173px #fff,
    541px 911px #fff,
    827px 1420px #fff,
    1233px 285px #fff,
    784px 546px #fff,
    645px 285px #fff,
    1273px 1255px #fff,
    1821px 174px #fff,
    221px 1795px #fff,
    1004px 456px #fff,
    1298px 941px #fff,
    274px 387px #fff,
    174px 376px #fff,
    1491px 258px #fff,
    1489px 1946px #fff,
    1134px 1382px #fff,
    1289px 1145px #fff,
    464px 358px #fff,
    1249px 1842px #fff,
    1665px 831px #fff,
    1982px 84px #fff,
    541px 774px #fff,
    1994px 523px #fff,
    762px 1644px #fff,
    1730px 867px #fff,
    1951px 1287px #fff,
    911px 1691px #fff,
    1454px 725px #fff,
    1287px 1940px #fff,
    70px 564px #fff,
    1980px 638px #fff,
    1674px 1774px #fff,
    1720px 116px #fff,
    1747px 182px #fff,
    1040px 450px #fff,
    1795px 375px #fff,
    857px 1471px #fff,
    1326px 1730px #fff,
    915px 274px #fff,
    1224px 358px #fff,
    1808px 60px #fff,
    43px 1870px #fff,
    1810px 1536px #fff,
    1564px 1719px #fff,
    731px 1388px #fff,
    1953px 1967px #fff,
    1744px 1119px #fff,
    794px 1384px #fff,
    959px 714px #fff,
    18px 1932px #fff,
    1358px 1437px #fff,
    355px 939px #fff,
    1355px 1648px #fff,
    608px 719px #fff,
    383px 758px #fff,
    1164px 1681px #fff,
    1045px 253px #fff,
    424px 1279px #fff,
    1899px 359px #fff,
    379px 488px #fff,
    214px 465px #fff,
    179px 905px #fff,
    830px 1993px #fff,
    448px 1077px #fff,
    1880px 1354px #fff,
    1973px 347px #fff,
    745px 1025px #fff,
    788px 1007px #fff,
    1377px 883px #fff,
    6px 290px #fff,
    1312px 407px #fff,
    1398px 622px #fff,
    1405px 339px #fff,
    1198px 1709px #fff,
    988px 1226px #fff,
    87px 1459px #fff,
    1113px 1698px #fff,
    997px 732px #fff,
    708px 331px #fff,
    1876px 1112px #fff,
    1729px 1797px #fff,
    719px 703px #fff,
    1295px 522px #fff,
    758px 1061px #fff,
    1309px 1014px #fff,
    1327px 1365px #fff,
    854px 1317px #fff,
    531px 1001px #fff,
    1751px 1040px #fff,
    1354px 190px #fff,
    800px 1538px #fff,
    88px 1455px #fff,
    668px 39px #fff,
    1379px 41px #fff,
    892px 524px #fff,
    54px 649px #fff,
    1289px 730px #fff,
    727px 488px #fff,
    181px 842px #fff,
    1230px 64px #fff,
    3px 857px #fff,
    292px 1201px #fff,
    1343px 673px #fff,
    1096px 1412px #fff,
    1520px 292px #fff,
    104px 1683px #fff,
    934px 1387px #fff,
    314px 739px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow:
    1925px 1320px #fff,
    693px 1778px #fff,
    1016px 711px #fff,
    1171px 563px #fff,
    661px 1919px #fff,
    1610px 44px #fff,
    1275px 140px #fff,
    1208px 1802px #fff,
    1473px 1587px #fff,
    11px 1117px #fff,
    853px 1757px #fff,
    1149px 937px #fff,
    1353px 428px #fff,
    270px 279px #fff,
    258px 1404px #fff,
    417px 1188px #fff,
    286px 561px #fff,
    393px 1765px #fff,
    147px 881px #fff,
    666px 1097px #fff,
    1425px 1278px #fff,
    806px 156px #fff,
    1252px 561px #fff,
    218px 52px #fff,
    1371px 1980px #fff,
    171px 745px #fff,
    1424px 89px #fff,
    137px 244px #fff,
    939px 1922px #fff,
    137px 1080px #fff,
    1757px 50px #fff,
    904px 536px #fff,
    1938px 1001px #fff,
    1172px 440px #fff,
    72px 1475px #fff,
    102px 121px #fff,
    804px 1671px #fff,
    1314px 270px #fff,
    440px 1341px #fff,
    1216px 511px #fff,
    1061px 1523px #fff,
    97px 274px #fff,
    704px 1318px #fff,
    52px 1872px #fff,
    1962px 296px #fff,
    111px 289px #fff,
    1157px 1236px #fff,
    1347px 1451px #fff,
    820px 286px #fff,
    1389px 1169px #fff,
    644px 841px #fff,
    1286px 522px #fff,
    955px 659px #fff,
    428px 1805px #fff,
    237px 557px #fff,
    1689px 1058px #fff,
    636px 1882px #fff,
    1349px 1664px #fff,
    1548px 432px #fff,
    1841px 504px #fff,
    302px 252px #fff,
    827px 1765px #fff,
    620px 123px #fff,
    207px 748px #fff,
    1454px 1234px #fff,
    1967px 1790px #fff,
    542px 33px #fff,
    742px 1214px #fff,
    255px 1402px #fff,
    74px 1772px #fff,
    699px 475px #fff,
    980px 1253px #fff,
    534px 1676px #fff,
    909px 202px #fff,
    1498px 1251px #fff,
    1796px 120px #fff,
    1409px 1263px #fff,
    1627px 995px #fff,
    969px 710px #fff,
    1674px 676px #fff,
    1832px 759px #fff,
    1623px 563px #fff,
    251px 1790px #fff,
    96px 1688px #fff,
    886px 239px #fff,
    778px 150px #fff,
    1767px 430px #fff,
    765px 1259px #fff,
    1189px 877px #fff,
    444px 1629px #fff,
    1560px 324px #fff,
    1952px 1097px #fff,
    712px 1173px #fff,
    541px 911px #fff,
    827px 1420px #fff,
    1233px 285px #fff,
    784px 546px #fff,
    645px 285px #fff,
    1273px 1255px #fff,
    1821px 174px #fff,
    221px 1795px #fff,
    1004px 456px #fff,
    1298px 941px #fff,
    274px 387px #fff,
    174px 376px #fff,
    1491px 258px #fff,
    1489px 1946px #fff,
    1134px 1382px #fff,
    1289px 1145px #fff,
    464px 358px #fff,
    1249px 1842px #fff,
    1665px 831px #fff,
    1982px 84px #fff,
    541px 774px #fff,
    1994px 523px #fff,
    762px 1644px #fff,
    1730px 867px #fff,
    1951px 1287px #fff,
    911px 1691px #fff,
    1454px 725px #fff,
    1287px 1940px #fff,
    70px 564px #fff,
    1980px 638px #fff,
    1674px 1774px #fff,
    1720px 116px #fff,
    1747px 182px #fff,
    1040px 450px #fff,
    1795px 375px #fff,
    857px 1471px #fff,
    1326px 1730px #fff,
    915px 274px #fff,
    1224px 358px #fff,
    1808px 60px #fff,
    43px 1870px #fff,
    1810px 1536px #fff,
    1564px 1719px #fff,
    731px 1388px #fff,
    1953px 1967px #fff,
    1744px 1119px #fff,
    794px 1384px #fff,
    959px 714px #fff,
    18px 1932px #fff,
    1358px 1437px #fff,
    355px 939px #fff,
    1355px 1648px #fff,
    608px 719px #fff,
    383px 758px #fff,
    1164px 1681px #fff,
    1045px 253px #fff,
    424px 1279px #fff,
    1899px 359px #fff,
    379px 488px #fff,
    214px 465px #fff,
    179px 905px #fff,
    830px 1993px #fff,
    448px 1077px #fff,
    1880px 1354px #fff,
    1973px 347px #fff,
    745px 1025px #fff,
    788px 1007px #fff,
    1377px 883px #fff,
    6px 290px #fff,
    1312px 407px #fff,
    1398px 622px #fff,
    1405px 339px #fff,
    1198px 1709px #fff,
    988px 1226px #fff,
    87px 1459px #fff,
    1113px 1698px #fff,
    997px 732px #fff,
    708px 331px #fff,
    1876px 1112px #fff,
    1729px 1797px #fff,
    719px 703px #fff,
    1295px 522px #fff,
    758px 1061px #fff,
    1309px 1014px #fff,
    1327px 1365px #fff,
    854px 1317px #fff,
    531px 1001px #fff,
    1751px 1040px #fff,
    1354px 190px #fff,
    800px 1538px #fff,
    88px 1455px #fff,
    668px 39px #fff,
    1379px 41px #fff,
    892px 524px #fff,
    54px 649px #fff,
    1289px 730px #fff,
    727px 488px #fff,
    181px 842px #fff,
    1230px 64px #fff,
    3px 857px #fff,
    292px 1201px #fff,
    1343px 673px #fff,
    1096px 1412px #fff,
    1520px 292px #fff,
    104px 1683px #fff,
    934px 1387px #fff,
    314px 739px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow:
    200px 981px #fff,
    1731px 521px #fff,
    132px 1039px #fff,
    1888px 1547px #fff,
    899px 1226px #fff,
    1887px 580px #fff,
    1548px 1092px #fff,
    1626px 689px #fff,
    254px 1072px #fff,
    1684px 1211px #fff,
    672px 1267px #fff,
    939px 668px #fff,
    1969px 645px #fff,
    1126px 983px #fff,
    457px 568px #fff,
    476px 876px #fff,
    829px 1896px #fff,
    1364px 1846px #fff,
    1507px 1120px #fff,
    936px 1948px #fff,
    1833px 832px #fff,
    1424px 285px #fff,
    1377px 1596px #fff,
    432px 153px #fff,
    1348px 1410px #fff,
    1529px 954px #fff,
    1102px 387px #fff,
    264px 297px #fff,
    811px 977px #fff,
    1931px 673px #fff,
    1734px 978px #fff,
    1772px 1567px #fff,
    1197px 1400px #fff,
    764px 282px #fff,
    1103px 822px #fff,
    872px 1803px #fff,
    1057px 1763px #fff,
    52px 1299px #fff,
    1312px 1236px #fff,
    235px 1082px #fff,
    299px 1086px #fff,
    1017px 1602px #fff,
    1950px 626px #fff,
    1306px 132px #fff,
    1358px 1618px #fff,
    1873px 1718px #fff,
    1447px 940px #fff,
    1888px 1195px #fff,
    1704px 1765px #fff,
    872px 1357px #fff,
    1555px 1120px #fff,
    250px 1415px #fff,
    450px 415px #fff,
    492px 901px #fff,
    170px 1641px #fff,
    56px 1129px #fff,
    627px 1514px #fff,
    1221px 500px #fff,
    324px 1895px #fff,
    1397px 1775px #fff,
    1966px 598px #fff,
    1550px 763px #fff,
    326px 1605px #fff,
    261px 969px #fff,
    890px 281px #fff,
    736px 544px #fff,
    589px 1262px #fff,
    1581px 368px #fff,
    1900px 1132px #fff,
    1914px 585px #fff,
    1864px 1517px #fff,
    241px 217px #fff,
    859px 787px #fff,
    996px 1729px #fff,
    741px 121px #fff,
    418px 414px #fff,
    142px 967px #fff,
    387px 896px #fff,
    703px 562px #fff,
    968px 1136px #fff,
    1682px 332px #fff,
    1287px 846px #fff,
    256px 1427px #fff,
    1885px 432px #fff,
    1739px 1458px #fff,
    345px 1769px #fff,
    1140px 1612px #fff,
    192px 1921px #fff,
    920px 471px #fff,
    834px 881px #fff,
    917px 1803px #fff,
    466px 1266px #fff,
    483px 1108px #fff,
    689px 986px #fff,
    1279px 786px #fff,
    458px 910px #fff,
    1250px 870px #fff,
    785px 1654px #fff,
    1543px 1757px #fff,
    287px 1272px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow:
    200px 981px #fff,
    1731px 521px #fff,
    132px 1039px #fff,
    1888px 1547px #fff,
    899px 1226px #fff,
    1887px 580px #fff,
    1548px 1092px #fff,
    1626px 689px #fff,
    254px 1072px #fff,
    1684px 1211px #fff,
    672px 1267px #fff,
    939px 668px #fff,
    1969px 645px #fff,
    1126px 983px #fff,
    457px 568px #fff,
    476px 876px #fff,
    829px 1896px #fff,
    1364px 1846px #fff,
    1507px 1120px #fff,
    936px 1948px #fff,
    1833px 832px #fff,
    1424px 285px #fff,
    1377px 1596px #fff,
    432px 153px #fff,
    1348px 1410px #fff,
    1529px 954px #fff,
    1102px 387px #fff,
    264px 297px #fff,
    811px 977px #fff,
    1931px 673px #fff,
    1734px 978px #fff,
    1772px 1567px #fff,
    1197px 1400px #fff,
    764px 282px #fff,
    1103px 822px #fff,
    872px 1803px #fff,
    1057px 1763px #fff,
    52px 1299px #fff,
    1312px 1236px #fff,
    235px 1082px #fff,
    299px 1086px #fff,
    1017px 1602px #fff,
    1950px 626px #fff,
    1306px 132px #fff,
    1358px 1618px #fff,
    1873px 1718px #fff,
    1447px 940px #fff,
    1888px 1195px #fff,
    1704px 1765px #fff,
    872px 1357px #fff,
    1555px 1120px #fff,
    250px 1415px #fff,
    450px 415px #fff,
    492px 901px #fff,
    170px 1641px #fff,
    56px 1129px #fff,
    627px 1514px #fff,
    1221px 500px #fff,
    324px 1895px #fff,
    1397px 1775px #fff,
    1966px 598px #fff,
    1550px 763px #fff,
    326px 1605px #fff,
    261px 969px #fff,
    890px 281px #fff,
    736px 544px #fff,
    589px 1262px #fff,
    1581px 368px #fff,
    1900px 1132px #fff,
    1914px 585px #fff,
    1864px 1517px #fff,
    241px 217px #fff,
    859px 787px #fff,
    996px 1729px #fff,
    741px 121px #fff,
    418px 414px #fff,
    142px 967px #fff,
    387px 896px #fff,
    703px 562px #fff,
    968px 1136px #fff,
    1682px 332px #fff,
    1287px 846px #fff,
    256px 1427px #fff,
    1885px 432px #fff,
    1739px 1458px #fff,
    345px 1769px #fff,
    1140px 1612px #fff,
    192px 1921px #fff,
    920px 471px #fff,
    834px 881px #fff,
    917px 1803px #fff,
    466px 1266px #fff,
    483px 1108px #fff,
    689px 986px #fff,
    1279px 786px #fff,
    458px 910px #fff,
    1250px 870px #fff,
    785px 1654px #fff,
    1543px 1757px #fff,
    287px 1272px #fff;
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
  opacity: 0;
  transform: translateY(30px);
  animation: introFadeUp 1.2s ease-out forwards;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

@keyframes introFadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
