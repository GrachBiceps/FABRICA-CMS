import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from '@kyvg/vue3-notification'
// import components from '@/components/UI';
import App from './App.vue';
import router from "@/router";
import './assets/tailwind.css'



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
    .use(VueAxios, axios)
    .mount('#app');
    