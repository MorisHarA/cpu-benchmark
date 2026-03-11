/**
 * AI 服务 - 基于阿里通义千问大模型
 * 提供两种政策搜索模式：
 * 1. 本地知识库检索 - AI基于本地政策JSON进行智能匹配
 * 2. AI联网搜索 - AI自主搜索最新政策并推荐
 */

import policiesData from '../data/policies.json'

// =============== 配置 ===============
// 使用 通义千问 (DashScope) API
// API Key 存储在 localStorage 中
const API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions'

export function getApiKey() {
  return localStorage.getItem('qwen_api_key') || ''
}

export function setApiKey(key) {
  localStorage.setItem('qwen_api_key', key)
}

export function hasApiKey() {
  return !!getApiKey()
}

// =============== 通用AI调用 ===============
async function callQwenAPI(messages, options = {}) {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('请先配置通义千问 API Key')
  }

  const {
    model = 'qwen-plus',
    temperature = 0.7,
    stream = false,
    enableSearch = false
  } = options

  const body = {
    model,
    messages,
    temperature,
    stream
  }

  // 如果启用联网搜索
  if (enableSearch) {
    body.enable_search = true
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}))
    throw new Error(errData.error?.message || `API请求失败 (${response.status})`)
  }

  if (stream) {
    return response
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || ''
}

// =============== 流式调用 ===============
async function* streamQwenAPI(messages, options = {}) {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('请先配置通义千问 API Key')
  }

  const {
    model = 'qwen-plus',
    temperature = 0.7,
    enableSearch = false
  } = options

  const body = {
    model,
    messages,
    temperature,
    stream: true,
    stream_options: { include_usage: true }
  }

  if (enableSearch) {
    body.enable_search = true
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}))
    throw new Error(errData.error?.message || `API请求失败 (${response.status})`)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed === 'data: [DONE]') continue
      if (trimmed.startsWith('data: ')) {
        try {
          const json = JSON.parse(trimmed.slice(6))
          const content = json.choices?.[0]?.delta?.content
          if (content) {
            yield content
          }
        } catch (e) {
          // skip
        }
      }
    }
  }
}

// =============== 模式1: 本地知识库检索 ===============
export async function* searchLocalPolicies(query) {
  const systemPrompt = `你是一个专业的政策咨询助手。你的任务是根据用户的搜索需求，从提供的政策知识库中查找最相关的政策，并给出详细的推荐。

## 要求
1. 基于用户输入的关键词或描述，从知识库中匹配最相关的政策
2. 对匹配到的政策进行专业解读，突出关键要点
3. 为企业提供切实可行的申报/合规建议
4. 如果没有完全匹配的政策，给出最接近的推荐
5. 使用Markdown格式回复，结构清晰
6. 回复使用中文

## 回复格式
请按以下结构回复:
### 🎯 匹配到的政策
列出最相关的政策，包含标题、发布来源、日期

### 📋 政策解读
对匹配政策的关键内容进行解读

### 💡 建议
为企业提供申报/合规/应用建议

## 以下是政策知识库内容：
${JSON.stringify(policiesData, null, 2)}`

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `请帮我查找以下政策相关信息：${query}` }
  ]

  yield* streamQwenAPI(messages, { temperature: 0.3 })
}

// =============== 模式2: AI联网搜索 ===============
export async function* searchOnlinePolicies(query) {
  const systemPrompt = `你是一个专业的中国政策咨询助手。用户需要你通过联网搜索来查找最新的政策信息。

## 要求
1. 搜索最新的、权威的政策信息
2. 提供政策的原始发布来源与日期
3. 对搜索到的政策进行专业解读
4. 总结推荐符合用户需求的政策
5. 使用Markdown格式回复，结构清晰
6. 回复使用中文

## 回复格式
请按以下结构回复:

### 🔍 为您搜索到的最新政策
列出搜索到的政策，包含标题、来源、发布日期

### 📋 政策解读
对关键政策的要点解读

### 🌟 推荐建议
基于企业常见需求，给出申报和合规建议

### ⚠️ 注意事项
政策执行中需要特别注意的事项`

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `请帮我搜索以下政策的最新信息：${query}` }
  ]

  yield* streamQwenAPI(messages, { temperature: 0.5, enableSearch: true })
}

// =============== 政策解读 ===============
export async function* explainPolicy(policy) {
  const systemPrompt = `你是一个专业的政策解读专家。请对用户提供的政策进行详细的解读和分析。

## 要求
1. 用通俗易懂的语言解读政策核心内容
2. 分析政策对不同类型企业的影响
3. 给出实操层面的建议
4. 使用Markdown格式
5. 回复使用中文`

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: `请详细解读以下政策：
    
标题：${policy.title}
来源：${policy.source}
日期：${policy.date}
分类：${policy.category}
摘要：${policy.summary}
详细内容：${policy.content}` }
  ]

  yield* streamQwenAPI(messages, { temperature: 0.5 })
}

// =============== 生成转化话术 ===============
export async function* generateSalesScript(policy, customerName = '') {
  const systemPrompt = `你是一个资深的客户经理(销售)话术专家。请根据提供的政策内容，生成一段专业、亲切的客户沟通话术。

## 要求
1. 话术应当专业且易于理解
2. 突出政策对客户的价值点
3. 附带行动建议，推动成交
4. 语气亲切专业，不要过于销售化
5. 使用中文`

  const userContent = customerName
    ? `请为客户「${customerName}」生成关于以下政策的沟通话术：\n标题：${policy.title}\n摘要：${policy.summary}`
    : `请生成关于以下政策的客户沟通话术：\n标题：${policy.title}\n摘要：${policy.summary}`

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userContent }
  ]

  yield* streamQwenAPI(messages, { temperature: 0.7 })
}

// =============== 辅助方法 ===============
export function getLocalPolicies() {
  return policiesData
}
