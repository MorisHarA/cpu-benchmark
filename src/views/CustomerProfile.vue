<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  getCustomerById,
  updateCustomer,
  addCustomerTag,
  removeCustomerTag,
  addContact,
  removeContact,
  addProject,
  removeProject,
  addDocument,
  removeDocument
} from '../utils/storage'

const route = useRoute()
const router = useRouter()

const customer = ref(null)
const customerId = computed(() => route.params.id)
const activeTab = ref('contacts')

// 弹窗控制
const showEditDialog = ref(false)
const showAddTagDialog = ref(false)
const showAddContactDialog = ref(false)
const showAddProjectDialog = ref(false)
const showAddDocDialog = ref(false)

// 表单数据
const editForm = ref({ name: '', industry: '', scale: '' })
const newTag = ref('')
const newContact = ref({ role: '', name: '', phone: '', influence: '中' })
const newProject = ref({ name: '', amount: '', cycle: '', status: '沟通中' })
const newDoc = ref({ name: '', type: '提案', size: '', access: '全员可见', fileData: '' })
const fileList = ref([]) // 用于存放上传的文件列表

const industryOptions = ['软件/高新技术', '大数据/云计算', '智能制造', '生物医药', '教育科技', '金融服务', '电子商务', '新能源', '农业科技', '人工智能', '其他']
const scaleOptions = ['1-49人', '50-99人', '100-499人', '500-999人', '1000人以上']

onMounted(() => {
  loadCustomer()
})

function loadCustomer() {
  customer.value = getCustomerById(customerId.value)
  if (!customer.value) {
    ElMessage.error('客户不存在')
    router.push('/')
  }
}

// ========= 编辑基本信息 =========
function openEditDialog() {
  editForm.value = {
    name: customer.value.name,
    industry: customer.value.industry,
    scale: customer.value.scale
  }
  showEditDialog.value = true
}

function handleSaveEdit() {
  updateCustomer(customerId.value, editForm.value)
  ElMessage.success('基本信息已更新')
  showEditDialog.value = false
  loadCustomer()
}

// ========= 标签管理 =========
function handleAddTag() {
  if (!newTag.value.trim()) {
    ElMessage.warning('请输入标签名称')
    return
  }
  addCustomerTag(customerId.value, newTag.value.trim())
  ElMessage.success(`标签「${newTag.value}」已添加`)
  newTag.value = ''
  showAddTagDialog.value = false
  loadCustomer()
}

function handleRemoveTag(tag) {
  removeCustomerTag(customerId.value, tag)
  ElMessage.success(`标签「${tag}」已移除`)
  loadCustomer()
}

// ========= 联系人管理 =========
function handleAddContact() {
  if (!newContact.value.name || !newContact.value.role) {
    ElMessage.warning('请填写姓名和角色')
    return
  }
  addContact(customerId.value, { ...newContact.value })
  ElMessage.success(`联系人「${newContact.value.name}」已添加`)
  newContact.value = { role: '', name: '', phone: '', influence: '中' }
  showAddContactDialog.value = false
  loadCustomer()
}

async function handleRemoveContact(index) {
  try {
    await ElMessageBox.confirm('确定移除该联系人？', '确认', { type: 'warning' })
    removeContact(customerId.value, index)
    ElMessage.success('联系人已移除')
    loadCustomer()
  } catch {}
}

// ========= 项目管理 =========
function handleAddProject() {
  if (!newProject.value.name) {
    ElMessage.warning('请输入项目名称')
    return
  }
  addProject(customerId.value, { ...newProject.value })
  ElMessage.success(`项目「${newProject.value.name}」已添加`)
  newProject.value = { name: '', amount: '', cycle: '', status: '沟通中' }
  showAddProjectDialog.value = false
  loadCustomer()
}

async function handleRemoveProject(projectId) {
  try {
    await ElMessageBox.confirm('确定删除该项目？', '确认', { type: 'warning' })
    removeProject(customerId.value, projectId)
    ElMessage.success('项目已删除')
    loadCustomer()
  } catch {}
}

function handleFileChange(uploadFile, uploadFiles) {
  const file = uploadFile.raw
  if (!file) return
  
  if (file.size > 1024 * 1024) {
    ElMessage.warning('文件大小不能超过 1MB')
    fileList.value = []
    return
  }
  
  fileList.value = uploadFiles
  newDoc.value.name = file.name
  newDoc.value.size = (file.size / 1024 / 1024).toFixed(2) + ' MB'
  
  const reader = new FileReader()
  reader.onload = (e) => {
    newDoc.value.fileData = e.target.result
  }
  reader.readAsDataURL(file)
}

