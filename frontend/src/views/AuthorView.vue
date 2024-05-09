<script setup>
import GenericHeader from '@/components/GenericHeader.vue'
import SubmittedPaperListItem from '@/components/SubmittedPaperListItem.vue'
import { ref, computed } from 'vue'
import papers from '../components/papers'

const searchQuery = ref('')

const filteredPapers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return papers
  return papers.filter((paper) => {
    return paper.title.toLowerCase().includes(query)
  })
})

function search(query) {
  searchQuery.value = query
}

const data = {
  title: 'Submitted Papers',
  count: papers.length,
  text: ' papers'
}
</script>

<template>
  <div class="wrapper">
    <GenericHeader :data="data" @search="search" />
    <div class="papers" v-if="filteredPapers.length > 0">
      <SubmittedPaperListItem
        class="list-item"
        v-for="paper in filteredPapers"
        :data="paper"
        :key="paper.title"
      />
    </div>
    <div class="empty" v-else>
      <div>
        <a-empty />
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
