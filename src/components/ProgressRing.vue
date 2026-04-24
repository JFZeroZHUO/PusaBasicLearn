<template>
  <div class="progress-ring-container">
    <svg
      :width="size"
      :height="size"
      class="progress-ring"
    >
      <!-- 背景圆环 -->
      <circle
        class="progress-ring-bg"
        :r="radius"
        :cx="center"
        :cy="center"
        fill="transparent"
        :stroke="backgroundColor"
        :stroke-width="strokeWidth"
      />
      <!-- 进度圆环 -->
      <circle
        class="progress-ring-fill"
        :r="radius"
        :cx="center"
        :cy="center"
        fill="transparent"
        :stroke="color"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        :style="{ transition: 'stroke-dashoffset 0.5s ease' }"
      />
    </svg>
    <div class="progress-text" :style="{ fontSize: textSize }">
      {{ displayPercentage }}%
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  percentage: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  size: {
    type: Number,
    default: 60
  },
  strokeWidth: {
    type: Number,
    default: 4
  },
  color: {
    type: String,
    default: '#1890ff'
  },
  backgroundColor: {
    type: String,
    default: '#e9ecef'
  }
})

const center = computed(() => props.size / 2)
const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const offset = computed(() => {
  const progress = props.percentage / 100
  return circumference.value * (1 - progress)
})
const displayPercentage = computed(() => Math.round(props.percentage))
const textSize = computed(() => {
  const baseSize = props.size * 0.25
  return `${baseSize}px`
})
</script>

<style scoped>
.progress-ring-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-bg {
  opacity: 0.3;
}

.progress-ring-fill {
  transform-origin: 50% 50%;
}

.progress-text {
  position: absolute;
  font-weight: 600;
  color: var(--text-primary);
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
