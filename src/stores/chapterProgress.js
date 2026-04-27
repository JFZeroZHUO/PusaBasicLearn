import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useChapterProgressStore = defineStore('chapterProgress', () => {
  // 章节进度数据
  const chapterProgress = ref({})

  const ensureBonusDocuments = () => {
    if (!chapterProgress.value.bonusDocuments) {
      chapterProgress.value.bonusDocuments = {}
    }
    return chapterProgress.value.bonusDocuments
  }

  // 从本地存储加载进度
  const loadProgress = () => {
    try {
      const saved = localStorage.getItem('chapterProgress')
      if (saved) {
        chapterProgress.value = JSON.parse(saved)
      }
    } catch (error) {
      console.error('Failed to load chapter progress:', error)
    }
  }

  // 保存进度到本地存储
  const saveProgress = () => {
    try {
      localStorage.setItem('chapterProgress', JSON.stringify(chapterProgress.value))
    } catch (error) {
      console.error('Failed to save chapter progress:', error)
    }
  }

  // 获取周的进度数据
  const getWeekProgress = (weekId) => {
    if (!chapterProgress.value[weekId]) {
      chapterProgress.value[weekId] = {
        chapters: {},
        currentChapter: null,
        startedAt: null,
        completedAt: null
      }
    }
    return chapterProgress.value[weekId]
  }

  // 获取章节的完成状态
  const getChapterStatus = (weekId, chapterId) => {
    const weekData = getWeekProgress(weekId)
    const chapterData = weekData.chapters[chapterId]

    return {
      completed: chapterData?.completed || false,
      completedAt: chapterData?.completedAt || null,
      taskChecked: chapterData?.taskChecked || false
    }
  }

  // 标记章节为当前章节
  const setCurrentChapter = (weekId, chapterId) => {
    const weekData = getWeekProgress(weekId)

    if (!weekData.startedAt) {
      weekData.startedAt = new Date().toISOString()
    }

    weekData.currentChapter = chapterId
    saveProgress()
  }

  // 完成章节任务
  const completeChapterTask = (weekId, chapterId) => {
    const weekData = getWeekProgress(weekId)

    if (!weekData.chapters[chapterId]) {
      weekData.chapters[chapterId] = {}
    }

    weekData.chapters[chapterId].taskChecked = true
    weekData.chapters[chapterId].completedAt = new Date().toISOString()
    saveProgress()
  }

  // 完成章节
  const completeChapter = (weekId, chapterId) => {
    const weekData = getWeekProgress(weekId)

    if (!weekData.chapters[chapterId]) {
      weekData.chapters[chapterId] = {}
    }

    weekData.chapters[chapterId].completed = true
    weekData.chapters[chapterId].taskChecked = true
    weekData.chapters[chapterId].completedAt = new Date().toISOString()

    // 检查是否所有章节都完成
    const allChapters = Object.keys(weekData.chapters)
    const allCompleted = allChapters.every(id => weekData.chapters[id]?.completed)

    if (allCompleted) {
      weekData.completedAt = new Date().toISOString()
    }

    saveProgress()
  }

  // 计算周的完成进度
  const unlockBonusDocument = (document) => {
    if (!document?.url) return

    const bonusDocuments = ensureBonusDocuments()
    const id = document.id || `${document.weekId || 'week'}-${document.chapterId || document.url}`
    bonusDocuments[id] = {
      id,
      weekId: document.weekId || null,
      chapterId: document.chapterId || null,
      title: document.title || '彩蛋文档',
      description: document.description || '',
      url: document.url,
      sourceTitle: document.sourceTitle || '',
      unlockedAt: bonusDocuments[id]?.unlockedAt || new Date().toISOString()
    }
    saveProgress()
  }

  const unlockedBonusDocuments = computed(() => {
    const bonusDocuments = ensureBonusDocuments()
    return Object.values(bonusDocuments)
      .filter(document => document?.url)
      .sort((a, b) => new Date(a.unlockedAt || 0) - new Date(b.unlockedAt || 0))
  })

  const calculateWeekProgress = (weekId, totalChapters) => {
    const weekData = getWeekProgress(weekId)
    const chapters = weekData.chapters

    let completedCount = 0
    Object.values(chapters).forEach(chapter => {
      if (chapter.completed) {
        completedCount++
      }
    })

    return {
      completed: completedCount,
      total: totalChapters,
      percentage: totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0
    }
  }

  // 获取下一个未完成的章节
  const getNextChapter = (weekId, allChapterIds) => {
    const weekData = getWeekProgress(weekId)

    for (const chapterId of allChapterIds) {
      const chapterData = weekData.chapters[chapterId]
      if (!chapterData || !chapterData.completed) {
        return chapterId
      }
    }

    return null // 所有章节都已完成
  }

  // 重置周的进度
  const resetWeekProgress = (weekId) => {
    chapterProgress.value[weekId] = {
      chapters: {},
      currentChapter: null,
      startedAt: null,
      completedAt: null
    }
    saveProgress()
  }

  // 清除所有进度
  const clearAllProgress = () => {
    chapterProgress.value = {}
    saveProgress()
  }

  // 初始化时加载进度
  loadProgress()

  return {
    chapterProgress,
    getWeekProgress,
    getChapterStatus,
    setCurrentChapter,
    completeChapterTask,
    completeChapter,
    unlockBonusDocument,
    unlockedBonusDocuments,
    calculateWeekProgress,
    getNextChapter,
    resetWeekProgress,
    clearAllProgress
  }
})
