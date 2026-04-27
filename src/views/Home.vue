<template>
  <div class="home-page">
    <header class="hero">
      <h1>🎓 风变野菩萨AI视频社团</h1>
      <p>新手入门学习路径</p>
    </header>

    <div class="home-layout">
      <div class="home-main">

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

      <aside class="bonus-collection card">
        <div class="bonus-header">
          <div>
            <p class="bonus-kicker">彩蛋收集栏</p>
            <h2>🎁 已解锁文档</h2>
          </div>
          <span class="bonus-count">{{ unlockedBonusDocuments.length }}</span>
        </div>

        <div v-if="unlockedBonusDocuments.length" class="bonus-list">
          <a
            v-for="document in unlockedBonusDocuments"
            :key="document.id"
            :href="document.url"
            target="_blank"
            rel="noopener"
            class="bonus-item"
          >
            <span class="bonus-doc-icon">📄</span>
            <span class="bonus-doc-body">
              <strong>{{ document.title }}</strong>
              <small>{{ document.sourceTitle || document.description }}</small>
            </span>
            <span class="bonus-arrow">↗</span>
          </a>
        </div>

        <div v-else class="bonus-empty">
          <div class="bonus-empty-icon">✨</div>
          <p>完成带彩蛋的章节任务后，文档会自动收进这里。</p>
        </div>
      </aside>
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

const knownBonusChapters = computed(() => {
  const week3Order = ['chapter8', 'chapter10', 'chapter9']
  return [
    ...week1Chapters.map(chapter => ({ weekId: 'week1', chapter })),
    ...week3Order
      .map(id => week1Chapters.find(chapter => chapter.id === id))
      .filter(Boolean)
      .map(chapter => ({ weekId: 'week3', chapter })),
    ...week4Chapters.map(chapter => ({ weekId: 'week4', chapter }))
  ]
})

const unlockedBonusDocuments = computed(() => {
  const documents = new Map()

  chapterProgressStore.unlockedBonusDocuments.forEach((document) => {
    documents.set(document.id, document)
  })

  knownBonusChapters.value.forEach(({ weekId, chapter }) => {
    if (!chapter.bonusDocument?.url) return
    const weekProgress = chapterProgressStore.getWeekProgress(weekId)
    const completedAt = weekProgress.chapters?.[chapter.id]?.completedAt
    if (!weekProgress.chapters?.[chapter.id]?.completed) return

    const id = `${weekId}-${chapter.id}`
    if (!documents.has(id)) {
      documents.set(id, {
        id,
        weekId,
        chapterId: chapter.id,
        title: chapter.bonusDocument.title || '彩蛋文档',
        description: chapter.bonusDocument.description || '',
        url: chapter.bonusDocument.url,
        sourceTitle: chapter.title,
        unlockedAt: completedAt || new Date(0).toISOString()
      })
    }
  })

  return Array.from(documents.values())
    .filter(document => document?.url)
    .sort((a, b) => new Date(a.unlockedAt || 0) - new Date(b.unlockedAt || 0))
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

.home-layout {
  position: relative;
}

.home-main {
  min-width: 0;
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

.bonus-collection {
  position: fixed;
  top: 208px;
  right: calc((100vw - 1000px) / 2 - 344px);
  width: 320px;
  max-height: calc(100vh - 232px);
  overflow: auto;
  z-index: 20;
  padding: 20px;
  border: 1px solid rgba(250, 173, 20, 0.35);
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 72%);
  box-shadow: 0 10px 30px rgba(250, 173, 20, 0.12);
}

.bonus-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.bonus-kicker {
  margin: 0 0 4px 0;
  font-size: 12px;
  font-weight: 700;
  color: #ad6800;
}

.bonus-header h2 {
  margin: 0;
  font-size: 20px;
  color: #1f1f1f;
}

.bonus-count {
  min-width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff7e6;
  color: #d46b08;
  border: 1px solid #ffd591;
  font-weight: 800;
}

.bonus-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bonus-item {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ffe7ba;
  background: rgba(255, 255, 255, 0.92);
  color: #262626;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.bonus-item:hover {
  transform: translateY(-2px);
  border-color: #faad14;
  box-shadow: 0 8px 18px rgba(250, 173, 20, 0.16);
}

.bonus-doc-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff7e6;
  font-size: 18px;
}

.bonus-doc-body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.bonus-doc-body strong {
  overflow: hidden;
  color: #1f1f1f;
  font-size: 14px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bonus-doc-body small {
  overflow: hidden;
  color: #8c8c8c;
  font-size: 12px;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bonus-arrow {
  color: #d46b08;
  font-weight: 800;
}

.bonus-empty {
  min-height: 180px;
  border: 1px dashed #ffd591;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  text-align: center;
  color: #8c6d1f;
  background: rgba(255, 251, 230, 0.58);
}

.bonus-empty-icon {
  font-size: 28px;
}

.bonus-empty p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 1700px) {
  .bonus-collection {
    position: static;
    width: auto;
    max-height: none;
    overflow: visible;
    margin-bottom: 24px;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 20px 16px;
  }

  .bonus-collection {
    margin-bottom: 20px;
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
