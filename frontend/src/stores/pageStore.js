import { defineStore } from 'pinia'

export const usePageStore = defineStore({
  id: 'page',
  state: () => ({
    page: 'home'
  }),
  actions: {
    changePage(page) {
      this.page = page
    }
  }
})
