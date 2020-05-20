import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNavigationBar from "vue-navigation-bar";
import './assets/css/reset.css';

Vue.config.productionTip = false

Vue.use(VueRouter);

library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon);  

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/" },
    { path: "/about" },
    { path: "/locations" },
    { path: "/blog" },
    { path: "/pricing" },
    { path: "/pricing/pro" },
    { path: "/pricing/starter" },
    { path: "/contact" },
    { path: "/customer-service" },
    { path: "/accounting" },
    { path: "/reception" },
    { path: "/signup" },
    { path: "/login" }
  ]
});

Vue.component("vue-navigation-bar", VueNavigationBar);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
