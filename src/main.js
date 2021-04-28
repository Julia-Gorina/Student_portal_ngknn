import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import styles from './assets/css/App.css'
import VCalendar from 'v-calendar';

createApp(App).use(store, styles).use(router).use(VCalendar, {}).mount('#app')