function handleAddDoc() {
  if (!newDoc.value.name) {
    ElMessage.warning('请输入文档名称')
    return
  }
  if (!newDoc.value.fileData) {
    ElMessage.warning('请选取文件后再上传')
    return
  }
  addDocument(customerId.value, { ...newDoc.value })
  ElMessage.success(`文档「${newDoc.value.name}」已添加`)
  newDoc.value = { name: '', type: '提案', size: '', access: '全员可见', fileData: '' }
  fileList.value = []
  showAddDocDialog.value = false
  loadCustomer()
}

function handleDownloadDoc(doc) {
  if (doc.fileData) {
    const a = document.createElement('a')
    a.href = doc.fileData
    a.download = doc.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } else {
    ElMessage.info('该文档暂无附件数据')
  }
}

async function handleRemoveDoc(docId) {
  try {
    await ElMessageBox.confirm('确定删除该文档？', '确认', { type: 'warning' })
    removeDocument(customerId.value, docId)
    ElMessage.success('文档已删除')
    loadCustomer()
  } catch {}
}

function getInfluencePercentage(influence) {
  const map = { '高': 100, '中': 60, '低': 30 }
  return map[influence] || 0
}

function getInfluenceColor(influence) {
  const map = { '高': '#10b981', '中': '#f59e0b', '低': '#94a3b8' }
  return map[influence] || '#94a3b8'
}

function getStatusType(status) {
  const map = { '进行中': 'primary', '已签约': 'success', '沟通中': 'warning', '已完成': 'info' }
  return map[status] || 'info'
}
</script>

