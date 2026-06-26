<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 状态
const showModal = ref(false)
const password = ref('')
const message = ref('')
const attempts = ref(0)
const stage = ref<'idle' | 'typing' | 'revealed'>('idle')
const inputRef = ref<HTMLInputElement>()
const showError = ref(false)
const errorShake = ref(false)

// 错误消息池
const errorMessages = [
  '密码错误，请重试',
  '验证失败，再试一次？',
  '权限不足，无法解密',
  '系统繁忙，请稍后重试',
  '解密失败，密钥不匹配',
  '数据已加密，请输入正确密码',
  '认证失败，你确定记得自己的年龄？',
  '安全校验未通过，请重新输入',
]

function openModal() {
  showModal.value = true
  stage.value = 'typing'
  password.value = ''
  message.value = ''
  attempts.value = 0
  showError.value = false
  nextTick(() => {
    inputRef.value?.focus()
  })
}

function onSubmit() {
  if (!password.value.trim()) return

  attempts.value++
  showError.value = true
  errorShake.value = true

  // 每次显示不同的错误信息
  const msgIndex = (attempts.value - 1) % errorMessages.length
  message.value = errorMessages[msgIndex]

  setTimeout(() => {
    errorShake.value = false
  }, 500)

  // 第 5 次尝试时揭示真相
  if (attempts.value >= 5) {
    setTimeout(() => {
      stage.value = 'revealed'
      showError.value = false
    }, 1200)
  } else {
    // 清空输入框
    password.value = ''
    nextTick(() => {
      inputRef.value?.focus()
    })
  }
}

function closeModal() {
  showModal.value = false
  stage.value = 'idle'
}

function goBack() {
  router.replace('/')
}
</script>

<template>
  <div class="prank-page">
    <!-- 背景 -->
    <div class="bg-layer">
      <div class="bg-gradient"></div>
      <div class="confetti" v-for="i in 20" :key="i" :style="{
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 3 + 's',
        animationDuration: (2 + Math.random() * 4) + 's',
        backgroundColor: ['#FF6B6B','#FFE66D','#4ECDC4','#A78BFA','#F472B6','#60A5FA'][i % 6],
      }"></div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-btn" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>返回</span>
    </button>

    <!-- 主内容 -->
    <div class="main-content">
      <!-- 诱饵按钮 -->
      <button v-if="!showModal" class="trigger-btn" @click="openModal">
        <span class="trigger-icon">🔒</span>
        <span class="trigger-text">查看我的年龄</span>
        <span class="trigger-sub">点击解密</span>
      </button>

      <!-- 弹窗 -->
      <Teleport to="body">
        <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
          <div class="modal-card" :class="{ reveal: stage === 'revealed' }">
            <!-- 标题栏 -->
            <div class="modal-header">
              <div class="header-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="header-title">年龄解密系统</span>
              <button class="header-close" @click="closeModal">✕</button>
            </div>

            <!-- 输入阶段 -->
            <div v-if="stage !== 'revealed'" class="modal-body">
              <div class="lock-icon">🔐</div>
              <p class="encrypt-text">
                <span class="warning-icon">⚠️</span>
                你的年龄已被加密
              </p>
              <p class="encrypt-sub">请输入密码查看真实年龄</p>

              <div class="input-group" :class="{ shake: errorShake }">
                <input
                  ref="inputRef"
                  v-model="password"
                  type="password"
                  class="password-input"
                  placeholder="请输入6位密码"
                  maxlength="20"
                  @keyup.enter="onSubmit"
                />
                <button class="submit-btn" @click="onSubmit">
                  解密
                </button>
              </div>

              <Transition name="error-fade">
                <p v-if="showError" class="error-msg">{{ message }}</p>
              </Transition>

              <p class="attempt-hint" v-if="attempts > 0">
                已尝试 {{ attempts }} 次
              </p>
            </div>

            <!-- 揭示阶段 -->
            <div v-else class="modal-body revealed-body">
              <div class="sparkle-container">
                <span class="sparkle" v-for="i in 8" :key="i" :style="{
                  left: (10 + Math.random() * 80) + '%',
                  top: (10 + Math.random() * 80) + '%',
                  animationDelay: Math.random() * 0.5 + 's',
                }">✨</span>
              </div>
              <div class="party-popper">🎉</div>
              <p class="reveal-main">
                骗你的！
              </p>
              <p class="reveal-sub">
                永远<span class="highlight">18</span>岁！
              </p>
              <p class="reveal-desc">
                年龄只是数字，快乐才是永恒 😎
              </p>
              <button class="again-btn" @click="openModal">
                再来一次
              </button>
            </div>

            <!-- 底部提示 -->
            <div v-if="stage === 'typing'" class="modal-footer">
              <span class="footer-hint">💡 提示：答案就在你心中</span>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<style scoped>
