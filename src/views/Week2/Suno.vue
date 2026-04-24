<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🎹 SUNO工具使用教程</h1>
        <p class="lesson-meta"><span class="badge required">必修</span></p>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🛠️ 风变的SUNO工具">
          <p>SUNO是目前最强大的AI音乐生成工具之一。风变提供了内部访问地址，无需翻墙即可使用！</p>
          <a href="https://art.forchange.cn/suno" target="_blank" class="btn btn-primary">打开SUNO工具 →</a>
        </ContentSection>
        <ContentSection title="📖 使用步骤">
          <ol>
            <li>访问风变SUNO工具链接</li>
            <li>选择"Custom Mode"（自定义模式）</li>
            <li>输入歌词（可选）或选择"Instrumental"（纯音乐）</li>
            <li>输入音乐风格提示词</li>
            <li>点击"Generate"生成音乐</li>
            <li>等待30-60秒，生成2个版本供选择</li>
            <li>下载喜欢的版本或继续生成</li>
          </ol>
        </ContentSection>
        <ContentSection title="💡 使用技巧">
          <ul>
            <li>第一次生成会比较基础，可以点击"Continue"继续生成更多版本</li>
            <li>如果选中某个版本，会基于该版本继续优化</li>
            <li>建议先试听，再选择喜欢的方向继续深化</li>
            <li>可以指定时长（通常30-120秒）</li>
          </ul>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week2/musicTheory" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week2/cases" class="btn btn-primary">下一课时 →</router-link>
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
const goBack = () => router.push('/week2/overview')
const markComplete = () => progressStore.completeLesson('week2', 'suno')
</script>
<style scoped>
@import '../Week1/lesson-common.css';
</style>
