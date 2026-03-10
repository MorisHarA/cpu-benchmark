<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const pageTitle = computed(() => {
  const path = route?.path || ''
  if (path === '/') return '首页看板'
  if (path.startsWith('/customer')) return '客户全景档案'
  if (path.startsWith('/visit-log')) return '历史拜访与互动'
  if (path.startsWith('/policy')) return '实时政策咨询库'
  return 'CRM Management'
})
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="logo">
        <div class="logo-icon"></div>
        <h2>CRM Pro</h2>
      </div>
      <nav class="nav-menu">
        <router-link to="/" class="nav-item">
          <div class="icon">🏠</div>
          <span>首页看板</span>
        </router-link>
        <router-link to="/policy" class="nav-item">
          <div class="icon">📚</div>
          <span>政策咨询库</span>
        </router-link>
      </nav>
      <div class="user-profile">
        <div class="avatar">S</div>
        <div class="info">
          <div class="name">Sales User</div>
          <div class="role">高级客户经理</div>
        </div>
      </div>
    </aside>
    <main class="main-content">
      <header class="top-nav">
        <h1>{{ pageTitle }}</h1>
        <div class="actions">
          <button class="btn-icon" title="Notifications">🔔</button>
          <button class="btn-icon" title="Settings">⚙️</button>
        </div>
      </header>
      <div class="page-container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
