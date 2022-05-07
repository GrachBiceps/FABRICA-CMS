import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import maska from 'maska'

createApp(App).use(store).use(maska).use(router).use(VueAxios, axios).mount('#app')

