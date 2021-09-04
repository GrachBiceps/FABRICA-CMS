import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
import signup from '@/pages/signup';
import MyStorage from '@/elements/Storage.section/MyStorage';
import Orders from '@/elements/ProduAcc.section/Accountant';
import StorageINOUTpage from '@/elements/Storage.section/StorageIN-OUTpage';

const routes = [{
        path: '/',
        component: Main
    },
    {
        path: '/signup',
        component: signup
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