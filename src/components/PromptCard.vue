<template>
  <div class="prompt-card">
    <div class="prompt-header">
      <h4>{{ title }}</h4>
      <button @click="copyPrompt" class="copy-btn">
        {{ copied ? '✓ 已复制' : '📋 复制' }}
      </button>
    </div>
    <div class="prompt-content">
      <code>{{ prompt }}</code>
    </div>
    <div v-if="description" class="prompt-description">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})

const copied = ref(false)

const copyPrompt = () => {
  navigator.clipboard.writeText(props.prompt)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.prompt-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.prompt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.prompt-header h4 {
  margin: 0;
  font-size: 16px;
  color: var(--text-primary);
}

.copy-btn {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.prompt-content {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;
}

.prompt-content code {
  display: block;
  color: #495057;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-all;
}

.prompt-description {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
