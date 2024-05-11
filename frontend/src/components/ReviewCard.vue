<script setup>
import { ref, h, computed } from 'vue'
import { FileSearchOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/userStore'
import api from '@/utils/api'
const userStore = useUserStore()

const open = ref(false)

const emit = defineEmits(['review'])
const props = defineProps(['paper'])
console.log(props.paper)
const showModal = () => {
  open.value = true
}

const ourReview = computed(() => {
  return props.paper.reviews.find((review) => review.reviewer === userStore.user.id)
})

const handleSubmit = async () => {
  const review = {
    paperId: props.paper._id,
    comment: comment.value,
    status: selectedDecision.value
  }

  await api.sendReview(review)
  emit('review', review)
  open.value = false
}
const comment = ref('')
const selectedDecision = ref(ourReview.value?.status)
const selectDecision = (decision) => {
  if (ourReview.value) return
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
      :ok-button-props="{ disabled: ourReview }"
    >
      <a-form layout="vertical">
        <a-form-item label="Please leave your feedback below:">
          <a-textarea
            :rows="4"
            v-model:value="comment"
            :placeholder="ourReview?.comment"
            :disabled="ourReview"
          />
        </a-form-item>
        <a-form-item label="Please make your decision:">
          <div class="status-wrapper">
            <button
              class="choice accept"
              :class="{ selected: selectedDecision === 'accepted' }"
              @click="selectDecision('accepted')"
            >
              Accept
            </button>
            <button
              class="choice reject"
              :class="{ selected: selectedDecision === 'rejected' }"
              @click="selectDecision('rejected')"
            >
              Reject
            </button>
            <button
              class="choice revision"
              :class="{ selected: selectedDecision === 'needs-revision' }"
              @click="selectDecision('needs-revision')"
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
