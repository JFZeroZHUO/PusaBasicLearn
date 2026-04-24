<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>✨ 核心公式与提示词</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎯 景别提示词核心公式">
          <PromptCard
            title="核心公式"
            prompt="Photography by（艺术家），（机位、景别），主体，环境"
            description="这是AI绘画景别的黄金公式！"
          />
        </ContentSection>
        <ContentSection title="💡 公式解析">
          <p><strong>Photography by（艺术家）</strong> - 决定风格</p>
          <p>例如：Photography by Ansel Adams（风光大师）</p>
          <p><strong>（机位、景别）</strong> - 决定视角</p>
          <p>例如：wide shot, low angle（广角低机位）</p>
          <p><strong>主体</strong> - 主要对象</p>
          <p>例如：a young woman in red dress</p>
          <p><strong>环境</strong> - 背景场景</p>
          <p>例如：in a rainy city street at night</p>
        </ContentSection>
        <ContentSection title="📝 实战示例">
          <PromptCard
            title="完整示例"
            prompt="Photography by Roger Deakins, medium shot, low angle, a lonely cowboy standing in desert, sunset, cinematic lighting, highly detailed"
            description="电影摄影风格的沙漠牛仔中景"
          />
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week3/shotsAdvanced" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week3/aiMovement" class="btn btn-primary">下一课时 →</router-link>
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
const markComplete = () => progressStore.completeLesson('week3', 'prompts')
</script>
<style scoped>
@import '../Week1/lesson-common.css';
</style>
