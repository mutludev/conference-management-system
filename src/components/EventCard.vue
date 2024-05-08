<script setup>
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'
import { computed, defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  action: {
    type: Array,
    default: () => [
      {
        text: 'Buy Ticket',
        func: () => {
          console.log('Buy Ticket')
        }
      },
      {
        text: 'View Details',
        func: () => {
          console.log('View Details')
        }
      }
    ]
  }
})

let parsedDate = computed(() => {
  const date = new Date(props.data.date)
  const dateString = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const timeString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return dateString + ' - ' + timeString
})

let day = computed(() => {
  const date = new Date(props.data.date)
  return date.getDate().toString().padStart(2, '0')
})

let monthAbbr = computed(() => {
  const date = new Date(props.data.date)
  return date.toLocaleDateString('en-US', {
    month: 'short'
  })
})
</script>

<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="data.img" alt="Event Image" />
      <div class="date-box">
        <span class="date">{{ day }}</span>
        <span class="time">{{ monthAbbr }}</span>
      </div>
    </div>
    <div class="tags">
      <span class="tag" v-for="tag in data.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="title">{{ data.title }}</div>
    <div class="details">
      <div class="location">
        <span class="icon"><EnvironmentOutlined /></span>{{ data.location }}
      </div>
      <div class="date">
        <span class="icon"><CalendarOutlined /></span>{{ parsedDate }}
      </div>
    </div>
    <div class="actions">
      <a-button class="action" type="primary" @click="action[0].func">{{
        action[0].text
      }}</a-button>
      <a-button class="action" @click="action[1].func"> {{ action[1].text }}</a-button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  font-size: 0.8rem;
  line-height: 1;
  min-width: 200px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
}

.card > .image-wrapper > img {
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 16/9;
}

.tags {
  display: flex;
  gap: 5px;
}

.tag {
  background-color: hsl(200, 97%, 88%);
  text-transform: capitalize;
  padding: 5px;
  border-radius: 3px;
  line-height: 1;
  font-size: 0.8rem;
}

.title {
  font-size: 1rem;
  font-weight: bold;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
}

.action {
  flex: 1;
}

.icon {
  margin-right: 8px;
}

.image-wrapper {
  position: relative;
}

.date-box {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 5px;
  border-radius: 3px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
}

.date-box > .date {
  font-size: 1.2rem;
  font-weight: bold;
}

.date-box > .time {
  font-size: 0.7rem;
  font-weight: bold;
  color: hsl(4, 76%, 54%);
  text-transform: uppercase;
}
</style>
