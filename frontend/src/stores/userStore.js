import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import api from '../utils/api'
const toast = useToast()

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    loading: false
  }),
  actions: {
    async login(email, password) {
      this.loading = true
      try {
        let response = await api.login(email, password)
        this.user = response
        this.router.push('/')
        toast.success('Login successful')
      } catch (error) {
        console.log(error)
        toast.error('Login failed')
      } finally {
        this.loading = false
      }
    },
    async logout() {
      this.loading = true
      try {
        await api.logout()
        this.user = null
        toast.success('Logout successful')
        this.router.push('/login')
      } catch (error) {
        toast.error('Logout failed')
      } finally {
        this.loading = false
      }
    },
    async fetchUser() {
      this.loading = true
      try {
        let response = await api.fetchUser()
        this.user = response
      } catch (error) {
        this.user = null
      } finally {
        this.loading = false
      }
    },
    async getRole() {
      if (this.user) {
        return this.user.role
      }
      try {
        await this.fetchUser()
        return this.user.role
      } catch (error) {
        this.router.push('/login')
        return null
      }
    }
  }
})
