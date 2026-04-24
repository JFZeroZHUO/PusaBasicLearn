<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🔄 从观众到创作者</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="🎬 观众 vs 创作者">
          <div class="comparison">
            <div class="compare-card audience">
              <h3>👀 观众视角</h3>
              <ul>
                <li>会哭、会笑、会紧张</li>
                <li>完全被剧情牵着鼻子走</li>
                <li>关心主角会不会死</li>
                <li>享受情感体验</li>
              </ul>
            </div>
            <div class="compare-card creator">
              <h3>🎥 创作者视角</h3>
              <ul>
                <li>冷酷无情</li>
                <li>只关心镜头为什么要用广角</li>
                <li>分析构图、光影、剪辑</li>
                <li>拆解技术手法</li>
              </ul>
            </div>
          </div>
        </ContentSection>
        <ContentSection title="💡 思维转变">
          <p>如果说看电影是欣赏一座宏伟的建筑，那么拉片就是把这座楼拆成砖头、钢筋、水泥，然后研究它是怎么盖起来的。</p>
          <p><strong>拉片，是"偷师"的唯一捷径！</strong></p>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week4/overview" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week4/methodology" class="btn btn-primary">下一课时 →</router-link>
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
const goBack = () => router.push('/week4/overview')
const markComplete = () => progressStore.completeLesson('week4', 'mindset')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.compare-card {
  padding: 20px;
  border-radius: 12px;
}
.compare-card.audience {
  background: #fff7e6;
  border: 2px solid #ffe58f;
}
.compare-card.creator {
  background: #e6f7ff;
  border: 2px solid #91d5ff;
}
.compare-card h3 {
  margin: 0 0 15px 0;
  font-size: 18px;
}
.compare-card ul {
  margin: 0;
  padding-left: 20px;
}
.compare-card li {
  margin-bottom: 10px;
}
</style>
