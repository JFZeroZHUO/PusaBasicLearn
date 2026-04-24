<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>📝 第3周作业</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎯 基础任务">
          <p>任选1个景别镜头角度，生成一张"好看"的图片</p>
        </ContentSection>
        <ContentSection title="📤 提交要求">
          <p>提交到《补基础：景别镜头图》表单，同时发【基础入门学习群】</p>
          <a href="https://forchangesz.feishu.cn/share/base/form/shrcnyEngJJgSJqdnp1FbMfizjf" target="_blank" class="btn btn-primary">打开提交表单 →</a>
        </ContentSection>
        <ContentSection title="🎁 奖励">
          <p>若你的图片作业被选中，将会额外得到一个小小的10次MJ小奖励哦！</p>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已完成</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week3/aiMovement" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week4/overview" class="btn btn-primary">进入第4周 →</router-link>
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
const goBack = () => router.push('/week3/overview')
const markComplete = () => progressStore.completeLesson('week3', 'assignment')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
</style>
