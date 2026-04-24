<template>
  <div class="course-card" @click="handleClick">
    <div class="card-icon">{{ week.icon }}</div>
    <div class="card-content">
      <h3 class="card-title">{{ week.title }}</h3>
      <p class="card-description">{{ week.description }}</p>
      <div class="card-progress">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <span class="progress-text">{{ progress.toFixed(1) }}%</span>
      </div>
    </div>
    <div class="card-action">
      <span v-if="progress > 0 && progress < 100" class="action-text continue">
        继续学习 →
      </span>
      <span v-else-if="progress === 0" class="action-text start">
        开始学习 →
      </span>
      <span v-else class="action-text completed">
        ✓ 已完成
      </span>
      <span v-if="isLocked" class="lock-icon">🔒</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress'

const props = defineProps({
  week: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const progressStore = useProgressStore()

const progress = computed(() => {
  return progressStore.getWeekProgressData(props.week.id).value.totalProgress || 0
})

const isLocked = computed(() => {
  // 如果是第1周，不锁定
  if (props.week.id === 'week1') return false

  // 如果前一周进度大于50%，解锁当前周
  const prevWeekNum = parseInt(props.week.id.replace('week', '')) - 1
  const prevWeekId = `week${prevWeekNum}`
  const prevProgress = progressStore.getWeekProgressData(prevWeekId).value.totalProgress || 0

  return prevProgress < 50
})

const handleClick = () => {
  if (!isLocked.value) {
    // 跳转到该周的第一个课时
    const firstLesson = props.week.lessons[0]
    router.push(`/${props.week.id}/${firstLesson.id}`)
  }
}
</script>

<style scoped>
.course-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  gap: var(--spacing-md);
  position: relative;
  overflow: hidden;
}

.course-card:hover:not(.locked) {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.course-card.locked {
  opacity: 0.7;
  cursor: not-allowed;
}

.card-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.card-description {
  font-size: var(--font-size-body);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
}

.card-progress {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.card-progress .progress-bar {
  flex: 1;
  height: 6px;
  background: var(--border-light);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.card-progress .progress-text {
  min-width: 45px;
  text-align: right;
  font-size: var(--font-size-small);
  font-weight: 500;
  color: var(--primary-color);
}

.card-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  min-width: 100px;
}

.action-text {
  font-size: var(--font-size-body);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  white-space: nowrap;
}

.action-text.continue {
  background: var(--primary-color);
  color: white;
}

.action-text.start {
  background: var(--success-color);
  color: white;
}

.action-text.completed {
  background: #f6ffed;
  color: var(--success-color);
  border: 1px solid #b7eb8f;
}

.lock-icon {
  font-size: 24px;
}
</style>
