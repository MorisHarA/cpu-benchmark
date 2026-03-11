/**
 * localStorage 数据持久化服务
 * 所有数据均在本地存储，无需后端接口
 */

const STORAGE_KEYS = {
  CUSTOMERS: 'crm_customers',
  VISITS: 'crm_visits',
  POLICIES: 'crm_policies',
  TAGS: 'crm_tags',
  DOCUMENTS: 'crm_documents',
  SETTINGS: 'crm_settings'
}

// 通用读写方法
function getItem(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : defaultValue
  } catch (e) {
    console.error(`Failed to parse localStorage key "${key}":`, e)
    return defaultValue
  }
}

function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(`Failed to save to localStorage key "${key}":`, e)
  }
}

// ==================== 客户管理 ====================
const DEFAULT_CUSTOMERS = [
  {
    id: 1,
    name: '上海星瑞科技有限公司',
    industry: '软件/高新技术',
    scale: '100-499人',
    lastFollow: '2026-03-08',
    nextAction: '发送高新补贴方案修改版',
    tags: ['高新技术企业', '拟上市', '税务稽查风险', '已签约', '跟进中'],
    contacts: [
      { role: 'CEO/决策人', name: '张建国', phone: '138****0001', influence: '高' },
      { role: '财务总监/影响人', name: '李梅', phone: '139****0002', influence: '中' },
      { role: '经办人/执行', name: '王强', phone: '137****0003', influence: '低' }
    ],
    projects: [
      { id: 'p1', name: '2026年高新企业复审辅导', amount: '¥ 120,000', cycle: '12个月', status: '进行中' },
      { id: 'p2', name: '企业股份制改造合规咨询', amount: '¥ 350,000', cycle: '6个月', status: '已签约' }
    ],
    documents: [
      { id: 'd1', name: '星瑞科技_高新复审建议书.pdf', type: '提案', date: '2026-03-01', size: '2.4 MB', access: '全员可见' },
      { id: 'd2', name: '股份制改造保密协议_扫描件.pdf', type: '合同', date: '2026-02-15', size: '1.1 MB', access: '仅项目组可见' }
    ],
    createdAt: '2025-12-01'
  },
  {
    id: 2,
    name: '杭州云创数据集团',
    industry: '大数据/云计算',
    scale: '500-999人',
    lastFollow: '2026-03-09',
    nextAction: '确认税务合规审计合同',
    tags: ['大数据', '云计算', '跟进中'],
    contacts: [
      { role: 'CTO/技术决策人', name: '陈伟', phone: '186****1001', influence: '高' },
      { role: '财务经理', name: '刘芳', phone: '155****1002', influence: '中' }
    ],
    projects: [
      { id: 'p3', name: '税务合规审计', amount: '¥ 80,000', cycle: '3个月', status: '沟通中' }
    ],
    documents: [],
    createdAt: '2026-01-15'
  },
  {
    id: 3,
    name: '北京鼎峰智造企业',
    industry: '智能制造',
    scale: '1000人以上',
    lastFollow: '2026-03-10',
    nextAction: '现场上门拜访，沟通上市前辅导',
    tags: ['智能制造', '拟上市', 'IPO辅导', '大客户'],
    contacts: [
      { role: '董事长', name: '赵明辉', phone: '139****2001', influence: '高' },
      { role: '总经理', name: '钱国庆', phone: '138****2002', influence: '高' },
      { role: '财务总监', name: '孙丽华', phone: '136****2003', influence: '中' }
    ],
    projects: [
      { id: 'p4', name: 'IPO上市前辅导项目', amount: '¥ 500,000', cycle: '18个月', status: '进行中' },
      { id: 'p5', name: '知识产权布局咨询', amount: '¥ 200,000', cycle: '6个月', status: '已签约' }
    ],
    documents: [
      { id: 'd3', name: 'IPO辅导方案_V2.pdf', type: '提案', date: '2026-02-20', size: '5.2 MB', access: '全员可见' }
    ],
    createdAt: '2025-11-20'
  },
  {
    id: 4,
    name: '深圳万霖生物医药',
    industry: '生物医药',
    scale: '50-99人',
    lastFollow: '2026-03-05',
    nextAction: '电话沟通最新研发加计扣除政策',
    tags: ['生物医药', '研发加计扣除', 'GMP认证'],
    contacts: [
      { role: '总经理', name: '周睿', phone: '135****3001', influence: '高' },
      { role: '研发总监', name: '吴刚', phone: '158****3002', influence: '中' }
    ],
    projects: [
      { id: 'p6', name: '研发费用加计扣除申报', amount: '¥ 60,000', cycle: '4个月', status: '沟通中' }
    ],
    documents: [],
    createdAt: '2026-02-01'
  },
  {
    id: 5,
    name: '广州新锐教育科技',
    industry: '教育科技',
    scale: '50-99人',
    lastFollow: '2026-03-07',
    nextAction: '准备专精特新申报材料',
    tags: ['教育科技', '专精特新', '小巨人'],
    contacts: [
      { role: '创始人/CEO', name: '黄晓燕', phone: '133****4001', influence: '高' }
    ],
    projects: [
      { id: 'p7', name: '专精特新"小巨人"申报', amount: '¥ 150,000', cycle: '8个月', status: '进行中' }
    ],
    documents: [],
    createdAt: '2026-01-10'
  }
]

export function getCustomers() {
  return getItem(STORAGE_KEYS.CUSTOMERS, DEFAULT_CUSTOMERS)
}

