import { createApp } from 'vue'
import App from './App.vue'
import './assets/src/style.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App).use(router).use(AOS)

app.mount('#app')
