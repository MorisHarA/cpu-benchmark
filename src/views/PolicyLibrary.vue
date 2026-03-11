<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'
import MarkdownIt from 'markdown-it'
import {
  getApiKey,
  setApiKey,
  hasApiKey,
  searchLocalPolicies,
  searchOnlinePolicies,
  explainPolicy,
  generateSalesScript,
  getLocalPolicies
} from '../utils/ai-service'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true
})

// ========== 状态管理 ==========
const searchQuery = ref('')
const activeCategory = ref('全部')
const categories = ['全部', '财税补贴', '法务合规', '行业资质', '人社人才']

// AI搜索相关
const searchMode = ref('local')  // 'local' | 'online'
const aiSearching = ref(false)
const aiResult = ref('')
const aiResultHtml = computed(() => md.render(aiResult.value))
const showAiPanel = ref(false)
const aiStreamController = ref(null)

// API Key 配置
const showApiKeyDialog = ref(false)
const apiKeyInput = ref('')

// 政策详情/解读
const showDetailDialog = ref(false)
const currentPolicy = ref(null)
const policyExplainResult = ref('')
const policyExplainHtml = computed(() => md.render(policyExplainResult.value))
const explaining = ref(false)

// 话术生成
const showScriptDialog = ref(false)
const scriptResult = ref('')
const scriptHtml = computed(() => md.render(scriptResult.value))
const generatingScript = ref(false)
const scriptCustomerName = ref('')

// 订阅
const showSubscribeDialog = ref(false)
const subscribeForm = ref({ categories: [], email: '', frequency: 'daily' })

// ========== 政策数据(本地知识库) ==========
const policies = ref([])

onMounted(() => {
  policies.value = getLocalPolicies()
  apiKeyInput.value = getApiKey()
})

const filteredPolicies = computed(() => {
  return policies.value.filter(p => {
    const matchCategory = activeCategory.value === '全部' || p.category === activeCategory.value
    const matchSearch = !searchQuery.value ||
      p.title.includes(searchQuery.value) ||
      p.tags.some(t => t.includes(searchQuery.value)) ||
      p.summary.includes(searchQuery.value)
    return matchCategory && matchSearch
  })
})

// ========== API Key 管理 ==========
function handleSaveApiKey() {
  if (!apiKeyInput.value.trim()) {
    ElMessage.warning('请输入API Key')
    return
  }
  setApiKey(apiKeyInput.value.trim())
  ElMessage.success('API Key 已保存')
  showApiKeyDialog.value = false
}

// ========== AI 搜索 ==========
const aiPanelRef = ref(null)

async function handleAiSearch() {
  if (!searchQuery.value.trim()) {
    ElMessage.warning('请输入搜索关键词')
    return
  }

  if (!hasApiKey()) {
    showApiKeyDialog.value = true
    ElMessage.info('请先配置通义千问 API Key')
    return
  }

  showAiPanel.value = true
  aiSearching.value = true
  aiResult.value = ''

  try {
    const searchFn = searchMode.value === 'local' ? searchLocalPolicies : searchOnlinePolicies

    for await (const chunk of searchFn(searchQuery.value)) {
      aiResult.value += chunk
      // 自动滚动
      await nextTick()
      if (aiPanelRef.value) {
        aiPanelRef.value.scrollTop = aiPanelRef.value.scrollHeight
      }
    }
  } catch (error) {
    ElMessage.error(error.message || 'AI搜索失败，请检查API Key配置')
    console.error('AI search error:', error)
  } finally {
    aiSearching.value = false
  }
}

// ========== 政策解读 ==========
async function handleExplainPolicy(policy) {
  if (!hasApiKey()) {
    showApiKeyDialog.value = true
    return
  }

  currentPolicy.value = policy
  showDetailDialog.value = true
  explaining.value = true
  policyExplainResult.value = ''

  try {
    for await (const chunk of explainPolicy(policy)) {
      policyExplainResult.value += chunk
    }
  } catch (error) {
    ElMessage.error(error.message || 'AI解读失败')
  } finally {
    explaining.value = false
  }
}

