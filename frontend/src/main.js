import { createApp } from 'vue'
//import App from './App.vue'
// import components from '@/components/UI';
import App from './App.vue';
import router from "@/router";
//import store from '@/store';

const app = createApp(App)

// components.forEach(component => {
//     app.component(component.name, component)
// })

// directives.forEach(directive => {
//     app.directive(directive.name, directive)
// })

app
    .use(router)
    .mount('#app');