<template>
  <div class="profile-page" v-if="customer">
    <!-- 顶部操作区 -->
    <div class="top-actions">
      <el-button @click="router.back()" :icon="'ArrowLeft'">返回</el-button>
      <div class="action-group">
        <el-button @click="openEditDialog" :icon="'Edit'">编辑档案</el-button>
        <el-button type="primary" @click="router.push(`/visit-log/${customerId}`)" :icon="'EditPen'">
          填写拜访记录
        </el-button>
      </div>
    </div>

    <!-- 概览卡片 -->
    <el-card class="overview-card" shadow="hover">
      <div class="overview-content">
        <div class="brand-section">
          <el-avatar :size="64" class="company-avatar">
            {{ customer.name.slice(0, 2) }}
          </el-avatar>
          <div class="company-info">
            <h2 class="company-name">{{ customer.name }}</h2>
            <div class="company-meta">
              <el-tag effect="plain" size="small">
                <el-icon><OfficeBuilding /></el-icon> {{ customer.industry }}
              </el-tag>
              <el-text type="info" size="small">规模: {{ customer.scale }}</el-text>
              <el-text type="info" size="small">创建于: {{ customer.createdAt }}</el-text>
            </div>
          </div>
        </div>

        <el-divider direction="vertical" class="overview-divider" />

        <div class="tags-section">
          <div class="tags-header">
            <el-icon><PriceTag /></el-icon>
            <span>客户标签</span>
          </div>
          <div class="tags-list">
            <el-tag
              v-for="tag in customer.tags"
              :key="tag"
              closable
              effect="light"
              @close="handleRemoveTag(tag)"
              class="tag-item"
            >
              {{ tag }}
            </el-tag>
            <el-button
              size="small"
              type="primary"
              text
              :icon="'Plus'"
              @click="showAddTagDialog = true"
            >
              添加标签
            </el-button>
          </div>
        </div>
      </div>
    </el-card>

    <!-- Tabs 内容区 -->
    <el-card shadow="hover" class="content-card">
      <el-tabs v-model="activeTab" type="border-card" class="profile-tabs">
        <!-- 决策链图谱 -->
        <el-tab-pane name="contacts">
          <template #label>
            <span><el-icon><User /></el-icon> 决策链图谱</span>
          </template>
          <div class="tab-header">
            <h3>联系人列表</h3>
            <el-button type="primary" size="small" :icon="'Plus'" @click="showAddContactDialog = true">
              添加联系人
            </el-button>
          </div>
          <div class="contacts-list">
            <div v-for="(contact, index) in customer.contacts" :key="index" class="contact-card">
              <el-avatar :size="42" class="contact-avatar">{{ contact.name[0] }}</el-avatar>
              <div class="contact-info">
                <div class="contact-name-row">
                  <span class="contact-name">{{ contact.name }}</span>
                  <el-tag size="small" effect="plain" type="info">{{ contact.role }}</el-tag>
                </div>
                <el-text type="info" size="small">{{ contact.phone }}</el-text>
              </div>
              <div class="influence-section">
                <el-text size="small" type="info">影响力: {{ contact.influence }}</el-text>
                <el-progress
                  :percentage="getInfluencePercentage(contact.influence)"
                  :color="getInfluenceColor(contact.influence)"
                  :show-text="false"
                  :stroke-width="6"
                  style="width: 80px"
                />
              </div>
              <el-button
                :icon="'Delete'"
                size="small"
                type="danger"
                text
                @click="handleRemoveContact(index)"
              />
            </div>
            <el-empty v-if="!customer.contacts.length" description="暂无联系人" />
          </div>
        </el-tab-pane>

        <!-- 关联项目 -->
        <el-tab-pane name="projects">
          <template #label>
            <span><el-icon><Briefcase /></el-icon> 关联项目</span>
          </template>
          <div class="tab-header">
            <h3>项目列表</h3>
            <el-button type="primary" size="small" :icon="'Plus'" @click="showAddProjectDialog = true">
              添加项目
            </el-button>
          </div>
          <div class="projects-list">
            <div v-for="proj in customer.projects" :key="proj.id" class="project-card">
              <div class="project-info">
                <div class="project-name">{{ proj.name }}</div>
                <div class="project-details">
                  <el-text type="info" size="small">金额: {{ proj.amount }}</el-text>
                  <el-text type="info" size="small">周期: {{ proj.cycle }}</el-text>
                  <el-tag :type="getStatusType(proj.status)" size="small" effect="dark">{{ proj.status }}</el-tag>
                </div>
              </div>
              <el-button :icon="'Delete'" size="small" type="danger" text @click="handleRemoveProject(proj.id)" />
            </div>
            <el-empty v-if="!customer.projects.length" description="暂无项目" />
          </div>
        </el-tab-pane>

        <!-- 文档中心 -->
        <el-tab-pane name="documents">
          <template #label>
            <span><el-icon><FolderOpened /></el-icon> 文档中心</span>
          </template>
          <div class="tab-header">
            <h3>文档列表</h3>
            <el-button type="primary" size="small" :icon="'Upload'" @click="showAddDocDialog = true">
              上传文档
            </el-button>
          </div>
          <div class="doc-list">
            <div v-for="doc in customer.documents" :key="doc.id" class="doc-card">
              <el-icon :size="28" class="doc-icon"><Document /></el-icon>
              <div class="doc-info">
                <div class="doc-name">{{ doc.name }}</div>
                <div class="doc-meta">
                  <el-tag size="small" effect="plain">{{ doc.type }}</el-tag>
                  <el-text type="info" size="small">{{ doc.date }}</el-text>
                  <el-text type="info" size="small">{{ doc.size }}</el-text>
                  <el-tag v-if="doc.access.includes('仅')" size="small" type="warning" effect="plain">
                    <el-icon><Lock /></el-icon> {{ doc.access }}
                  </el-tag>
                  <el-tag v-else size="small" type="success" effect="plain">{{ doc.access }}</el-tag>
                </div>
              </div>
              <div class="doc-actions">
                <el-button :icon="'Download'" size="small" text type="primary" @click="handleDownloadDoc(doc)" />
                <el-button :icon="'Delete'" size="small" text type="danger" @click="handleRemoveDoc(doc.id)" />
              </div>
            </div>
            <el-empty v-if="!customer.documents.length" description="暂无文档" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- ========= 弹窗区域 ========= -->

    <!-- 编辑客户信息 -->
    <el-dialog v-model="showEditDialog" title="编辑客户信息" width="500px">
      <el-form label-width="80px">
        <el-form-item label="客户名称">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="所属行业">
          <el-select v-model="editForm.industry" style="width: 100%">
            <el-option v-for="opt in industryOptions" :key="opt" :label="opt" :value="opt" />
          </el-select>
        </el-form-item>
        <el-form-item label="企业规模">
          <el-select v-model="editForm.scale" style="width: 100%">
            <el-option v-for="opt in scaleOptions" :key="opt" :label="opt" :value="opt" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSaveEdit">保存</el-button>
      </template>
    </el-dialog>

    <!-- 添加标签 -->
    <el-dialog v-model="showAddTagDialog" title="添加标签" width="400px">
      <el-input v-model="newTag" placeholder="输入标签名称" @keyup.enter="handleAddTag" />
      <template #footer>
        <el-button @click="showAddTagDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddTag">添加</el-button>
      </template>
    </el-dialog>

    <!-- 添加联系人 -->
    <el-dialog v-model="showAddContactDialog" title="添加联系人" width="500px">
      <el-form label-width="80px">
        <el-form-item label="姓名" required>
          <el-input v-model="newContact.name" placeholder="联系人姓名" />
        </el-form-item>
        <el-form-item label="角色" required>
          <el-input v-model="newContact.role" placeholder="如：CEO/决策人" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="newContact.phone" placeholder="联系电话" />
        </el-form-item>
        <el-form-item label="影响力">
          <el-radio-group v-model="newContact.influence">
            <el-radio value="高">高</el-radio>
            <el-radio value="中">中</el-radio>
            <el-radio value="低">低</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddContactDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddContact">添加</el-button>
      </template>
    </el-dialog>

    <!-- 添加项目 -->
    <el-dialog v-model="showAddProjectDialog" title="添加项目" width="500px">
      <el-form label-width="80px">
        <el-form-item label="项目名称" required>
          <el-input v-model="newProject.name" placeholder="项目名称" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="newProject.amount" placeholder="如：¥ 100,000" />
        </el-form-item>
        <el-form-item label="周期">
          <el-input v-model="newProject.cycle" placeholder="如：6个月" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="newProject.status" style="width: 100%">
            <el-option label="沟通中" value="沟通中" />
            <el-option label="已签约" value="已签约" />
            <el-option label="进行中" value="进行中" />
            <el-option label="已完成" value="已完成" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddProjectDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddProject">添加</el-button>
      </template>
    </el-dialog>

    <!-- 上传文档 -->
    <el-dialog v-model="showAddDocDialog" title="上传文档" width="500px">
      <el-form label-width="80px">
        <el-form-item label="选择文件" required>
          <el-upload
             class="upload-demo"
             action="#"
             :auto-upload="false"
             :on-change="handleFileChange"
             :file-list="fileList"
             :limit="1"
             style="width: 100%"
          >
            <template #trigger>
              <el-button type="primary">选取附件</el-button>
            </template>
            <template #tip>
               <div class="el-upload__tip">
                 请上传大小不超过 1MB 的文件
               </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="文档名称" required>
          <el-input v-model="newDoc.name" placeholder="如：方案书_V1.pdf" />
        </el-form-item>
        <el-form-item label="文档类型">
          <el-select v-model="newDoc.type" style="width: 100%">
            <el-option label="提案" value="提案" />
            <el-option label="合同" value="合同" />
            <el-option label="报告" value="报告" />
            <el-option label="其他" value="其他" />
          </el-select>
        </el-form-item>
        <el-form-item label="文件大小">
          <el-input v-model="newDoc.size" placeholder="如：2.4 MB" />
        </el-form-item>
        <el-form-item label="权限">
          <el-select v-model="newDoc.access" style="width: 100%">
            <el-option label="全员可见" value="全员可见" />
            <el-option label="仅项目组可见" value="仅项目组可见" />
            <el-option label="仅管理层可见" value="仅管理层可见" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDocDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAddDoc">添加</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-group {
  display: flex;
  gap: 8px;
}

