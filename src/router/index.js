import {createRouter, createWebHistory} from 'vue-router'
import ManagerSide from '@/views/ManagerSide'
import ModelSide from '@/views/ModelSide.vue'
import Home from '@/views/Home'
import CreateModel from '@/views/CreateModel'
import CreateManager from '@/views/CreateManager'
import AddNewJob from '@/views/AddNewJob'


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
    {
        path: '/addnewjob',
        name:'AddNewJob',
        component: AddNewJob
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
routes
})

export default router