import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getProgressData, saveProgressData, markLessonComplete, isLessonComplete } from '../utils/storage'
import { calculateTotalProgress, calculateWeekProgress } from '../assets/data/curriculum'

export const useProgressStore = defineStore('progress', () => {
  const progressData = ref(getProgressData())

  const overallProgress = computed(() => {
    if (!progressData.value?.progress) return 0
    return calculateTotalProgress(progressData.value.progress)
  })

  const getWeekProgressData = (weekId) => {
    return computed(() => {
      if (!progressData.value?.progress[weekId]) {
        return { completed: false, lessons: {}, totalProgress: 0 }
      }
      const totalProgress = calculateWeekProgress(weekId, progressData.value.progress)
      return {
        ...progressData.value.progress[weekId],
        totalProgress
      }
    })
  }

  const checkLessonComplete = (weekId, lessonId) => {
    return isLessonComplete(weekId, lessonId)
  }

  const completeLesson = async (weekId, lessonId) => {
    const success = markLessonComplete(weekId, lessonId)
    if (success) {
      progressData.value = getProgressData()
    }
    return success
  }

  const refreshProgress = () => {
    progressData.value = getProgressData()
  }

  const stats = computed(() => {
    let total = 0
    let completed = 0

    Object.values(progressData.value?.progress || {}).forEach(weekData => {
      Object.values(weekData.lessons || {}).forEach(lessonData => {
        total++
        if (lessonData.completed) completed++
      })
    })

    return { total, completed, percentage: total > 0 ? (completed / total) * 100 : 0 }
  })

  const lastAccessedLesson = computed(() => {
    let lastLesson = null
    let latestTime = null

    Object.keys(progressData.value?.progress || {}).forEach(weekId => {
      const weekData = progressData.value.progress[weekId]
      Object.keys(weekData.lessons || {}).forEach(lessonId => {
        const lessonData = weekData.lessons[lessonId]
        if (lessonData.timestamp) {
          if (!latestTime || new Date(lessonData.timestamp) > new Date(latestTime)) {
            latestTime = lessonData.timestamp
            lastLesson = { weekId, lessonId }
          }
        }
      })
    })

    return lastLesson
  })

  return {
    progressData,
    overallProgress,
    stats,
    lastAccessedLesson,
    getWeekProgressData,
    checkLessonComplete,
    completeLesson,
    refreshProgress
  }
})
