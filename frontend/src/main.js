import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from "./router"
import store from './store'



const app = createApp(App)
app.config.globalProperties.axios=axios
// components.forEach(component => {
//     app.component(component.name, component)
// })

// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })
//axios.defaults.baseURL = "http://localhost:3001/"
app 
    .use(Notifications)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .mount('#app');
    