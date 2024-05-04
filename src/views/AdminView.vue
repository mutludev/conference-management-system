<script setup>
import MembersHeader from '@/components/MembersHeader.vue'
import MemberListItem from '@/components/MemberListItem.vue'

const users = [
  { name: 'John Doe', email: 'johndoe@mutlu.dev', role: 'Admin' },
  { name: 'Jane Doe', email: 'janedoe@mutlu.dev', role: 'Organizer' },
  { name: 'John Smith', email: 'johnsmith@mutlu.dev', role: 'Reviewer' },
  { name: 'Jane Smith', email: 'janesmith@mutlu.dev', role: 'Author' }
]
</script>

<template>
  <div class="admin-wrapper">
    <MembersHeader />
    <div class="members">
      <MemberListItem class="list-item" v-for="user in users" :data="user" :key="user.email" />
    </div>
  </div>
</template>

<style scoped>
.admin-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: hsl(6 100% 96%);
}

.members {
  padding: 0 16px;
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
</style>
