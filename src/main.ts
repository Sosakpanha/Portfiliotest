import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GsapPlugin from './plugins/gsap'

const app = createApp(App)

app.use(router)
app.use(GsapPlugin)

app.mount('#app')
