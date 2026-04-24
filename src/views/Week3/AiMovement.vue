<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🎬 AI运镜技巧</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="📹 什么是运镜">
          <p>运镜是指摄影机在拍摄过程中的运动方式，能够创造动态效果和视觉冲击力。</p>
        </ContentSection>
        <ContentSection title="🎯 常见运镜类型">
          <div class="movement-list">
            <div class="movement-card">
              <h4>推镜头 (Dolly In)</h4>
              <p>摄影机逐渐接近被摄主体，强调情感或重要性</p>
              <PromptCard title="提示词" prompt="dolly in, slow push in, camera moves closer" />
            </div>
            <div class="movement-card">
              <h4>拉镜头 (Dolly Out)</h4>
              <p>摄影机逐渐远离被摄主体，展示环境或结束感</p>
              <PromptCard title="提示词" prompt="dolly out, pull back, camera moves away" />
            </div>
            <div class="movement-card">
              <h4>摇镜头 (Pan)</h4>
              <p>摄影机位置固定，镜头方向转动</p>
              <PromptCard title="提示词" prompt="pan left, pan right, camera rotation" />
            </div>
            <div class="movement-card">
              <h4>移镜头 (Truck/Tracking)</h4>
              <p>摄影机沿水平方向移动，跟随主体动作</p>
              <PromptCard title="提示词" prompt="tracking shot, camera moves left, follows subject" />
            </div>
          </div>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week3/prompts" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week3/assignment" class="btn btn-primary">下一课时 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'
import PromptCard from '../../components/PromptCard.vue'

const router = useRouter()
const progressStore = useProgressStore()
const goBack = () => router.push('/week3/overview')
const markComplete = () => progressStore.completeLesson('week3', 'aiMovement')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.movement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.movement-card {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}
.movement-card h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
}
.movement-card p {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
