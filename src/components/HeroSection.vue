<template>
  <div class="hero-section">
    <!-- 周次标签 -->
    <div class="hero-badge">🎓 第1周 · 新手入门基础篇</div>

    <!-- 主标题 -->
    <h1 class="hero-title">
      你的第一个AI视频，
      <span class="highlight">今天就能完成！</span>
    </h1>

    <!-- 副标题 -->
    <p class="hero-subtitle">
      即使你是零基础，也能在2小时内创作出属于你的第一部AI视频作品
    </p>

    <!-- 学习成果展示（4格图示） -->
    <div class="learning-outcomes">
      <h3 class="outcomes-title">🎯 第1周结束后，你将能够：</h3>
      <div class="outcome-grid">
        <div class="outcome-card">
          <div class="outcome-icon">🎨</div>
          <div class="outcome-text">
            <strong>用AI生成4张图</strong>
            <p>讲述一个完整故事</p>
          </div>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">🎬</div>
          <div class="outcome-text">
            <strong>转化为视频</strong>
            <p>让图片动起来</p>
          </div>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">🎵</div>
          <div class="outcome-text">
            <strong>配上音乐音效</strong>
            <p>专业级的视听体验</p>
          </div>
        </div>
        <div class="outcome-card">
          <div class="outcome-icon">📱</div>
          <div class="outcome-text">
            <strong>完成短视频作品</strong>
            <p>可分享的成就</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA按钮组 -->
    <div class="hero-cta">
      <button class="btn btn-primary btn-large pulse-animation" @click="scrollToTasks">
        🚀 开始创作我的第一个视频
      </button>
      <p class="hero-note">
        ⏱️ 预计耗时：2小时 · 📚 包含完整教程 · 🎓 零基础友好
      </p>
    </div>
  </div>
</template>

<script setup>
const scrollToTasks = () => {
  // 滚动到任务区域
  const taskSection = document.querySelector('.task-section')
  if (taskSection) {
    taskSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: var(--spacing-xxl, 48px) var(--spacing-lg, 24px);
  text-align: center;
  border-radius: var(--radius-lg, 16px);
  margin-bottom: var(--spacing-xl, 32px);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: var(--spacing-lg, 24px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-title {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: var(--spacing-md, 16px);
}

.hero-title .highlight {
  display: block;
  color: #ffd700;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(14px, 2vw, 18px);
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl, 32px);
  line-height: 1.6;
}

/* 学习成果展示 */
.learning-outcomes {
  margin-bottom: var(--spacing-xl, 32px);
}

.outcomes-title {
  font-size: 20px;
  margin-bottom: var(--spacing-lg, 24px);
  opacity: 0.95;
}

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md, 16px);
  max-width: 900px;
  margin: 0 auto;
}

.outcome-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md, 12px);
  padding: var(--spacing-lg, 24px);
  display: flex;
  align-items: center;
  gap: var(--spacing-md, 16px);
  transition: all 0.3s ease;
}

.outcome-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.outcome-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.outcome-text {
  text-align: left;
  flex: 1;
}

.outcome-text strong {
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
}

.outcome-text p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

/* CTA按钮 */
.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md, 16px);
}

.btn-large {
  font-size: 18px;
  padding: 16px 40px;
  border-radius: 50px;
  background: white;
  color: #667eea;
  border: none;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.btn-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* 脉冲动画 */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

.hero-note {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-section {
    padding: var(--spacing-xl, 32px) var(--spacing-md, 16px);
  }

  .outcome-grid {
    grid-template-columns: 1fr;
  }

  .outcome-card {
    padding: var(--spacing-md, 16px);
  }

  .btn-large {
    font-size: 16px;
    padding: 14px 32px;
  }
}
</style>
