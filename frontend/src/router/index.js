import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
import MyStorage from '@/pages/Storage/MyStorage';
import Orders from '@/pages/Countments';
import StorageINOUTpage from '@/pages/Storage/StorageIN-OUTpage';

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
    },
    {
        path: '/storage/innout',
        component: StorageINOUTpage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router