<script setup>
import { ref } from 'vue'
import { FileOutlined } from '@ant-design/icons-vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const props = defineProps(['path'])

const { pdf, pages } = usePDF(props.path)

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
    <a-modal
      :style="{ width: '800px' }"
      v-model:open="open"
      @ok="handleOk"
      :closable="false"
      :cancelText="''"
      :footer="null"
    >
      <div class="pdf">
        <div class="pdf-page" v-for="page in pages" :key="page">
          <VuePDF class="pdf-viewer" :pdf="pdf" :page="page" />
          <hr />
        </div>
      </div>
      <div class="ok"><a-button type="primary" @click="handleOk">Ok</a-button></div>
    </a-modal>
  </div>
</template>

<style scoped>
.view {
  border: none;
  box-shadow: none;
}

.pdf {
  height: 500px;
  overflow: scroll;
}

.pdf-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.pdf-viewer {
  display: flex !important;
  justify-content: center;
}

hr {
  display: flex;
  justify-content: center;
  width: 80%;
}
.ok {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
}

.ok button {
  width: 70px;
}
</style>
