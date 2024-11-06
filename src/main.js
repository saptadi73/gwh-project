import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/tailwind.scss'
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


 const app = createApp(App)
 app.use(VueDatePicker)
 app.use(router)
 app.mount('#app')
