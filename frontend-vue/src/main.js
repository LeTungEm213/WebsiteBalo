import { createApp } from 'vue'
import App from './App.vue'
import './assets/src/style.css'
import router from './router'

const app = createApp(App).use(router)

app.mount('#app')
