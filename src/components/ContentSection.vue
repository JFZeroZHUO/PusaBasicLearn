<template>
  <div class="content-section">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <div class="section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.content-section {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-light);
}

.content-section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.section-content {
  line-height: 1.8;
  color: var(--text-primary);
}

.section-content :deep(p) {
  margin-bottom: 12px;
}

.section-content :deep(ul),
.section-content :deep(ol) {
  margin: 12px 0;
  padding-left: 24px;
}

.section-content :deep(li) {
  margin-bottom: 8px;
}

.section-content :deep(code) {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.section-content :deep(pre) {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 12px 0;
}

.section-content :deep(pre code) {
  background: none;
  padding: 0;
}
</style>
