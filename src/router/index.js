import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgricultureView from '../components/AgricultureView.vue'
/*----------------AGRICULTURE----------------*/
import AddAgriculture from '../components/agriculture/AddAgriculture.vue'
import UpdateAgriculture from '../components/agriculture/UpdateAgriculture.vue'

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
        path: '/add-agriculture',
        name: 'addAgriculture',
        component: AddAgriculture
    },
    {
        path: '/Agricultures/:agriId',
        name: 'updateAgriculture',
        component: UpdateAgriculture
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router