<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProgressStore } from './stores/progress'

const progressStore = useProgressStore()

onMounted(() => {
  progressStore.refreshProgress()
})
</script>

<style>
@import './assets/styles/main.css';
</style>
