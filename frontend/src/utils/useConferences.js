import { ref, onMounted } from 'vue'
import api from './api'

export default function useConferences(role = 'attendee') {
  const events = ref([])
  const loading = ref(false)

  onMounted(() => {
    loading.value = true
    api
      .getConferences(role)
      .then((response) => {
        events.value = response
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        loading.value = false
      })
  })

  return {
    events,
    loading
  }
}
