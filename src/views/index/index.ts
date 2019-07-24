import Vue from 'vue';
import Index from './index.vue';
import '@/style/normal.less';
// import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  // router,
  render: (h) => h(Index),
}).$mount('#index');
