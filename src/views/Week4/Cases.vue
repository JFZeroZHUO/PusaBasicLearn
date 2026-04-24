<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>📺 实战案例分析</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="👀 看别人拉片子">
          <p>学习拉片最快的方法是观看别人的拉片作品，理解分析思路。</p>
        </ContentSection>
        <ContentSection title="🎬 推荐拉片资源">
          <div class="resource-list">
            <div class="resource-item">
              <h4>1. 电影镜头分析</h4>
              <p>B站、YouTube上有大量up主分享的拉片视频</p>
              <p>搜索关键词："电影拉片"、"镜头分析"、"视听语言"</p>
            </div>
            <div class="resource-item">
              <h4>2. 经典场景拆解</h4>
              <p>选择经典电影场景进行逐镜头分析</p>
              <p>例如：《肖申克的救赎》救赎场景、《教父》开场等</p>
            </div>
            <div class="resource-item">
              <h4>3. 短视频拉片</h4>
              <p>分析优秀短视频的镜头运用和剪辑节奏</p>
              <p>特别关注AI视频的镜头设计</p>
            </div>
          </div>
        </ContentSection>
        <ContentSection title="💡 学习建议">
          <ul>
            <li>从简单场景开始，不要一上来就选择复杂镜头</li>
            <li>先拉片，再看别人分析，对比差异</li>
            <li>关注AI视频的特殊之处（运动、转场）</li>
            <li>尝试模仿优秀作品的镜头设计</li>
          </ul>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week4/tools" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week4/assignment" class="btn btn-primary">下一课时 →</router-link>
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
const goBack = () => router.push('/week4/overview')
const markComplete = () => progressStore.completeLesson('week4', 'cases')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.resource-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.resource-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}
.resource-item h4 {
  margin: 0 0 10px 0;
}
.resource-item p {
  margin: 5px 0;
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
