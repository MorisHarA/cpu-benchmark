import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import CustomerProfile from './views/CustomerProfile.vue'
import VisitLog from './views/VisitLog.vue'
import PolicyLibrary from './views/PolicyLibrary.vue'
import Login from './views/Login.vue'

const routes = [
  { path: '/login', component: Login, meta: { requiresAuth: false } },
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

// 路由守卫 - 登录验证
router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('crm_auth_token')

  if (to.path === '/login') {
    // 已登录用户访问登录页，自动跳转首页
    if (isAuthenticated) {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录用户访问其他页面，跳转登录页
    if (!isAuthenticated) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
})
