<script setup>
import { FilePdfOutlined } from '@ant-design/icons-vue'
import PdfModal from './PdfModal.vue'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="list-item">
    <div class="left">
      <a-avatar class="avatar">
        <template #icon><FilePdfOutlined /></template>
      </a-avatar>
      <div>{{ data.title }}</div>
    </div>
    <PdfModal />
  </div>
</template>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: hsl(0, 0%, 20%);
  font-size: 14px;
}

.left {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.view {
  border: none;
  box-shadow: none;
  background-color: hsl(11 100% 60%);
  color: white;
}

.view:hover {
  background-color: hsl(11 100% 55%);
  color: white;
}

.view:active {
  background-color: hsl(11 100% 50%);
  color: white;
}

.select {
  width: 103px;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid hsl(0, 0%, 50%);
}
</style>
