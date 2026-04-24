<template>
  <div class="lesson-page">
    <!-- 移动端菜单按钮 -->
    <button @click="toggleMobileMenu" class="mobile-menu-btn">
      {{ mobileMenuOpen ? '✕' : '☰' }}
    </button>

    <!-- 侧边栏 -->
    <Sidebar
      :week-id="weekId"
      :chapters="chapters"
      :current-chapter-id="currentChapterId"
      :mobile-open="mobileMenuOpen"
      @chapter-change="onChapterChange"
      @close-mobile="closeMobileMenu"
    />

    <!-- 主内容区 -->
    <main class="main-content" ref="mainContent">
      <ChapterContent
        :week-id="weekId"
        :chapter="currentChapter"
        :all-chapters="chapters"
        @chapter-complete="onChapterComplete"
        @next-chapter="onNextChapter"
        @next-task="onNextTask"
      />
    </main>

    <!-- 移动端遮罩 -->
    <div
      v-if="mobileMenuOpen"
      class="mobile-overlay"
      @click="closeMobileMenu"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useChapterProgressStore } from '../stores/chapterProgress'
import { week1Chapters } from '../assets/data/chapters/week1'
import { week4Chapters } from '../assets/data/chapters/week4'
import Sidebar from '../components/Sidebar.vue'
import ChapterContent from '../components/ChapterContent.vue'

const route = useRoute()
const router = useRouter()
const progressStore = useChapterProgressStore()

// 周ID
const weekId = computed(() => route.params.weekId || 'week1')

const buildWeek2Chapters = () => {
  const base = week1Chapters.find(ch => ch.id === 'chapter1')
  if (!base) return []
  return [
    {
      ...base,
      id: 'week2-chapter1',
      number: 1,
      title: '第1课：AI音乐-视频的灵魂',
      icon: '🎵',
      chapterTask: {
        description: '我已经学会用suno来生成一首音乐啦'
      }
    }
  ]
}

// 章节数据
const chapters = computed(() => {
  // 根据weekId加载对应周的数据
  const chapterMap = {
    week1: week1Chapters,
    week2: buildWeek2Chapters(),
    week4: week4Chapters
    // 其他周的章节可以后续添加
  }
  const allChapters = chapterMap[weekId.value] || week1Chapters
  if (weekId.value === 'week3') {
    // week3 仅展示指定章节，并按给定顺序展示
    const week3Order = ['chapter8', 'chapter10', 'chapter9']
    return week3Order.map(id => allChapters.find(ch => ch.id === id)).filter(Boolean)
  }
  if (weekId.value !== 'week1') return allChapters

  const part = String(route.query.part || '')
  if (part === 'upper') {
    return allChapters.filter(ch => ['chapter1', 'chapter2', 'chapter3'].includes(ch.id))
  }
  if (part === 'lower') {
    return allChapters.filter(ch => ['chapter4', 'chapter5'].includes(ch.id))
  }
  return allChapters.filter(ch => ['chapter1'].includes(ch.id))
})

// 当前章节ID
const currentChapterId = ref(null)

// 当前章节
const currentChapter = computed(() => {
  return chapters.value.find(ch => ch.id === currentChapterId.value) || chapters.value[0]
})

// 移动端菜单状态
const mobileMenuOpen = ref(false)

// 主内容区引用
const mainContent = ref(null)

const syncCurrentChapter = () => {
  // 获取上次学习的章节
  const weekProgress = progressStore.getWeekProgress(weekId.value)
  const chapterIds = chapters.value.map(ch => ch.id)

  if (weekProgress.currentChapter && chapterIds.includes(weekProgress.currentChapter)) {
    currentChapterId.value = weekProgress.currentChapter
  } else if (chapters.value.length) {
    currentChapterId.value = chapters.value[0].id
    progressStore.setCurrentChapter(weekId.value, currentChapterId.value)
  }
}

// 初始化当前章节
onMounted(() => {
  syncCurrentChapter()
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

watch(
  () => [weekId.value, route.query.part, chapters.value.length],
  () => {
    syncCurrentChapter()
  }
)

// 切换章节
const onChapterChange = (chapterId) => {
  currentChapterId.value = chapterId
  progressStore.setCurrentChapter(weekId.value, chapterId)

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 章节完成
const onChapterComplete = (chapterId) => {
  console.log('Chapter completed:', chapterId)
  // 可以添加完成后的逻辑，如显示通知等
}

// 进入下一章
const onNextChapter = (chapterId) => {
  currentChapterId.value = chapterId
  progressStore.setCurrentChapter(weekId.value, chapterId)

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 进入下一个任务（无下一章时的兜底跳转）
const onNextTask = () => {
  const part = String(route.query.part || '')
  if (weekId.value === 'week1' && part === 'upper') {
    const targetChapterId = 'chapter4'
    currentChapterId.value = targetChapterId
    progressStore.setCurrentChapter('week1', targetChapterId)
    router.push('/week1/lesson?part=lower')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  router.push('/')
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.lesson-page {
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
}

.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  width: 44px;
  height: 44px;
  border: none;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.mobile-menu-btn:hover {
  background: #f5f5f5;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* 响应式 */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .mobile-overlay {
    display: block;
  }

  .main-content {
    padding-left: 0;
  }
}
</style>
