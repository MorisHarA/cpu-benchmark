<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Copy, ExternalLink, Calendar, ChevronRight } from 'lucide-vue-next'

const router = useRouter()

// Customers Data
const customerSearch = ref('')
const customers = ref([
  { id: 1, name: '上海星瑞科技有限公司', lastFollow: '2026-03-08', nextAction: '发送高新补贴方案修改版' },
  { id: 2, name: '杭州云创数据集团', lastFollow: '2026-03-09', nextAction: '确认税务合规审计合同' },
  { id: 3, name: '北京鼎峰智造企业', lastFollow: '2026-03-10', nextAction: '现场上门拜访，沟通上市前辅导' },
  { id: 4, name: '深圳万霖生物医药', lastFollow: '2026-03-05', nextAction: '电话沟通最新研发加计扣除政策' },
  { id: 5, name: '广州新锐教育科技', lastFollow: '2026-03-07', nextAction: '准备专精特新申报材料' }
])

const filteredCustomers = computed(() => {
  return customers.value.filter(c => c.name.includes(customerSearch.value))
})

// Policies Data
const policySearch = ref('')
const policies = ref([
  { id: 101, title: '2026年高新技术企业认定最新申报指南', tags: ['高新', '申报', '2026新规'], date: '2026-03-01' },
  { id: 102, title: '关于进一步加大研发费用加计扣除力度的通知', tags: ['税务', '研发费用加计扣除', '补贴'], date: '2026-02-15' },
  { id: 103, title: '重点产业专项资金补贴操作指引（上海）', tags: ['上海', '补贴', '资金补助'], date: '2026-01-20' },
  { id: 104, title: '企业上市挂牌奖励及补贴政策汇总', tags: ['拟上市', '奖励'], date: '2025-11-10' }
])

const filteredPolicies = computed(() => {
  return policies.value.filter(p =>
    p.title.includes(policySearch.value) || p.tags.some(t => t.includes(policySearch.value))
  )
})

const copyPolicy = (title: string, date: string) => {
  const text = `客户您好，跟您同步一条最新政策：\n【${title}】(发布于 ${date})\n详情我们可以电话沟通。`
  navigator.clipboard.writeText(text)
  alert('内容已复制到剪贴板，可直接发送给客户！')
}
</script>

<template>
  <div class="home-grid">
    <!-- Left Column: Customer Management -->
    <div class="section-card customer-section">
      <div class="section-header">
        <div class="title-wrap">
          <h2>客户跟进管理</h2>
          <span class="badge">{{ customers.length }} 家跟进中</span>
        </div>
        <div class="search-box">
          <Search class="search-icon" :size="18" />
          <input v-model="customerSearch" type="text" placeholder="搜索客户名称..." class="input search-input" />
        </div>
      </div>

      <div class="customer-list">
        <div v-for="item in filteredCustomers" :key="item.id" class="customer-item"
          @click="router.push(`/customer/${item.id}`)">
          <div class="customer-info">
            <h3>{{ item.name }}</h3>
          </div>
          <div class="customer-meta">
            <div class="meta-item">
              <Calendar :size="14" class="text-gray" />
              <span class="text-sm">最后跟进: <strong>{{ item.lastFollow }}</strong></span>
            </div>
            <div class="meta-item action-item">
              <span class="status-dot"></span>
              <span class="text-sm text-gray">下一步:</span>
              <span class="text-sm font-medium">{{ item.nextAction }}</span>
            </div>
          </div>
          <ChevronRight class="arrow-icon" :size="20" />
        </div>
      </div>
    </div>

    <!-- Right Column: Policy Tracker -->
    <div class="section-card policy-section">
      <div class="section-header">
        <div class="title-wrap">
          <h2>最新政策资讯</h2>
        </div>
        <div class="search-box">
          <Search class="search-icon" :size="18" />
          <input v-model="policySearch" type="text" placeholder="输入关键词如：高新、补贴" class="input search-input" />
        </div>
      </div>

      <div class="policy-list">
        <div v-for="p in filteredPolicies" :key="p.id" class="policy-card">
          <div class="policy-content">
            <h3 class="policy-title">{{ p.title }}</h3>
            <div class="policy-tags gap-2 flex mt-2">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
          <div class="policy-actions">
            <span class="date text-xs text-light">{{ p.date }}</span>
            <button @click="copyPolicy(p.title, p.date)" class="action-btn" title="一键复制转化话术">
              <Copy :size="16" />
              <span>话术</span>
            </button>
            <button class="action-btn" title="查看并引用到客户">
              <ExternalLink :size="16" />
              <span>引用</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  height: 100%;
}

.section-card {
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.section-header {
  padding: 24px;
  border-bottom: 1px solid var(--border-color);
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.title-wrap h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.badge {
  background-color: var(--primary-light);
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
}

.search-input {
  padding-left: 42px;
  border-radius: var(--radius-full);
  background-color: #f3f4f6;
  border: 1px solid transparent;
}

.search-input:focus {
  background-color: white;
  border-color: var(--primary);
}

.customer-list {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
}

.customer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.customer-item:hover {
  background-color: var(--surface-bg);
  border-color: var(--border-color);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.customer-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1f2937;
}

.customer-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  margin-left: 24px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-light);
}

.arrow-icon {
  color: #d1d5db;
  transition: transform 0.2s;
}

.customer-item:hover .arrow-icon {
  color: var(--primary);
  transform: translateX(4px);
}

.policy-list {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.policy-card {
  padding: 20px;
  border-radius: var(--radius-md);
  background: linear-gradient(to right bottom, #ffffff, #f9fafb);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.2s;
}

.policy-card:hover {
  box-shadow: var(--shadow-md);
  border-color: #c7d2fe;
}

.policy-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: #1e1b4b;
}

.policy-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px dashed var(--border-color);
  padding-top: 16px;
}

.date {
  margin-right: auto;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b5563;
  background-color: #f3f4f6;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: #e0e7ff;
  color: var(--primary);
}
</style>
