import Vue from 'vue';
import Login from './login.vue';
import router from '../../router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(Login),
}).$mount('#login');
