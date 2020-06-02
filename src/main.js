import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleRight, faChevronCircleLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNavigationBar from "vue-navigation-bar";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueFormulate from '@braid/vue-formulate'
import './assets/css/reset.css';
import './assets/sass/_variables.scss';
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';


Vue.config.productionTip = false

Vue.use(VueFormulate);

Vue.use(VueAwesomeSwiper)

Vue.component("vue-navigation-bar", VueNavigationBar);

library.add(faChevronCircleRight, faChevronCircleLeft, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
