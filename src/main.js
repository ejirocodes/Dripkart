import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNavigationBar from "vue-navigation-bar";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueFormulate from '@braid/vue-formulate'
import './assets/css/reset.css';
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';


Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(VueFormulate);

Vue.use(VueAwesomeSwiper)

Vue.component("vue-navigation-bar", VueNavigationBar);

library.add(faChevronCircleRight, faChevronCircleLeft)

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
  