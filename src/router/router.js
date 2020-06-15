import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Homepage from '../components/home/HomePage.vue';
import Signup from '../components/SignupPage.vue';
import Cart from '../components/cart/ShoppingCart.vue';
import ProductDetails from '../components/product/ProductDetails.vue';

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
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true
    },
  ]
});
