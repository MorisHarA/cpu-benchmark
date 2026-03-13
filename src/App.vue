<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getCustomers, getVisitsByCustomerId } from './utils/storage'

const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)

// 是否登录页
const isLoginPage = computed(() => route.path === '/login')

const pageTitle = computed(() => {
  const path = route?.path || ''
  if (path === '/') return '首页看板'
  if (path.startsWith('/customer')) return '客户全景档案'
  if (path.startsWith('/visit-log')) return '历史拜访与互动'
  if (path.startsWith('/policy')) return '实时政策咨询库'
  return 'CRM Management'
})

const activeMenu = computed(() => {
  const path = route?.path || ''
  if (path === '/') return '/'
  if (path.startsWith('/policy')) return '/policy'
  return path
})

const handleMenuSelect = (index: string) => {
  router.push(index)
}

// ========= 通知系统 =========
const showNotifications = ref(false)
const customers = ref([])

onMounted(() => {
  customers.value = getCustomers()
})

// 生成通知：基于客户的下一步行动和拜访记录中的 deadline
const notifications = computed(() => {
  const notifs = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  for (const customer of customers.value) {
    // 从拜访记录中获取最新的 deadline
    const visits = getVisitsByCustomerId(customer.id)
    let deadline = null
    let nextAction = customer.nextAction || ''
    
    if (visits.length > 0) {
      const latestVisit = visits[0]
      if (latestVisit.deadline) {
        deadline = new Date(latestVisit.deadline)
        deadline.setHours(0, 0, 0, 0)
        nextAction = latestVisit.nextAction || nextAction
      }
    }
    
    if (!deadline && customer.lastFollow) {
      // 如果没有明确的 deadline，基于最后跟进日期 +7天作为默认截止时间
      deadline = new Date(customer.lastFollow)
      deadline.setDate(deadline.getDate() + 7)
      deadline.setHours(0, 0, 0, 0)
    }
    
    if (deadline) {
      const diffDays = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      let urgency = 'normal'
      let urgencyLabel = ''
      let urgencyType = 'info'
      
      if (diffDays < 0) {
        urgency = 'overdue'
        urgencyLabel = `已超期 ${Math.abs(diffDays)} 天`
        urgencyType = 'danger'
      } else if (diffDays === 0) {
        urgency = 'today'
        urgencyLabel = '今天截止'
        urgencyType = 'danger'
      } else if (diffDays <= 3) {
        urgency = 'imminent'
        urgencyLabel = `还剩 ${diffDays} 天`
        urgencyType = 'warning'
      } else {
        urgency = 'upcoming'
        urgencyLabel = `还剩 ${diffDays} 天`
        urgencyType = 'primary'
      }
      
      notifs.push({
        id: customer.id,
        customerName: customer.name,
        nextAction,
        deadline: deadline.toISOString().slice(0, 10),
        diffDays,
        urgency,
        urgencyLabel,
        urgencyType
      })
    }
  }
  
  // 按紧急程度排序：超期 > 今天 > 临近 > 即将
  return notifs.sort((a, b) => a.diffDays - b.diffDays)
})

const notificationCount = computed(() => {
  return notifications.value.filter(n => n.diffDays <= 3).length
})

function goToCustomer(id) {
  showNotifications.value = false
  router.push(`/customer/${id}`)
}

// 登出
async function handleLogout() {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    localStorage.removeItem('crm_auth_token')
    ElMessage.success('已退出登录')
    router.push('/login')
  } catch {
    // cancelled
  }
}
</script>

