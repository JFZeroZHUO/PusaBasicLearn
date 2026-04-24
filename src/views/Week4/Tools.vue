<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🛠️ 拉片工具与技巧</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎬 视频：滋滋老师拉片解说">
          <VideoPlayer videoUrl="https://fclive.pandacollege.cn/p/rYNX8h" title="拉片实战演示" :duration="15" />
        </ContentSection>
        <ContentSection title="🔧 推荐工具">
          <p><strong>1. VLC Media Player</strong> - 免费开源，支持逐帧播放</p>
          <p><strong>2. PotPlayer</strong> - 功能强大，快捷键丰富</p>
          <p><strong>3. 在线工具</strong> - YouTube、B站等平台的逐帧功能</p>
        </ContentSection>
        <ContentSection title="⌨️ 快捷键技巧">
          <div class="shortcut-list">
            <div class="shortcut-item">
              <code>,</code>
              <span>逐帧后退</span>
            </div>
            <div class="shortcut-item">
              <code>.</code>
              <span>逐帧前进</span>
            </div>
            <div class="shortcut-item">
              <code>Space</code>
              <span>暂停/播放</span>
            </div>
            <div class="shortcut-item">
              <code>/</code>
              <span>减速播放</span>
            </div>
            <div class="shortcut-item">
              <code>*</code>
              <span>加速播放</span>
            </div>
          </div>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week4/methodology" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week4/cases" class="btn btn-primary">下一课时 →</router-link>
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
const goBack = () => router.push('/week4/overview')
const markComplete = () => progressStore.completeLesson('week4', 'tools')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.shortcut-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.shortcut-item {
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 6px;
}
.shortcut-item code {
  min-width: 60px;
  padding: 6px 12px;
  background: #000;
  color: #52c41a;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  text-align: center;
}
</style>
