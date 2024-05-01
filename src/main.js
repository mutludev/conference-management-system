import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css'
import './style/reset.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
