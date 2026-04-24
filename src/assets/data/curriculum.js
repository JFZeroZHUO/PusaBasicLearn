// 课程数据配置
export const curriculum = [
  {
    id: 'week1',
    title: '第1周：新手入门基础篇（上）',
    icon: '🔰',
    description: '掌握AI视频创作的基础流程',
    gradient: 'var(--week1-gradient)',
    color: '#667eea',
    skills: ['AI出图', '视频生成', '基础剪辑'],
    lessons: [
      {
        id: 'overview',
        title: '课程概览 & 学习路径',
        duration: 5,
        type: 'intro',
        required: true
      },
      {
        id: 'imageGen',
        title: '任务1-1：出图技巧（即梦AI教程）',
        duration: 15,
        type: 'video',
        videoUrl: 'https://fclive.pandacollege.cn/p/2wrYTR',
        required: true
      },
      {
        id: 'videoGen',
        title: '任务1-2：图生视频',
        duration: 10,
        type: 'practice',
        required: true
      },
      {
        id: 'editing',
        title: '任务1-3：基础剪辑（剪映）',
        duration: 20,
        type: 'video',
        required: true
      },
      {
        id: 'photoBasics',
        title: '任务2：摄影基础与提示词',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'visualLanguage',
        title: '选修：视听语言入门',
        duration: 10,
        type: 'video',
        required: false
      },
      {
        id: 'assignment',
        title: '作业提交',
        duration: 30,
        type: 'assignment',
        formUrl: 'https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf',
        required: true
      }
    ]
  },
  {
    id: 'week2',
    title: '第2周：AI音乐基础',
    icon: '🎧',
    description: '让音乐成为视频的灵魂',
    gradient: 'var(--week2-gradient)',
    color: '#f5576c',
    skills: ['音乐理论', 'SUNO工具', '配乐技巧'],
    lessons: [
      {
        id: 'overview',
        title: '音乐在视频中的作用',
        duration: 10,
        type: 'intro',
        required: true
      },
      {
        id: 'musicTheory',
        title: '音乐风格与提示词基础',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'suno',
        title: 'SUNO工具使用教程',
        duration: 20,
        type: 'practice',
        required: true
      },
      {
        id: 'cases',
        title: '实战案例分析',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'assignment',
        title: '作业布置与提交',
        duration: 30,
        type: 'assignment',
        required: true
      }
    ]
  },
  {
    id: 'week3',
    title: '第3周：景别&运镜',
    icon: '📹',
    description: '掌握镜头语言的核心',
    gradient: 'var(--week3-gradient)',
    color: '#4facfe',
    skills: ['景别分类', '运镜技巧', '镜头调度'],
    lessons: [
      {
        id: 'overview',
        title: '景别运镜概览',
        duration: 10,
        type: 'intro',
        required: true
      },
      {
        id: 'shotsBasic',
        title: '景别分类详解（远/中/近/特）',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'shotsAdvanced',
        title: '景别分类详解（天文/显微）',
        duration: 10,
        type: 'practice',
        required: true
      },
      {
        id: 'prompts',
        title: '核心公式与提示词',
        duration: 15,
        type: 'practice',
        required: true
      },
      {
        id: 'aiMovement',
        title: 'AI运镜技巧',
        duration: 10,
        type: 'practice',
        required: true
      },
      {
        id: 'assignment',
        title: '实战任务与提交',
        duration: 30,
        type: 'assignment',
        formUrl: 'https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf',
        required: true
      }
    ]
  },
  {
    id: 'week4',
    title: '第4周：视听语言-拉片',
    icon: '🎞',
    description: '从观众到创作者的进阶之路',
    gradient: 'var(--week4-gradient)',
    color: '#43e97b',
    skills: ['拉片方法', '镜头分析', '创作思路'],
    lessons: [
      {
        id: 'overview',
        title: '什么是拉片？',
        duration: 10,
        type: 'intro',
        required: true
      },
      {
        id: 'mindset',
        title: '从观众到创作者',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'methodology',
        title: '拉片方法论',
        duration: 20,
        type: 'video',
        required: true
      },
      {
        id: 'tools',
        title: '拉片工具与技巧',
        duration: 15,
        type: 'practice',
        required: true
      },
      {
        id: 'cases',
        title: '实战案例分析',
        duration: 15,
        type: 'video',
        required: true
      },
      {
        id: 'assignment',
        title: '作业与作品赏析',
        duration: 30,
        type: 'assignment',
        required: true
      }
    ]
  }
]

// 计算总进度
export function calculateTotalProgress(progressData) {
  let totalLessons = 0
  let completedLessons = 0

  curriculum.forEach(week => {
    week.lessons.forEach(lesson => {
      if (lesson.required) {
        totalLessons++
        const weekData = progressData[week.id]
        if (weekData && weekData.lessons && weekData.lessons[lesson.id]?.completed) {
          completedLessons++
        }
      }
    })
  })

  return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
}

// 计算单周进度
export function calculateWeekProgress(weekId, progressData) {
  const week = curriculum.find(w => w.id === weekId)
  if (!week) return 0

  const weekData = progressData[weekId]
  if (!weekData || !weekData.lessons) return 0

  let totalLessons = 0
  let completedLessons = 0

  week.lessons.forEach(lesson => {
    if (lesson.required) {
      totalLessons++
      if (weekData.lessons[lesson.id]?.completed) {
        completedLessons++
      }
    }
  })

  return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
}
