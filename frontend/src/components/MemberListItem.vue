<script setup>
import { UserDeleteOutlined, UserOutlined } from '@ant-design/icons-vue'
import { h, ref } from 'vue'
import { useToast } from 'vue-toastification'

defineProps({
  data: {
    type: Object,
    required: true
  }
})

const roles = ref(['Admin', 'Organizer', 'Reviewer', 'Author', 'Presenter', 'Attendee'])

const toast = useToast()
const error = () => {
  toast.error('This feature is not implemented yet')
}
</script>

<template>
  <div class="list-item">
    <div class="left">
      <a-avatar class="avatar">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <div>{{ data.name }}</div>
      <div class="email">{{ data.email }}</div>
    </div>
    <div class="right">
      <a-select class="select" ref="select" :value="data.role">
        <a-select-option v-for="role in roles" :key="role" :value="role">
          {{ role }}
        </a-select-option>
      </a-select>
      <a-button class="delete" type="primary" @click="error" :icon="h(UserDeleteOutlined)" />
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

.delete {
  border: none;
  box-shadow: none;
}

.email {
  color: hsl(0, 0%, 40%);
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid hsl(0, 0%, 50%);
}
</style>
