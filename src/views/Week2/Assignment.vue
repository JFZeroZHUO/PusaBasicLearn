<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>📝 第2周作业</h1>
        <p class="lesson-meta"><span class="badge required">必修</span></p>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎯 作业要求">
          <p>使用SUNO工具创作一段原创音乐，时长30-60秒，风格自选。</p>
        </ContentSection>
        <ContentSection title="📤 提交方式">
          <p>在学习群提交您的音乐作品，说明：</p>
          <ul>
            <li>音乐风格和情绪</li>
            <li>使用的提示词</li>
            <li>适合什么样的视频场景</li>
          </ul>
        </ContentSection>
        <ContentSection title="🚀 进阶挑战（可选）">
          <p>尝试改编一首歌曲，或创作人声+音乐的作品。</p>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已完成</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week2/cases" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week3/overview" class="btn btn-primary">进入第3周 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'

const router = useRouter()
const progressStore = useProgressStore()
const goBack = () => router.push('/week2/overview')
const markComplete = () => progressStore.completeLesson('week2', 'assignment')
</script>
<style scoped>
@import '../Week1/lesson-common.css';
</style>
