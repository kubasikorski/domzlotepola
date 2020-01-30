import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
let lang = localStorage.getItem('lang');

const routes = [
    {
        path: '*',
        name: 'error-redirect',
        redirect: {name: 'error', params: {lang: lang || 'pl'}}
    },
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
        path: '/:lang(pl|en)/o-mnie',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola',
        name: 'dom',
        component: () => import(/* webpackChunkName: "dom" */ '../views/Dom/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-rodzin',
        name: 'dom-family',
        component: () => import(/* webpackChunkName: "dom-family" */ '../views/Dom/Family.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-pary-mlodej',
        name: 'dom-bride',
        component: () => import(/* webpackChunkName: "dom-bride" */ '../views/Dom/Family.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-firm',
        name: 'dom-company',
        component: () => import(/* webpackChunkName: "dom-company" */ '../views/Dom/Family.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/nasze-jedzenie',
        name: 'dom-food',
        component: () => import(/* webpackChunkName: "dom-food" */ '../views/Dom/Food.vue')
    },
    {
        path: '/:lang(pl|en)/kontakt',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/:lang(pl|en)/pokoje',
        name: 'rooms',
        component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms.vue')
    },
    {
        path: '/:lang(pl|en)/404',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */ '../views/404.vue')
    },

];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
})

router.beforeEach((to, from, next) => {
    // store.dispatch('setLang', to.params.lang);
    return next();
});

// router.afterEach((to) => {
// });

export default router
