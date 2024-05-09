<script setup>
import GenericHeader from '@/components/GenericHeader.vue'
import EventCard from '@/components/EventCard.vue'
import events from '@/components/events.js'
import SubmissionForm from '@/components/SubmissionForm.vue'
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'

const searchQuery = ref('')
const open = ref(false)

function openModal() {
  open.value = true
}

const filteredEvents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return events
  return events.filter((event) => {
    const titleMatches = event.title.toLowerCase().includes(query)
    const locationMatches = event.location.toLowerCase().includes(query)
    const tagMatches = event.tags.some((tag) => tag.toLowerCase().includes(query))

    return titleMatches || locationMatches || tagMatches
  })
})

function search(query) {
  searchQuery.value = query
}

const action = [
  {
    text: 'Submit Paper',
    func: openModal
  },
  {
    text: 'View Details',
    func: () => {
      const toast = useToast()
      toast.error('View Details is not implemented yet')
    }
  }
]

const data = {
  title: 'Events',
  count: events.length,
  text: ' events'
}
</script>

<template>
  <div class="wrapper">
    <GenericHeader :data="data" @search="search" />
    <div class="events" v-if="filteredEvents.length > 0">
      <EventCard
        v-for="event in filteredEvents"
        :data="event"
        :key="event.title"
        :action="action"
      />
    </div>
    <div class="empty" v-else>
      <div>
        <a-empty />
      </div>
    </div>
  </div>
  <SubmissionForm v-model="open" />
</template>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(6, 100%, 96%);
}

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
  overflow: scroll;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
}
</style>
