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
      <a-button class="register-button" type="primary" html-type="submit">Register</a-button>
    </a-form>
    <span class="footer">
      Already have an account?&nbsp;
      <router-link to="/login">Login</router-link>
    </span>
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
  border: none;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 20%);
  width: 100%;
}

.footer a {
  color: hsl(11, 100%, 60%);
  cursor: pointer;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
