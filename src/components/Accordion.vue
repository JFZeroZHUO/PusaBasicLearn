<template>
  <div class="accordion">
    <div
      class="accordion-header"
      :class="{ 'is-open': isOpen }"
      @click="toggle"
    >
      <div class="accordion-title">
        <span v-if="icon" class="accordion-icon">{{ icon }}</span>
        <h4>{{ title }}</h4>
      </div>
      <span class="accordion-arrow">{{ isOpen ? '▼' : '▶' }}</span>
    </div>
    <div
      v-show="isOpen"
      class="accordion-content"
      :style="{ maxHeight: isOpen ? maxHeight : '0px' }"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)
const maxHeight = ref('1000px') // 足够大的值以容纳内容

const toggle = () => {
  isOpen.value = !isOpen.value
}

// 暴露方法供外部调用
defineExpose({
  open: () => { isOpen.value = true },
  close: () => { isOpen.value = false },
  toggle
})
</script>

<style scoped>
.accordion {
  background: white;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--border-color);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
  user-select: none;
  background: var(--card-bg);
  transition: all 0.3s ease;
}

.accordion-header:hover {
  background: var(--accordion-hover);
}

.accordion-header.is-open {
  background: var(--accordion-bg);
  border-bottom: 1px solid var(--border-color);
}

.accordion-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.accordion-title h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.accordion-icon {
  font-size: 18px;
}

.accordion-arrow {
  font-size: 12px;
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

.accordion-header.is-open .accordion-arrow {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-body {
  padding: var(--spacing-lg);
  line-height: 1.8;
  color: var(--text-primary);
}

.accordion-body :deep(p) {
  margin-bottom: var(--spacing-sm);
}

.accordion-body :deep(p:last-child) {
  margin-bottom: 0;
}

.accordion-body :deep(ul),
.accordion-body :deep(ol) {
  margin: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
}

.accordion-body :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.accordion-body :deep(code) {
  background: var(--code-bg, #f4f3ec);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}
</style>
