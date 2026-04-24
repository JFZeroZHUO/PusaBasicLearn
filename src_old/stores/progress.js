import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  getProgressData,
  saveProgressData,
  markLessonComplete,
  markLessonIncomplete,
  isLessonComplete,
  getWeekProgress,
  getTotalProgress,
  getLastAccessedLesson
} from '../utils/storage'

export const useProgressStore = defineStore('progress', () => {
  // 状态
  const progressData = ref(getProgressData())
  const isLoading = ref(false)

  // 计算属性
  const overallProgress = computed(() => {
    return progressData.value?.overallProgress || 0
  })

  // 获取指定周的进度
  const getWeekProgressData = (weekId) => {
    return computed(() => {
      if (!progressData.value?.progress[weekId]) {
        return {
          completed: false,
          lessons: {},
          totalProgress: 0
        }
      }
      return progressData.value.progress[weekId]
    })
  }

  // 检查课时是否完成
  const checkLessonComplete = (weekId, lessonId) => {
    return isLessonComplete(weekId, lessonId)
  }

  // 标记课时完成
  const completeLesson = async (weekId, lessonId) => {
    isLoading.value = true
    try {
      const success = markLessonComplete(weekId, lessonId)
      if (success) {
        // 重新加载进度数据
        progressData.value = getProgressData()
      }
      return success
    } finally {
      isLoading.value = false
    }
  }

  // 标记课时未完成
  const incompleteLesson = async (weekId, lessonId) => {
    isLoading.value = true
    try {
      const success = markLessonIncomplete(weekId, lessonId)
      if (success) {
        // 重新加载进度数据
        progressData.value = getProgressData()
      }
      return success
    } finally {
      isLoading.value = false
    }
  }

  // 刷新进度数据
  const refreshProgress = () => {
    progressData.value = getProgressData()
  }

  // 获取最后访问的课时
  const lastAccessedLesson = computed(() => {
    return getLastAccessedLesson()
  })

  // 获取完成统计
  const getStats = computed(() => {
    let totalLessons = 0
    let completedLessons = 0

    Object.values(progressData.value?.progress || {}).forEach(weekData => {
      Object.values(weekData.lessons || {}).forEach(lessonData => {
        totalLessons++
        if (lessonData.completed) {
          completedLessons++
        }
      })
    })

    return {
      total: totalLessons,
      completed: completedLessons,
      percentage: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
    }
  })

  return {
    // 状态
    progressData,
    isLoading,

    // 计算属性
    overallProgress,
    lastAccessedLesson,
    stats: getStats,

    // 方法
    getWeekProgressData,
    checkLessonComplete,
    completeLesson,
    incompleteLesson,
    refreshProgress
  }
})
