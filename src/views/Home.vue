<template>
  <div class="home-page">
    <header class="hero">
      <h1>🎓 风变野菩萨AI视频社团</h1>
      <p>新手入门学习路径</p>
    </header>

    <div class="progress-dashboard card">
      <div class="dashboard-header">
        <h2>📊 学习进度</h2>
        <div class="progress-stats">
          <span class="stats-text">{{ stats.completed }}/{{ stats.total }} 课时</span>
          <span class="stats-percentage">{{ overallProgress.toFixed(1) }}%</span>
        </div>
      </div>
      <div class="progress-bar-large">
        <div class="fill" :style="{ width: overallProgress + '%' }"></div>
      </div>
      <div class="dashboard-actions">
        <button v-if="lastLesson" @click="continueLearning" class="btn btn-primary">
          继续学习 →
        </button>
        <button v-else @click="startLearning" class="btn btn-primary">
          开始学习 →
        </button>
      </div>
    </div>

    <div class="courses">
      <h2>📚 课程目录</h2>
      <div class="course-list">
        <div
          v-for="item in displayCourses"
          :key="item.id"
          class="course-item card card-hover"
          :style="{ background: getWeekGradient(item.baseWeekId || item.id) }"
          @click="goToCourse(item)"
        >
          <div class="course-icon-wrapper">
            <div class="course-icon">{{ item.icon }}</div>
            <ProgressRing
              :percentage="getCardProgress(item)"
              :size="60"
              :color="getWeekColor(item.baseWeekId || item.id)"
              :class="['course-progress', { 'is-completed': isCardCompleted(item) }]"
            />
          </div>
          <div class="course-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="course-skills" v-if="item.skills">
              <span
                v-for="skill in item.skills"
                :key="skill"
                class="skill-tag-small"
              >
                {{ skill }}
              </span>
            </div>
            <div class="course-meta">
              <span class="lesson-count">{{ getCardLessonCount(item) }} 课时</span>
              <span class="week-progress">{{ item.progressLabel || `${Math.round(getCardProgress(item))}% 完成` }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import { useChapterProgressStore } from '../stores/chapterProgress'
import { curriculum } from '../assets/data/curriculum'
import { week1Chapters } from '../assets/data/chapters/week1'
import { week4Chapters } from '../assets/data/chapters/week4'
import ProgressRing from '../components/ProgressRing.vue'

const router = useRouter()
const progressStore = useProgressStore()
const chapterProgressStore = useChapterProgressStore()

const week2ChapterIds = ['week2-chapter1']
const week3ChapterIds = ['chapter8', 'chapter10', 'chapter9']
const week4ChapterIds = week4Chapters.map(ch => ch.id)
const overallProgress = computed(() => stats.value.percentage)
const lastLesson = computed(() => progressStore.lastAccessedLesson)
const week1UpperChapterIds = computed(() => ['chapter1', 'chapter2', 'chapter3'].filter(id => week1Chapters.some(ch => ch.id === id)))
const week1LowerChapterIds = computed(() => ['chapter4', 'chapter5'].filter(id => week1Chapters.some(ch => ch.id === id)))

const displayCourses = computed(() => {
  const list = []
  curriculum.forEach((week) => {
    if (week.id === 'week1') {
      list.push({
        ...week,
        lessonLabel: `${week1UpperChapterIds.value.length} 课时`
      })
    } else {
      list.push(week)
    }
    if (week.id === 'week1') {
      list.push({
        id: 'week1-part2',
        baseWeekId: 'week1',
        icon: '📸',
        title: '第1周：新手入门基础篇（下）',
        description: '掌握AI视频创作的核心底蕴：出图',
        skills: ['摄影基础', '提示词', '画面构图'],
        lessonLabel: `${week1LowerChapterIds.value.length} 课时`,
        virtual: true,
        targetChapterId: 'chapter4'
      })
    }
  })
  return list
})

const getWeekProgress = (weekId) => {
  return progressStore.getWeekProgressData(weekId).value.totalProgress || 0
}

const getCardChapterIds = (item) => {
  if (item.id === 'week1') return week1UpperChapterIds.value
  if (item.id === 'week1-part2') return week1LowerChapterIds.value
  if (item.id === 'week2') return week2ChapterIds
  if (item.id === 'week3') return week3ChapterIds
  if (item.id === 'week4') return week4ChapterIds
  return []
}

const getCardCompletedCount = (item) => {
  const weekId = item.baseWeekId || item.id
  const chapterIds = getCardChapterIds(item)
  const weekProgress = chapterProgressStore.getWeekProgress(weekId)
  return chapterIds.filter(id => weekProgress.chapters?.[id]?.completed).length
}

const getCardLessonCount = (item) => {
  const chapterIds = getCardChapterIds(item)
  if (chapterIds.length > 0) return chapterIds.length
  return Array.isArray(item.lessons) ? item.lessons.length : 0
}

const stats = computed(() => {
  const cards = displayCourses.value
  let total = 0
  let completed = 0
  cards.forEach((item) => {
    const ids = getCardChapterIds(item)
    total += ids.length
    completed += getCardCompletedCount(item)
  })
  return {
    total,
    completed,
    percentage: total > 0 ? (completed / total) * 100 : 0
  }
})

const getCardProgress = (item) => {
  const weekId = item.baseWeekId || item.id
  const chapterIds = getCardChapterIds(item)
  return getChapterProgressByIds(weekId, chapterIds)
}

const isCardCompleted = (item) => {
  return getCardProgress(item) >= 100
}

const getChapterProgressByIds = (weekId, chapterIds) => {
  const weekProgress = chapterProgressStore.getWeekProgress(weekId)
  const completed = chapterIds.filter(id => weekProgress.chapters?.[id]?.completed).length
  return chapterIds.length ? (completed / chapterIds.length) * 100 : 0
}

const getWeekGradient = (weekId) => {
  const gradients = {
    week1: 'var(--week1-gradient)',
    week2: 'var(--week2-gradient)',
    week3: 'var(--week3-gradient)',
    week4: 'var(--week4-gradient)'
  }
  return gradients[weekId] || 'var(--week1-gradient)'
}

const getWeekColor = (weekId) => {
  const colors = {
    week1: 'var(--week1-color)',
    week2: 'var(--week2-color)',
    week3: 'var(--week3-color)',
    week4: 'var(--week4-color)'
  }
  return colors[weekId] || 'var(--week1-color)'
}

const continueLearning = () => {
  if (lastLesson.value) {
    if (lastLesson.value.weekId === 'week1') {
      const currentChapter = chapterProgressStore.getWeekProgress('week1').currentChapter || ''
      const isLowerPart = ['chapter4', 'chapter5', 'chapter6', 'chapter7'].includes(currentChapter)
      router.push(`/week1/lesson?part=${isLowerPart ? 'lower' : 'upper'}`)
      return
    }
    router.push(`/${lastLesson.value.weekId}/lesson`)
  }
}

const startLearning = () => {
  router.push('/week1/lesson?part=upper')
}

const goToWeek = (weekId) => {
  if (weekId === 'week1') {
    router.push('/week1/lesson?part=upper')
    return
  }
  router.push(`/${weekId}/lesson`)
}

const goToCourse = (item) => {
  if (item.virtual && item.baseWeekId && item.targetChapterId) {
    chapterProgressStore.setCurrentChapter(item.baseWeekId, item.targetChapterId)
    router.push(`/${item.baseWeekId}/lesson?part=lower`)
    return
  }
  goToWeek(item.id)
}
</script>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* 进度仪表盘 */
.progress-dashboard {
  margin-bottom: 40px;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(24, 144, 255, 0.1) 100%);
  border: 2px solid var(--primary-color);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.dashboard-header h2 {
  margin: 0;
  font-size: 20px;
  color: var(--text-primary);
}

.progress-stats {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-md);
}

