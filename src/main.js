import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronCircleRight,
  faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueNavigationBar from 'vue-navigation-bar';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueFormulate from '@braid/vue-formulate';
import './assets/css/reset.css';
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
import Chakra, { CThemeProvider } from '@chakra-ui/vue';
import VueDarkMode from '@vue-a11y/dark-mode';
import store from './store/index';
import GoTop from '@inotom/vue-go-top';
import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from './auth';
import { VLazyImagePlugin } from 'v-lazy-image';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'imagehover.css/css/imagehover.min.css';
import VuePictureSwipe from 'vue-picture-swipe';


Vue.use(VueFormulate);

Vue.use(VueAwesomeSwiper);

Vue.use(Chakra);

Vue.use(GoTop);

Vue.use(VLazyImagePlugin);

Vue.component('vue-picture-swipe', VuePictureSwipe);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.component('vue-navigation-bar', VueNavigationBar);

library.add(faChevronCircleRight, faChevronCircleLeft);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueDarkMode);

// if (process.env.NODE_ENV === 'development') {
//   const VueAxe = require('vue-axe').default;
//   Vue.use(VueAxe);
// }

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(CThemeProvider, [h(App)])
}).$mount('#app');
