// 课程数据配置
export const curriculum = [
  {
    id: 'week1',
    title: '第1周：新手入门基础篇',
    icon: '🔰',
    description: '掌握AI视频创作的基础流程',
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
        resources: ['4loxu3ot0uf0ml4.pdf'],
        required: true,
        content: {
          sections: [
            {
              title: '如何用四个镜头，讲好一个故事',
              content: '通过4张图片讲述一个完整的故事或剧情，学习基本的叙事技巧。'
            },
            {
              title: '即梦AI出图工具学习',
              content: '即梦是非常优秀的国产出图工具，了解当前AI出图的能力。'
            },
            {
              title: '任务要求',
              content: '出4张图讲述一个故事或剧情，使用即梦AI生成。'
            }
          ]
        }
      },
      {
        id: 'videoGen',
        title: '任务1-2：图生视频',
        duration: 10,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: '图生视频基础',
              content: '将第1步生成的4张图片，转换为4个视频片段。'
            },
            {
              title: '任务要求',
              content: '使用AI工具将图片转化为视频片段，保持故事的连贯性。'
            }
          ]
        }
      },
      {
        id: 'editing',
        title: '任务1-3：基础剪辑（剪映）',
        duration: 20,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '剪映基础教程',
              content: '学习如何使用剪映进行视频剪辑，包括剪切、转场、添加音乐等。'
            },
            {
              title: '任务要求',
              content: '将第2步的4段视频素材，剪辑成一段简单的视频，添加背景音乐和音效。'
            }
          ]
        }
      },
      {
        id: 'photoBasics',
        title: '任务2：摄影基础与提示词',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '摄影基础课',
              content: '掌握AI绘画的核心提示词技巧，这是一切创作的基础。'
            },
            {
              title: '任务要求',
              content: '看完《摄影基础课》，尝试出2张图。'
            }
          ]
        }
      },
      {
        id: 'visualLanguage',
        title: '选修：视听语言入门',
        duration: 10,
        type: 'video',
        required: false,
        content: {
          sections: [
            {
              title: '视听语言的拆解',
              content: '像学一门外语一样学影像，理解视听语言的基本要素。'
            },
            {
              title: '视听语言的案例演示',
              content: '通过实际案例分析，了解视听语言在视频中的应用。'
            }
          ]
        }
      },
      {
        id: 'assignment',
        title: '作业提交',
        duration: 30,
        type: 'assignment',
        formUrl: 'https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf',
        required: true,
        content: {
          sections: [
            {
              title: '基础作业1要求',
              content: '根据教程完成：出图、出视频、剪辑，最终提交一个带背景音乐+音效的短视频'
            },
            {
              title: '提交方式',
              content: '1. 在入门群里发 #基础作业1\\n2. 同时填写提交表单'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'week2',
    title: '第2周：AI音乐基础',
    icon: '🎧',
    description: '让音乐成为视频的灵魂',
    lessons: [
      {
        id: 'overview',
        title: '音乐在视频中的作用',
        duration: 10,
        type: 'intro',
        required: true,
        content: {
          sections: [
            {
              title: '为什么要学习音乐？',
              content: '音乐不是视频的"背景"，音乐是视频的"骨架"和"灵魂"。'
            },
            {
              title: '情绪的"强行植入"',
              content: '画面是客观的，音乐是主观的。同一个AI生成的画面，配上不同音乐会产生完全不同的情绪效果。'
            },
            {
              title: '剪辑的"节拍器"',
              content: '音乐决定了剪辑点。鼓点密集时快剪，舒缓时慢镜头，让视频更有节奏感。'
            },
            {
              title: '瑕疵的"遮羞布"',
              content: '当观众的听觉被高质量的音效抓住时，大脑会自动脑补画面的合理性，忽略视觉上的小瑕疵。'
            }
          ]
        }
      },
      {
        id: 'musicTheory',
        title: '音乐风格与提示词基础',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '了解音乐风格',
              content: '学习不同的音乐风格及其适用场景。'
            },
            {
              title: 'AI音乐提示词构成',
              content: '掌握编写AI音乐提示词的技巧和要素。'
            }
          ]
        }
      },
      {
        id: 'suno',
        title: 'SUNO工具使用教程',
        duration: 20,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: '风变的SUNO工具',
              content: '使用风变内部的SUNO工具，无需翻墙，直接使用。'
            },
            {
              title: '工具链接',
              content: 'https://art.forchange.cn/suno'
            }
          ]
        }
      },
      {
        id: 'cases',
        title: '实战案例分析',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '高嘉丰老师教学1',
              content: '直播回放：https://fclive.pandacollege.cn/p/jifzHD'
            },
            {
              title: '高嘉丰老师教学2',
              content: '直播回放：https://fclive.pandacollege.cn/p/C07AJL'
            }
          ]
        }
      },
      {
        id: 'assignment',
        title: '作业布置与提交',
        duration: 30,
        type: 'assignment',
        required: true,
        content: {
          sections: [
            {
              title: '课后作业',
              content: '运用所学的AI音乐知识，为视频创作合适的音乐。'
            },
            {
              title: '进阶：改编歌曲',
              content: '尝试使用AI工具改编现有歌曲。'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'week3',
    title: '第3周：景别&运镜',
    icon: '📹',
    description: '掌握镜头语言的核心',
    lessons: [
      {
        id: 'overview',
        title: '景别运镜概览',
        duration: 10,
        type: 'intro',
        required: true,
        content: {
          sections: [
            {
              title: '什么是景别',
              content: '景别是指被摄主体在画面中呈现的范围大小。'
            },
            {
              title: '什么是运镜',
              content: '运镜是指摄影机在拍摄过程中的运动方式。'
            }
          ]
        }
      },
      {
        id: 'shotsBasic',
        title: '景别分类详解（远/中/近/特）',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '直播回放',
              content: '滋滋老师视频拉片解说：https://fclive.pandacollege.cn/p/rYNX8h'
            },
            {
              title: '景别表（通用）',
              items: [
                { name: '极远景', prompt: 'extreme long shot', desc: '极远景镜头' },
                { name: '远景', prompt: 'long shot', desc: '远景镜头' },
                { name: '长焦远景', prompt: 'Telephoto shots', desc: '远景镜头（长焦）' },
                { name: '中景', prompt: 'medium shot', desc: '中景镜头' },
                { name: '特写', prompt: 'close-up', desc: '特写镜头' },
                { name: '极特写', prompt: 'extreme close-up', desc: '极特写镜头' }
              ]
            },
            {
              title: '景别表（人物）',
              items: [
                { name: '全身照', prompt: 'Full-body shot', desc: '全身照' }
              ]
            }
          ]
        }
      },
      {
        id: 'shotsAdvanced',
        title: '景别分类详解（天文/显微）',
        duration: 10,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: '天文摄影',
              items: [
                { name: '天文摄影', prompt: 'Astrography', desc: '天文摄影' },
                { name: '天文摄影', prompt: 'Astro photography', desc: '天文摄影' },
                { name: 'NASA拍摄风格', prompt: 'Shot by NASA', desc: 'NASA拍摄风格' },
                { name: '哈勃望远镜拍摄', prompt: 'Shot by hubble space telescope', desc: '哈勃望远镜拍摄风格' }
              ]
            },
            {
              title: '显微摄影',
              items: [
                { name: '显微摄影', prompt: 'Macrography', desc: '显微摄影' },
                { name: '显微摄影', prompt: 'Micro photography', desc: '显微摄影' },
                { name: '微距视野', prompt: 'Macroview', desc: '微距视野' }
              ]
            }
          ]
        }
      },
      {
        id: 'prompts',
        title: '核心公式与提示词',
        duration: 15,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: '核心公式',
              content: 'Photography by（艺术家），（机位、景别），主体，环境',
              highlight: true
            }
          ]
        }
      },
      {
        id: 'aiMovement',
        title: 'AI运镜技巧',
        duration: 10,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: 'AI运镜基础',
              content: '学习如何在AI视频中实现各种运镜效果。'
            },
            {
              title: '运镜类型',
              items: [
                { name: '推镜头', desc: '摄影机逐渐接近被摄主体' },
                { name: '拉镜头', desc: '摄影机逐渐远离被摄主体' },
                { name: '摇镜头', desc: '摄影机位置固定，镜头方向转动' },
                { name: '移镜头', desc: '摄影机沿水平方向移动' },
                { name: '跟镜头', desc: '摄影机跟随移动的主体' }
              ]
            }
          ]
        }
      },
      {
        id: 'assignment',
        title: '实战任务与提交',
        duration: 30,
        type: 'assignment',
        formUrl: 'https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf',
        required: true,
        content: {
          sections: [
            {
              title: '基础任务1',
              content: '任选1个景别镜头角度，生成一张"好看"的图片'
            },
            {
              title: '提交要求',
              content: '提交到《补基础：景别镜头图》表单，同时发【基础入门学习群】'
            },
            {
              title: '奖励',
              content: '若你的图片作业被选中，将会额外得到一个小小的10次MJ小奖励哦！'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'week4',
    title: '第4周：视听语言-拉片',
    icon: '🎞',
    description: '从观众到创作者的进阶之路',
    lessons: [
      {
        id: 'overview',
        title: '什么是拉片？',
        duration: 10,
        type: 'intro',
        required: true,
        content: {
          sections: [
            {
              title: '你真的"看懂"电影了吗？',
              content: '如果你在Netflix或电影院看了一千部电影，你能成为导演吗？\\n\\n❌ 观众看电影，是在"消费"情感。\\n✅ 创作者看电影，是在"解剖"技术。'
            },
            {
              title: '什么是"拉片"？',
              content: '"拉片"源于胶片时代，剪辑师需要用手拉动胶片，一格一格地审视画面。\\n\\n放到今天，拉片就是把一部电影彻底"拆"开，不再顺着时间线享受剧情，而是每几秒钟就按下暂停键，把电影拆解成几百、上千个独立的镜头。'
            }
          ]
        }
      },
      {
        id: 'mindset',
        title: '从观众到创作者',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '思维转变',
              content: '想从"吃货"变成"厨师"，你需要掌握一项核心技能——「拉片」。'
            },
            {
              title: '观众 vs 创作者',
              items: [
                { type: '观众', desc: '会哭、会笑、会紧张，完全被剧情牵着鼻子走' },
                { type: '创作者', desc: '冷酷无情，只关心——刚才那个镜头，为什么要用广角？' }
              ]
            }
          ]
        }
      },
      {
        id: 'methodology',
        title: '拉片方法论',
        duration: 20,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '拉片，到底在"拉"什么？',
              content: '拉片是在学习：\\n1. 镜头如何选择\\n2. 构图如何设计\\n3. 剪辑节奏如何把控\\n4. 视听语言如何配合'
            },
            {
              title: '为什么要自讨苦吃？',
              content: '因为这是"偷师"的唯一捷径。'
            }
          ]
        }
      },
      {
        id: 'tools',
        title: '拉片工具与技巧',
        duration: 15,
        type: 'practice',
        required: true,
        content: {
          sections: [
            {
              title: '直播回放',
              content: '观看滋滋老师的视频拉片解说：https://fclive.pandacollege.cn/p/rYNX8h'
            },
            {
              title: '实操拉片',
              content: '使用工具进行实际拉片练习'
            }
          ]
        }
      },
      {
        id: 'cases',
        title: '实战案例分析',
        duration: 15,
        type: 'video',
        required: true,
        content: {
          sections: [
            {
              title: '看别人拉片子',
              content: '通过观看别人的拉片作品，学习拉片的方法和技巧。'
            }
          ]
        }
      },
      {
        id: 'assignment',
        title: '作业与作品赏析',
        duration: 30,
        type: 'assignment',
        required: true,
        content: {
          sections: [
            {
              title: '自己拉片',
              content: '选择一部短片或电影片段，进行完整的拉片分析。'
            },
            {
              title: '提交要求',
              content: '完成拉片分析报告，包括镜头分析、构图分析、剪辑分析等。'
            }
          ]
        }
      }
    ]
  }
]

// 获取指定周的课程
export function getWeekById(weekId) {
  return curriculum.find(week => week.id === weekId)
}

// 获取指定的课时
export function getLessonById(weekId, lessonId) {
  const week = getWeekById(weekId)
  if (!week) return null
  return week.lessons.find(lesson => lesson.id === lessonId)
}

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
  const week = getWeekById(weekId)
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
