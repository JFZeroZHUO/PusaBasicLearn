<template>
  <aside class="sidebar" :class="{ 'mobile-open': mobileOpen }">
    <!-- 返回按钮 -->
    <div class="sidebar-header">
      <button @click="goHome" class="back-btn">
        ← 返回首页
      </button>
      <button @click="closeMobile" class="mobile-close">×</button>
    </div>

    <!-- 章节列表 -->
    <nav class="chapter-list">
      <div class="sidebar-title">
        <h3>📑 课程目录</h3>
      </div>

      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        @click="goToChapter(chapter.id)"
        class="chapter-item"
        :class="getChapterClass(chapter)"
      >
        <div class="chapter-number">{{ chapter.number }}</div>
        <div class="chapter-info">
          <div class="chapter-icon">{{ chapter.icon }}</div>
          <div class="chapter-text">
            <h4 class="chapter-title">{{ chapter.title }}</h4>
            <span v-if="chapter.elective" class="elective-badge">选修</span>
          </div>
        </div>
        <div class="chapter-status">
          <span v-if="isChapterCompleted(chapter.id)" class="completed-icon">✓</span>
          <span v-else-if="currentChapterId === chapter.id" class="current-icon">📍</span>
          <span v-else class="locked-icon">○</span>
        </div>
      </div>
    </nav>

    <!-- 进度统计 -->
    <div class="sidebar-footer">
      <div class="progress-stats">
        <div class="stats-text">
          <span class="completed-count">{{ progress.completed }}</span>
          <span class="separator">/</span>
          <span class="total-count">{{ progress.total }}</span>
          <span class="label">完成</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress.percentage + '%' }"></div>
        </div>
        <div class="percentage">{{ Math.round(progress.percentage) }}%</div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useChapterProgressStore } from '../stores/chapterProgress'

const props = defineProps({
  weekId: {
    type: String,
    required: true
  },
  chapters: {
    type: Array,
    required: true
  },
  currentChapterId: {
    type: String,
    required: true
  },
  mobileOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-mobile'])

const router = useRouter()
const progressStore = useChapterProgressStore()

// 计算进度
const progress = computed(() => {
  const chapterIds = props.chapters.map(ch => ch.id)
  const completed = chapterIds.filter((id) => progressStore.getChapterStatus(props.weekId, id).completed).length
  const total = chapterIds.length
  return {
    completed,
    total,
    percentage: total > 0 ? (completed / total) * 100 : 0
  }
})

// 检查章节是否完成
const isChapterCompleted = (chapterId) => {
  const status = progressStore.getChapterStatus(props.weekId, chapterId)
  return status.completed
}

// 获取章节样式类
const getChapterClass = (chapter) => {
  const status = progressStore.getChapterStatus(props.weekId, chapter.id)
  const classes = []

  if (status.completed) {
    classes.push('completed')
  } else if (props.currentChapterId === chapter.id) {
    classes.push('active')
  }

  if (chapter.elective) {
    classes.push('elective')
  }

  return classes.join(' ')
}

// 跳转到章节
const goToChapter = (chapterId) => {
  progressStore.setCurrentChapter(props.weekId, chapterId)
  emit('chapter-change', chapterId)
  closeMobile()
}

// 返回首页
const goHome = () => {
  router.push('/')
}

// 关闭移动端侧边栏
const closeMobile = () => {
  emit('close-mobile')
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  height: 100vh;
  background: #f5f7fa;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: #1890ff;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
}

.back-btn:hover {
  background: #e6f7ff;
}

.mobile-close {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #8c8c8c;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
}

.mobile-close:hover {
  background: #e8e8e8;
}

.sidebar-title {
  padding: 20px 20px 10px;
}

.sidebar-title h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
}

.chapter-list {
  flex: 1;
  padding: 10px 0;
}

.chapter-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.3s;
  border-left: 3px solid transparent;
}

.chapter-item:hover {
  background: white;
}

.chapter-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-left-color: #667eea;
}

.chapter-item.active .chapter-title {
  color: white;
}

.chapter-item.completed {
  color: #52c41a;
}

.chapter-item.completed .chapter-title {
  color: #52c41a;
}

.chapter-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.chapter-item.active .chapter-number {
  background: rgba(255, 255, 255, 0.3);
  color: white;
}

.chapter-item.completed .chapter-number {
  background: #f6ffed;
  color: #52c41a;
}

.chapter-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.chapter-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.chapter-text {
  flex: 1;
  min-width: 0;
}

.chapter-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #262626;
}

.elective-badge {
  display: inline-block;
  padding: 2px 8px;
  background: #f6ffed;
  color: #52c41a;
  border-radius: 4px;
  font-size: 11px;
  margin-left: 6px;
}

.chapter-status {
  flex-shrink: 0;
}

.completed-icon {
  color: #52c41a;
  font-weight: bold;
  font-size: 16px;
}

.current-icon {
  font-size: 16px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.locked-icon {
  color: #d9d9d9;
  font-size: 16px;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #e8e8e8;
  background: white;
}

.progress-stats {
  text-align: center;
}

.stats-text {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 12px;
  font-size: 14px;
}

.completed-count {
  font-size: 24px;
  font-weight: bold;
  color: #52c41a;
}

.separator {
  color: #8c8c8c;
}

.total-count {
  color: #8c8c8c;
}

.label {
  color: #8c8c8c;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
  transition: width 0.5s ease;
}

.percentage {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 600;
}

/* 移动端 */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -300px;
    top: 0;
    z-index: 1000;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar.mobile-open {
    left: 0;
  }

  .mobile-close {
    display: block;
  }
}
</style>
