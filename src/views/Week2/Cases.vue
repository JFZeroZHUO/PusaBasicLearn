<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>📺 实战案例分析</h1>
        <p class="lesson-meta"><span class="badge required">必修</span></p>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎬 高嘉丰老师教学">
          <VideoPlayer videoUrl="https://fclive.pandacollege.cn/p/jifzHD" title="音乐教学1" :duration="20" />
          <VideoPlayer videoUrl="https://fclive.pandacollege.cn/p/C07AJL" title="音乐教学2" :duration="20" />
        </ContentSection>
        <ContentSection title="📝 学习要点">
          <ul>
            <li>如何分析视频的情绪和节奏</li>
            <li>如何选择匹配的音乐风格</li>
            <li>如何让音乐和画面配合</li>
            <li>常见错误和注意事项</li>
          </ul>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week2/suno" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week2/assignment" class="btn btn-primary">下一课时 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'
import VideoPlayer from '../../components/VideoPlayer.vue'

const router = useRouter()
const progressStore = useProgressStore()
const goBack = () => router.push('/week2/overview')
const markComplete = () => progressStore.completeLesson('week2', 'cases')
</script>
<style scoped>
@import '../Week1/lesson-common.css';
</style>
