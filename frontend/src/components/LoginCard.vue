<script setup>
import { MailOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const userStore = useUserStore()
let formState = ref({
  email: '',
  password: ''
})

const toast = useToast()
const error = () => {
  toast.error('This feature is not implemented yet')
}

async function onSubmit(value) {
  userStore.login(value.email, value.password)
}
</script>

<template>
  <div class="login-card">
    <div class="welcome">
      <div class="heading">Welcome Back</div>
      <p>Sign in to your account to continue</p>
    </div>

    <a-form class="form" :model="formState" @finish="onSubmit">
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
      <a-button class="login-button" type="primary" html-type="submit">Log In</a-button>
    </a-form>
    <div class="footer">
      <a @click="error">Forgot your password?</a>
      <span>New to CMS-PLUS? <router-link to="/register">Register</router-link> </span>
    </div>
  </div>
</template>

<style scoped>
.login-card {
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

.login-button {
  width: 100%;
  height: 50px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.footer span {
  color: hsl(0, 0%, 20%);
}
</style>
