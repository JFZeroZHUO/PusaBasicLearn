<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🔭 景别分类详解（天文/显微）</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🌌 天文摄影">
          <PromptCard title="天文摄影" prompt="Astrography" />
          <PromptCard title="天文摄影" prompt="Astro photography" />
          <PromptCard title="NASA拍摄风格" prompt="Shot by NASA" />
          <PromptCard title="哈勃望远镜拍摄" prompt="Shot by hubble space telescope" />
        </ContentSection>
        <ContentSection title="🔬 显微摄影">
          <PromptCard title="显微摄影" prompt="Macrography" />
          <PromptCard title="显微摄影" prompt="Micro photography" />
          <PromptCard title="微距视野" prompt="Macroview" />
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week3/shotsBasic" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week3/prompts" class="btn btn-primary">下一课时 →</router-link>
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
const markComplete = () => progressStore.completeLesson('week3', 'shotsAdvanced')
</script>
<style scoped>
@import '../Week1/lesson-common.css';
</style>
