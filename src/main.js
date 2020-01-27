import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRellax from 'vue-rellax'
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(VueRellax);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
