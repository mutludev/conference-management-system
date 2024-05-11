<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref, computed } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import useConferences from '@/utils/useConferences'

const searchQuery = ref('')
const { events, loading } = useConferences()

const filteredEvents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return events.value
  return events.value.filter((event) => {
    const nameMatches = event.name.toLowerCase().includes(query)
    const locationMatches = event.location.toLowerCase().includes(query)
    const tagMatches = event.tags.some((tag) => tag.toLowerCase().includes(query))

    return nameMatches || locationMatches || tagMatches
  })
})
</script>

<template>
  <a-input class="search" placeholder="Search" v-model:value="searchQuery">
    <template #prefix> <search-outlined /> </template
  ></a-input>
  <div class="events" v-if="filteredEvents.length > 0">
    <EventCard v-for="event in filteredEvents" :data="event" :key="event.name" />
  </div>
  <div class="empty" v-else>
    <div>
      <a-spin v-if="loading" :spinning="loading" tip="Fetching Data" />
      <a-empty v-else />
    </div>
  </div>
</template>

<style scoped>
.search {
  max-width: 600px;
  display: flex;
  margin: 20px auto;
  border-radius: 20px;
}

.events {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
}
</style>
