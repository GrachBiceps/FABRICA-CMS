import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
import MyStorage from '@/pages/MyStorage';
import Orders from '@/pages/Orders';

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
    },
    {
        path: '/orders',
        component: Orders
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router