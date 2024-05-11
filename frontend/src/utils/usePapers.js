import { ref, onMounted } from 'vue'
import api from './api'

export default function usePapers(role = 'attendee') {
  const papers = ref([])
  const loading = ref(false)

  onMounted(() => {
    loading.value = true
    api
      .getPapers(role)
      .then((response) => {
        papers.value = response
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        loading.value = false
      })
  })

  return {
    papers,
    loading
  }
}
