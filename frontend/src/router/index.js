import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/pages/Main";
import MyInfo from '@/pages/MyInfo';
import Storage from '@/pages/MyStorage';
import AddItem from "@/components/AddItem";
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
        component: Storage
    },
    {
        path: '/AddItem',
        component: AddItem
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router