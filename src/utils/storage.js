// LocalStorage 工具类

const STORAGE_KEY = 'pusa_learning_progress'

// 获取进度数据
export function getProgressData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      return {
        userId: 'user_' + Date.now(),
        progress: {},
        overallProgress: 0,
        lastAccessed: null
      }
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('读取进度失败:', error)
    return null
  }
}

// 保存进度数据
export function saveProgressData(data) {
  try {
    data.lastAccessed = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch (error) {
    console.error('保存进度失败:', error)
    return false
  }
}

// 标记课时完成
export function markLessonComplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data) return false

  if (!data.progress[weekId]) {
    data.progress[weekId] = { completed: false, lessons: {}, totalProgress: 0 }
  }

  data.progress[weekId].lessons[lessonId] = {
    completed: true,
    timestamp: new Date().toISOString()
  }

  saveProgressData(data)
  return true
}

// 标记课时未完成
export function markLessonIncomplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data || !data.progress[weekId]) return false

  if (data.progress[weekId].lessons[lessonId]) {
    data.progress[weekId].lessons[lessonId].completed = false
    saveProgressData(data)
  }
  return true
}

// 检查课时是否完成
export function isLessonComplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data || !data.progress[weekId]) return false
  return data.progress[weekId].lessons?.[lessonId]?.completed || false
}

// 清空进度
export function clearAllProgress() {
  localStorage.removeItem(STORAGE_KEY)
  return true
}
