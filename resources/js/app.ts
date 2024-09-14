import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import axios from "axios"

require('./bootstrap')
window.Vue = require('vue')
Vue.use(VueRouter)

import store from './store/index'

import AppNav from './components/Common/Navigation.vue';
import Snackbar from './components/Common/Snackbar.vue';
import Breadcrumbs from './components/Common/Breadcrumbs.vue';

Vue.component('AppNav', AppNav);
Vue.component('Snackbar', Snackbar);
Vue.component('Breadcrumbs', Breadcrumbs);

// import management from './components/Management.vue'
import staff from './components/Staff.vue'

const routes = [
  {path:'/', redirect:{name: "staff"}},
  {path:'/staff', name: "staff", component:staff},

  // {path:'/management', name: "management", component:management},

  // {path:'/toollist', name: "tool_list", component:tool_list},
  // {path:'/permission', name: "permission", component:permission},
  // {path:'/user', name: "user", component:user},
  // {path:'/profile', name: "profile", component:profile},
  // {path:'/changepassword', name: "changepassword", component:changepassword},
  // {path:'/news/list', name: "news", component:news},
];

const router = new VueRouter({
    routes: routes
});

axios.interceptors.response.use(
  (error: any) => errorHandler(error)
);
//
const app = new Vue({
  store,
  components: {
    axios
  },
  vuetify:Vuetify,
  router:router,
    el: '#app'
});

const errorHandler =  function (error: any): any {
  alert (`(${error.response.status}[${error.response.statusText}]) エラーが発生しました、[${error.response.data}]`)
  return Promise.reject(error);
}