import {createRouter, createWebHistory} from 'vue-router'
import LoginSide from '@/views/LoginSide'
import ManagerSide from '@/views/ManagerSide'
import ModelSide from '@/components/ModelSide.vue'
import Home from '@/views/Home'


const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/loginside',
        name: 'LoginSide',
        component: LoginSide
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
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
routes
})

export default router