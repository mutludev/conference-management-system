<script setup>
import { ref } from 'vue'
import VuePdfApp from 'vue3-pdf-app'
import 'vue3-pdf-app/dist/icons/main.css'
import { FileOutlined } from '@ant-design/icons-vue'

defineProps(['path'])

const open = ref(false)

const showModal = () => {
  open.value = true
}

const handleOk = (e) => {
  console.log(e)
  open.value = false
}
</script>

<template>
  <div>
    <a-button class="view" type="primary" @click="showModal"><FileOutlined />View</a-button>
    <a-modal :style="{ width: '800px' }" v-model:open="open" title="Paper" @ok="handleOk">
      <vue-pdf-app style="height: 500px" :pdf="path"></vue-pdf-app>
    </a-modal>
  </div>
</template>

<style scoped>
.view {
  border: none;
  box-shadow: none;
}
</style>
