<script setup>
import GenericHeader from '@/components/GenericHeader.vue'
import SubmittedPaperListItem from '@/components/SubmittedPaperListItem.vue'
import { ref, computed } from 'vue'
import usePapers from '@/utils/usePapers'

const searchQuery = ref('')
const { loading, papers } = usePapers()

const filteredPapers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return papers.value
  return papers.value.filter((paper) => {
    return paper.title.toLowerCase().includes(query)
  })
})

function search(query) {
  searchQuery.value = query
}

const data = computed(() => ({
  title: 'Submitted Papers',
  count: papers.value.length,
  text: ' papers'
}))
</script>

<template>
  <div class="wrapper">
    <GenericHeader :data="data" @search="search" />
    <div class="papers" v-if="filteredPapers.length > 0">
      <SubmittedPaperListItem
        class="list-item"
        v-for="paper in filteredPapers"
        :data="paper"
        :key="paper._id"
      />
    </div>
    <div class="empty" v-else>
      <div>
        <a-spin v-if="loading" :spinning="loading" tip="Fetching Data" />
        <a-empty v-else />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(6, 100%, 96%);
}

.papers {
  padding: 0 16px;
  overflow: scroll;
}

.list-item::after {
  content: '';
  display: block;
  width: 100%;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  margin: 10px 0;
}

.list-item:first-child::before {
  content: '';
  display: block;
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 80%);
  margin: 10px 0;
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
}
</style>
