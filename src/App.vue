<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const isCollapse = ref(false)

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
</script>

<template>
  <el-container class="app-layout">
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
          <el-badge :value="3" :max="99">
            <el-button :icon="'Bell'" circle class="action-btn" />
          </el-badge>
          <el-button :icon="'Setting'" circle class="action-btn" />
        </div>
      </el-header>

      <el-main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
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
  padding: 24px !important;
  overflow-y: auto;
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
</style>
