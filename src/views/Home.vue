<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getCustomers, saveCustomers, addCustomer, deleteCustomer } from '../utils/storage'

const router = useRouter()

// ========= 客户数据 =========
const customers = ref([])
const customerSearch = ref('')
const showAddCustomerDialog = ref(false)

const newCustomerForm = ref({
  name: '',
  industry: '',
  scale: '',
  nextAction: ''
})

const industryOptions = ['软件/高新技术', '大数据/云计算', '智能制造', '生物医药', '教育科技', '金融服务', '电子商务', '新能源', '农业科技', '人工智能', '其他']
const scaleOptions = ['1-49人', '50-99人', '100-499人', '500-999人', '1000人以上']

onMounted(() => {
  loadData()
})

function loadData() {
  customers.value = getCustomers()
}

const filteredCustomers = computed(() => {
  if (!customerSearch.value) return customers.value
  return customers.value.filter(c => c.name.includes(customerSearch.value))
})

// 新增客户
function handleAddCustomer() {
  if (!newCustomerForm.value.name) {
    ElMessage.warning('请输入客户名称')
    return
  }
  const customer = addCustomer({
    name: newCustomerForm.value.name,
    industry: newCustomerForm.value.industry || '其他',
    scale: newCustomerForm.value.scale || '1-49人',
    lastFollow: new Date().toISOString().slice(0, 10),
    nextAction: newCustomerForm.value.nextAction || '首次联系'
  })
  ElMessage.success(`客户「${customer.name}」创建成功！`)
  showAddCustomerDialog.value = false
  newCustomerForm.value = { name: '', industry: '', scale: '', nextAction: '' }
  loadData()
}

// 删除客户
async function handleDeleteCustomer(customer) {
  try {
    await ElMessageBox.confirm(
      `确定要删除客户「${customer.name}」吗？此操作不可恢复。`,
      '确认删除',
      { confirmButtonText: '确定删除', cancelButtonText: '取消', type: 'warning' }
    )
    deleteCustomer(customer.id)
    ElMessage.success('删除成功')
    loadData()
  } catch {
    // cancelled
  }
}

// 复制政策话术
function copyPolicy(title, date) {
  const text = `客户您好，跟您同步一条最新政策：\n【${title}】(发布于 ${date})\n详情我们可以电话沟通。`
  navigator.clipboard.writeText(text)
  ElMessage.success('话术已复制到剪贴板！')
}

// 快捷政策列表(首页显示4条)
const quickPolicies = ref([
  { id: 101, title: '2026年高新技术企业认定最新申报指南', tags: ['高新', '申报', '2026新规'], date: '2026-03-01' },
  { id: 102, title: '关于进一步加大研发费用加计扣除力度的通知', tags: ['税务', '研发费用加计扣除', '补贴'], date: '2026-02-15' },
  { id: 103, title: '重点产业专项资金补贴操作指引（上海）', tags: ['上海', '补贴', '资金补助'], date: '2026-01-20' },
  { id: 104, title: '企业上市挂牌奖励及补贴政策汇总', tags: ['拟上市', '奖励'], date: '2025-11-10' }
])

// 统计数据
const stats = computed(() => {
  const total = customers.value.length
  const thisMonth = customers.value.filter(c =>
    c.lastFollow && c.lastFollow.startsWith(new Date().toISOString().slice(0, 7))
  ).length
  return { total, thisMonth }
})

// 获取客户跟进状态颜色
function getFollowStatus(date) {
  if (!date) return 'info'
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24))
  if (diff <= 3) return 'success'
  if (diff <= 7) return 'warning'
  return 'danger'
}

function getFollowLabel(date) {
  if (!date) return '未跟进'
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24))
  if (diff <= 0) return '今天'
  if (diff === 1) return '昨天'
  return `${diff}天前`
}
</script>

