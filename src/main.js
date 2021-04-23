import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import styles from './assets/css/App.css'

createApp(App).use(store, styles).use(router).mount('#app')
