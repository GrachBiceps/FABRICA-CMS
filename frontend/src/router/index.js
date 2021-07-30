import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/myinfo',
        component: MyInfo
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router