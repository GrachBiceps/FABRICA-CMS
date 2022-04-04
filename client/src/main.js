import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')


const baseURL = process.env.APP_URL

export default axios.create({
  baseURL: `https://${baseURL}/`,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})