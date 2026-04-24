<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>✂️ 任务1-3：基础剪辑（剪映）</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：20分钟</span>
          <span class="badge required">必修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="📚 本节目标">
          <p>使用剪映将4个视频片段剪辑成一段完整的短视频，添加背景音乐和音效。</p>
        </ContentSection>

        <ContentSection title="🎬 剪映基础操作">
          <p><strong>1. 导入素材</strong></p>
          <ul>
            <li>打开剪映，点击"开始创作"</li>
            <li>导入4个视频片段</li>
            <li>按顺序添加到时间轴</li>
          </ul>

          <p><strong>2. 基础剪辑</strong></p>
          <ul>
            <li>拖动视频边缘调整时长</li>
            <li>使用分割功能剪辑片段</li>
            <li>删除不需要的部分</li>
          </ul>

          <p><strong>3. 添加转场</strong></p>
          <ul>
            <li>点击两个视频之间的连接点</li>
            <li>选择转场效果（叠化、淡入淡出等）</li>
            <li>调整转场时长（建议0.5-1秒）</li>
          </ul>

          <p><strong>4. 添加文字</strong></p>
          <ul>
            <li>点击"文字" → "新建文本"</li>
            <li>输入标题或说明文字</li>
            <li>选择字体、颜色、动画效果</li>
          </ul>
        </ContentSection>

        <ContentSection title="🎵 添加音乐和音效">
          <p><strong>背景音乐选择技巧：</strong></p>
          <ul>
            <li>根据故事情感选择音乐风格（温馨/紧张/欢快等）</li>
            <li>注意音乐节奏，尝试让画面变化配合音乐节拍</li>
            <li>控制音量，不要盖过画面内容</li>
            <li>剪映音频库有丰富的免费音乐</li>
          </ul>

          <p><strong>添加音效增强体验：</strong></p>
          <ul>
            <li>环境音：风声、雨声、脚步声等</li>
            <li>动作音：开门、碰撞、魔法效果等</li>
            <li>转场音：whoosh、 swoosh等</li>
          </ul>
        </ContentSection>

        <ContentSection title="💡 剪辑技巧">
          <p><strong>1. 节奏控制</strong></p>
          <ul>
            <li>快速剪辑：用于紧张、兴奋的场景</li>
            <li>慢镜头：用于强调情感或重要时刻</li>
            <li>静态镜头：用于让观众仔细观察画面</li>
          </ul>

          <p><strong>2. 画面比例</strong></p>
          <ul>
            <li>9:16 - 竖屏，适合抖音、快手</li>
            <li>16:9 - 横屏，适合B站、YouTube</li>
            <li>1:1 - 方形，适合Instagram</li>
          </ul>

          <p><strong>3. 调色建议</strong></p>
          <ul>
            <li>保持色调统一，不要每个片段风格差异太大</li>
            <li>可以使用剪映滤镜一键美化</li>
            <li>调整亮度、对比度、饱和度让画面更生动</li>
          </ul>
        </ContentSection>

        <ContentSection title="✅ 完成标准">
          <p>完成本节学习后，您应该产出：</p>
          <ul>
            <li>✓ 一个15-30秒的完整视频</li>
            <li>✓ 4个片段剪辑流畅，转场自然</li>
            <li>✓ 有背景音乐，节奏配合得当</li>
            <li>✓ 有适当的音效增强体验</li>
            <li>✓ 可选：添加标题或字幕</li>
          </ul>
        </ContentSection>

        <ContentSection title="📤 导出设置">
          <p><strong>推荐导出参数：</strong></p>
          <ul>
            <li>分辨率：1080P</li>
            <li>帧率：30fps 或 60fps</li>
            <li>码率：推荐</li>
            <li>格式：MP4</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已学习' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/videoGen" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week1/photoBasics" class="btn btn-primary">下一课时 →</router-link>
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
  await progressStore.completeLesson('week1', 'editing')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';
</style>
