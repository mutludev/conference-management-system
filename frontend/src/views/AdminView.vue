<script setup>
import GenericHeader from '@/components/GenericHeader.vue'
import MemberListItem from '@/components/MemberListItem.vue'
import useMembers from '@/utils/useMembers'
import { ref, computed } from 'vue'

const searchQuery = ref('')
const { loading, members } = useMembers()

const filteredMembers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return members.value
  return members.value.filter((member) => {
    const nameMatches = member.name.toLowerCase().includes(query)
    const emailMatches = member.email.toLowerCase().includes(query)
    return nameMatches || emailMatches
  })
})

function search(query) {
  searchQuery.value = query
}

const data = computed(() => ({
  title: 'Members',
  count: filteredMembers.value.length,
  text: ' members',
  buttonText: 'Add Member'
}))
</script>

<template>
  <div class="admin-wrapper">
    <GenericHeader :data="data" @search="search" />
    <div class="members" v-if="filteredMembers.length > 0">
      <MemberListItem
        class="list-item"
        v-for="member in filteredMembers"
        :data="member"
        :key="member.email"
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
.admin-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(6, 100%, 96%);
}

.members {
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
