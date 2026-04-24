<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>🎬 任务1-2：图生视频</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：10分钟</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="📚 本节目标">
          <p>将上一课时生成的4张图片转化为视频片段，为后续剪辑做准备。</p>
        </ContentSection>

        <ContentSection title="🎯 什么是图生视频">
          <p>图生视频（Image to Video）是AI视频创作的核心技术之一，它能够：</p>
          <ul>
            <li>让静态图片动起来</li>
            <li>添加运镜效果（推拉摇移等）</li>
            <li>生成自然的人物动作和表情</li>
            <li>创造流畅的画面过渡</li>
          </ul>
        </ContentSection>

        <ContentSection title="🛠️ 推荐工具">
          <p><strong>1. Runway Gen-2</strong> - 业界领先的图生视频工具</p>
          <p><strong>2. Pika Labs</strong> - 效果优秀的AI视频生成工具</p>
          <p><strong>3. 即梦AI</strong> - 国产工具，支持图生视频功能</p>
          <p><strong>4. 可灵AI</strong> - 快手出品，视频生成质量高</p>
        </ContentSection>

        <ContentSection title="💡 操作步骤">
          <p><strong>步骤1：选择工具</strong></p>
          <p>根据您的需求和账号情况，选择一个图生视频工具。</p>

          <p><strong>步骤2：上传图片</strong></p>
          <p>将上一课时生成的4张图片依次上传到工具中。</p>

          <p><strong>步骤3：设置参数</strong></p>
          <ul>
            <li>运动强度：建议设置为中等（3-5）</li>
            <li>视频时长：建议3-5秒</li>
            <li>运镜方式：根据画面需要选择（推/拉/静止等）</li>
          </ul>

          <p><strong>步骤4：生成视频</strong></p>
          <p>点击生成，等待处理完成。每个图片生成一个视频片段。</p>
        </ContentSection>

        <ContentSection title="🎨 运镜选择建议">
          <p><strong>第1张（远景/全景）：</strong></p>
          <ul>
            <li>缓慢推进镜头，营造进入感</li>
            <li>或静止展示，让观众了解环境</li>
          </ul>

          <p><strong>第2张（中景/动作）：</strong></p>
          <ul>
            <li>轻微横向移动，增加动感</li>
            <li>或跟随主体运动方向</li>
          </ul>

          <p><strong>第3张（特写/情感）：</strong></p>
          <ul>
            <li>缓慢推进，强调情感表达</li>
            <li>或轻微上/下摇移</li>
          </ul>

          <p><strong>第4张（收尾）：</strong></p>
          <ul>
            <li>缓慢拉远，营造结束感</li>
            <li>或特殊角度（俯拍/仰拍）增加视觉冲击</li>
          </ul>
        </ContentSection>

        <ContentSection title="⚠️ 常见问题">
          <p><strong>Q: 生成的人物动作不自然怎么办？</strong></p>
          <p>A: 降低运动强度，或使用"静止+轻微移动"模式，后期剪辑时配合音乐节奏使用。</p>

          <p><strong>Q: 画面闪烁或变形怎么办？</strong></p>
          <p>A: 减少运镜幅度，或在提示词中强调"稳定"、"平滑"等关键词。</p>

          <p><strong>Q: 视频时长不够长怎么办？</strong></p>
          <p>A: 可以通过重复播放、慢放、或在剪辑时叠加转场来解决。</p>
        </ContentSection>

        <ContentSection title="✅ 完成标准">
          <p>完成本节学习后，您应该获得：</p>
          <ul>
            <li>✓ 4个视频片段（每个3-5秒）</li>
            <li>✓ 视频画面稳定，运动流畅</li>
            <li>✓ 运镜方式符合画面内容需求</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已学习' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/imageGen" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week1/editing" class="btn btn-primary">下一课时 →</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgressStore } from '../../stores/progress'
import ContentSection from '../../components/ContentSection.vue'

const router = useRouter()
const progressStore = useProgressStore()
const isLoading = ref(false)

const goBack = () => {
  router.push('/week1/overview')
}

const markComplete = async () => {
  isLoading.value = true
  await progressStore.completeLesson('week1', 'videoGen')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';
</style>
