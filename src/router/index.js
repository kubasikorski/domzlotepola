import Vue from 'vue'
import VueRouter from 'vue-router'

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
        path: '/:lang(pl|en)',
        redirect: {name: 'home', params: {lang: lang || 'pl'}}
    },
    {
        path: '/:lang(pl|en)/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/:lang(pl|en)/o-mnie',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/:lang(pl|en)/fundusze-ue',
        name: 'fundusze-ue',
        component: () => import(/* webpackChunkName: "about" */ '../views/FunduszeUE.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola',
        name: 'dom',
        component: () => import(/* webpackChunkName: "dom" */ '../views/Dom/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/galeria',
        name: 'galeria',
        component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-rodzin',
        name: 'dom-family',
        component: () => import(/* webpackChunkName: "dom-family" */ '../views/Dom/Family.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/przyjecia-okolicznosciowe',
        name: 'dom-parties',
        component: () => import(/* webpackChunkName: "dom-parties" */ '../views/Dom/Parties.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-rodzin/menu-od-89-zl',
        name: 'dom-family-menu-od-89-zl',
        component: () => import(/* webpackChunkName: "dom-family-menu1" */ '../views/Dom/Family/Menu1.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-rodzin/menu-od-125-zl',
        name: 'dom-family-menu-od-125-zl',
        component: () => import(/* webpackChunkName: "dom-family-menu2" */ '../views/Dom/Family/Menu2.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-rodzin/menu-od-188-zl',
        name: 'dom-family-menu-od-188-zl',
        component: () => import(/* webpackChunkName: "dom-family-menu3" */ '../views/Dom/Family/Menu3.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-pary-mlodej',
        name: 'dom-bride',
        component: () => import(/* webpackChunkName: "dom-bride" */ '../views/Dom/Bride/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-pary-mlodej/menu-weselne-od-208-zl',
        name: 'dom-bride-menu1',
        component: () => import(/* webpackChunkName: "dom-bride-menu1" */ '../views/Dom/Bride/Menu1.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-pary-mlodej/menu-weselne-od-278-zl',
        name: 'dom-bride-menu2',
        component: () => import(/* webpackChunkName: "dom-bride-menu2" */ '../views/Dom/Bride/Menu2.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-pary-mlodej/przykladowe-menu-obiad-slubny-od-188-zl',
        name: 'dom-bride-menu3',
        component: () => import(/* webpackChunkName: "dom-bride-menu3" */ '../views/Dom/Bride/Menu3.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-firm',
        name: 'dom-company',
        component: () => import(/* webpackChunkName: "dom-company" */ '../views/Dom/Companies/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-firm/menu-bufet-kawowy',
        name: 'dom-company-menu1',
        component: () => import(/* webpackChunkName: "dom-company-menu1" */ '../views/Dom/Companies/Menu1.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-firm/menu-biznes-lunch',
        name: 'dom-company-menu2',
        component: () => import(/* webpackChunkName: "dom-company-menu2" */ '../views/Dom/Companies/Menu2.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/oferta-dla-firm/menu-spotkanie-swiateczne',
        name: 'dom-company-menu3',
        component: () => import(/* webpackChunkName: "dom-company-menu3" */ '../views/Dom/Companies/Menu3.vue')
    },

    {
        path: '/:lang(pl|en)/dom-zlote-pola/nasze-jedzenie',
        name: 'dom-food-index',
        component: () => import(/* webpackChunkName: "dom-food-index" */ '../views/Dom/Food/Index.vue')
    },
    {
        path: '/:lang(pl|en)/dom-zlote-pola/nasze-jedzenie/galeria',
        name: 'dom-food-gallery',
        component: () => import(/* webpackChunkName: "dom-food-gallery" */ '../views/Dom/Food/Gallery.vue')
    },
    {
        path: '/:lang(pl|en)/bawialnia-dla-dzieci',
        name: 'playground',
        component: () => import(/* webpackChunkName: "playground" */ '../views/Playground.vue')
    },
    {
        path: '/:lang(pl|en)/kontakt',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/:lang(pl|en)/pokoje',
        name: 'rooms',
        component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms/Index.vue')
    },
    {
        path: '/:lang(pl|en)/pokoje/oferta',
        name: 'rooms-offer',
        component: () => import(/* webpackChunkName: "rooms-offer" */ '../views/Rooms/Offer.vue')
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
