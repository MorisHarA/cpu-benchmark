<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Clock, MapPin, Phone, Video, Calendar, User, Star, UploadCloud, FileAudio, FileImage, CreditCard, Send } from 'lucide-vue-next'

const router = useRouter()
const showForm = ref(false)

// Timeline Data
const timeline = ref([
  {
    id: 1,
    date: '2026-03-08 14:30',
    type: 'on-site',
    method: '上门拜访',
    content: '沟通高新补贴方案，客户对税务成本控制有较高要求，提出需要在方案中补充风险评估。',
    nextAction: '发送高新补贴方案修改版',
    deadline: '2026-03-12',
    owner: 'Sales User',
    mood: 4,
    media: [
      { type: 'image', name: '会议现场.jpg' },
      { type: 'audio', name: '客户诉求录音.mp3' }
    ]
  },
  {
    id: 2,
    date: '2026-02-20 10:00',
    type: 'phone',
    method: '电话沟通',
    content: '初步介绍公司服务，客户表示目前有申报高新的意向，但对条件是否满足存疑。',
    nextAction: '发送资质自评表给客户填写',
    deadline: '2026-02-22',
    owner: 'Sales User',
    mood: 3,
    media: []
  }
])

// Form Data
const newVisit = ref({
  date: '',
  method: '上门',
  content: '',
  nextAction: '',
  deadline: '',
  owner: 'Sales User',
  mood: 5
})

const submitVisit = () => {
  timeline.value.unshift({
    id: Date.now(),
    date: newVisit.value.date || new Date().toISOString().slice(0, 16).replace('T', ' '),
    type: newVisit.value.method === '电话' ? 'phone' : newVisit.value.method === '会议' ? 'video' : 'on-site',
    method: newVisit.value.method,
    content: newVisit.value.content,
    nextAction: newVisit.value.nextAction,
    deadline: newVisit.value.deadline,
    owner: newVisit.value.owner,
    mood: newVisit.value.mood,
    media: []
  })
  showForm.value = false
  newVisit.value.content = ''
  newVisit.value.nextAction = ''
  alert('拜访记录已保存！')
}
</script>