export function saveCustomers(customers) {
  setItem(STORAGE_KEYS.CUSTOMERS, customers)
}

export function getCustomerById(id) {
  const customers = getCustomers()
  return customers.find(c => c.id === Number(id))
}

export function updateCustomer(id, updates) {
  const customers = getCustomers()
  const index = customers.findIndex(c => c.id === Number(id))
  if (index !== -1) {
    customers[index] = { ...customers[index], ...updates }
    saveCustomers(customers)
    return customers[index]
  }
  return null
}

export function addCustomer(customer) {
  const customers = getCustomers()
  const newCustomer = {
    ...customer,
    id: Date.now(),
    tags: customer.tags || [],
    contacts: customer.contacts || [],
    projects: customer.projects || [],
    documents: customer.documents || [],
    createdAt: new Date().toISOString().slice(0, 10)
  }
  customers.unshift(newCustomer)
  saveCustomers(customers)
  return newCustomer
}

export function deleteCustomer(id) {
  const customers = getCustomers()
  const filtered = customers.filter(c => c.id !== Number(id))
  saveCustomers(filtered)
}

// ==================== 客户标签 ====================
export function addCustomerTag(customerId, tag) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer && !customer.tags.includes(tag)) {
    customer.tags.push(tag)
    saveCustomers(customers)
  }
  return customer
}

export function removeCustomerTag(customerId, tag) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.tags = customer.tags.filter(t => t !== tag)
    saveCustomers(customers)
  }
  return customer
}

// ==================== 联系人管理 ====================
export function addContact(customerId, contact) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.contacts.push(contact)
    saveCustomers(customers)
  }
  return customer
}

export function removeContact(customerId, contactIndex) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.contacts.splice(contactIndex, 1)
    saveCustomers(customers)
  }
  return customer
}

// ==================== 项目管理 ====================
export function addProject(customerId, project) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.projects.push({ ...project, id: 'p' + Date.now() })
    saveCustomers(customers)
  }
  return customer
}

export function updateProject(customerId, projectId, updates) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    const proj = customer.projects.find(p => p.id === projectId)
    if (proj) {
      Object.assign(proj, updates)
      saveCustomers(customers)
    }
  }
  return customer
}

export function removeProject(customerId, projectId) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.projects = customer.projects.filter(p => p.id !== projectId)
    saveCustomers(customers)
  }
  return customer
}

// ==================== 文档管理 ====================
export function addDocument(customerId, doc) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.documents.push({
      ...doc,
      id: 'd' + Date.now(),
      date: new Date().toISOString().slice(0, 10)
    })
    saveCustomers(customers)
  }
  return customer
}

export function removeDocument(customerId, docId) {
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.documents = customer.documents.filter(d => d.id !== docId)
    saveCustomers(customers)
  }
  return customer
}

// ==================== 拜访记录 ====================
const DEFAULT_VISITS = {
  1: [
    {
      id: 1001,
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
      id: 1002,
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
  ],
  3: [
    {
      id: 1003,
      date: '2026-03-10 09:00',
      type: 'on-site',
      method: '上门拜访',
      content: '与董事长赵明辉沟通IPO进展，确认法律尽调进度，计划下月完成知识产权布局。',
      nextAction: '安排律师团队进行法律尽调',
      deadline: '2026-03-20',
      owner: 'Sales User',
      mood: 5,
      media: []
    }
  ]
}

export function getVisitsByCustomerId(customerId) {
  const allVisits = getItem(STORAGE_KEYS.VISITS, DEFAULT_VISITS)
  return allVisits[customerId] || []
}

export function addVisit(customerId, visit) {
  const allVisits = getItem(STORAGE_KEYS.VISITS, DEFAULT_VISITS)
  if (!allVisits[customerId]) {
    allVisits[customerId] = []
  }
  const newVisit = {
    ...visit,
    id: Date.now(),
    date: visit.date || new Date().toISOString().slice(0, 16).replace('T', ' '),
    media: visit.media || []
  }
  allVisits[customerId].unshift(newVisit)
  setItem(STORAGE_KEYS.VISITS, allVisits)

  // 同步更新客户的最后跟进时间和下一步行动
  const customers = getCustomers()
  const customer = customers.find(c => c.id === Number(customerId))
  if (customer) {
    customer.lastFollow = newVisit.date.slice(0, 10)
    customer.nextAction = newVisit.nextAction || customer.nextAction
    saveCustomers(customers)
  }

  return newVisit
}

export function deleteVisit(customerId, visitId) {
  const allVisits = getItem(STORAGE_KEYS.VISITS, DEFAULT_VISITS)
  if (allVisits[customerId]) {
    allVisits[customerId] = allVisits[customerId].filter(v => v.id !== visitId)
    setItem(STORAGE_KEYS.VISITS, allVisits)
  }
}

// ==================== 初始化数据 ====================
export function initializeData() {
  if (!localStorage.getItem(STORAGE_KEYS.CUSTOMERS)) {
    setItem(STORAGE_KEYS.CUSTOMERS, DEFAULT_CUSTOMERS)
  }
  if (!localStorage.getItem(STORAGE_KEYS.VISITS)) {
    setItem(STORAGE_KEYS.VISITS, DEFAULT_VISITS)
  }
}

// ==================== 工具方法 ====================
export function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key)
  })
}

export function exportData() {
  const data = {}
  Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
    data[name] = getItem(key)
  })
  return data
}

export function importData(data) {
  Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
    if (data[name]) {
      setItem(key, data[name])
    }
  })
}
