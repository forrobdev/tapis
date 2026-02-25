import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Add from '@/views/Add.vue'
import Sessions from '@/views/Sessions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions,
    },
  ],
})

export default router
