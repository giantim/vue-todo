import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'All',
        component: () => import('../views/All.vue')
    },
    {
        path: '/active',
        name: 'Active',
        component: () => import('../views/Active.vue')
    },
    {
        path: '/completed',
        name: 'Completed',
        component: () => import('../views/Completed.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;
