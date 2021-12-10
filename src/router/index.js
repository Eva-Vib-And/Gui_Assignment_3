import {createRouter, createWebHistory} from 'vue-router'
import LoginSide from '@/views/LoginSide'
import ManagerSide from '@/views/ManagerSide'
import ModelSide from '@/views/ModelSide.vue'
import Home from '@/views/Home'
import CreateModel from '@/views/CreateModel'
import CreateManager from '@/views/CreateManager'


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
    {
        path: '/createmodel',
        name:'CreateModel',
        component: CreateModel
    },
    {
        path: '/createmanager',
        name:'Createmanager',
        component: CreateManager
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
routes
})

export default router