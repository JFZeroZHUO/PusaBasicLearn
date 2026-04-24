<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>
      <div class="lesson-header card">
        <h1>🔬 拉片方法论</h1>
      </div>
      <div class="lesson-content card">
        <ContentSection title="❓ 拉片，到底在'拉'什么？">
          <p>拉片是在学习：</p>
          <ol>
            <li><strong>镜头如何选择</strong> - 为什么要用这个景别？</li>
            <li><strong>构图如何设计</strong> - 为什么要这样安排元素？</li>
            <li><strong>剪辑节奏如何把控</strong> - 为什么要在这里切换？</li>
            <li><strong>视听如何配合</strong> - 音乐和画面如何呼应？</li>
          </ol>
        </ContentSection>
        <ContentSection title="📝 拉片步骤">
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>选择片段</h4>
                <p>选择1-2分钟有代表性的场景</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>逐镜头分析</h4>
                <p>每3-5秒暂停一次，记录镜头信息</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>记录要素</h4>
                <p>景别、角度、运镜、构图、光影、声音</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>分析作用</h4>
                <p>思考这个镜头要表达什么？为什么这么做？</p>
              </div>
            </div>
          </div>
        </ContentSection>
        <ContentSection title="📊 拉片记录表模板">
          <div class="table-template">
            <div class="table-header">
              <span>镜头</span>
              <span>景别</span>
              <span>内容</span>
              <span>作用</span>
            </div>
            <div class="table-row">
              <span>1</span>
              <span>远景</span>
              <span>城市夜景，霓虹闪烁</span>
              <span>交代环境</span>
            </div>
            <div class="table-row">
              <span>2</span>
              <span>中景</span>
              <span>主角走在街道上</span>
              <span>展示人物</span>
            </div>
          </div>
        </ContentSection>
        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary">✅ 标记为已学习</button>
        </div>
      </div>
      <div class="lesson-nav">
        <router-link to="/week4/mindset" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week4/tools" class="btn btn-primary">下一课时 →</router-link>
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
const markComplete = () => progressStore.completeLesson('week4', 'methodology')
</script>

<style scoped>
@import '../Week1/lesson-common.css';
.steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.step {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.step-number {
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.step-content h4 {
  margin: 0 0 5px 0;
}
.table-template {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}
.table-header {
  display: grid;
  grid-template-columns: 40px 80px 1fr 100px;
  background: #f5f5f5;
  padding: 10px;
  font-weight: 600;
}
.table-row {
  display: grid;
  grid-template-columns: 40px 80px 1fr 100px;
  padding: 10px;
  border-top: 1px solid var(--border-color);
}
</style>
