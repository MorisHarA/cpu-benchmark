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
  history: createWebHistory(),
  routes
})
