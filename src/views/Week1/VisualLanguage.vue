<template>
  <div class="lesson-page">
    <div class="container">
      <button @click="goBack" class="back-btn">← 返回</button>

      <div class="lesson-header card">
        <h1>🎓 选修：视听语言入门</h1>
        <p class="lesson-meta">
          <span>📖 预计时长：10分钟</span>
          <span class="badge elective">选修</span>
        </p>
      </div>

      <div class="lesson-content card">
        <ContentSection title="📚 什么是视听语言">
          <p>视听语言是影视艺术的基础表达方式，就像语言有语法、词汇一样，电影也有自己的"语法"和"词汇"。</p>
          <p><strong>视听语言包括：</strong></p>
          <ul>
            <li>画面语言（构图、景别、角度、光影、色彩）</li>
            <li>声音语言（对白、音效、音乐）</li>
            <li>剪辑语言（节奏、转场、蒙太奇）</li>
            <li>时间语言（实时、倒叙、插叙）</li>
          </ul>
        </ContentSection>

        <ContentSection title="🎬 视听语言的拆解">
          <p><strong>1. 构图语言</strong></p>
          <ul>
            <li>三分法构图：主体放在画面三分之一处</li>
            <li>引导线构图：利用线条引导观众视线</li>
            <li>框架式构图：利用前景框住主体</li>
            <li>对称构图：营造平衡、稳定感</li>
          </ul>

          <p><strong>2. 光影语言</strong></p>
          <ul>
            <li>顺光：细节清晰，色彩还原好</li>
            <li>侧光：立体感强，有戏剧性</li>
            <li>逆光：营造氛围和轮廓</li>
            <li>顶光/底光：特殊效果，强调情绪</li>
          </ul>

          <p><strong>3. 色彩语言</strong></p>
          <ul>
            <li>暖色调：温馨、热情、活力</li>
            <li>冷色调：冷静、理性、孤独</li>
            <li>对比色：冲突、紧张、强调</li>
            <li>同类色：和谐、统一、平静</li>
          </ul>
        </ContentSection>

        <ContentSection title="🎥 景别的情感表达">
          <p>不同景别传达不同的情感和信息：</p>

          <div class="shot-examples">
            <div class="shot-card">
              <h4>远景/全景</h4>
              <p>交代环境、展示关系</p>
              <p>情感：客观、宏大</p>
            </div>
            <div class="shot-card">
              <h4>中景</h4>
              <p>展示动作、日常对话</p>
              <p>情感：亲近、自然</p>
            </div>
            <div class="shot-card">
              <h4>特写</h4>
              <p>强调细节、表情</p>
              <p>情感：亲密、强烈</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="🎵 声音的作用">
          <p><strong>1. 对白</strong></p>
          <ul>
            <li>推动剧情发展</li>
            <li>塑造人物性格</li>
            <li>传达关键信息</li>
          </ul>

          <p><strong>2. 音效</strong></p>
          <ul>
            <li>增强真实感（环境音、动作音）</li>
            <li>营造氛围（风声、雨声）</li>
            <li>强调重点（转场音效）</li>
          </ul>

          <p><strong>3. 音乐</strong></p>
          <ul>
            <li>表达情绪（悲伤、欢快、紧张）</li>
            <li>控制节奏（快剪/慢镜头配合音乐）</li>
            <li>连接场景（统一音乐风格）</li>
          </ul>
        </ContentSection>

        <ContentSection title="✂️ 剪辑节奏">
          <p><strong>剪辑节奏由什么决定？</strong></p>
          <ul>
            <li>音乐节拍：鼓点密集时快剪，舒缓时慢镜头</li>
            <li>情绪需求：紧张时快速剪辑，抒情时缓慢镜头</li>
            <li>信息密度：信息多时快速切换，重点镜头停留时间长</li>
          </ul>

          <p><strong>常见剪辑技巧：</strong></p>
          <ul>
            <li>匹配剪辑：利用相似形状或动作转场</li>
            <li>跳切：省略时间，突出变化</li>
            <li>交叉剪辑：平行展示两个场景</li>
            <li>蒙太奇：通过组合产生新意义</li>
          </ul>
        </ContentSection>

        <ContentSection title="💡 实战建议">
          <p><strong>如何运用视听语言提升AI视频？</strong></p>
          <ol>
            <li>在构思阶段就考虑景别变化（远-中-近-远）</li>
            <li>保持画面风格统一（色调、光影）</li>
            <li>让音乐决定剪辑节奏</li>
            <li>用音效填补AI画面的瑕疵</li>
            <li>用转场连接不同场景</li>
          </ol>
        </ContentSection>

        <ContentSection title="📚 延伸学习">
          <p>选修本课后，建议：</p>
          <ul>
            <li>观看优秀短视频，分析其视听语言运用</li>
            <li>在拉片课中深入学习（第4周）</li>
            <li>在实践中尝试不同的构图和光影</li>
          </ul>
        </ContentSection>

        <div class="lesson-actions">
          <button @click="markComplete" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '保存中...' : '✅ 标记为已学习' }}
          </button>
        </div>
      </div>

      <div class="lesson-nav">
        <router-link to="/week1/photoBasics" class="btn btn-outline">← 上一课时</router-link>
        <router-link to="/week1/assignment" class="btn btn-primary">下一课时 →</router-link>
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
  await progressStore.completeLesson('week1', 'visualLanguage')
  isLoading.value = false
}
</script>

<style scoped>
@import './lesson-common.css';

.shot-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.shot-card {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid var(--primary-color);
}

.shot-card h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: var(--text-primary);
}

.shot-card p {
  margin: 5px 0;
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
