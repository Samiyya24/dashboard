import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './routes/route'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

