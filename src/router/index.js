import {createRouter, createWebHistory} from 'vue-router'
import ManagerSide from '@/views/ManagerSide'
import ModelSide from '@/views/ModelSide'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/managerside',
        name:'ManagerSide',
        component: ManagerSide
    },
    {
        path: '/modelside',
        name:'ModelSide',
        component: ModelSide
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
routes
})

export default router