.stats-text {
  font-size: 14px;
  color: var(--text-secondary);
}

.stats-percentage {
  font-size: 32px;
  font-weight: bold;
  color: var(--primary-color);
}

.progress-bar-large {
  width: 100%;
  height: 12px;
  background: var(--border-color);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
}

.progress-bar-large .fill {
  height: 100%;
  background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
  transition: width 0.5s ease;
}

.dashboard-actions {
  display: flex;
  gap: var(--spacing-sm);
}

/* 课程目录 */
.courses {
  margin-top: var(--spacing-xl);
}

.courses h2 {
  margin-bottom: var(--spacing-lg);
  font-size: 24px;
  color: var(--text-primary);
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.course-item {
  cursor: pointer;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: white;
}

.course-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  opacity: 0.1;
  z-index: 0;
}

.course-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  z-index: 1;
}

.course-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.course-progress {
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-progress.is-completed {
  background: #52c41a;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.35);
}

.course-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.course-content h3 {
  font-size: 18px;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.course-content p {
  font-size: 14px;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  opacity: 0.9;
}

.course-skills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
}

.skill-tag-small {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-round);
  font-size: 11px;
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-primary);
  opacity: 0.8;
}

.week-progress {
  font-weight: 600;
}

@media (max-width: 768px) {
  .home-page {
    padding: 20px 16px;
  }

  .hero h1 {
    font-size: 28px;
  }

  .hero p {
    font-size: 16px;
  }

  .course-list {
    grid-template-columns: 1fr;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .stats-percentage {
    font-size: 28px;
  }
}
</style>
