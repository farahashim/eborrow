import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AgricultureView from '../views/AgricultureView.vue'
import AdminView from '../views/AdminView.vue'
import UserView from '../views/UserView.vue'
/*----------------AGRICULTURE----------------*/
import AddAgriculture from '../components/agriculture/AddAgriculture.vue'
import UpdateAgriculture from '../components/agriculture/UpdateAgriculture.vue'
/*-------------------ADMIN-------------------*/
import AddAdmin from '../components/admin/AddAdmin.vue'
import UpdateAdmin from '../components/admin/UpdateAdmin.vue'
/*-------------------USER--------------------*/
import AddUser from '../components/user/AddUser.vue'
import UpdateUser from '../components/user/UpdateUser.vue'

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
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/agricultureView',
        name: 'agricultureView',
        component: AgricultureView
    },
    {
        path: '/adminView',
        name: 'adminView',
        component: AdminView
    },
    {
        path: '/userView',
        name: 'userView',
        component: UserView
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
        path: '/add-user',
        name: 'addUser',
        component: AddUser
    },
    {
        path: '/Users/:userId',
        name: 'updateUser',
        component: UpdateUser
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router