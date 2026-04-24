<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>📐 景别分类详解（远/中/近/特）</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎬 视频：滋滋老师拉片解说">
          <VideoPlayer videoUrl="https://fclive.pandacollege.cn/p/rYNX8h" title="景别&运镜详解" :duration="15" />
        </ContentSection>
        <ContentSection title="📏 景别分类表（通用）">
          <div class="shot-table">
            <div class="shot-row">
              <span class="shot-name">极远景</span>
              <span class="shot-prompt">extreme long shot</span>
            </div>
            <div class="shot-row">
              <span class="shot-name">远景</span>
              <span class="shot-prompt">long shot</span>
            </div>
            <div class="shot-row">
              <span class="shot-name">长焦远景</span>
              <span class="shot-prompt">Telephoto shots</span>
            </div>
            <div class="shot-row">
              <span class="shot-name">中景</span>
              <span class="shot-prompt">medium shot</span>
            </div>
            <div class="shot-row">
              <span class="shot-name">特写</span>
              <span class="shot-prompt">close-up</span>
            </div>
            <div class="shot-row">
              <span class="shot-name">极特写</span>
              <span class="shot-prompt">extreme close-up</span>
            </div>
          </div>
        </ContentSection>
        <ContentSection title="👤 景别分类表（人物）">
          <PromptCard title="全身照" prompt="Full-body shot" />
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week3/overview" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week3/shotsAdvanced" class="btn btn-primary">下一课时 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'
import VideoPlayer from '../../components/VideoPlayer.vue'
import PromptCard from '../../components/PromptCard.vue'

const router = useRouter()
const progressStore = useProgressStore()
const goBack = () => router.push('/week3/overview')
const markComplete = () => progressStore.completeLesson('week3', 'shotsBasic')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.shot-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.shot-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}
.shot-name {
  font-weight: 500;
}
.shot-prompt {
  font-family: 'Courier New', monospace;
  color: var(--primary-color);
}
</style>
