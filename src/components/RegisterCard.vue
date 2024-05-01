<script setup>
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
let formState = ref({
  email: '',
  password: ''
})

function onSubmit(value) {
  console.log(value)
}
</script>

<template>
  <div class="register-card">
    <div class="welcome">
      <div class="heading">Create Your Account</div>
      <p>Please complete to create your account</p>
    </div>

    <a-form class="form" :model="formState" @finish="onSubmit">
      <a-form-item
        name="username"
        :rules="[{ required: true, message: 'Please enter your username!' }]"
      >
        <a-input class="input" v-model:value="formState.username" placeholder="Enter your username">
          <template #prefix> <user-outlined class="icon" /> </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="email"
        :rules="[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email address!' }
        ]"
      >
        <a-input
          class="input"
          v-model:value="formState.email"
          type="email"
          placeholder="Enter your email address"
        >
          <template #prefix> <mail-outlined class="icon" /> </template>
        </a-input>
      </a-form-item>
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Please enter your password!' }]"
      >
        <a-input-password
          class="input"
          v-model:value="formState.password"
          type="password"
          placeholder="Enter your password"
        >
          <template #prefix>
            <lock-outlined class="icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <button class="register-button" type="submit">Register</button>
    </a-form>
  </div>
</template>

<style scoped>
.register-card {
  min-width: none;
  width: 600px;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
}

.heading {
  font-size: 32px;
  font-weight: 700;
  color: hsl(11, 100%, 50%);
}

.welcome p {
  color: hsl(0, 0%, 54%);
  margin: 0;
}

.form {
  width: 100%;
}

.input {
  width: 100%;
  height: 50px;
  border-radius: 15px;
}

.icon {
  color: hsl(11, 100%, 60%);
  font-size: 16px;
}

.register-button {
  width: 100%;
  height: 50px;
  border-radius: 15px;
  color: white;
  background-color: hsl(11, 100%, 60%);
  border: none;
}

.register-button:hover {
  background-color: hsl(11, 100%, 55%);
  cursor: pointer;
}

.register-button:active {
  background-color: hsl(11, 100%, 50%);
}
</style>
