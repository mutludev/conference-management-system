<script setup>
import { SearchOutlined } from '@ant-design/icons-vue'

defineProps({
  paperCount: {
    type: Number,
    required: true
  }
})

defineEmits(['search'])
</script>

<template>
  <div class="papers-header">
    <h1 class="title">Papers</h1>
    <div class="right">
      <div class="paper-count">{{ paperCount }} papers</div>
      <a-input
        class="search"
        type="text"
        placeholder="Search"
        @change="(e) => $emit('search', e.target.value)"
      >
        <template #prefix>
          <search-outlined />
        </template>
      </a-input>
    </div>
  </div>
</template>

<style scoped>
.papers-header {
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

.right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.paper-count {
  color: hsl(0, 0%, 20%);
  font-size: 14px;
}

.search {
  width: 150px;
}
</style>
