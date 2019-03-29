// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import inject from 'Plugins/inject'
import {
  Lazyload
} from 'vant';

import {
  DatetimePlugin
} from 'vux'

Vue.config.productionTip = false
Vue.use(inject);
Vue.use(Vuex);
Vue.use(Lazyload);
Vue.use(DatetimePlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
