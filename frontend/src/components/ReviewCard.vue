<script setup>
import { ref, h } from 'vue'
import {FileSearchOutlined } from '@ant-design/icons-vue'

const open = ref(false)

const showModal = () => {
  open.value = true
}

const handleSubmit = (e) => {
  console.log(e)
  open.value = false
}

const selectedDecision = ref(null)
const selectDecision = (decision) => {
  selectedDecision.value = decision
}
</script>

<template>
  <div>
    <a-button class="review" type="primary" @click="showModal" :icon="h(FileSearchOutlined)">
      Review
    </a-button>
    <a-modal
      :style="{ width: '600px' }"
      v-model:open="open"
      title="Review Paper"
      okText="Submit"
      @ok="handleSubmit"
    >
      <a-form layout="vertical">
        <a-form-item label="Please leave your feedback below:">
          <a-textarea :rows="4" />
        </a-form-item>
        <a-form-item label="Please make your decision:">
          <div class="status-wrapper">
            <button
              class="choice accept"
              :class="{ selected: selectedDecision === 'accept' }"
              @click="selectDecision('accept')"
            >
              Accept
            </button>
            <button
              class="choice reject"
              :class="{ selected: selectedDecision === 'reject' }"
              @click="selectDecision('reject')"
            >
              Reject
            </button>
            <button
              class="choice revision"
              :class="{ selected: selectedDecision === 'revision' }"
              @click="selectDecision('revision')"
            >
              Revision
            </button>
          </div>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped>
.modal {
  width: 1000px;
}

.status-wrapper {
  display: flex;
  gap: 10px;
}

.review {
  border: none;
  box-shadow: none;
}

.choice {
  height: 36px;
  width: 100px;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}

.selected {
  border-color: hsl(0, 0%, 60%);
  box-shadow: 0 0 10px black;
}

.accept {
  background-color: hsl(119, 100%, 41%);
}

.reject {
  background-color: hsl(0, 100%, 50%);
}

.revision {
  background-color: hsl(48, 100%, 50%);
}
</style>
