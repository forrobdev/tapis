import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Session from '@/views/Session.vue'
import SessionsList from '@/views/SessionsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/session',
      name: 'addSession',
      component: Session,
    },
    {
      path: '/sessions',
      name: 'sessionsList',
      component: SessionsList,
    },
    {
      path: '/session/:id',
      name: 'editSession',
      component: Session,
    },
  ],
})

export default router