.prank-page {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 100;
}

/* 背景 */
.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 20%, #1a1a2e 0%, #16213e 40%, #0f0f23 100%);
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  top: -10px;
  animation: confettiFall linear infinite;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-10px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

/* 返回按钮 */
.back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.main-content {
  position: relative;
  z-index: 10;
}

/* 触发按钮 */
.trigger-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  animation: triggerPulse 2s ease-in-out infinite;
}

.trigger-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6);
}

.trigger-btn:active {
  transform: scale(0.97);
}

@keyframes triggerPulse {
  0%, 100% {
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  }
  50% {
    box-shadow: 0 8px 48px rgba(102, 126, 234, 0.7);
  }
}

.trigger-icon {
  font-size: 48px;
}

.trigger-text {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
}

.trigger-sub {
  font-size: 13px;
  opacity: 0.7;
}

/* 弹窗遮罩 */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  animation: overlayIn 0.3s ease;
}

@keyframes overlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 弹窗卡片 */
.modal-card {
  width: 380px;
  max-width: 90vw;
  background: #1e1e2e;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: modalIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.5s ease;
}

.modal-card.reveal {
  background: linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%);
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 标题栏 */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.header-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
}

.header-close {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.header-close:hover {
  background: rgba(255, 95, 87, 0.3);
  color: #ff5f57;
}

/* 弹窗主体 */
.modal-body {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.lock-icon {
  font-size: 52px;
  animation: lockBounce 2s ease-in-out infinite;
}

@keyframes lockBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.encrypt-text {
  font-size: 18px;
  font-weight: 700;
  color: #ffb74d;
  display: flex;
  align-items: center;
  gap: 8px;
}

.warning-icon {
  font-size: 20px;
}

.encrypt-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: -8px;
}

/* 输入组 */
.input-group {
  display: flex;
  width: 100%;
  gap: 8px;
  margin-top: 8px;
}

.input-group.shake {
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 50%, 90% { transform: translateX(-6px); }
  30%, 70% { transform: translateX(6px); }
}

.password-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;
  letter-spacing: 4px;
}

.password-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.password-input::placeholder {
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 1px;
}

.submit-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
}

.submit-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.5);
}

.submit-btn:active {
  transform: scale(0.95);
}

/* 错误消息 */
.error-msg {
  color: #ff6b6b;
  font-size: 14px;
  font-weight: 600;
}

.error-fade-enter-active {
  transition: all 0.3s ease;
}

.error-fade-leave-active {
  transition: all 0.2s ease;
}

.error-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.error-fade-leave-to {
  opacity: 0;
}

.attempt-hint {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
}

/* 揭示阶段 */
.revealed-body {
  padding: 40px 28px;
  position: relative;
  overflow: hidden;
}

.sparkle-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  font-size: 18px;
  animation: sparkleAnim 1.5s ease-in-out infinite;
}

@keyframes sparkleAnim {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1.2); }
}

.party-popper {
  font-size: 48px;
  animation: popperBounce 0.6s ease-out;
}

@keyframes popperBounce {
  0% { transform: scale(0) rotate(-20deg); }
  60% { transform: scale(1.3) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.reveal-main {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 4px;
  animation: revealText 0.6s ease-out;
}

@keyframes revealText {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-sub {
  font-size: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  animation: revealText 0.6s ease-out 0.2s both;
}

.reveal-sub .highlight {
  font-size: 40px;
  color: #ffb74d;
  font-weight: 900;
  text-shadow: 0 0 20px rgba(255, 183, 77, 0.5);
  animation: highlightPulse 1s ease-in-out infinite;
}

@keyframes highlightPulse {
  0%, 100% { text-shadow: 0 0 20px rgba(255, 183, 77, 0.5); }
  50% { text-shadow: 0 0 40px rgba(255, 183, 77, 0.8); }
}

.reveal-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
  animation: revealText 0.6s ease-out 0.4s both;
}

.again-btn {
  margin-top: 16px;
  padding: 10px 32px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  animation: revealText 0.6s ease-out 0.6s both;
}

.again-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

/* 底部提示 */
.modal-footer {
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.footer-hint {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);
}

/* 响应式 */
@media (max-width: 480px) {
  .modal-card {
    width: 92vw;
  }

  .trigger-btn {
    padding: 24px 36px;
  }

  .trigger-text {
    font-size: 18px;
  }
}
</style>
