<script setup>
import { SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="members-header">
    <h1 class="title">Members</h1>
    <div class="tools">
      <div class="member-count">13 members</div>
      <a-input class="search" type="text" placeholder="Search">
        <template #prefix>
          <search-outlined />
        </template>
      </a-input>
      <a-button class="add-button"><PlusOutlined /> Add member</a-button>
    </div>
  </div>
</template>

<style scoped>
.members-header {
  width: 100%;
  padding: 16px 16px 0 16px;
  background-color: hsl(6, 100%, 96%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  color: hsl(0, 0%, 20%);
  font-weight: 500;
}

.tools {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.member-count {
  color: hsl(0, 0%, 20%);
  font-size: 14px;
}

.search {
  width: 150px;
}

.add-button {
  width: 150px;
  background-color: hsl(11, 100%, 60%);
  color: white;
  border: none;
  border-radius: 5px;
}

.add-button:hover {
  color: white;
  background-color: hsl(11, 100%, 55%);
  cursor: pointer;
}

.add-button:active {
  background-color: hsl(11, 100%, 50%);
}
</style>
