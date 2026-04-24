<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>🎨 任务1-1：出图技巧（即梦AI教程）</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：15分钟</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="📚 本节目标">
          <p>学习如何使用即梦AI生成4张讲述一个完整故事的图片，这是AI视频创作的第一步。</p>
        </ContentSection>

        <ContentSection title="🎬 视频教程：如何用四个镜头，讲好一个故事">
          <VideoPlayer
            videoUrl="https://fclive.pandacollege.cn/p/2wrYTR"
            title="如何用四个镜头，讲好一个故事"
            :duration="15"
            description="本视频将教您如何构思一个简短的故事，并将其分解为4个镜头画面。"
          />
        </ContentSection>

        <ContentSection title="🎯 任务要求">
          <p><strong>出4张图讲述一个故事或剧情</strong></p>
          <p>关键要点：</p>
          <ul>
            <li>故事要完整：有开头、发展、高潮、结尾</li>
            <li>画面要连贯：角色、场景、风格保持一致</li>
            <li>构图要讲究：运用景别变化创造节奏感</li>
            <li>细节要丰富：每个画面都要有足够的细节信息</li>
          </ul>
        </ContentSection>

        <ContentSection title="🛠️ 即梦AI工具介绍">
          <p>即梦是非常优秀的国产AI出图工具，具有以下优势：</p>
          <ul>
            <li>中文界面，操作简单</li>
            <li>出图速度快，质量高</li>
            <li>支持多种风格和画幅</li>
            <li>免费额度充足</li>
          </ul>
          <p><strong>访问地址：</strong><a href="#" target="_blank">即梦AI官网</a>（将在课程群中分享）</p>
        </ContentSection>

        <ContentSection title="💡 出图技巧提示">
          <p><strong>1. 故事构思技巧：</strong></p>
          <ul>
            <li>从简单故事开始：一个角色的一天、一次冒险、一个发现</li>
            <li>使用经典结构：起承转合</li>
            <li>每个画面推进剧情发展</li>
          </ul>

          <p><strong>2. 保持画面一致性：</strong></p>
          <ul>
            <li>固定主角外貌特征</li>
            <li>保持场景风格统一</li>
            <li>使用相似的色调和光影</li>
          </ul>

          <p><strong>3. 景别变化建议：</strong></p>
          <ul>
            <li>第1张：远景/全景（交代环境）</li>
            <li>第2张：中景（展示动作）</li>
            <li>第3张：特写（强调情感）</li>
            <li>第4张：远景或特殊角度（收尾）</li>
          </ul>
        </ContentSection>

        <ContentSection title="✅ 完成标准">
          <p>完成本节学习后，您应该获得：</p>
          <ul>
            <li>✓ 4张讲述完整故事的AI生成图片</li>
            <li>✓ 图片之间风格统一，画面连贯</li>
            <li>✓ 能够清晰讲述画面中的故事</li>
          </ul>
        </ContentSection>

        <ContentSection title="📝 下一步">
          <p>完成出图后，请继续下一课时：<router-link to="/week1/videoGen">任务1-2：图生视频</router-link></p>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已学习' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/overview" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week1/videoGen" class="btn btn-primary">下一课时 →</router-link>
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

const router = useRouter()
const progressStore = useProgressStore()
const isLoading = ref(false)

const goBack = () => {
  router.push('/week1/overview')
}

const markComplete = async () => {
  isLoading.value = true
  await progressStore.completeLesson('week1', 'imageGen')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';
</style>
