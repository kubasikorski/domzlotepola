import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueRellax from 'vue-rellax'
import './registerServiceWorker'

import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';

Vue.config.productionTip = false
Vue.prototype.moment = moment;
Vue.use(VueAxios, axios);
Vue.use(VueRellax);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
