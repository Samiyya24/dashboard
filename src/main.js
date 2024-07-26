import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './routes/route'
import './style.css'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

console.log('test')
