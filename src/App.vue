<template>
  <router-view :key="key" />
  <MyC></MyC>
</template>

<script setup lang="ts">
import { isMobile, watchResize } from '@bassist/utils'
import MyC from '@/components/MyC.vue'

const route = useRoute()
const key = computed(() => `${String(route.name || route.path)}-${new Date()}`)

watchResize(() => {
  document.body.className = `platform-${isMobile() ? 'mobile' : 'desktop'}`
})
</script>
