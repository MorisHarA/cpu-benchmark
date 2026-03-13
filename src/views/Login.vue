<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

const loading = ref(false)
const showPassword = ref(false)

async function handleLogin() {
  if (!loginForm.value.username.trim()) {
    ElMessage.warning('请输入账号')
    return
  }
  if (!loginForm.value.password.trim()) {
    ElMessage.warning('请输入密码')
    return
  }

  loading.value = true

  // 模拟登录延迟
  await new Promise(resolve => setTimeout(resolve, 800))

  if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
    localStorage.setItem('crm_auth_token', JSON.stringify({
      user: 'admin',
      name: 'Sales User',
      role: '高级客户经理',
      loginTime: new Date().toISOString()
    }))
    ElMessage.success('登录成功，欢迎回来！')
    const redirect = (router.currentRoute.value.query.redirect as string) || '/'
    router.push(redirect)
  } else {
    ElMessage.error('账号或密码错误')
  }

  loading.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    handleLogin()
  }
}
</script>

<template>
  <div class="login-page" @keydown="handleKeydown">
    <!-- 背景装饰 -->
    <div class="login-bg-decor">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>

    <div class="login-container">
      <!-- 左侧品牌区 -->
      <div class="login-brand">
        <div class="brand-content">
          <div class="brand-logo">
            <el-icon :size="32"><Cpu /></el-icon>
          </div>
          <h1 class="brand-title">CRM Pro</h1>
          <p class="brand-subtitle">智能客户关系管理平台</p>
          <div class="brand-features">
            <div class="feature-item">
              <el-icon :size="18"><UserFilled /></el-icon>
              <span>客户全景档案管理</span>
            </div>
            <div class="feature-item">
              <el-icon :size="18"><Reading /></el-icon>
              <span>实时政策智能推送</span>
            </div>
            <div class="feature-item">
              <el-icon :size="18"><TrendCharts /></el-icon>
              <span>AI驱动精准匹配</span>
            </div>
            <div class="feature-item">
              <el-icon :size="18"><DataAnalysis /></el-icon>
              <span>数据分析决策支持</span>
            </div>
          </div>
        </div>
        <div class="brand-footer">
          <el-text size="small" style="color: rgba(255,255,255,0.5)">© 2026 CRM Pro. All rights reserved.</el-text>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="login-form-section">
        <div class="login-form-wrapper">
          <div class="form-header">
            <h2>欢迎登录</h2>
            <p>请输入您的账号和密码</p>
          </div>

          <el-form class="login-form" @submit.prevent="handleLogin">
            <el-form-item>
              <el-input
                v-model="loginForm.username"
                size="large"
                placeholder="请输入账号"
                clearable
                class="login-input"
              >
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input
                v-model="loginForm.password"
                size="large"
                :type="showPassword ? 'text' : 'password'"
                placeholder="请输入密码"
                clearable
                class="login-input"
              >
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
                <template #suffix>
                  <el-icon class="password-toggle" @click="showPassword = !showPassword">
                    <View v-if="showPassword" />
                    <Hide v-else />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>

            <el-button
              type="primary"
              size="large"
              class="login-btn"
              :loading="loading"
              @click="handleLogin"
            >
              {{ loading ? '登录中...' : '登 录' }}
            </el-button>
          </el-form>

          <div class="login-hint">
            <el-text type="info" size="small">
              默认账号：admin &nbsp;|&nbsp; 密码：123456
            </el-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%);
  position: relative;
  overflow: hidden;
}

/* 背景装饰 */
.login-bg-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
}

.bg-circle-1 {
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.bg-circle-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.bg-circle-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: 50%;
  left: 30%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

/* 登录容器 */
.login-container {
  display: flex;
  width: 900px;
  min-height: 540px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

/* 品牌区 */
.login-brand {
  width: 380px;
  background: linear-gradient(135deg, #4338ca, #6366f1);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.login-brand::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
}

.login-brand::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: -40px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
}

.brand-content {
  position: relative;
  z-index: 1;
}

.brand-logo {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.brand-title {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.brand-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 36px;
}

.brand-features {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
}

.feature-item .el-icon {
  color: rgba(255, 255, 255, 0.6);
}

.brand-footer {
  position: relative;
  z-index: 1;
}

/* 表单区 */
.login-form-section {
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
}

.login-form-wrapper {
  width: 100%;
  max-width: 360px;
}

.form-header {
  margin-bottom: 36px;
}

.form-header h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 8px;
}

.form-header p {
  font-size: 0.9rem;
  color: #94a3b8;
}

.login-form .el-form-item {
  margin-bottom: 20px;
}

.login-input :deep(.el-input__wrapper) {
  border-radius: 12px;
  box-shadow: 0 0 0 1px #e2e8f0 inset;
  padding: 4px 12px;
  transition: all 0.3s;
}

.login-input :deep(.el-input__wrapper):focus-within {
  box-shadow: 0 0 0 2px #6366f1 inset;
}

.login-input :deep(.el-input__prefix .el-icon) {
  color: #94a3b8;
  font-size: 18px;
}

.password-toggle {
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.2s;
}

.password-toggle:hover {
  color: #6366f1;
}

.login-btn {
  width: 100%;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  height: 48px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  border: none;
  margin-top: 8px;
  letter-spacing: 0.15em;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
  transition: all 0.3s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
}

.login-btn:active {
  transform: translateY(0);
}

.login-hint {
  text-align: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;
}
</style>
