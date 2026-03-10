<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Building, Tags, Users, FolderOpen, Briefcase, FileText, Download, Lock } from 'lucide-vue-next'

const router = useRouter()

const customer = ref({
  name: '上海星瑞科技有限公司',
  industry: '软件/高新技术',
  scale: '100-499人',
  tags: ['高新技术企业', '拟上市', '税务稽查风险', '已签约', '跟进中'],
  contacts: [
    { role: 'CEO/决策人', name: '张建国', phone: '138****0001', influence: '高' },
    { role: '财务总监/影响人', name: '李梅', phone: '139****0002', influence: '中' },
    { role: '经办人/执行', name: '王强', phone: '137****0003', influence: '低' }
  ],
  projects: [
    { name: '2026年高新企业复审辅导', amount: '¥ 120,000', cycle: '12个月', status: '进行中' },
    { name: '企业股份制改造合规咨询', amount: '¥ 350,000', cycle: '6个月', status: '已签约' }
  ],
  documents: [
    { name: '星瑞科技_高新复审建议书.pdf', type: '提案', date: '2026-03-01', size: '2.4 MB', access: '全员可见' },
    { name: '股份制改造保密协议_扫描件.pdf', type: '合同', date: '2026-02-15', size: '1.1 MB', access: '仅项目组可见' }
  ]
})
</script>

<template>
  <div class="profile-container flex flex-col gap-4">
    <div class="header-actions">
      <button @click="router.back()" class="btn btn-secondary">
        <ArrowLeft :size="16" /> 返回
      </button>
      <div class="actions">
        <button class="btn btn-secondary">编辑档案</button>
        <button @click="router.push(`/visit-log/1`)" class="btn btn-primary">填写拜访记录</button>
      </div>
    </div>

    <!-- Overview Card -->
    <div class="card overview-card grid">
      <div class="brand-info">
        <div class="company-logo">星瑞</div>
        <div>
          <h2 class="company-name">{{ customer.name }}</h2>
          <div class="flex gap-4 mt-2 text-sm text-gray">
            <span class="flex items-center gap-2">
              <Building :size="14" /> {{ customer.industry }}
            </span>
            <span>规模: {{ customer.scale }}</span>
          </div>
        </div>
      </div>

      <div class="tags-section">
        <div class="flex items-center gap-2 mb-2 text-sm text-gray font-medium">
          <Tags :size="14" /> 客户标签
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in customer.tags" :key="tag" class="tag">{{ tag }}</span>
          <button class="tag add-tag">+ 添加标签</button>
        </div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-2 gap-4">
      <!-- Left Column -->
      <div class="flex flex-col gap-4">
        <!-- Decision Chain -->
        <div class="card">
          <div class="card-header">
            <h3>
              <Users :size="18" /> 决策链图谱
            </h3>
          </div>
          <div class="contacts-list">
            <div v-for="(contact, index) in customer.contacts" :key="index" class="contact-item">
              <div class="contact-avatar">{{ contact.name[0] }}</div>
              <div class="contact-info">
                <div class="contact-name font-medium">{{ contact.name }} <span class="role-badge">{{ contact.role
                    }}</span></div>
                <div class="text-xs text-light mt-1">{{ contact.phone }}</div>
              </div>
              <div class="influence-bar" :title="`影响力: ${contact.influence}`">
                <div
                  :class="['bar-fill', `fill-${contact.influence === '高' ? 'high' : contact.influence === '中' ? 'med' : 'low'}`]">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Associated Projects -->
        <div class="card">
          <div class="card-header">
            <h3>
              <Briefcase :size="18" /> 关联项目
            </h3>
          </div>
          <div class="projects-list">
            <div v-for="(proj, i) in customer.projects" :key="i" class="project-item">
              <div class="proj-name font-medium">{{ proj.name }}</div>
              <div class="flex justify-between mt-2 text-sm">
                <span class="text-gray">金额: {{ proj.amount }}</span>
                <span class="text-gray">周期: {{ proj.cycle }}</span>
                <span class="tag tag-success">{{ proj.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-4">
        <!-- Document Center -->
        <div class="card doc-center">
          <div class="card-header">
            <h3>
              <FolderOpen :size="18" /> 文档中心
            </h3>
            <button class="btn btn-secondary text-sm">上传文档</button>
          </div>
          <div class="doc-list">
            <div v-for="(doc, i) in customer.documents" :key="i" class="doc-item">
              <FileText :size="24" class="doc-icon" />
              <div class="doc-info">
                <div class="doc-name font-medium">{{ doc.name }}</div>
                <div class="doc-meta flex gap-3 text-xs text-light mt-1">
                  <span class="tag-outline">{{ doc.type }}</span>
                  <span>{{ doc.date }}</span>
                  <span>{{ doc.size }}</span>
                </div>
              </div>
              <div class="doc-actions flex gap-2">
                <Lock v-if="doc.access.includes('仅')" :size="14" class="text-light" title="权限控制" />
                <button class="btn-icon">
                  <Download :size="16" />
                </button>
              </div>
            </div>
          </div>
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

.overview-card {
  gap: 32px;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  background: linear-gradient(to right, white, var(--primary-light));
  border: none;
}

.brand-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.company-logo {
  width: 64px;
  height: 64px;
  background-color: var(--primary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: var(--shadow-primary);
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.add-tag {
  background-color: white;
  border: 1px dashed var(--primary);
  color: var(--primary);
  cursor: pointer;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 16px;
}

.card-header h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.125rem;
  color: #374151;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-avatar {
  width: 40px;
  height: 40px;
  background-color: #e0e7ff;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.contact-info {
  flex: 1;
}

.role-badge {
  font-size: 0.7rem;
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
  color: #6b7280;
}

.influence-bar {
  width: 60px;
  height: 6px;
  background-color: #f3f4f6;
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 3px;
}

.fill-high {
  width: 100%;
  background-color: var(--secondary);
}

.fill-med {
  width: 60%;
  background-color: #f59e0b;
}

.fill-low {
  width: 30%;
  background-color: #9ca3af;
}

.project-item {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  border: 1px solid var(--border-color);
}

.doc-center {
  height: 100%;
}

.doc-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  transition: all 0.2s;
}

.doc-item:hover {
  border-color: var(--primary);
  background-color: var(--primary-light);
}

.doc-icon {
  color: #ef4444;
  /* PDF color */
}

.doc-info {
  flex: 1;
}

.tag-outline {
  border: 1px solid #d1d5db;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
}
</style>
