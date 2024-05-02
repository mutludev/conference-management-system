<script setup>
import { UserOutlined } from '@ant-design/icons-vue'
import { SettingFilled } from '@ant-design/icons-vue'
</script>

<template>
  <nav>
    <div class="main-page">Main Page</div>
    <div class="user-settings">
      <button>
        <SettingFilled />
      </button>
      <button>
        <UserOutlined />
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: hsl(6, 100%, 96%);
}

button {
  width: 32px;
  height: 32px;
  color: white;
  background-color: hsl(11, 100%, 60%);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.main-page {
  font-size: 24px;
  font-weight: 500;
}

.user-settings {
  display: flex;
  gap: 5px;
}
</style>
