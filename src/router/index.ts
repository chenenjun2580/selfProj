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
    }
  ]
})

export default router
