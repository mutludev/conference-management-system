<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import AdminView from '../views/AdminView.vue'
import AttendeeView from '../views/AttendeeView.vue'
import ReviewerView from '../views/ReviewerView.vue'
import OrganizerView from '@/views/OrganizerView.vue'

const roleComponentMapping = {
  admin: AdminView,
  attendee: AttendeeView,
  reviewer: ReviewerView,
  organizer: OrganizerView
}

import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()

const currentView = ref(null)

onMounted(async () => {
  const role = await userStore.getRole()
  if (!role) {
    router.push('/login')
    return
  }
  currentView.value = roleComponentMapping[role]
})
</script>

<template>
  <component v-if="currentView" :is="currentView" />
  <div class="spinner" v-else><a-spin size="large" tip="Loading..."/></div>
</template>
<style scoped>
.spinner {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
