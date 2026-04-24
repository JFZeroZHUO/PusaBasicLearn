<template>
  <div class="week-navigator">
    <div class="nav-header">
      <h3>📚 课程目录</h3>
    </div>

    <div class="nav-content">
      <div
        v-for="week in curriculum"
        :key="week.id"
        class="week-section"
      >
        <div
          class="week-header"
          @click="toggleWeek(week.id)"
          :class="{ active: activeWeek === week.id }"
        >
          <div class="week-info">
            <span class="week-icon">{{ week.icon }}</span>
            <span class="week-title">{{ week.title }}</span>
            <span class="week-badge">{{ getWeekProgress(week.id) }}%</span>
          </div>
          <span class="expand-icon" :class="{ expanded: activeWeek === week.id }">
            ▼
          </span>
        </div>

        <div
          v-show="activeWeek === week.id"
          class="week-lessons"
        >
          <div
            v-for="lesson in week.lessons"
            :key="lesson.id"
            class="lesson-item"
            @click="goToLesson(week.id, lesson.id)"
            :class="{
              active: isCurrentLesson(week.id, lesson.id),
              completed: isLessonCompleted(week.id, lesson.id)
            }"
          >
            <div class="lesson-icon">
              <span v-if="isLessonCompleted(week.id, lesson.id)" class="completed">✓</span>
              <span v-else-if="isCurrentLesson(week.id, lesson.id)" class="current">▶</span>
              <span v-else class="pending">○</span>
            </div>
            <div class="lesson-content">
              <div class="lesson-title">{{ lesson.title }}</div>
              <div class="lesson-meta">
                <span class="lesson-duration">{{ lesson.duration }}分钟</span>
                <span v-if="!lesson.required" class="lesson-elective">选修</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import { curriculum } from '../assets/data/curriculum'

const router = useRouter()
const route = useRoute()
const progressStore = useProgressStore()

const activeWeek = ref('week1')

// 判断是否是当前页面
const isCurrentLesson = (weekId, lessonId) => {
  return route.params.weekId === weekId && route.params.lessonId === lessonId
}

// 判断课时是否完成
const isLessonCompleted = (weekId, lessonId) => {
  return progressStore.checkLessonComplete(weekId, lessonId)
}

// 获取周进度
const getWeekProgress = (weekId) => {
  return progressStore.getWeekProgressData(weekId).value.totalProgress.toFixed(0)
}

// 切换周次展开/收起
const toggleWeek = (weekId) => {
  activeWeek.value = activeWeek.value === weekId ? null : weekId
}

// 跳转到指定课时
const goToLesson = (weekId, lessonId) => {
  router.push(`/${weekId}/${lessonId}`)
}
</script>

<style scoped>
.week-navigator {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  height: fit-content;
  position: sticky;
  top: var(--spacing-lg);
}

.nav-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
}

.nav-header h3 {
  margin: 0;
  font-size: var(--font-size-h3);
}

.nav-content {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.week-section {
  border-bottom: 1px solid var(--border-light);
}

.week-section:last-child {
  border-bottom: none;
}

.week-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
  transition: background 0.3s ease;
  user-select: none;
}

.week-header:hover {
  background: var(--bg-color);
}

.week-header.active {
  background: #e6f7ff;
}

.week-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex: 1;
}

.week-icon {
  font-size: var(--font-size-h3);
}

.week-title {
  font-weight: 500;
  color: var(--text-primary);
}

.week-badge {
  padding: 2px 8px;
  background: var(--primary-color);
  color: white;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-small);
  font-weight: 500;
}

.expand-icon {
  font-size: var(--font-size-small);
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.week-lessons {
  background: var(--bg-color);
  padding: var(--spacing-sm) 0;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: background 0.3s ease;
  user-select: none;
}

.lesson-item:hover {
  background: var(--border-light);
}

.lesson-item.active {
  background: #bae7ff;
}

.lesson-item.completed {
  opacity: 0.8;
}

.lesson-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lesson-icon .completed {
  color: var(--success-color);
  font-weight: bold;
}

.lesson-icon .current {
  color: var(--primary-color);
  animation: pulse 1.5s infinite;
}

.lesson-icon .pending {
  color: var(--text-disabled);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.lesson-content {
  flex: 1;
  min-width: 0;
}

.lesson-title {
  font-size: var(--font-size-body);
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.4;
}

.lesson-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-small);
}

.lesson-duration {
  color: var(--text-secondary);
}

.lesson-elective {
  padding: 2px 6px;
  background: #fff7e6;
  color: var(--warning-color);
  border: 1px solid #ffe58f;
  border-radius: var(--radius-sm);
  font-size: 11px;
}
</style>
