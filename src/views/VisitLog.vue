<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getCustomerById, getVisitsByCustomerId, addVisit, deleteVisit } from '../utils/storage'

const route = useRoute()
const router = useRouter()

const customerId = computed(() => route.params.id)
const customer = ref(null)
const visits = ref([])
const showForm = ref(false)

// 表单
const fileList = ref([])
const newVisit = ref({
  date: '',
  method: '上门拜访',
  content: '',
  nextAction: '',
  deadline: '',
  owner: 'Sales User',
  mood: 5,
  media: []
})

const methodOptions = [
  { value: '上门拜访', type: 'on-site' },
  { value: '电话沟通', type: 'phone' },
  { value: '视频会议', type: 'video' },
  { value: '微信沟通', type: 'wechat' }
]

onMounted(() => {
  loadData()
})

function loadData() {
  customer.value = getCustomerById(customerId.value)
  visits.value = getVisitsByCustomerId(customerId.value)
  if (!customer.value) {
    ElMessage.error('客户不存在')
    router.push('/')
  }
}

function handleSubmit() {
  if (!newVisit.value.content) {
    ElMessage.warning('请填写沟通要点')
    return
  }

  const methodInfo = methodOptions.find(m => m.value === newVisit.value.method)

  addVisit(customerId.value, {
    date: newVisit.value.date || new Date().toISOString().slice(0, 16).replace('T', ' '),
    type: methodInfo?.type || 'on-site',
    method: newVisit.value.method,
    content: newVisit.value.content,
    nextAction: newVisit.value.nextAction,
    deadline: newVisit.value.deadline,
    owner: newVisit.value.owner,
    mood: newVisit.value.mood,
    media: newVisit.value.media || []
  })

  ElMessage.success('拜访记录已保存！')
  showForm.value = false
  newVisit.value = {
    date: '',
    method: '上门拜访',
    content: '',
    nextAction: '',
    deadline: '',
    owner: 'Sales User',
    mood: 5,
    media: []
  }
  fileList.value = []
  loadData()
}

function handleFileChange(uploadFile, uploadFiles) {
  const file = uploadFile.raw
  if (!file) return
  
  if (file.size > 1024 * 1024) {
    ElMessage.warning(`文件 ${file.name} 大小不能超过 1MB`)
    fileList.value = uploadFiles.filter(f => f.uid !== uploadFile.uid)
    return
  }

  fileList.value = uploadFiles
  const reader = new FileReader()
  reader.onload = (e) => {
    const isImage = file.type.startsWith('image/')
    if (!newVisit.value.media) newVisit.value.media = []
    newVisit.value.media.push({
      name: file.name,
      type: isImage ? 'image' : 'file',
      fileData: e.target.result,
      uid: uploadFile.uid
    })
  }
  reader.readAsDataURL(file)
}

function handleRemoveFile(uploadFile, uploadFiles) {
  fileList.value = uploadFiles
  if (!newVisit.value.media) return
  const index = newVisit.value.media.findIndex(m => m.uid === uploadFile.uid || m.name === uploadFile.name)
  if (index !== -1) {
    newVisit.value.media.splice(index, 1)
  }
}

function handleDownloadMedia(m) {
  if (m.fileData) {
    const a = document.createElement('a')
    a.href = m.fileData
    a.download = m.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } else {
    ElMessage.info('该附件无真实文件数据')
  }
}

async function handleDeleteVisit(visitId) {
  try {
    await ElMessageBox.confirm('确定删除该拜访记录？', '确认删除', { type: 'warning' })
    deleteVisit(customerId.value, visitId)
    ElMessage.success('已删除')
    loadData()
  } catch {}
}

function getMethodIcon(type) {
  const map = { 'on-site': 'Location', 'phone': 'Phone', 'video': 'VideoCamera', 'wechat': 'ChatDotRound' }
  return map[type] || 'ChatDotRound'
}

function getMethodColor(type) {
  const map = { 'on-site': '#6366f1', 'phone': '#10b981', 'video': '#3b82f6', 'wechat': '#22c55e' }
  return map[type] || '#6366f1'
}
</script>

