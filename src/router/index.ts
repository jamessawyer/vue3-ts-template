import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
})

export default router
