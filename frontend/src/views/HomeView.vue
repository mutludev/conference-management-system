<script setup>
import { computed, onMounted } from 'vue'
import { roleComponentMapping } from '@/utils/navigationMapping'
import { useUserStore } from '@/stores/userStore'
import { usePageStore } from '@/stores/pageStore'
const pageStore = usePageStore()
const userStore = useUserStore()

const currentView = computed(() => {
  if (!userStore.user?.role) return null
  return roleComponentMapping[userStore.user?.role][pageStore.page]
})

onMounted(async () => {
  await userStore.getRole()
})
</script>

<template>
  <component v-if="currentView" :is="currentView" />
  <div class="spinner" v-else><a-spin size="large" tip="Loading..." /></div>
</template>
<style scoped>
.spinner {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
