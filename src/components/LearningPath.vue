<template>
  <div class="learning-path-section">
    <h3 class="section-title">📍 你的学习路径</h3>

    <!-- 横向时间线 -->
    <div class="path-timeline">
      <!-- 步骤1: 出图 -->
      <div class="path-step" :class="getStepClass(1)">
        <div class="step-marker">
          <div class="step-icon">🎨</div>
          <div class="step-status" v-html="getStepIcon(1)"></div>
        </div>
        <div class="step-content">
          <h4 class="step-title">出图：用4张图讲故事</h4>
          <p class="step-description">学习AI绘画，生成连贯的4张故事图</p>
          <div class="step-meta">
            <span class="time">⏱️ 约40分钟</span>
            <span class="status" :class="getStatusClass(1)">{{ getStatusText(1) }}</span>
          </div>
        </div>
        <button v-if="currentStep >= 1" class="btn btn-sm step-action" @click="scrollToStep(1)">
          {{ currentStep === 1 ? '继续学习' : '查看详情' }} →
        </button>
      </div>

      <!-- 连接线 -->
      <div class="path-connector">
        <div class="connector-line" :class="{ 'active': currentStep >= 2 }"></div>
      </div>

      <!-- 步骤2: 视频生成 -->
      <div class="path-step" :class="getStepClass(2)">
        <div class="step-marker">
          <div class="step-icon">🎬</div>
          <div class="step-status pulse" v-if="currentStep === 2" v-html="getStepIcon(2)"></div>
          <div class="step-status" v-else v-html="getStepIcon(2)"></div>
        </div>
        <div class="step-content">
          <h4 class="step-title">视频生成：让图片动起来</h4>
          <p class="step-description">将4张图转化为流畅的视频片段</p>
          <div class="step-meta">
            <span class="time">⏱️ 约30分钟</span>
            <span class="status" :class="getStatusClass(2)">{{ getStatusText(2) }}</span>
          </div>
        </div>
        <button v-if="currentStep >= 2" class="btn btn-sm step-action" @click="scrollToStep(2)">
          {{ currentStep === 2 ? '继续制作' : '查看详情' }} →
        </button>
      </div>

      <!-- 连接线 -->
      <div class="path-connector">
        <div class="connector-line" :class="{ 'active': currentStep >= 3 }"></div>
      </div>

      <!-- 步骤3: 剪辑 -->
      <div class="path-step" :class="getStepClass(3)">
        <div class="step-marker">
          <div class="step-icon">✂️</div>
          <div class="step-status" v-html="getStepIcon(3)"></div>
        </div>
        <div class="step-content">
          <h4 class="step-title">视频剪辑：加上音乐音效</h4>
          <p class="step-description">用剪映完成最终作品</p>
          <div class="step-meta">
            <span class="time">⏱️ 约50分钟</span>
            <span class="status" :class="getStatusClass(3)">{{ getStatusText(3) }}</span>
          </div>
        </div>
        <button v-if="currentStep >= 3" class="btn btn-sm step-action" @click="scrollToStep(3)">
          {{ currentStep === 3 ? '继续剪辑' : '查看详情' }} →
        </button>
      </div>
    </div>

    <!-- 总进度 -->
    <div class="overall-progress">
      <div class="progress-label">
        <span>总进度</span>
        <span class="percentage">{{ overallPercentage }}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: overallPercentage + '%' }"></div>
      </div>
      <p class="progress-hint">
        完成度：{{ currentStep }}/3 步骤 · 预计剩余时间：{{ remainingTime }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'

const progressStore = useProgressStore()

// 模拟当前步骤（实际应该从进度store获取）
const currentStep = computed(() => {
  // 这里可以根据实际进度逻辑判断
  // 暂时固定为1，实际应该从store获取
  return 1
})

const overallPercentage = computed(() => {
  return Math.round((currentStep.value / 3) * 100)
})

const remainingTime = computed(() => {
  const times = ['2小时', '1小时20分钟', '50分钟', '已完成']
  return times[currentStep.value] || '2小时'
})

const getStepClass = (step) => {
  if (step < currentStep.value) return 'completed'
  if (step === currentStep.value) return 'current'
  return 'locked'
}

const getStepIcon = (step) => {
  if (step < currentStep.value) return '✓'
  if (step === currentStep.value) return '●'
  return '○'
}

const getStatusClass = (step) => {
  if (step < currentStep.value) return 'completed'
  if (step === currentStep.value) return 'current'
  return 'locked'
}

const getStatusText = (step) => {
  if (step < currentStep.value) return '已完成'
  if (step === currentStep.value) return '进行中'
  return '待解锁'
}

const scrollToStep = (step) => {
  const taskSection = document.querySelector(`.task-card[data-step="${step}"]`)
  if (taskSection) {
    taskSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // 自动展开对应的任务卡片
    const taskHeader = taskSection.querySelector('.task-header')
    if (taskHeader) {
      taskHeader.click()
    }
  }
}
</script>

<style scoped>
.learning-path-section {
  background: white;
  border-radius: var(--radius-md, 12px);
  padding: var(--spacing-xl, 32px);
  margin-bottom: var(--spacing-xl, 32px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--spacing-lg, 24px);
  color: var(--text-primary, #262626);
}

/* 横向时间线 */
.path-timeline {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md, 16px);
  margin-bottom: var(--spacing-xl, 32px);
}

.path-step {
  flex: 1;
  min-width: 0;
  padding: var(--spacing-lg, 24px);
  background: var(--section-bg, #f5f7fa);
  border-radius: var(--radius-md, 12px);
  border: 2px solid var(--border-color, #d9d9d9);
  transition: all 0.3s ease;
}

.path-step.completed {
  border-color: var(--success-color, #52c41a);
  background: linear-gradient(135deg, rgba(82, 196, 26, 0.05) 0%, rgba(82, 196, 26, 0.1) 100%);
}

.path-step.current {
  border-color: var(--info-color, #1890ff);
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(24, 144, 255, 0.1) 100%);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

.path-step.locked {
  opacity: 0.7;
}

.step-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm, 12px);
  margin-bottom: var(--spacing-md, 16px);
}

.step-icon {
  font-size: 36px;
}

.step-status {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid var(--border-color, #d9d9d9);
}

.path-step.completed .step-status {
  color: var(--success-color, #52c41a);
  border-color: var(--success-color, #52c41a);
}

.path-step.current .step-status {
  color: var(--info-color, #1890ff);
  border-color: var(--info-color, #1890ff);
}

.path-step.locked .step-status {
  color: var(--locked-color, #d9d9d9);
  border-color: var(--border-color, #d9d9d9);
}

/* 脉冲动画 */
.step-status.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.4);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(24, 144, 255, 0);
  }
}

.step-content {
  text-align: center;
}

.step-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--spacing-xs, 8px);
  color: var(--text-primary, #262626);
}

.step-description {
  font-size: 14px;
  color: var(--text-secondary, #8c8c8c);
  margin-bottom: var(--spacing-md, 16px);
  line-height: 1.5;
}

.step-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm, 12px);
  font-size: 13px;
}

.time {
  color: var(--text-secondary, #8c8c8c);
}

.status {
  font-weight: 600;
}

.status.completed {
  color: var(--success-color, #52c41a);
}

.status.current {
  color: var(--info-color, #1890ff);
}

.status.locked {
  color: var(--locked-color, #d9d9d9);
}

.step-action {
  margin-top: var(--spacing-md, 16px);
  width: 100%;
}

.path-connector {
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-sm, 12px);
  flex-shrink: 0;
}

.connector-line {
  width: 40px;
  height: 2px;
  background: var(--border-color, #d9d9d9);
  transition: all 0.3s ease;
}

.connector-line.active {
  background: var(--success-color, #52c41a);
}

/* 总进度 */
.overall-progress {
  background: var(--section-bg, #f5f7fa);
  padding: var(--spacing-lg, 24px);
  border-radius: var(--radius-md, 12px);
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm, 12px);
  font-size: 14px;
  font-weight: 600;
}

.percentage {
  font-size: 28px;
  color: var(--info-color, #1890ff);
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: var(--border-color, #d9d9d9);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: var(--spacing-sm, 12px);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.5s ease;
  border-radius: 5px;
}

.progress-hint {
  font-size: 13px;
  color: var(--text-secondary, #8c8c8c);
  margin: 0;
  text-align: center;
}

/* 响应式 */
@media (max-width: 768px) {
  .path-timeline {
    flex-direction: column;
  }

  .path-connector {
    padding: var(--spacing-sm, 12px) 0;
  }

  .connector-line {
    width: 2px;
    height: 30px;
  }

  .step-icon {
    font-size: 28px;
  }

  .step-title {
    font-size: 14px;
  }

  .percentage {
    font-size: 24px;
  }
}
</style>