<template>
  <div class="visit-page" v-if="customer">
    <!-- 顶部 -->
    <div class="top-actions">
      <el-button @click="router.back()" :icon="'ArrowLeft'">返回</el-button>
      <div class="title-section">
        <h2>历史拜访与互动记录</h2>
        <el-text type="info">{{ customer.name }}</el-text>
      </div>
      <el-button type="primary" @click="showForm = !showForm" :icon="showForm ? 'Close' : 'EditPen'">
        {{ showForm ? '取消填写' : '新增拜访日志' }}
      </el-button>
    </div>

    <!-- 填写表单 -->
    <el-card v-if="showForm" shadow="hover" class="form-card">
      <template #header>
        <div>
          <h3 class="form-title">
            <el-icon><EditPen /></el-icon> 填写简易跟进日志
          </h3>
          <el-text type="info" size="small">销售每次拜访后必须填写，以保证沉淀客户需求</el-text>
        </div>
      </template>

      <el-form label-width="100px" class="visit-form">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="拜访时间">
              <el-date-picker
                v-model="newVisit.date"
                type="datetime"
                placeholder="选择日期时间"
                style="width: 100%"
                value-format="YYYY-MM-DD HH:mm"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="沟通方式">
              <el-select v-model="newVisit.method" style="width: 100%">
                <el-option
                  v-for="opt in methodOptions"
                  :key="opt.value"
                  :label="opt.value"
                  :value="opt.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="沟通要点" required>
          <el-input
            v-model="newVisit.content"
            type="textarea"
            :rows="3"
            placeholder="记录客户当前痛点及提出的新需求..."
          />
        </el-form-item>

        <el-form-item label="上传附件">
          <el-upload
            class="upload-demo"
            action="#"
            :auto-upload="false"
            :on-change="handleFileChange"
            :on-remove="handleRemoveFile"
            :file-list="fileList"
            multiple
          >
            <el-button type="primary" size="small">点击选取</el-button>
            <template #tip>
              <div class="el-upload__tip">
                支持上传图片/录音/文档等 (单文件大小不超过 1MB)
              </div>
            </template>
          </el-upload>
        </el-form-item>

        <el-divider content-position="left">
          <el-text type="info" size="small">Action Item</el-text>
        </el-divider>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="下一步计划">
              <el-input v-model="newVisit.nextAction" placeholder="具体要做的事项" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="截止日期">
              <el-date-picker
                v-model="newVisit.deadline"
                type="date"
                placeholder="截止日期"
                style="width: 100%"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="责任人">
              <el-input v-model="newVisit.owner" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="客户情绪">
              <el-rate
                v-model="newVisit.mood"
                :texts="['很差', '较差', '一般', '较好', '很好']"
                show-text
                :colors="['#f56c6c', '#e6a23c', '#e6a23c', '#409EFF', '#67c23a']"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" style="text-align: right; padding-top: 4px;">
            <el-button @click="showForm = false">取消</el-button>
            <el-button type="primary" @click="handleSubmit" :icon="'Check'">
              提交日志
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- 时间轴 -->
    <el-card shadow="hover" class="timeline-card">
      <template #header>
        <h3 class="timeline-title">
          <el-icon><Clock /></el-icon> 互动时间轴
          <el-tag type="info" effect="plain" size="small" style="margin-left: 8px">
            共 {{ visits.length }} 条记录
          </el-tag>
        </h3>
      </template>

      <el-timeline v-if="visits.length > 0">
        <el-timeline-item
          v-for="log in visits"
          :key="log.id"
          :timestamp="log.date"
          placement="top"
          :color="getMethodColor(log.type)"
          :icon="getMethodIcon(log.type)"
          :hollow="false"
          size="large"
        >
          <el-card shadow="hover" class="timeline-content-card">
            <div class="tl-header">
              <div class="tl-title-row">
                <el-tag effect="dark" size="small" :color="getMethodColor(log.type)" style="border: none; color: white">
                  {{ log.method }}
                </el-tag>
                <el-text type="info" size="small">{{ log.date }}</el-text>
              </div>
              <div class="tl-actions">
                <el-rate
                  :model-value="log.mood"
                  disabled
                  :colors="['#f56c6c', '#e6a23c', '#e6a23c', '#409EFF', '#67c23a']"
                  size="small"
                />
                <el-button
                  :icon="'Delete'"
                  size="small"
                  type="danger"
                  text
                  @click="handleDeleteVisit(log.id)"
                />
              </div>
            </div>

            <p class="tl-content">{{ log.content }}</p>

            <!-- 附件 -->
            <div v-if="log.media && log.media.length > 0" class="tl-media">
              <el-tag
                v-for="(m, i) in log.media"
                :key="i"
                effect="plain"
                size="small"
                class="media-tag"
                @click="handleDownloadMedia(m)"
                style="cursor: pointer"
              >
                <el-icon>
                  <Picture v-if="m.type === 'image'" />
                  <Headset v-else />
                </el-icon>
                {{ m.name }}
              </el-tag>
            </div>

            <!-- Action Item -->
            <div v-if="log.nextAction" class="tl-action-box">
              <div class="action-left">
                <el-text type="warning" size="small" tag="b">下一步 Action Item</el-text>
                <div class="action-text">{{ log.nextAction }}</div>
              </div>
              <div class="action-right">
                <el-text type="info" size="small">
                  截止: {{ log.deadline || '待定' }} | {{ log.owner }}
                </el-text>
              </div>
            </div>
          </el-card>
        </el-timeline-item>

        <!-- 起点 -->
        <el-timeline-item timestamp="初始接触" placement="top" :hollow="true" type="info">
          <el-text type="info" tag="b">初次接触 - 创建档案</el-text>
        </el-timeline-item>
      </el-timeline>

      <el-empty v-else description="暂无拜访记录，点击右上角添加第一条吧" />
    </el-card>
  </div>
</template>

<style scoped>
.visit-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-section {
  text-align: center;
}

.title-section h2 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2px;
}

/* 表单卡片 */
.form-card {
  border-radius: 14px;
  border-left: 4px solid var(--el-color-primary);
}

.form-title {
  font-size: 1.05rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #334155;
}

/* 时间轴卡片 */
.timeline-card {
  border-radius: 14px;
}

.timeline-title {
  font-size: 1.05rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #334155;
}

.timeline-content-card {
  border-radius: 12px;
}

.timeline-content-card :deep(.el-card__body) {
  padding: 18px;
}

.tl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tl-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tl-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tl-content {
  color: #475569;
  line-height: 1.7;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.tl-media {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}

.media-tag {
  cursor: pointer;
}

.tl-action-box {
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-text {
  font-size: 0.88rem;
  font-weight: 500;
  color: #1e293b;
  margin-top: 4px;
}

.action-right {
  text-align: right;
}
</style>
