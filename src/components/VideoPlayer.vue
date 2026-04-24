<template>
  <div class="video-player-wrapper">
    <div class="video-header">
      <h3 v-if="title">{{ title }}</h3>
      <span v-if="duration" class="duration">⏱️ 预计时长：{{ duration }}分钟</span>
    </div>
    <div class="video-container">
      <div class="video-placeholder">
        <div class="play-button">▶</div>
        <p class="video-url">{{ videoUrl }}</p>
        <a :href="videoUrl" target="_blank" class="video-link">点击在新窗口打开视频</a>
      </div>
    </div>
    <div v-if="description" class="video-description">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  videoUrl: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.video-player-wrapper {
  margin: 24px 0;
}

.video-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.video-header h3 {
  margin: 0;
  font-size: 18px;
}

.duration {
  font-size: 14px;
  color: var(--text-secondary);
}

.video-container {
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.video-url {
  font-size: 12px;
  opacity: 0.8;
  word-break: break-all;
  text-align: center;
  margin-bottom: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.video-link {
  color: white;
  text-decoration: underline;
  font-size: 14px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: background 0.3s ease;
}

.video-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.video-description {
  margin-top: 12px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
