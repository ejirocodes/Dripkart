import Vue from 'vue';
import Router from 'vue-router';
import { authGuard } from '../auth/authGuard';

Vue.use(Router);

import Homepage from '../components/home/HomePage.vue';
import Signup from '../views/SignupPage.vue';
import Cart from '../components/cart/ShoppingCart.vue';
import ProductDetails from '../components/product/ProductDetails.vue';
import NotFound from '../views/NotFound.vue';
import Shop from '../views/Shop.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/signup',
      component: Signup,
      beforeEnter: authGuard
    },
    {
      path: '/cart',
      component: Cart,
      name: 'Cart'
    },
    {
      path: '/shop',
      component: Shop,
      name: 'Shop'
    },
    {
      path: '/product-details/:slug',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
