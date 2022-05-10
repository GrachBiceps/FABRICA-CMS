import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import lkPage from '@/views/lkPage'
import storage from '@/views/StoragePage'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/lk',
    name: 'lk',
    component: lkPage
  },
  {
    path: '/storage',
    name: 'storage',
    component: storage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
