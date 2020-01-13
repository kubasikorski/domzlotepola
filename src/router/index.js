import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)
let lang = localStorage.getItem('lang');

const routes = [
    {
        path: '/',
        redirect: {name: 'home', params: {lang: lang || 'pl'}}
    },
    {
        path: '/:lang(pl|en)/',
        name: 'home',
        component: Home
    },
    {
        path: '/:lang(pl|en)/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/:lang(pl|en)/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '*',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
})

router.beforeEach((to,from,next) => {
    store.dispatch('setLang', to.params.lang);
    return next();
});

// router.afterEach((to) => {
// });

export default router
