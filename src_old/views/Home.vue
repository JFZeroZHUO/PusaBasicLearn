<template>
  <div class="home-page">
    <!-- 头部欢迎区域 -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">🎓 新手入门学习路径</h1>
        <p class="hero-subtitle">风变野菩萨AI视频社团 - 系统学习AI视频创作</p>
      </div>

      <!-- 总进度卡片 -->
      <div class="progress-overview card">
        <div class="progress-header">
          <div>
            <h2>📊 总进度</h2>
            <p class="progress-stats">{{ stats.completed }}/{{ stats.total }} 课时</p>
          </div>
          <div class="progress-circle">
            <svg :width="120" :height="120" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e8e8e8"
                stroke-width="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="dashOffset"
                stroke="url(#gradient)"
                stroke-width="8"
                stroke-linecap="round"
                transform="rotate(-90 60 60)"
                class="progress-ring"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#667eea" />
                  <stop offset="100%" stop-color="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
            <div class="progress-percentage">{{ overallProgress.toFixed(1) }}%</div>
          </div>
        </div>

        <!-- 总进度条 -->
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: overallProgress + '%' }"
            ></div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="progress-actions">
          <button
            v-if="lastLesson"
            @click="continueLearning"
            class="btn btn-primary"
          >
            继续学习 →
          </button>
          <button v-else @click="startLearning" class="btn btn-primary">
            开始学习 →
          </button>

          <button @click="resetProgress" class="btn btn-outline">
            重置进度
          </button>
        </div>
      </div>
    </header>

    <!-- 课程卡片列表 -->
    <section class="courses-section">
      <h2 class="section-title">📚 课程目录</h2>

      <div class="courses-grid">
        <CourseCard
          v-for="week in curriculum"
          :key="week.id"
          :week="week"
        />
      </div>
    </section>

    <!-- 学习提示 -->
    <section class="tips-section card">
      <h2 class="section-title">💡 学习提示</h2>
      <ul class="tips-list">
        <li>🎯 建议按顺序完成每周课程，循序渐进</li>
        <li>⏰ 每课时标注了预计时长，合理安排学习时间</li>
        <li>✅ 标记"已学习"后会自动保存进度</li>
        <li>🔔 后续周课程在前一周进度达到50%后解锁</li>
        <li>💾 学习进度保存在本地，请勿清除浏览器缓存</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import { curriculum } from '../assets/data/curriculum'
import CourseCard from '../components/CourseCard.vue'
import { clearAllProgress } from '../utils/storage'

const router = useRouter()
const progressStore = useProgressStore()

const overallProgress = computed(() => progressStore.overallProgress)
const stats = computed(() => progressStore.stats)
const lastLesson = computed(() => progressStore.lastAccessedLesson)

// 计算圆环进度
const circumference = 2 * Math.PI * 54 // r=54
const dashOffset = computed(() => {
  return circumference * (1 - overallProgress.value / 100)
})

// 继续学习
const continueLearning = () => {
  if (lastLesson.value) {
    router.push(`/${lastLesson.value.weekId}/${lastLesson.value.lessonId}`)
  }
}

// 开始学习
const startLearning = () => {
  const firstWeek = curriculum[0]
  const firstLesson = firstWeek.lessons[0]
  router.push(`/${firstWeek.id}/${firstLesson.id}`)
}

// 重置进度
const resetProgress = () => {
  if (confirm('确定要重置所有学习进度吗？此操作不可恢复！')) {
    clearAllProgress()
    progressStore.refreshProgress()
    location.reload()
  }
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
}

/* 头部区域 */
.hero-section {
  margin-bottom: var(--spacing-xl);
}

.hero-content {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.hero-title {
  font-size: 36px;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-sm);
}

.hero-subtitle {
  font-size: var(--font-size-body);
  color: var(--text-secondary);
}

/* 进度概览卡片 */
.progress-overview {
  background: var(--card-bg);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.progress-header h2 {
  margin: 0 0 var(--spacing-xs) 0;
  font-size: var(--font-size-h2);
}

.progress-stats {
  color: var(--text-secondary);
  font-size: var(--font-size-body);
  margin: 0;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font-size-h2);
  font-weight: 700;
  color: var(--primary-color);
}

.progress-ring {
  transition: stroke-dashoffset 0.5s ease;
}

.progress-bar-container {
  margin-bottom: var(--spacing-lg);
}

.progress-actions {
  display: flex;
  gap: var(--spacing-md);
}

/* 课程区域 */
.courses-section {
  margin-bottom: var(--spacing-xl);
}

.section-title {
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

/* 提示区域 */
.tips-section {
  background: #fffbe6;
  border: 1px solid #ffe58f;
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-list li {
  padding: var(--spacing-sm) 0;
  color: var(--text-primary);
  line-height: 1.6;
}

.tips-list li:last-child {
  padding-bottom: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .home-page {
    padding: var(--spacing-md);
  }

  .hero-title {
    font-size: 28px;
  }

  .progress-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .progress-circle {
    margin-top: var(--spacing-md);
  }

  .progress-actions {
    flex-direction: column;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
