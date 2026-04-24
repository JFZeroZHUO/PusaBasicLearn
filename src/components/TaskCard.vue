<template>
  <div class="task-card" :class="getTaskClass()" :data-step="stepNumber">
    <!-- 卡片头部 -->
    <div class="task-header" @click="toggle">
      <div class="task-info">
        <div class="task-badge">{{ stepLabel }}</div>
        <div class="task-title-group">
          <h3 class="task-title">{{ title }}</h3>
          <p class="task-subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <div class="task-status">
        <div class="status-badge" :class="statusClass">{{ statusText }}</div>
        <button class="btn-toggle">{{ isOpen ? '▼' : '▶' }}</button>
      </div>
    </div>

    <!-- 卡片内容 -->
    <div class="task-content" v-show="isOpen">
      <!-- 学习目标 -->
      <div class="task-section task-objective">
        <h4>🎯 本步目标</h4>
        <p>{{ objective }}</p>
        <div class="success-criteria" v-if="successCriteria">
          <h5>✨ 完成标准：</h5>
          <ul>
            <li v-for="(criterion, index) in successCriteria" :key="index">
              {{ criterion }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 学习资源 -->
      <div class="task-section task-resources">
        <h4>📚 学习资源</h4>
        <div class="resource-list">
          <div
            v-for="(resource, index) in resources"
            :key="index"
            class="resource-item"
            :class="resource.type"
          >
            <div class="resource-badge">{{ resource.badge }}</div>
            <div class="resource-content">
              <h5>{{ resource.title }}</h5>
              <p>{{ resource.description }}</p>
              <div class="resource-meta" v-if="resource.duration">
                <span class="duration">⏱️ {{ resource.duration }}</span>
                <a
                  v-if="resource.link"
                  :href="resource.link"
                  target="_blank"
                  class="btn btn-sm"
                >
                  {{ resource.linkText || '▶️ 观看回放' }}
                </a>
              </div>
              <div class="resource-links" v-if="resource.links">
                <a
                  v-for="(link, idx) in resource.links"
                  :key="idx"
                  :href="link.url"
                  target="_blank"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 实践任务 -->
      <div class="task-section task-practice" v-if="practiceSteps">
        <h4>✏️ 现在开始实践</h4>
        <div class="practice-steps">
          <div
            v-for="(step, index) in practiceSteps"
            :key="index"
            class="practice-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h5>{{ step.title }}</h5>
              <p>{{ step.description }}</p>
              <div v-if="step.content" v-html="step.content"></div>
              <div v-if="step.example" class="practice-example">
                <strong>💡 {{ step.exampleLabel || '示例' }}：</strong>
                <p>{{ step.example }}</p>
              </div>
              <a
                v-if="step.actionLink"
                :href="step.actionLink"
                target="_blank"
                class="btn btn-primary"
              >
                {{ step.actionText || '开始' }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 成果提交 -->
      <div class="task-section task-submit">
        <h4>🎉 完成了？</h4>
        <div class="submit-actions">
          <button class="btn btn-success" @click="markComplete">
            ✅ 标记为已完成
          </button>
          <button class="btn btn-outline" @click="viewWork">
            📷 查看我的作品
          </button>
          <button class="btn btn-outline" @click="share">
            💬 在学习群分享
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProgressStore } from '../stores/progress'

const props = defineProps({
  stepNumber: {
    type: Number,
    required: true
  },
  stepLabel: {
    type: String,
    default: '步骤'
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  objective: {
    type: String,
    default: ''
  },
  successCriteria: {
    type: Array,
    default: () => []
  },
  resources: {
    type: Array,
    default: () => []
  },
  practiceSteps: {
    type: Array,
    default: () => []
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const progressStore = useProgressStore()
const isOpen = ref(props.defaultOpen)

// 获取任务状态
const taskStatus = computed(() => {
  // 实际应该从进度store获取
  const statusMap = { 1: 'completed', 2: 'current', 3: 'locked' }
  return statusMap[props.stepNumber] || 'locked'
})

const statusClass = computed(() => taskStatus.value)
const statusText = computed(() => {
  const textMap = {
    completed: '✅ 已完成',
    current: '⏳ 进行中',
    locked: '🔒 未解锁'
  }
  return textMap[taskStatus.value] || '未开始'
})

const getTaskClass = () => {
  return taskStatus.value
}

const toggle = () => {
  if (taskStatus.value !== 'locked') {
    isOpen.value = !isOpen.value
  }
}

const markComplete = () => {
  // 标记任务为完成
  console.log(`标记步骤${props.stepNumber}为完成`)
  // 这里应该调用progressStore的方法
}

const viewWork = () => {
  console.log('查看我的作品')
}

const share = () => {
  console.log('在学习群分享')
}
</script>

<style scoped>
.task-card {
  background: white;
  border-radius: var(--radius-md, 12px);
  border: 2px solid var(--border-color, #d9d9d9);
  margin-bottom: var(--spacing-lg, 24px);
  overflow: hidden;
  transition: all 0.3s ease;
}

.task-card.completed {
  border-color: var(--success-color, #52c41a);
  background: linear-gradient(135deg, rgba(82, 196, 26, 0.02) 0%, rgba(82, 196, 26, 0.05) 100%);
}

.task-card.current {
  border-color: var(--info-color, #1890ff);
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.02) 0%, rgba(24, 144, 255, 0.05) 100%);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
}

.task-card.locked {
  opacity: 0.7;
  pointer-events: none;
}

/* 卡片头部 */
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg, 24px);
  cursor: pointer;
  user-select: none;
  background: white;
  transition: all 0.3s ease;
}

.task-card.locked .task-header {
  cursor: not-allowed;
}

.task-header:hover {
  background: var(--section-bg, #f5f7fa);
}

.task-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 16px);
  flex: 1;
}

.task-badge {
  background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.task-title-group {
  flex: 1;
}

.task-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--text-primary, #262626);
}

.task-subtitle {
  font-size: 14px;
  color: var(--text-secondary, #8c8c8c);
  margin: 0;
}

.task-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm, 12px);
}

.status-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.status-badge.completed {
  background: #f6ffed;
  color: var(--success-color, #52c41a);
  border: 1px solid var(--success-color, #52c41a);
}

.status-badge.current {
  background: #e6f7ff;
  color: var(--info-color, #1890ff);
  border: 1px solid var(--info-color, #1890ff);
}

.status-badge.locked {
  background: #fafafa;
  color: var(--locked-color, #d9d9d9);
  border: 1px solid var(--border-color, #d9d9d9);
}

.btn-toggle {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  color: var(--text-secondary, #8c8c8c);
  transition: transform 0.3s ease;
}

.btn-toggle:hover {
  transform: scale(1.1);
}

/* 卡片内容 */
.task-content {
  padding: 0 var(--spacing-lg, 24px) var(--spacing-lg, 24px);
}

.task-section {
  margin-bottom: var(--spacing-lg, 24px);
  padding-bottom: var(--spacing-lg, 24px);
  border-bottom: 1px solid var(--border-color, #e8e8e8);
}

.task-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.task-section h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: var(--spacing-md, 16px);
  color: var(--text-primary, #262626);
}

.task-section h5 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--spacing-sm, 12px);
  color: var(--text-primary, #262626);
}

.task-section p {
  line-height: 1.6;
  color: var(--text-primary, #262626);
  margin-bottom: var(--spacing-sm, 12px);
}

/* 成功标准 */
.success-criteria {
  background: #f6ffed;
  border-left: 4px solid var(--success-color, #52c41a);
  padding: var(--spacing-md, 16px);
  border-radius: var(--radius-sm, 8px);
}

.success-criteria h5 {
  margin-bottom: var(--spacing-sm, 12px);
  color: var(--success-color, #52c41a);
}

.success-criteria ul {
  margin: 0;
  padding-left: var(--spacing-lg, 24px);
}

.success-criteria li {
  margin-bottom: var(--spacing-xs, 8px);
  line-height: 1.6;
}

/* 资源列表 */
.resource-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 16px);
}

.resource-item {
  display: flex;
  gap: var(--spacing-md, 16px);
  padding: var(--spacing-md, 16px);
  background: white;
  border: 1px solid var(--border-color, #e8e8e8);
  border-radius: var(--radius-sm, 8px);
  transition: all 0.3s ease;
}

.resource-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.resource-item.required {
  border-left: 3px solid #ff4d4f;
}

.resource-item.important {
  border-left: 3px solid #faad14;
}

.resource-item.optional {
  border-left: 3px solid #52c41a;
  opacity: 0.8;
}

.resource-badge {
  flex-shrink: 0;
  width: 60px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

.resource-item.required .resource-badge {
  background: #fff1f0;
  color: #ff4d4f;
}

.resource-item.important .resource-badge {
  background: #fffbe6;
  color: #faad14;
}

.resource-item.optional .resource-badge {
  background: #f6ffed;
  color: #52c41a;
}

.resource-content {
  flex: 1;
}

.resource-content h5 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--spacing-xs, 8px);
}

.resource-content p {
  font-size: 14px;
  color: var(--text-secondary, #8c8c8c);
  margin-bottom: var(--spacing-sm, 12px);
}

.resource-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-md, 16px);
}

.duration {
  font-size: 13px;
  color: var(--text-secondary, #8c8c8c);
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 12px);
}

.resource-links a {
  color: var(--primary-color, #1890ff);
  text-decoration: none;
  font-size: 14px;
}

.resource-links a:hover {
  text-decoration: underline;
}

/* 实践步骤 */
.practice-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md, 16px);
}

.practice-step {
  display: flex;
  gap: var(--spacing-md, 16px);
}

.step-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h5 {
  margin-bottom: var(--spacing-xs, 8px);
}

.practice-example {
  background: #e6f7ff;
  border-left: 3px solid var(--primary-color, #1890ff);
  padding: var(--spacing-sm, 12px);
  border-radius: var(--radius-sm, 8px);
  margin-top: var(--spacing-sm, 12px);
}

.practice-example strong {
  display: block;
  margin-bottom: var(--spacing-xs, 8px);
  color: var(--primary-color, #1890ff);
}

.practice-example p {
  font-size: 14px;
  margin: 0;
}

/* 提交按钮 */
.submit-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 12px);
}

/* 响应式 */
@media (max-width: 768px) {
  .task-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm, 12px);
  }

  .task-info {
    width: 100%;
  }

  .task-status {
    width: 100%;
    justify-content: space-between;
  }

  .resource-item {
    flex-direction: column;
  }

  .resource-badge {
    width: 100%;
  }

  .practice-step {
    flex-direction: column;
  }

  .step-number {
    width: 28px;
    height: 28px;
  }
}
</style>
