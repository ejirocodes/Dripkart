import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../components/home/HomePage.vue';
import Signup from '../views/SignupPage.vue';
import Cart from '../components/cart/ShoppingCart.vue';
import ProductDetails from '../components/product/ProductDetails.vue';
import NotFound from '../views/NotFound.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/cart',
      component: Cart
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
