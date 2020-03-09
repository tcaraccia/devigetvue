import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import lineclamp from './plugins/lineclamp';
import moment from './plugins/moment';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  lineclamp,
  moment,
  render: (h) => h(App),
}).$mount('#app');
