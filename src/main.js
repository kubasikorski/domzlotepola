import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRellax from 'vue-rellax'
import VueMeta from 'vue-meta'
import VueAxios from './plugins/axios'
import './registerServiceWorker'
Vue.config.productionTip = false;
Vue.use(VueRellax);
Vue.use(VueAxios)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