<template>
  <div class="visit-container flex flex-col gap-6">
    <div class="header-actions">
      <button @click="router.back()" class="btn btn-secondary">
        <ArrowLeft :size="16" /> 返回
      </button>
      <div class="title">
        <h2>历史拜访与互动记录</h2>
        <span class="text-sm text-gray">上海星瑞科技有限公司</span>
      </div>
      <button @click="showForm = !showForm" class="btn btn-primary">
        {{ showForm ? '取消填写' : '新增拜访日志' }}
      </button>
    </div>

    <!-- Structured Form -->
    <div class="card form-card" v-if="showForm">
      <div class="form-header rounded-t border-b">
        <h3 class="font-bold text-lg mb-2">填写简易跟进日志</h3>
        <p class="text-xs text-gray">销售每次拜访后必须填写，以保证沉淀客户需求</p>
      </div>

      <div class="form-body flex flex-col gap-4 mt-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-item">
            <label>拜访时间</label>
            <input type="datetime-local" v-model="newVisit.date" class="input" />
          </div>
          <div class="form-item">
            <label>沟通方式</label>
            <select v-model="newVisit.method" class="input select">
              <option>上门</option>
              <option>电话</option>
              <option>会议</option>
            </select>
          </div>
        </div>

        <div class="form-item">
          <label>沟通要点 (痛点/新需求)</label>
          <textarea v-model="newVisit.content" rows="3" class="textarea" placeholder="记录客户当前痛点及提出的新需求..."></textarea>
        </div>

        <div class="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md mt-2">
          <div class="form-item">
            <label class="flex items-center gap-2">
              <Calendar :size="14" /> 下一步计划 (Action Item)
            </label>
            <input v-model="newVisit.nextAction" type="text" class="input" placeholder="具体要做的事项" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-item">
              <label>截止日期</label>
              <input v-model="newVisit.deadline" type="date" class="input" />
            </div>
            <div class="form-item">
              <label>责任人</label>
              <input v-model="newVisit.owner" type="text" class="input" />
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center mt-2">
          <div class="form-item row items-center gap-4">
            <label class="mb-0">客户情绪评分</label>
            <div class="rating flex gap-1 cursor-pointer">
              <Star v-for="i in 5" :key="i" :size="24"
                :class="i <= newVisit.mood ? 'text-yellow text-primary-fill' : 'text-gray'"
                @click="newVisit.mood = i" />
            </div>
          </div>

          <div class="media-upload flex gap-2">
            <button class="btn-icon bg-blue-50 text-blue border" title="上传现场照片">
              <FileImage :size="18" />
            </button>
            <button class="btn-icon bg-green-50 text-green border" title="上传录音 (自动转文字)">
              <FileAudio :size="18" />
            </button>
            <button class="btn-icon bg-purple-50 text-purple border" title="名片扫描">
              <CreditCard :size="18" />
            </button>
          </div>
        </div>

      </div>

      <div class="form-footer mt-6 flex justify-end gap-4 border-t pt-4">
        <button @click="showForm = false" class="btn btn-secondary">取消</button>
        <button @click="submitVisit" class="btn btn-primary">
          <Send :size="16" /> 提交日志
        </button>
      </div>
    </div>

    <!-- Timeline View -->
    <div class="card timeline-card">
      <h3 class="font-bold text-lg mb-6 flex items-center gap-2">
        <Clock :size="18" /> 互动时间轴
      </h3>

      <div class="timeline">
        <div v-for="log in timeline" :key="log.id" class="timeline-item">
          <!-- Dot & Line -->
          <div class="timeline-dot">
            <MapPin v-if="log.type === 'on-site'" :size="14" />
            <Phone v-else-if="log.type === 'phone'" :size="14" />
            <Video v-else :size="14" />
          </div>

          <!-- Content Panel -->
          <div class="timeline-content card hover-effect">
            <div class="tl-header">
              <div class="tl-title font-bold text-lg flex items-center gap-2">
                {{ log.method }}
                <span class="date tag mt-0 text-gray bg-gray-100 border">{{ log.date }}</span>
              </div>
              <div class="rating flex">
                <Star v-for="i in 5" :key="i" :size="14" :fill="i <= log.mood ? '#f59e0b' : 'none'"
                  :color="i <= log.mood ? '#f59e0b' : '#d1d5db'" />
              </div>
            </div>

            <p class="tl-desc mt-3 text-gray leading-relaxed">{{ log.content }}</p>

            <div v-if="log.media && log.media.length > 0" class="tl-media flex gap-2 mt-4">
              <div v-for="(m, i) in log.media" :key="i"
                class="media-tag flex items-center gap-1 bg-indigo-50 text-primary border p-1 px-2 rounded-md text-xs cursor-pointer hover:bg-indigo-100">
                <FileImage v-if="m.type === 'image'" :size="12" />
                <FileAudio v-if="m.type === 'audio'" :size="12" />
                {{ m.name }}
              </div>
            </div>

            <div class="tl-action mt-4 bg-yellow-50 border p-3 rounded-md flex justify-between items-center">
              <div>
                <span class="text-xs text-yellow-800 font-bold block mb-1">下一步 Action Item</span>
                <span class="text-sm font-medium">{{ log.nextAction }}</span>
              </div>
              <div class="text-right">
                <span class="text-xs text-light block mb-1">截止 & 责任人</span>
                <span class="text-xs tag bg-white border">
                  <Calendar :size="10" class="inline" /> {{ log.deadline }} | {{ log.owner }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Beginning of time -->
        <div class="timeline-item start-item">
          <div class="timeline-dot bg-gray"></div>
          <div class="text-sm font-bold text-gray ml-2 mt-1">初次接触 - 创建档案</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-actions .title {
  text-align: center;
}

.header-actions .title h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.form-card {
  border-left: 4px solid var(--primary);
  background-color: #fcfcfd;
}

.form-item label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: #374151;
}

.select {
  appearance: none;
}

.text-yellow {
  color: #f59e0b;
}

.text-primary-fill {
  fill: #f59e0b;
}

.timeline-card {
  padding: 32px;
}

.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 31px;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
  padding-left: 40px;
}

.start-item .timeline-dot {
  width: 12px;
  height: 12px;
  background-color: #d1d5db;
  border-radius: 50%;
  left: -2px;
}

.start-item::before {
  display: none;
}

.timeline-dot {
  position: absolute;
  top: 10px;
  left: -1px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px white;
  z-index: 10;
}

.hover-effect {
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--border-color);
  padding: 20px;
}

.hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: #c7d2fe;
}

.tl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tl-desc {
  color: #4b5563;
}
</style>
