import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgricultureView from '../views/AgricultureView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import AdminView from '../views/AdminView.vue'
/*----------------AGRICULTURE----------------*/
import AddAgriculture from '../components/agriculture/AddAgriculture.vue'
import UpdateAgriculture from '../components/agriculture/UpdateAgriculture.vue'
/*-------------------ADMIN-------------------*/
import AddAdmin from '../components/admin/AddAdmin.vue'
import UpdateAdmin from '../components/admin/UpdateAdmin.vue'
/*-------------------USER--------------------*/
import AddApplication from '../components/application/AddApplication.vue'
import UpdateApplication from '../components/application/UpdateApplication.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/agricultureView',
        name: 'agricultureView',
        component: AgricultureView
    },
    {
        path: '/applicationView',
        name: 'applicationView',
        component: ApplicationView
    },
    {
        path: '/adminView',
        name: 'adminView',
        component: AdminView
    },
    {
        path: '/add-agriculture',
        name: 'addAgriculture',
        component: AddAgriculture
    },
    {
        path: '/Agricultures/:agriId',
        name: 'updateAgriculture',
        component: UpdateAgriculture
    },
    {
        path: '/add-admin',
        name: 'addAdmin',
        component: AddAdmin
    },
    {
        path: '/Admins/:adminId',
        name: 'updateAdmin',
        component: UpdateAdmin
    },
    {
        path: '/add-application',
        name: 'addApplication',
        component: AddApplication
    },
    {
        path: '/Applications/:applicationId',
        name: 'updateApplication',
        component: UpdateApplication
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router