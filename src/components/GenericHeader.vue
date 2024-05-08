<script setup>
import { SearchOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { useToast } from 'vue-toastification';

defineProps({
  data: {
    type: Object,
    required: true
  }
})

defineEmits(['search'])

const toast = useToast()
const error = () => {
  toast.error('This feature is not implemented yet')
}
</script>

<template>
  <div class="header">
    <h1 class="title">{{ data.title }}</h1>
    <div class="tools">
      <div class="count">{{ data.count + data.text }}</div>
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
      <a-button class="add-button" v-if="data.buttonText" @click ="error"><PlusOutlined /> {{ data.buttonText }}</a-button>
    </div>
  </div>
</template>

<style scoped>
.header {
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

.count {
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
