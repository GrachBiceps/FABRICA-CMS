import { createRouter, createWebHashHistory } from 'vue-router'
import StorageP from "@/pages/StoragePage";


const routes = [{
        path: '/',
        name: 'Home',
    },
    {
        path: '/storageP',
        component: 'StorageP',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router