<template>
  <!-- 登录页直接渲染 -->
  <router-view v-if="isLoginPage" />
  
  <!-- 主布局 -->
  <el-container v-else class="app-layout">
    <el-aside :width="isCollapse ? '64px' : '240px'" class="sidebar-container">
      <div class="logo-section" :class="{ collapsed: isCollapse }">
        <div class="logo-icon">
          <el-icon :size="20"><Cpu /></el-icon>
        </div>
        <transition name="fade">
          <h2 v-show="!isCollapse">CRM Pro</h2>
        </transition>
      </div>

      <el-menu
        :default-active="activeMenu"
        class="sidebar-menu"
        :collapse="isCollapse"
        :collapse-transition="true"
        background-color="transparent"
        text-color="#94a3b8"
        active-text-color="#ffffff"
        @select="handleMenuSelect"
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <template #title>首页看板</template>
        </el-menu-item>
        <el-menu-item index="/policy">
          <el-icon><Reading /></el-icon>
          <template #title>政策资讯库</template>
        </el-menu-item>
      </el-menu>

      <div class="sidebar-footer">
        <el-button
          :icon="isCollapse ? 'Expand' : 'Fold'"
          circle
          size="small"
          class="collapse-btn"
          @click="isCollapse = !isCollapse"
        />
        <div class="user-profile" v-show="!isCollapse">
          <el-avatar :size="36" class="user-avatar">S</el-avatar>
          <div class="user-info">
            <div class="user-name">Sales User</div>
            <div class="user-role">高级客户经理</div>
          </div>
        </div>
      </div>
    </el-aside>

    <el-container>
      <el-header class="top-header">
        <h1 class="page-title">{{ pageTitle }}</h1>
        <div class="header-actions">
          <el-popover
            v-model:visible="showNotifications"
            placement="bottom-end"
            :width="420"
            trigger="click"
          >
            <template #reference>
              <el-badge :value="notificationCount" :max="99" :hidden="notificationCount === 0">
                <el-button :icon="'Bell'" circle class="action-btn" />
              </el-badge>
            </template>
            <div class="notif-popover">
              <div class="notif-header">
                <h3>🔔 下一步计划提醒</h3>
                <el-tag size="small" type="primary" effect="dark" round>{{ notifications.length }} 条</el-tag>
              </div>
              <el-scrollbar max-height="380px">
                <div class="notif-list">
                  <div
                    v-for="n in notifications"
                    :key="n.id"
                    class="notif-item"
                    :class="'notif-' + n.urgency"
                    @click="goToCustomer(n.id)"
                  >
                    <div class="notif-item-top">
                      <span class="notif-customer">{{ n.customerName }}</span>
                      <el-tag :type="n.urgencyType" size="small" effect="dark" round>{{ n.urgencyLabel }}</el-tag>
                    </div>
                    <div class="notif-action">下一步：{{ n.nextAction }}</div>
                    <div class="notif-deadline">截止日期：{{ n.deadline }}</div>
                  </div>
                  <el-empty v-if="notifications.length === 0" description="暂无待办事项" :image-size="60" />
                </div>
              </el-scrollbar>
            </div>
          </el-popover>
          <el-button :icon="'SwitchButton'" circle class="action-btn" @click="handleLogout" />
        </div>
      </el-header>

      <el-main class="main-content">
        <el-scrollbar class="main-scrollbar">
          <div class="main-scroll-inner">
            <router-view v-slot="{ Component }">
              <transition name="page-fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  overflow: hidden;
}

.sidebar-container {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  flex-direction: column;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.logo-section {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 70px;
}

.logo-section.collapsed {
  justify-content: center;
  padding: 20px 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.logo-section h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.sidebar-menu {
  flex: 1;
  border-right: none !important;
  padding: 12px 8px;
}

.sidebar-menu .el-menu-item {
  border-radius: 10px;
  margin-bottom: 4px;
  height: 44px;
  line-height: 44px;
}

.sidebar-menu .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.08) !important;
}

.sidebar-menu .el-menu-item.is-active {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2)) !important;
  color: #ffffff !important;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.collapse-btn {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #94a3b8 !important;
}

.collapse-btn:hover {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #e2e8f0 !important;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.user-avatar {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  font-weight: 700;
  flex-shrink: 0;
}

.user-info {
  overflow: hidden;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
}

.user-role {
  font-size: 0.72rem;
  color: #64748b;
  white-space: nowrap;
}

.top-header {
  height: 70px !important;
  background: white;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px !important;
}

.page-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  background: #f1f5f9 !important;
  border: none !important;
  color: #64748b !important;
}

.action-btn:hover {
  background: #e2e8f0 !important;
  color: var(--primary) !important;
}

.main-content {
  background: #f8fafc;
  padding: 0 !important;
  overflow: hidden;
}

.main-scrollbar {
  height: 100%;
}

.main-scroll-inner {
  padding: 24px;
}

/* Page transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 通知弹窗 */
.notif-popover {
  max-height: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.notif-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 8px;
}

.notif-header h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
}

.notif-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.notif-item {
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background: #f8fafc;
  border-left: 4px solid #e2e8f0;
}

.notif-item:hover {
  background: #f1f5f9;
  transform: translateX(2px);
}

.notif-overdue {
  border-left-color: #ef4444;
  background: #fef2f2;
}

.notif-today {
  border-left-color: #ef4444;
  background: #fef2f2;
}

.notif-imminent {
  border-left-color: #f59e0b;
  background: #fffbeb;
}

.notif-upcoming {
  border-left-color: #6366f1;
}

.notif-item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.notif-customer {
  font-weight: 600;
  color: #1e293b;
  font-size: 0.88rem;
}

.notif-action {
  font-size: 0.82rem;
  color: #475569;
  margin-bottom: 2px;
}

.notif-deadline {
  font-size: 0.78rem;
  color: #94a3b8;
}
</style>
