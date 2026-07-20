import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StickerDetail from '@/views/StickerDetail.vue'
import ConfessionView from '@/views/ConfessionView.vue'
import BirthdayCakeView from '@/views/BirthdayCakeView.vue'
import BirthdayCardView from '@/views/BirthdayCardView.vue'
import BeautifulView from '@/views/BeautifulView.vue'
import BirthdayPrankView from '@/views/BirthdayPrankView.vue'
import GiftBoxView from '@/views/GiftBoxView.vue'
import FireworkView from '@/views/FireworkView.vue'
import LazyDownView from '@/views/LazyDownView.vue'
import QixiView from '@/views/QixiView.vue'
import CrazyTypingView from '@/views/CrazyTypingView.vue'
import CounterView from '@/views/CounterView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import FileSpace3DView from '@/views/FileSpace3DView.vue'
import LoveImagesView from '@/views/LoveImagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sticker',
      name: 'sticker-detail',
      component: StickerDetail
    },
    {
      path: '/confession',
      name: 'confession',
      component: ConfessionView
    },
    {
      path: '/birthday-cake',
      name: 'birthday-cake',
      component: BirthdayCakeView
    },
    {
      path: '/birthday-card',
      name: 'birthday-card',
      component: BirthdayCardView
    },
    {
      path: '/beautiful',
      name: 'beautiful',
      component: BeautifulView
    },
    {
      path: '/birthday-prank',
      name: 'birthday-prank',
      component: BirthdayPrankView
    },
    {
      path: '/gift-box',
      name: 'gift-box',
      component: GiftBoxView
    },
    {
      path: '/firework',
      name: 'firework',
      component: FireworkView
    },
    {
      path: '/lazy-down',
      name: 'lazy-down',
      component: LazyDownView
    },
    {
      path: '/qixi',
      name: 'qixi',
      component: QixiView
    },
    {
      path: '/crazy-typing',
      name: 'crazy-typing',
      component: CrazyTypingView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/file-space-3d',
      name: 'file-space-3d',
      component: FileSpace3DView
    },
    {
      path: '/love-images',
      name: 'love-images',
      component: LoveImagesView
    }
  ]
})

export default router
