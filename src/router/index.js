import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 动态导入周次概览页面
const Week1Overview = () => import('../views/Week1/Overview.vue')
const Week2Overview = () => import('../views/Week2/Overview.vue')
const Week3Overview = () => import('../views/Week3/Overview.vue')
const Week4Overview = () => import('../views/Week4/Overview.vue')

// 新结构：课程页面
const Lesson = () => import('../views/Lesson.vue')

// 第1周课时
const Week1ImageGen = () => import('../views/Week1/ImageGen.vue')
const Week1VideoGen = () => import('../views/Week1/VideoGen.vue')
const Week1Editing = () => import('../views/Week1/Editing.vue')
const Week1PhotoBasics = () => import('../views/Week1/PhotoBasics.vue')
const Week1VisualLanguage = () => import('../views/Week1/VisualLanguage.vue')
const Week1Assignment = () => import('../views/Week1/Assignment.vue')

// 第2周课时
const Week2MusicTheory = () => import('../views/Week2/MusicTheory.vue')
const Week2Suno = () => import('../views/Week2/Suno.vue')
const Week2Cases = () => import('../views/Week2/Cases.vue')
const Week2Assignment = () => import('../views/Week2/Assignment.vue')

// 第3周课时
const Week3ShotsBasic = () => import('../views/Week3/ShotsBasic.vue')
const Week3ShotsAdvanced = () => import('../views/Week3/ShotsAdvanced.vue')
const Week3Prompts = () => import('../views/Week3/Prompts.vue')
const Week3AiMovement = () => import('../views/Week3/AiMovement.vue')
const Week3Assignment = () => import('../views/Week3/Assignment.vue')

// 第4周课时
const Week4Mindset = () => import('../views/Week4/Mindset.vue')
const Week4Methodology = () => import('../views/Week4/Methodology.vue')
const Week4Tools = () => import('../views/Week4/Tools.vue')
const Week4Cases = () => import('../views/Week4/Cases.vue')
const Week4Assignment = () => import('../views/Week4/Assignment.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 新结构：课程页面
  { path: '/:weekId/lesson', name: 'Lesson', component: Lesson },
  // 第1周路由（保留旧路由兼容）
  { path: '/week1/overview', component: Week1Overview },
  { path: '/week1/imageGen', component: Week1Overview },
  { path: '/week1/videoGen', component: Week1Overview },
  { path: '/week1/editing', component: Week1Overview },
  { path: '/week1/photoBasics', component: Week1Overview },
  { path: '/week1/visualLanguage', component: Week1Overview },
  { path: '/week1/assignment', component: Week1Overview },
  // 第2周路由（保留旧路由兼容）
  { path: '/week2/overview', component: Week2Overview },
  { path: '/week2/musicTheory', component: Week2Overview },
  { path: '/week2/suno', component: Week2Overview },
  { path: '/week2/cases', component: Week2Overview },
  { path: '/week2/assignment', component: Week2Overview },
  // 第3周路由（保留旧路由兼容）
  { path: '/week3/overview', component: Week3Overview },
  { path: '/week3/shotsBasic', component: Week3Overview },
  { path: '/week3/shotsAdvanced', component: Week3Overview },
  { path: '/week3/prompts', component: Week3Overview },
  { path: '/week3/aiMovement', component: Week3Overview },
  { path: '/week3/assignment', component: Week3Overview },
  // 第4周路由（保留旧路由兼容）
  { path: '/week4/overview', component: Week4Overview },
  { path: '/week4/mindset', component: Week4Overview },
  { path: '/week4/methodology', component: Week4Overview },
  { path: '/week4/tools', component: Week4Overview },
  { path: '/week4/cases', component: Week4Overview },
  { path: '/week4/assignment', component: Week4Overview }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