// ========== 话术生成 ==========
async function handleGenerateScript(policy) {
  if (!hasApiKey()) {
    showApiKeyDialog.value = true
    return
  }

  currentPolicy.value = policy
  showScriptDialog.value = true
  generatingScript.value = true
  scriptResult.value = ''
  scriptCustomerName.value = ''

  try {
    for await (const chunk of generateSalesScript(policy)) {
      scriptResult.value += chunk
    }
  } catch (error) {
    ElMessage.error(error.message || '话术生成失败')
  } finally {
    generatingScript.value = false
  }
}

async function handleRegenerateScript() {
  generatingScript.value = true
  scriptResult.value = ''

  try {
    for await (const chunk of generateSalesScript(currentPolicy.value, scriptCustomerName.value)) {
      scriptResult.value += chunk
    }
  } catch (error) {
    ElMessage.error(error.message || '话术生成失败')
  } finally {
    generatingScript.value = false
  }
}

function copyToClipboard(text) {
  // 把markdown转为纯文本后复制
  const plainText = text.replace(/[#*`_~\[\]()]/g, '').replace(/\n{3,}/g, '\n\n')
  navigator.clipboard.writeText(plainText)
  ElMessage.success('已复制到剪贴板')
}

// ========== 订阅 ==========
function handleSubscribe() {
  const subscriptions = JSON.parse(localStorage.getItem('policy_subscriptions') || '[]')
  subscriptions.push({
    ...subscribeForm.value,
    id: Date.now(),
    createdAt: new Date().toISOString()
  })
  localStorage.setItem('policy_subscriptions', JSON.stringify(subscriptions))
  ElNotification.success({
    title: '订阅成功',
    message: `已订阅 ${subscribeForm.value.categories.length > 0 ? subscribeForm.value.categories.join('、') : '全部'} 分类的政策推送`,
    duration: 3000
  })
  showSubscribeDialog.value = false
  subscribeForm.value = { categories: [], email: '', frequency: 'daily' }
}

// 统计数据
const radarStats = computed(() => {
  const hot = policies.value.filter(p => p.hot).length
  const totalTags = [...new Set(policies.value.flatMap(p => p.tags))].length
  return { hot, totalTags, total: policies.value.length }
})
</script>

<template>
  <div class="policy-page">
    <!-- 页头 -->
    <div class="page-header-section">
      <div class="header-left">
        <h2 class="page-main-title">
          <el-icon :size="24">
            <Reading />
          </el-icon>
          实时政策咨询库
        </h2>
        <el-text type="info" class="page-subtitle">
          对接官方源与人工录入的最新财税、法务、行业补贴政策，AI 智能检索与解读
        </el-text>
      </div>
      <div class="header-actions">
        <el-button @click="showApiKeyDialog = true" :icon="'Key'" round>
          AI配置
        </el-button>
        <el-button type="primary" @click="showSubscribeDialog = true" :icon="'Bell'" round>
          订阅政策推送
        </el-button>
      </div>
    </div>

    <!-- 搜索 & 雷达 -->
    <el-row :gutter="20">
      <!-- 搜索区 -->
      <el-col :span="16">
        <el-card shadow="hover" class="search-card">
          <!-- AI搜索模式切换 -->
          <div class="search-mode-switch">
            <el-radio-group v-model="searchMode" size="default">
              <el-radio-button value="local">
                <el-icon>
                  <FolderOpened />
                </el-icon> 本地知识库检索
              </el-radio-button>
              <el-radio-button value="online">
                <el-icon>
                  <ChromeFilled />
                </el-icon> AI联网搜索
              </el-radio-button>
            </el-radio-group>
            <el-tag :type="searchMode === 'local' ? 'primary' : 'success'" effect="dark" round size="small">
              {{ searchMode === 'local' ? '基于本地20条政策数据' : '通义千问联网搜索' }}
            </el-tag>
          </div>

          <!-- 搜索框 -->
          <div class="search-bar">
            <el-input v-model="searchQuery" size="large" placeholder="输入您的需求，如：高新企业申报条件、研发费用抵扣比例、上海人才引进..." clearable
              @keyup.enter="handleAiSearch" class="ai-search-input">
              <template #prefix>
                <el-icon>
                  <Search />
                </el-icon>
              </template>
            </el-input>
            <el-button type="primary" size="large" :loading="aiSearching" @click="handleAiSearch" class="ai-search-btn">
              <el-icon v-if="!aiSearching">
                <MagicStick />
              </el-icon>
              {{ aiSearching ? 'AI分析中...' : 'AI智能搜索' }}
            </el-button>
          </div>

          <!-- 分类过滤 -->
          <div class="filter-tabs">
            <el-radio-group v-model="activeCategory" size="default">
              <el-radio-button v-for="cat in categories" :key="cat" :value="cat">
                {{ cat }}
              </el-radio-button>
            </el-radio-group>
          </div>
        </el-card>
      </el-col>

      <!-- 政策雷达 -->
      <el-col :span="8">
        <el-card shadow="hover" class="radar-card">
          <div class="radar-content">
            <div class="radar-header">
              <el-icon :size="20">
                <TrendingCharts />
              </el-icon>
              <h3>政策雷达匹配</h3>
            </div>
            <el-text class="radar-desc" size="small">
              系统发现您有 12 家客户可能符合最新补贴政策
            </el-text>

            <div class="radar-stats">
              <div class="radar-stat-item">
                <span>热门政策</span>
                <el-tag type="success" effect="dark" round size="small">{{ radarStats.hot }} 条</el-tag>
              </div>
              <el-divider style="margin: 8px 0; border-color: rgba(255,255,255,0.15)" />
              <div class="radar-stat-item">
                <span>覆盖标签</span>
                <el-tag type="success" effect="dark" round size="small">{{ radarStats.totalTags }} 个</el-tag>
              </div>
              <el-divider style="margin: 8px 0; border-color: rgba(255,255,255,0.15)" />
              <div class="radar-stat-item">
                <span>知识库总量</span>
                <el-tag type="success" effect="dark" round size="small">{{ radarStats.total }} 条</el-tag>
              </div>
            </div>

            <el-button class="radar-btn" round size="default">
              <el-icon>
                <DataAnalysis />
              </el-icon> 查看推荐跟进名单
            </el-button>
          </div>
          <div class="radar-bg-emoji">🎯</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- AI 搜索结果面板 -->
    <el-card v-if="showAiPanel" shadow="hover" class="ai-result-card">
      <template #header>
        <div class="ai-header">
          <div class="ai-header-left">
            <div class="ai-badge">
              <el-icon :size="18">
                <MagicStick />
              </el-icon>
            </div>
            <h3>AI 智能分析结果</h3>
            <el-tag :type="searchMode === 'local' ? 'primary' : 'success'" effect="plain" size="small" round>
              {{ searchMode === 'local' ? '📂 本地知识库' : '🌐 联网搜索' }}
            </el-tag>
            <el-tag v-if="aiSearching" type="warning" effect="dark" size="small" round>
              <el-icon class="is-loading">
                <Loading />
              </el-icon> 生成中...
            </el-tag>
          </div>
          <div class="ai-header-right">
            <el-button v-if="aiResult" size="small" text type="primary" @click="copyToClipboard(aiResult)"
              :icon="'CopyDocument'">
              复制结果
            </el-button>
            <el-button size="small" text @click="showAiPanel = false" :icon="'Close'" />
          </div>
        </div>
      </template>

      <div ref="aiPanelRef" class="ai-result-body">
        <div v-if="aiResult" class="markdown-body" v-html="aiResultHtml"></div>
        <div v-else-if="aiSearching" class="ai-loading">
          <el-icon class="is-loading" :size="24">
            <Loading />
          </el-icon>
          <el-text type="info">AI 正在分析政策信息，请稍候...</el-text>
        </div>
      </div>
    </el-card>

    <!-- 政策列表 -->
    <el-card shadow="hover" class="policy-list-card">
      <template #header>
        <div class="list-header">
          <h3>
            <el-icon>
              <Document />
            </el-icon>
            检索结果 ({{ filteredPolicies.length }}条)
          </h3>
          <div class="list-header-actions">
            <el-select size="small" style="width: 140px" placeholder="排序方式" model-value="date">
              <el-option label="按发布时间" value="date" />
              <el-option label="按热度" value="hot" />
            </el-select>
          </div>
        </div>
      </template>

      <div class="policy-list">
        <div v-for="p in filteredPolicies" :key="p.id" class="policy-item">
          <div class="policy-top">
            <h4 class="policy-title">
              <el-tag v-if="p.hot" type="danger" effect="dark" size="small" round class="hot-tag">
                HOT
              </el-tag>
              {{ p.title }}
            </h4>
            <div class="policy-source">
              <el-text type="info" size="small">
                <el-icon>
                  <OfficeBuilding />
                </el-icon> {{ p.source }}
              </el-text>
              <el-text type="info" size="small">
                <el-icon>
                  <Calendar />
                </el-icon> {{ p.date }}
              </el-text>
            </div>
          </div>

          <el-text type="info" class="policy-summary">{{ p.summary }}</el-text>

          <div class="policy-bottom">
            <div class="policy-tags">
              <el-tag v-for="tag in p.tags" :key="tag" size="small" effect="plain" type="primary">
                #{{ tag }}
              </el-tag>
            </div>
            <div class="policy-actions">
              <el-button size="small" text type="primary" @click="handleExplainPolicy(p)">
                <el-icon>
                  <MagicStick />
                </el-icon> AI解读
              </el-button>
              <el-button size="small" text type="primary" @click="handleGenerateScript(p)">
                <el-icon>
                  <ChatDotRound />
                </el-icon> 生成话术
              </el-button>
              <el-button size="small" text type="primary" @click="copyToClipboard(p.summary)">
                <el-icon>
                  <CopyDocument />
                </el-icon> 复制摘要
              </el-button>
            </div>
          </div>
        </div>

        <el-empty v-if="filteredPolicies.length === 0" description="没有找到相关政策，试试AI智能搜索吧" />
      </div>
    </el-card>

    <!-- ========== 弹窗区域 ========== -->

    <!-- API Key 配置 -->
    <el-dialog v-model="showApiKeyDialog" title="AI 模型配置" width="520px">
      <el-alert type="info" :closable="false" show-icon class="api-key-alert">
        <template #title>
          本系统使用阿里通义千问 (Qwen) 大模型，请在
          <el-link href="https://dashscope.console.aliyun.com/" target="_blank" type="primary">
            DashScope控制台
          </el-link>
          获取 API Key
        </template>
      </el-alert>
      <el-form label-width="90px" style="margin-top: 16px">
        <el-form-item label="API Key">
          <el-input v-model="apiKeyInput" placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxx" show-password clearable />
        </el-form-item>
        <el-form-item label="使用模型">
          <el-select model-value="qwen3.5-flash" style="width: 100%" disabled>
            <el-option label="qwen3.5-flash" value="qwen3.5-flash" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showApiKeyDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSaveApiKey">保存配置</el-button>
      </template>
    </el-dialog>

    <!-- 政策AI解读 -->
    <el-dialog v-model="showDetailDialog" :title="'AI 政策解读'" width="700px" top="5vh" class="explain-dialog">
      <div v-if="currentPolicy" class="explain-header">
        <h3>{{ currentPolicy.title }}</h3>
        <div class="explain-meta">
          <el-tag size="small" effect="plain">{{ currentPolicy.source }}</el-tag>
          <el-tag size="small" effect="plain" type="info">{{ currentPolicy.date }}</el-tag>
          <el-tag size="small" effect="plain" type="warning">{{ currentPolicy.category }}</el-tag>
        </div>
      </div>
      <el-divider />
      <div class="explain-body">
        <div v-if="policyExplainResult" class="markdown-body" v-html="policyExplainHtml"></div>
        <div v-else-if="explaining" class="ai-loading">
          <el-icon class="is-loading" :size="24">
            <Loading />
          </el-icon>
          <el-text type="info">AI 正在解读政策，请稍候...</el-text>
        </div>
      </div>
      <template #footer>
        <el-button @click="showDetailDialog = false">关闭</el-button>
        <el-button type="primary" @click="copyToClipboard(policyExplainResult)" :disabled="!policyExplainResult">
          <el-icon>
            <CopyDocument />
          </el-icon> 复制解读
        </el-button>
      </template>
    </el-dialog>

    <!-- 话术生成 -->
    <el-dialog v-model="showScriptDialog" title="AI 生成转化话术" width="650px" top="5vh">
      <div v-if="currentPolicy" class="script-header">
        <el-text tag="b">{{ currentPolicy.title }}</el-text>
      </div>
      <div class="script-customer-input">
        <el-input v-model="scriptCustomerName" placeholder="输入客户名称以生成针对性话术（可选）" size="default">
          <template #prepend>客户名称</template>
          <template #append>
            <el-button @click="handleRegenerateScript" :loading="generatingScript" :disabled="generatingScript">
              重新生成
            </el-button>
          </template>
        </el-input>
      </div>
      <el-divider />
      <div class="script-body">
        <div v-if="scriptResult" class="markdown-body" v-html="scriptHtml"></div>
        <div v-else-if="generatingScript" class="ai-loading">
          <el-icon class="is-loading" :size="24">
            <Loading />
          </el-icon>
          <el-text type="info">AI 正在生成话术，请稍候...</el-text>
        </div>
      </div>
      <template #footer>
        <el-button @click="showScriptDialog = false">关闭</el-button>
        <el-button type="primary" @click="copyToClipboard(scriptResult)" :disabled="!scriptResult">
          <el-icon>
            <CopyDocument />
          </el-icon> 复制话术
        </el-button>
      </template>
    </el-dialog>

    <!-- 政策订阅 -->
    <el-dialog v-model="showSubscribeDialog" title="订阅政策推送" width="480px">
      <el-form label-width="90px">
        <el-form-item label="订阅分类">
          <el-checkbox-group v-model="subscribeForm.categories">
            <el-checkbox v-for="cat in categories.filter(c => c !== '全部')" :key="cat" :value="cat">
              {{ cat }}
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="推送频率">
          <el-radio-group v-model="subscribeForm.frequency">
            <el-radio value="daily">每日推送</el-radio>
            <el-radio value="weekly">每周推送</el-radio>
            <el-radio value="realtime">实时推送</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="subscribeForm.email" placeholder="用于接收推送的邮箱（可选）" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showSubscribeDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSubscribe">确认订阅</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.policy-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 页头 */
.page-header-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.page-main-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.page-subtitle {
  display: block;
}

.header-actions {
  display: flex;
  gap: 8px;
}

/* 搜索卡片 */
.search-card {
  border-radius: 16px;
  border: none;
}

.search-card :deep(.el-card__body) {
  padding: 24px;
}

.search-mode-switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.search-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.ai-search-input {
  flex: 1;
}

.ai-search-input :deep(.el-input__wrapper) {
  border-radius: 12px;
  box-shadow: 0 0 0 1px #e2e8f0 inset;
}

.ai-search-input :deep(.el-input__wrapper):focus-within {
  box-shadow: 0 0 0 2px var(--el-color-primary) inset;
}

.ai-search-btn {
  border-radius: 12px;
  padding: 0 24px;
  font-weight: 600;
}

.filter-tabs :deep(.el-radio-button__inner) {
  border-radius: 20px !important;
  border: none !important;
  margin-right: 4px;
}

.filter-tabs :deep(.el-radio-group) {
  display: flex;
  gap: 4px;
}

/* 雷达卡片 */
.radar-card {
  border-radius: 16px;
  background: linear-gradient(135deg, #312e81, #4338ca);
  border: none;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.radar-card :deep(.el-card__body) {
  padding: 24px;
  color: white;
  position: relative;
  z-index: 1;
}

.radar-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.radar-header h3 {
  font-weight: 700;
  font-size: 1rem;
}

.radar-desc {
  color: rgba(199, 210, 254, 0.8) !important;
  display: block;
  margin-bottom: 16px;
}

.radar-stats {
  margin-bottom: 16px;
}

.radar-stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
}

.radar-btn {
  width: 100%;
  background: rgba(255, 255, 255, 0.95) !important;
  color: #312e81 !important;
  font-weight: 700;
  border: none !important;
}

.radar-btn:hover {
  background: white !important;
  transform: translateY(-1px);
}

.radar-bg-emoji {
  position: absolute;
  right: -10px;
  bottom: -10px;
  font-size: 7rem;
  opacity: 0.12;
  z-index: 0;
}

/* AI 结果面板 */
.ai-result-card {
  border-radius: 16px;
  border: 2px solid #c7d2fe;
  background: linear-gradient(to bottom, #faf5ff, #ffffff);
}

.ai-result-card :deep(.el-card__header) {
  padding: 16px 24px;
  background: linear-gradient(to right, #eef2ff, #faf5ff);
}

.ai-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ai-header-left h3 {
  font-weight: 700;
  font-size: 1rem;
  color: #1e293b;
}

.ai-badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.ai-header-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.ai-result-body {
  max-height: 500px;
  overflow-y: auto;
  padding: 4px;
}

.ai-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px;
}

/* Markdown 样式 */
.markdown-body {
  line-height: 1.8;
  color: #334155;
  font-size: 0.9rem;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  color: #1e293b;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 700;
}

.markdown-body :deep(h3) {
  font-size: 1.05rem;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 20px;
  margin: 8px 0;
}

.markdown-body :deep(li) {
  margin-bottom: 4px;
}

.markdown-body :deep(p) {
  margin-bottom: 8px;
}

.markdown-body :deep(strong) {
  color: #1e293b;
}

.markdown-body :deep(code) {
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85em;
}

.markdown-body :deep(blockquote) {
  border-left: 4px solid #c7d2fe;
  padding: 8px 16px;
  background: #f8fafc;
  margin: 10px 0;
  border-radius: 0 8px 8px 0;
}

/* 政策列表 */
.policy-list-card {
  border-radius: 16px;
  border: none;
}

.policy-list-card :deep(.el-card__header) {
  background: #f8fafc;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-header h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 6px;
}

.policy-list {
  display: flex;
  flex-direction: column;
}

.policy-item {
  padding: 20px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.2s;
}

.policy-item:last-child {
  border-bottom: none;
}

.policy-item:hover {
  background: #fafafa;
  margin: 0 -24px;
  padding: 20px 24px;
  border-radius: 8px;
}

.policy-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.policy-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.5;
  flex: 1;
}

.hot-tag {
  margin-right: 6px;
}

.policy-source {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
  margin-left: 16px;
}

.policy-summary {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 12px;
  line-height: 1.7;
}

.policy-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.policy-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.policy-actions {
  display: flex;
  gap: 4px;
}

/* 解读弹窗 */
.explain-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.5;
  margin-bottom: 10px;
}

.explain-meta {
  display: flex;
  gap: 8px;
}

.explain-body {
  max-height: 60vh;
  overflow-y: auto;
}

/* 话术弹窗 */
.script-header {
  margin-bottom: 12px;
}

.script-customer-input {
  margin-bottom: 4px;
}

.script-body {
  max-height: 50vh;
  overflow-y: auto;
}

.api-key-alert {
  margin-bottom: 8px;
}
</style>
