import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRellax from 'vue-rellax'
import VueMeta from 'vue-meta'
import VueAxios from './plugins/axios'
import VueAnalytics from 'vue-analytics';
import './registerServiceWorker'
Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-167570856-1',
  router
});
Vue.use(VueRellax);
Vue.use(VueAxios)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
