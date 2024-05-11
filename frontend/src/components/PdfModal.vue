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
    <a-modal :style="{ width: '800px' }" v-model:open="open" @ok="handleOk" :closable="false">
      <div class="pdf">
        <div class="pdf-page" v-for="page in pages" :key="page">
          <VuePDF class="pdf-viewer" :pdf="pdf" :page="page" />
          <hr />
        </div>
      </div>
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
</style>
