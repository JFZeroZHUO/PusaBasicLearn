<template>
  <div class="progress-tracker">
    <div class="progress-header">
      <h3>📊 学习进度</h3>
      <div class="progress-percentage">{{ overallProgress.toFixed(1) }}%</div>
    </div>

    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: overallProgress + '%' }"
      ></div>
    </div>

    <div class="progress-stats">
      <span>{{ stats.completed }}/{{ stats.total }} 课时</span>
    </div>

    <div class="week-progress">
      <div
        v-for="week in curriculum"
        :key="week.id"
        class="week-item"
      >
        <div class="week-info">
          <span class="week-icon">{{ week.icon }}</span>
          <span class="week-title">第{{ week.id.replace('week', '') }}周</span>
        </div>
        <div class="week-bar">
          <div
            class="week-fill"
            :style="{ width: getWeekProgress(week.id) + '%' }"
          ></div>
        </div>
        <div class="week-percentage">{{ getWeekProgress(week.id).toFixed(0) }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProgressStore } from '../stores/progress'
import { curriculum } from '../assets/data/curriculum'

const progressStore = useProgressStore()

const overallProgress = computed(() => progressStore.overallProgress)
const stats = computed(() => progressStore.stats)

const getWeekProgress = (weekId) => {
  return progressStore.getWeekProgressData(weekId).value.totalProgress || 0
}
</script>

<style scoped>
.progress-tracker {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.progress-header h3 {
  margin: 0;
  font-size: var(--font-size-h3);
}

.progress-percentage {
  font-size: var(--font-size-h2);
  font-weight: 600;
  color: var(--primary-color);
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: var(--border-color);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.progress-fill {
  height: 100%;
  background: var(--gradient-success);
  transition: width 0.5s ease;
  border-radius: var(--radius-sm);
}

.progress-stats {
  text-align: center;
  color: var(--text-secondary);
  font-size: var(--font-size-small);
  margin-bottom: var(--spacing-lg);
}

.week-progress {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.week-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.week-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  min-width: 100px;
}

.week-icon {
  font-size: var(--font-size-h3);
}

.week-title {
  font-size: var(--font-size-small);
  font-weight: 500;
}

.week-bar {
  flex: 1;
  height: 6px;
  background: var(--border-light);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.week-fill {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.5s ease;
  border-radius: var(--radius-sm);
}

.week-percentage {
  min-width: 40px;
  text-align: right;
  font-size: var(--font-size-small);
  color: var(--text-secondary);
}
</style>
