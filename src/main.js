import { createApp } from 'vue'
import App from './App.vue'
import 'firebase/firestore'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(router).mount('#app')
