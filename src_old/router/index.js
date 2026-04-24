import { createRouter, createWebHistory } from 'vue-router'
import { curriculum } from '../assets/data/curriculum.js'

// 布局组件
import Home from '../views/Home.vue'

// 动态导入所有周次页面
const week1Pages = import.meta.glob('../views/Week1/*.vue')
const week2Pages = import.meta.glob('../views/Week2/*.vue')
const week3Pages = import.meta.glob('../views/Week3/*.vue')
const week4Pages = import.meta.glob('../views/Week4/*.vue')

// 合并所有页面
const allPages = {
  ...week1Pages,
  ...week2Pages,
  ...week3Pages,
  ...week4Pages
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页 - 风变野菩萨AI视频社团' }
  }
]

// 动态生成路由
curriculum.forEach(week => {
  week.lessons.forEach(lesson => {
    const routePath = `/${week.id}/${lesson.id}`

    // 查找对应的组件文件
    let componentPath = null
    for (const path in allPages) {
      if (path.includes(`/${week.id}/${lesson.id}.vue`) ||
          path.includes(`\\${week.id}\\${lesson.id}.vue`)) {
        componentPath = path
        break
      }
    }

    routes.push({
      path: routePath,
      name: `${week.id}-${lesson.id}`,
      component: componentPath ? allPages[componentPath] : Home, // 如果找不到组件，使用首页
      meta: {
        title: `${lesson.title} - ${week.title}`,
        weekId: week.id,
        lessonId: lesson.id,
        weekTitle: week.title,
        lessonTitle: lesson.title,
        duration: lesson.duration,
        type: lesson.type,
        required: lesson.required
      }
    })
  })
])

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
