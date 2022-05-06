import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import lkPage from '@/views/lkPage'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
