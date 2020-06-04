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
import Chakra, { CThemeProvider } from '@chakra-ui/vue';
import VueDarkMode from '@vue-a11y/dark-mode'

Vue.config.productionTip = false

Vue.use(VueFormulate);

Vue.use(VueAwesomeSwiper);

Vue.use(Chakra);

Vue.component("vue-navigation-bar", VueNavigationBar);

library.add(faChevronCircleRight, faChevronCircleLeft, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueDarkMode)

if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe)
}


new Vue({
  router,
  render: h => h(CThemeProvider, [h(App)]),
}).$mount('#app')
