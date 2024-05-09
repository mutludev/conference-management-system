import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import './style/reset.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(Toast, {
  pauseOnHover: false,
  timeout: 2000
})
app.use(router)
app.use(pinia)

app.mount('#app')
