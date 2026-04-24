<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🎼 音乐风格与提示词基础</h1>
        <p class="lesson-meta"><span class="badge required">必修</span></p>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎵 音乐风格分类">
          <p><strong>情绪类：</strong></p>
          <ul>
            <li>欢快、激动、史诗</li>
            <li>悲伤、忧郁、抒情</li>
            <li>紧张、悬疑、惊悚</li>
            <li>温馨、治愈、浪漫</li>
          </ul>
          <p><strong>功能类：</strong></p>
          <ul>
            <li>背景音乐（Background Music）</li>
            <li>节奏音乐（Rhythmic, for editing）</li>
            <li>环境音（Ambient）</li>
            <li>主题曲（Theme Song）</li>
          </ul>
        </ContentSection>
        <ContentSection title="🎹 AI音乐提示词公式">
          <PromptCard
            title="提示词公式"
            prompt="[风格], [情绪], [乐器], [节奏], [用途]"
            description="简单有效的AI音乐生成公式"
          />
        </ContentSection>
        <ContentSection title="📝 实战示例">
          <PromptCard title="示例1：史诗感" prompt="epic, orchestral, cinematic, dramatic, powerful, for action scene" />
          <PromptCard title="示例2：温馨治愈" prompt="warm, gentle, piano, strings, peaceful, healing, background music" />
          <PromptCard title="示例3：赛博朋克" prompt="cyberpunk, electronic, synthwave, futuristic, neon, energetic" />
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week2/overview" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week2/suno" class="btn btn-primary">下一课时 →</router-link>
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

const goBack = () => router.push('/week2/overview')
const markComplete = () => progressStore.completeLesson('week2', 'musicTheory')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
</style>
