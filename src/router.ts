import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import CustomerProfile from './views/CustomerProfile.vue'
import VisitLog from './views/VisitLog.vue'
import PolicyLibrary from './views/PolicyLibrary.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/customer/:id', component: CustomerProfile },
  { path: '/visit-log/:id', component: VisitLog },
  { path: '/policy', component: PolicyLibrary }
]

export const router = createRouter({
  // 使用 Vite 提供的 BASE_URL，兼容 GitHub Pages 子路径
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
