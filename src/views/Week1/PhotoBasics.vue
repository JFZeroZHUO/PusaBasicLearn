<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>📷 任务2：摄影基础与提示词</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：15分钟</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="📚 本节目标">
          <p>掌握AI绘画的核心提示词技巧，了解摄影基础知识，提升出图质量。</p>
        </ContentSection>

        <ContentSection title="🎬 视频：摄影基础课">
          <p>观看《摄影基础课》视频教程，学习：</p>
          <ul>
            <li>摄影构图的基本原理</li>
            <li>光线与影调的运用</li>
            <li>景别与角度的选择</li>
            <li>色彩搭配技巧</li>
          </ul>
          <VideoPlayer
            videoUrl="https://fclive.pandacollege.cn/p/2wrYTR"
            title="摄影基础课"
            :duration="15"
          />
        </ContentSection>

        <ContentSection title="🎯 AI绘画提示词核心公式">
          <p>掌握这个公式，你就掌握了AI绘画的核心：</p>

          <PromptCard
            title="核心公式"
            prompt="Photography by（艺术家），（机位、景别），主体，环境"
            description="这个公式包含了AI绘画的所有关键要素"
          />

          <p><strong>公式详解：</strong></p>
          <ul>
            <li><strong>Photography by（艺术家）</strong> - 决定画面风格和质感</li>
            <li><strong>（机位、景别）</strong> - 决定构图和视角</li>
            <li><strong>主体</strong> - 画面要表现的主要对象</li>
            <li><strong>环境</strong> - 背景场景和氛围</li>
          </ul>
        </ContentSection>

        <ContentSection title="🎨 实战示例">
          <PromptCard
            title="示例1：少女特写"
            prompt="Photography by Steve McCurry, close-up portrait, young Asian girl with long black hair, wearing white dress, natural lighting, soft focus background, golden hour, cinematic"
            description="国家地理风格的特写人像"
          />

          <PromptCard
            title="示例2：赛博朋克城景"
            prompt="Photography by Syd Mead, wide shot, futuristic cityscape at night, neon lights, rain, cyberpunk style, highly detailed, reflections on wet pavement"
            description="赛博朋克概念艺术风格的城市夜景"
          />

          <PromptCard
            title="示例3：森林小屋"
            prompt="Photography by Ansel Adams, medium shot, cozy wooden cabin in misty forest, morning light through trees, peaceful atmosphere, nature photography"
            description="自然风光摄影风格的森林小屋"
          />
        </ContentSection>

        <ContentSection title="💡 提示词技巧">
          <p><strong>1. 艺术家选择（决定风格）：</strong></p>
          <ul>
            <li>人像：Steve McCurry, Annie Leibovitz, Richard Avedon</li>
            <li>风光：Ansel Adams, Galen Rowell, Peter Lik</li>
            <li>概念：Syd Mead, Roger Dean, Moebius</li>
            <li>电影：Roger Deakins, Emmanuel Lubezki</li>
          </ul>

          <p><strong>2. 景别词汇：</strong></p>
          <ul>
            <li>extreme long shot（极远景）</li>
            <li>long shot / wide shot（远景）</li>
            <li>medium shot（中景）</li>
            <li>close-up（特写）</li>
            <li>extreme close-up（极特写）</li>
          </ul>

          <p><strong>3. 质量增强词：</strong></p>
          <ul>
            <li>highly detailed（高度细节）</li>
            <li>cinematic lighting（电影级布光）</li>
            <li>professional photography（专业摄影）</li>
            <li>8K, ultra sharp（8K超清晰）</li>
          </ul>
        </ContentSection>

        <ContentSection title="✅ 课后练习">
          <p><strong>作业：出2张图</strong></p>
          <p>运用所学的提示词公式，生成2张不同风格的图片：</p>
          <ol>
            <li>一张人物特写（使用close-up）</li>
            <li>一张风景/场景（使用wide shot或long shot）</li>
          </ol>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已学习' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/editing" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week1/visualLanguage" class="btn btn-primary">下一课时 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'
import VideoPlayer from '../../components/VideoPlayer.vue'
import PromptCard from '../../components/PromptCard.vue'

const router = useRouter()
const progressStore = useProgressStore()
const isLoading = ref(false)

const goBack = () => {
  router.push('/week1/overview')
}

const markComplete = async () => {
  isLoading.value = true
  await progressStore.completeLesson('week1', 'photoBasics')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';
</style>
