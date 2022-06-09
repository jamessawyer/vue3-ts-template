import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'

import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
