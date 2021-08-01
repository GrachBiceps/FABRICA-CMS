import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
import MyStorage from '@/pages/MyStorage';

const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/myinfo',
        component: MyInfo
    },
    {
        path: '/storage',
        component: MyStorage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router