<template>
  <div class="home-page">
    <!-- 数据统计卡片 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card stat-card-primary">
          <div class="stat-content">
            <div class="stat-icon">
              <el-icon :size="28"><User /></el-icon>
            </div>
            <div class="stat-text">
              <div class="stat-number">{{ stats.total }}</div>
              <div class="stat-label">客户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card stat-card-success">
          <div class="stat-content">
            <div class="stat-icon icon-success">
              <el-icon :size="28"><Calendar /></el-icon>
            </div>
            <div class="stat-text">
              <div class="stat-number">{{ stats.thisMonth }}</div>
              <div class="stat-label">本月跟进</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card stat-card-warning">
          <div class="stat-content">
            <div class="stat-icon icon-warning">
              <el-icon :size="28"><Briefcase /></el-icon>
            </div>
            <div class="stat-text">
              <div class="stat-number">{{ customers.reduce((a, c) => a + (c.projects?.length || 0), 0) }}</div>
              <div class="stat-label">进行中项目</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="stat-card stat-card-info">
          <div class="stat-content">
            <div class="stat-icon icon-info">
              <el-icon :size="28"><Reading /></el-icon>
            </div>
            <div class="stat-text">
              <div class="stat-number">{{ quickPolicies.length }}</div>
              <div class="stat-label">最新政策</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 主要内容区域 -->
    <el-row :gutter="20" class="main-row">
      <!-- 左侧：客户跟进管理 -->
      <el-col :span="14">
        <el-card shadow="hover" class="section-card">
          <template #header>
            <div class="card-header-flex">
              <div class="header-left">
                <h3 class="section-title">
                  <el-icon><UserFilled /></el-icon> 客户跟进管理
                </h3>
                <el-tag type="primary" effect="dark" round size="small">
                  {{ customers.length }} 家跟进中
                </el-tag>
              </div>
              <el-button type="primary" :icon="'Plus'" @click="showAddCustomerDialog = true">
                新增客户
              </el-button>
            </div>
            <el-input
              v-model="customerSearch"
              placeholder="搜索客户名称..."
              clearable
              class="search-input"
              :prefix-icon="'Search'"
            />
          </template>

          <div class="customer-list">
            <div
              v-for="item in filteredCustomers"
              :key="item.id"
              class="customer-item"
              @click="router.push(`/customer/${item.id}`)"
            >
              <el-avatar class="customer-avatar" :size="42">
                {{ item.name.slice(0, 2) }}
              </el-avatar>
              <div class="customer-info">
                <div class="customer-name">{{ item.name }}</div>
                <div class="customer-meta-info">
                  <el-tag :type="getFollowStatus(item.lastFollow)" size="small" effect="plain">
                    <el-icon><Clock /></el-icon> {{ getFollowLabel(item.lastFollow) }}
                  </el-tag>
                  <span class="industry-label">{{ item.industry }}</span>
                </div>
              </div>
              <div class="next-action-col">
                <div class="action-label">下一步</div>
                <div class="action-text">{{ item.nextAction }}</div>
              </div>
              <div class="item-actions">
                <el-button :icon="'ArrowRight'" circle size="small" />
                <el-button
                  :icon="'Delete'"
                  circle
                  size="small"
                  type="danger"
                  plain
                  @click.stop="handleDeleteCustomer(item)"
                />
              </div>
            </div>

            <el-empty v-if="filteredCustomers.length === 0" description="没有找到客户" />
          </div>
        </el-card>
      </el-col>

      <!-- 右侧：最新政策资讯 -->
      <el-col :span="10">
        <el-card shadow="hover" class="section-card">
          <template #header>
            <div class="card-header-flex">
              <h3 class="section-title">
                <el-icon><Reading /></el-icon> 最新政策资讯
              </h3>
              <el-button type="primary" text @click="router.push('/policy')">
                查看全部 <el-icon class="el-icon--right"><ArrowRight /></el-icon>
              </el-button>
            </div>
          </template>

          <div class="policy-list">
            <div v-for="p in quickPolicies" :key="p.id" class="policy-card-item">
              <h4 class="policy-title" @click="router.push('/policy')">{{ p.title }}</h4>
              <div class="policy-bottom">
                <div class="policy-tags">
                  <el-tag v-for="t in p.tags" :key="t" size="small" effect="plain" type="info">
                    {{ t }}
                  </el-tag>
                </div>
                <div class="policy-actions">
                  <el-text type="info" size="small">{{ p.date }}</el-text>
                  <el-button size="small" text type="primary" @click.stop="copyPolicy(p.title, p.date)">
                    <el-icon><CopyDocument /></el-icon> 话术
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 新增客户弹窗 -->
    <el-dialog v-model="showAddCustomerDialog" title="新增客户" width="520px" :close-on-click-modal="false">
      <el-form label-width="80px">
        <el-form-item label="客户名称" required>
          <el-input v-model="newCustomerForm.name" placeholder="请输入企业全称" />
        </el-form-item>
        <el-form-item label="所属行业">
          <el-select v-model="newCustomerForm.industry" placeholder="请选择行业" style="width: 100%">
            <el-option v-for="opt in industryOptions" :key="opt" :label="opt" :value="opt" />
          </el-select>
        </el-form-item>
        <el-form-item label="企业规模">
          <el-select v-model="newCustomerForm.scale" placeholder="请选择规模" style="width: 100%">
            <el-option v-for="opt in scaleOptions" :key="opt" :label="opt" :value="opt" />
          </el-select>
        </el-form-item>
        <el-form-item label="下一步">
          <el-input v-model="newCustomerForm.nextAction" placeholder="首次联系计划" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddCustomerDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddCustomer">确认创建</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 统计卡片 */
.stat-card {
  border-radius: 14px;
  border: none;
}

.stat-card :deep(.el-card__body) {
  padding: 20px;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;
}

.icon-success { background: linear-gradient(135deg, #10b981, #34d399); }
.icon-warning { background: linear-gradient(135deg, #f59e0b, #fbbf24); }
.icon-info { background: linear-gradient(135deg, #3b82f6, #60a5fa); }

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1;
}

.stat-label {
  font-size: 0.82rem;
  color: #94a3b8;
  margin-top: 4px;
}

/* 内容区 */
.section-card {
  border-radius: 14px;
  border: none;
  height: 100%;
}

.section-card :deep(.el-card__header) {
  padding: 20px 24px 16px;
}

.card-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 6px;
}

.search-input {
  margin-top: 14px;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 10px;
  background: #f8fafc;
}

/* 客户列表 */
.customer-list {
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.customer-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s;
  border: 1px solid transparent;
}

.customer-item:hover {
  background: #f1f5f9;
  border-color: #e2e8f0;
  transform: translateX(4px);
}

.customer-avatar {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.customer-info {
  flex: 1;
  min-width: 0;
}

.customer-name {
  font-weight: 600;
  color: #1e293b;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.customer-meta-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.industry-label {
  font-size: 0.75rem;
  color: #94a3b8;
}

.next-action-col {
  max-width: 200px;
  min-width: 120px;
}

.action-label {
  font-size: 0.7rem;
  color: #94a3b8;
  margin-bottom: 2px;
}

.action-text {
  font-size: 0.82rem;
  color: #475569;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.customer-item:hover .item-actions {
  opacity: 1;
}

/* 政策列表 */
.policy-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.policy-card-item {
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: linear-gradient(to right bottom, #fff, #f8fafc);
  transition: all 0.2s;
}

.policy-card-item:hover {
  border-color: #c7d2fe;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);
}

.policy-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.5;
  cursor: pointer;
  margin-bottom: 10px;
}

.policy-title:hover {
  color: var(--el-color-primary);
}

.policy-bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.policy-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.policy-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
