<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Filter, BookOpen, AlertCircle, TrendingUp, Calendar, ChevronRight, Download } from 'lucide-vue-next'

const searchQuery = ref('')
const activeCategory = ref('全部')
const categories = ['全部', '财税补贴', '法务合规', '行业资质', '人社人才']

const policies = ref([
  {
    id: 1,
    title: '关于2026年度上海市高新技术企业申报的通知',
    source: '上海市科委',
    date: '2026-03-01',
    category: '行业资质',
    tags: ['上海', '高新技术', '认定申报'],
    summary: '2026年高新技术企业申报分为四批，第一批截止日期为4月20日。重点调整了研发费用辅助账的审核要求。',
    hot: true
  },
  {
    id: 2,
    title: '财政部 税务总局关于进一步完善研发费用税前加计扣除政策的公告',
    source: '国家税务总局',
    date: '2026-02-15',
    category: '财税补贴',
    tags: ['全国', '研发费用加计扣除', '减税降费'],
    summary: '企业开展研发活动中实际发生的研发费用，未形成无形资产计入当期损益的，在按规定据实扣除的基础上，自2026年1月1日起，再按照实际发生额的100%在税前加计扣除。',
    hot: true
  },
  {
    id: 3,
    title: '《网络数据安全管理条例》实施细则及企业合规指引',
    source: '网信办',
    date: '2026-01-10',
    category: '法务合规',
    tags: ['数据合规', '数据出境', '监管处罚'],
    summary: '细化了网络数据分类分级保护制度，明确了重要数据处理者的合规审计要求，企业需在每年2月底前提交上一年度安全评估报告。',
    hot: false
  },
  {
    id: 4,
    title: '2026年专精特新中小企业培育资金申报指南',
    source: '工信部',
    date: '2026-03-05',
    category: '财税补贴',
    tags: ['专精特新', '资金扶持', '中小企业'],
    summary: '对新认定的国家级专精特新“小巨人”企业给予最高一次性奖励300万元。申报采用线上+线下形式。',
    hot: true
  }
])

const filteredPolicies = computed(() => {
  return policies.value.filter(p => {
    const matchCategory = activeCategory.value === '全部' || p.category === activeCategory.value
    const matchSearch = p.title.includes(searchQuery.value) || p.tags.some(t => t.includes(searchQuery.value))
    return matchCategory && matchSearch
  })
})
</script>

<template>
  <div class="policy-container flex flex-col gap-6">
    <!-- Header Area -->
    <div class="page-header flex justify-between items-center">
      <div class="title-section">
        <h2 class="text-2xl font-bold text-gray-900">实时政策咨询库</h2>
        <p class="text-gray mt-1 text-sm">对接官方源与人工录入的最新财税、法务、行业补贴政策，AI自动标签化</p>
      </div>
      <button class="btn btn-primary">
        <BookOpen :size="16" /> 订阅政策推送
      </button>
    </div>

    <!-- Radar Stats & Search -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Search & Filters -->
      <div class="col-span-8 card">
        <div class="search-bar mb-6 relative">
          <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray" :size="20" />
          <input v-model="searchQuery" type="text" class="input w-full pl-12 h-12 text-lg"
            placeholder="搜索政策关键词，例如：高新、加计扣除、研发..." />
          <button class="btn btn-primary absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 py-0">搜索</button>
        </div>

        <div class="filter-tabs flex gap-2">
          <button v-for="cat in categories" :key="cat" class="tab-btn" :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat">
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Mini Radar Map / Stats -->
      <div class="col-span-4 card bg-indigo-900 text-white radar-card relative overflow-hidden">
        <div class="z-10 relative">
          <div class="flex items-center gap-2 mb-2">
            <TrendingUp :size="18" />
            <h3 class="font-bold">政策雷达匹配</h3>
          </div>
          <div class="text-xs text-indigo-200 mb-4">系统发现您有 12 家客户可能符合最新补贴政策</div>
          <div class="stat-row flex justify-between items-center border-b border-indigo-700 py-2">
            <span>上海高新复审</span>
            <span class="font-bold text-green-400">5 家命中</span>
          </div>
          <div class="stat-row flex justify-between items-center border-b border-indigo-700 py-2">
            <span>研发加计扣除</span>
            <span class="font-bold text-green-400">8 家命中</span>
          </div>
          <button class="btn w-full mt-4 bg-white text-indigo-900 font-bold hover:bg-gray-100">查看推荐跟进名单</button>
        </div>
        <div class="radar-bg absolute -right-10 -bottom-10 opacity-20">🎯</div>
      </div>
    </div>

    <!-- Policy List -->
    <div class="card policy-list-card p-0">
      <div class="list-header p-4 border-b flex justify-between items-center bg-gray-50">
        <h3 class="font-bold">检索结果 ({{ filteredPolicies.length }}条)</h3>
        <div class="flex gap-2">
          <button class="btn-secondary btn text-xs py-1 px-3">
            <Filter :size="12" /> 筛选
          </button>
          <button class="btn-secondary btn text-xs py-1 px-3">按发布时间排序</button>
        </div>
      </div>

      <div class="list-body">
        <div v-for="p in filteredPolicies" :key="p.id"
          class="policy-item p-6 border-b hover:bg-gray-50 transition-colors">
          <div class="flex justify-between items-start mb-3">
            <h4 class="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span v-if="p.hot"
                class="tag bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded border-red-200 border">HOT</span>
              {{ p.title }}
            </h4>
            <div class="text-xs text-gray flex items-center gap-4">
              <span class="flex items-center gap-1">
                <AlertCircle :size="12" /> {{ p.source }}
              </span>
              <span class="flex items-center gap-1">
                <Calendar :size="12" /> {{ p.date }}
              </span>
            </div>
          </div>

          <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{{ p.summary }}</p>

          <div class="flex justify-between items-center">
            <div class="tags flex gap-2">
              <span v-for="tag in p.tags" :key="tag"
                class="tag bg-indigo-50 text-indigo-700 border border-indigo-100">#{{ tag }}</span>
            </div>

            <div class="actions flex gap-3">
              <button class="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                <Download :size="14" /> 下载源文件
              </button>
              <button class="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                查看政策解读
                <ChevronRight :size="16" />
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredPolicies.length === 0" class="py-12 text-center text-gray">
          <AlertCircle :size="48" class="mx-auto mb-4 text-gray-300" />
          <p>没有找到相关政策，请尝试其他关键词</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-btn {
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: white;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background-color: var(--surface-bg);
}

.tab-btn.active {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.radar-card {
  box-shadow: 0 10px 15px -3px rgba(67, 56, 202, 0.4);
}

.radar-bg {
  font-size: 8rem;
  line-height: 1;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
