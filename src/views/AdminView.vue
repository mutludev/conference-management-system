<script setup>
import MembersHeader from '@/components/MembersHeader.vue'
import MemberListItem from '@/components/MemberListItem.vue'
import { ref, computed } from 'vue'

const searchQuery = ref('')

const filteredMembers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return members
  return members.filter((member) => {
    return member.name.toLowerCase().includes(query)
  })
})

function search(query) {
  searchQuery.value = query
}
const members = [
  { name: 'John Doe', email: 'johndoe@mutlu.dev', role: 'Admin' },
  { name: 'Jane Doe', email: 'janedoe@mutlu.dev', role: 'Organizer' },
  { name: 'John Smith', email: 'johnsmith@mutlu.dev', role: 'Reviewer' },
  { name: 'Jane Smith', email: 'janesmith@mutlu.dev', role: 'Author' }
]
</script>

<template>
  <div class="admin-wrapper">
    <MembersHeader :member-count="members.length" @search="search" />
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
        <a-empty />
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
