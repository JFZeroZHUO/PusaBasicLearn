// LocalStorage 工具类

const STORAGE_KEY = 'pusa_learning_progress'

// 生成用户ID
function generateUserId() {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

// 获取或创建用户ID
function getUserId() {
  let userId = localStorage.getItem('pusa_user_id')
  if (!userId) {
    userId = generateUserId()
    localStorage.setItem('pusa_user_id', userId)
  }
  return userId
}

// 获取完整的进度数据
export function getProgressData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      // 返回初始化数据结构
      return {
        userId: getUserId(),
        progress: {},
        overallProgress: 0,
        lastAccessed: null,
        bookmarks: [],
        notes: {}
      }
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('读取进度数据失败:', error)
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
    console.error('保存进度数据失败:', error)
    return false
  }
}

// 标记课时为已完成
export function markLessonComplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data) return false

  // 初始化周数据
  if (!data.progress[weekId]) {
    data.progress[weekId] = {
      completed: false,
      lessons: {},
      totalProgress: 0
    }
  }

  // 标记课时完成
  data.progress[weekId].lessons[lessonId] = {
    completed: true,
    timestamp: new Date().toISOString()
  }

  // 动态导入 curriculum 以计算进度
  import('../assets/data/curriculum.js').then(({ calculateWeekProgress, calculateTotalProgress }) => {
    // 计算周进度
    data.progress[weekId].totalProgress = calculateWeekProgress(weekId, data.progress)

    // 计算总进度
    data.overallProgress = calculateTotalProgress(data.progress)

    // 保存
    saveProgressData(data)
  })

  return true
}

// 标记课时为未完成
export function markLessonIncomplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data || !data.progress[weekId]) return false

  if (data.progress[weekId].lessons[lessonId]) {
    data.progress[weekId].lessons[lessonId].completed = false

    // 动态导入 curriculum 以计算进度
    import('../assets/data/curriculum.js').then(({ calculateWeekProgress, calculateTotalProgress }) => {
      // 计算周进度
      data.progress[weekId].totalProgress = calculateWeekProgress(weekId, data.progress)

      // 计算总进度
      data.overallProgress = calculateTotalProgress(data.progress)

      // 保存
      saveProgressData(data)
    })
  }

  return true
}

// 检查课时是否已完成
export function isLessonComplete(weekId, lessonId) {
  const data = getProgressData()
  if (!data || !data.progress[weekId]) return false
  return data.progress[weekId].lessons?.[lessonId]?.completed || false
}

// 获取周进度
export function getWeekProgress(weekId) {
  const data = getProgressData()
  if (!data || !data.progress[weekId]) return 0
  return data.progress[weekId].totalProgress || 0
}

// 获取总进度
export function getTotalProgress() {
  const data = getProgressData()
  if (!data) return 0
  return data.overallProgress || 0
}

// 获取最后访问的课时
export function getLastAccessedLesson() {
  const data = getProgressData()
  if (!data || !data.lastAccessed) return null

  // 找到最近访问的课时
  let lastLesson = null
  let latestTime = null

  Object.keys(data.progress || {}).forEach(weekId => {
    const weekData = data.progress[weekId]
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
}

// 添加书签
export function addBookmark(weekId, lessonId, title) {
  const data = getProgressData()
  if (!data) return false

  if (!data.bookmarks) {
    data.bookmarks = []
  }

  // 检查是否已存在
  const exists = data.bookmarks.some(
    b => b.weekId === weekId && b.lessonId === lessonId
  )

  if (!exists) {
    data.bookmarks.push({
      weekId,
      lessonId,
      title,
      timestamp: new Date().toISOString()
    })
    saveProgressData(data)
  }

  return true
}

// 移除书签
export function removeBookmark(weekId, lessonId) {
  const data = getProgressData()
  if (!data || !data.bookmarks) return false

  data.bookmarks = data.bookmarks.filter(
    b => !(b.weekId === weekId && b.lessonId === lessonId)
  )

  saveProgressData(data)
  return true
}

// 导出进度数据（用于备份）
export function exportProgress() {
  const data = getProgressData()
  if (!data) return null

  const dataStr = JSON.stringify(data, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)

  const link = document.createElement('a')
  link.href = url
  link.download = `pusa_learning_progress_${new Date().toISOString().split('T')[0]}.json`
  link.click()

  URL.revokeObjectURL(url)
}

// 导入进度数据（用于恢复）
export function importProgress(jsonString) {
  try {
    const data = JSON.parse(jsonString)

    // 验证数据结构
    if (!data.userId || !data.progress) {
      throw new Error('无效的进度数据格式')
    }

    saveProgressData(data)
    return true
  } catch (error) {
    console.error('导入进度数据失败:', error)
    return false
  }
}

// 清空所有进度数据（谨慎使用）
export function clearAllProgress() {
  if (confirm('确定要清空所有学习进度吗？此操作不可恢复！')) {
    localStorage.removeItem(STORAGE_KEY)
    return true
  }
  return false
}
