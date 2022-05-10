import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import lkPage from '@/views/lkPage'
import storage from '@/views/StoragePage'
import TodosPage from '@/views/TodosPage'
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
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
