import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import './style/reset.css'
import 'vue-toastification/dist/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(Toast)
app.use(router)
app.use(createPinia())

app.mount('#app')
