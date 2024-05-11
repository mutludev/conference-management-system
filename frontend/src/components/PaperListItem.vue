<script setup>
import { FilePdfOutlined } from '@ant-design/icons-vue'
import ReviewCard from './ReviewCard.vue'
import PdfModal from './PdfModal.vue'
import { computed, defineProps } from 'vue'
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const pdfPath = computed(() => {
  return BASE_URL + 'paper/' + props.data.file + '.pdf'
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
    <div class="right">
      <PdfModal :path="pdfPath" />
      <ReviewCard :paper="props.data" />
    </div>
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

.right {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
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
