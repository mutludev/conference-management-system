<script setup>
import GenericHeader from '@/components/GenericHeader.vue'
import EventCard from '@/components/EventCard.vue'
import SubmissionForm from '@/components/SubmissionForm.vue'
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
import useConferences from '@/utils/useConferences'

const searchQuery = ref('')
const open = ref(false)
const conferenceId = ref(null)
const { loading, events } = useConferences()
function openModal(id) {
  conferenceId.value = id
  open.value = true
}

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

function search(query) {
  searchQuery.value = query
}

const data = computed(() => ({
  title: 'Events',
  count: events.value.length,
  text: ' events'
}))
</script>

<template>
  <div class="wrapper">
    <GenericHeader :data="data" @search="search" />
    <div class="events" v-if="filteredEvents.length > 0">
      <EventCard
        v-for="event in filteredEvents"
        :data="event"
        :key="event.title"
        :action="[
          {
            text: 'Submit Paper',
            func: () => openModal(event.id)
          },
          {
            text: 'View Details',
            func: () => {
              const toast = useToast()
              toast.error('View Details is not implemented yet')
            }
          }
        ]"
      />
    </div>
    <div class="empty" v-else>
      <div>
        <a-spin v-if="loading" :spinning="loading" tip="Fetching Data" />
        <a-empty v-else />
      </div>
    </div>
  </div>
  <SubmissionForm v-model="open" :conference-id="conferenceId" />
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