/* 概览卡片 */
.overview-card {
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #ffffff 0%, #eef2ff 100%);
}

.overview-card :deep(.el-card__body) {
  padding: 28px 32px;
}

.overview-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand-section {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.company-avatar {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.company-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}

.company-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.overview-divider {
  height: 60px;
}

.tags-section {
  flex: 1;
}

.tags-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 10px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tag-item {
  border-radius: 6px;
}

/* 内容卡片 */
.content-card {
  border-radius: 16px;
  border: none;
}

.content-card :deep(.el-card__body) {
  padding: 0;
}

.profile-tabs :deep(.el-tabs__header) {
  margin-bottom: 0;
}

.profile-tabs :deep(.el-tabs__content) {
  padding: 24px;
}

.tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.tab-header h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #334155;
}

/* 联系人 */
.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  transition: all 0.2s;
}

.contact-card:hover {
  background: #f1f5f9;
  border-color: #e2e8f0;
}

.contact-avatar {
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  color: #4f46e5;
  font-weight: bold;
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
}

.contact-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.contact-name {
  font-weight: 600;
  color: #1e293b;
}

.influence-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

/* 项目 */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  transition: all 0.2s;
}

.project-card:hover {
  border-color: #e2e8f0;
  background: #f1f5f9;
}

.project-name {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 6px;
}

.project-details {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* 文档 */
.doc-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
  transition: all 0.2s;
}

.doc-card:hover {
  border-color: #c7d2fe;
  background: #faf5ff08;
}

.doc-icon {
  color: #ef4444;
}

.doc-info {
  flex: 1;
}

.doc-name {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

.doc-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.doc-actions {
  display: flex;
  gap: 4px;
}
</style>
