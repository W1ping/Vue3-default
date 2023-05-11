import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'uno.css'

import '@/assets/css/normalize.css'

const app = createApp(App)

app.use(router).use(ElementPlus).use(createPinia()).mount('#app')

