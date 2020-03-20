import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '@/views/LandingPage';
import Login from '@/views/Login';
import Layout from '@/views/Layout';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'landingPage',
        component: LandingPage,
    },
    {
        path: '/_',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
        ],
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
