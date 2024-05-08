<script setup>
import { ref } from 'vue'
import VuePdfApp from 'vue3-pdf-app'
import 'vue3-pdf-app/dist/icons/main.css'

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
    <a-button class="view" @click="showModal">View</a-button>
    <a-modal :style="{ width: '800px' }" v-model:open="open" title="Pdf Viewer" @ok="handleOk">
      <vue-pdf-app style="height: 500px" pdf="/test.pdf"></vue-pdf-app>
    </a-modal>
  </div>
</template>

<style scoped>
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
</style>
