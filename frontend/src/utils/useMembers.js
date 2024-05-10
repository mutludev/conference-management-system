import { ref, onMounted } from 'vue'
import api from './api'

export default function useMembers() {
  const members = ref([])
  const loading = ref(false)

  onMounted(() => {
    loading.value = true
    api
      .getMembers()
      .then((response) => {
        members.value = response
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        loading.value = false
      })
  })

  return {
    members,
    loading
  }
}
