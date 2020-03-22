import Vue from 'vue';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootswatch/dist/sandstone/bootstrap.css';/* lux */

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
