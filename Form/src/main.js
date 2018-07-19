import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate';
import { store } from './store/store.js';

Vue.use(Vuex)
Vue.use(VeeValidate);
Vue.use(require('vue-moment'));


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
