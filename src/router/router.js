import Vue from 'vue';
import Router from 'vue-router';
import { authGuard } from '../auth/authGuard';

Vue.use(Router);

import Homepage from '../views/HomePage.vue';

const Signup = resolve => {
  require.ensure(['../views/SignupPage.vue'], () => {
    resolve(require('../views/SignupPage.vue'));
  });
};

const Cart = resolve => {
  require.ensure(['../components/cart/ShoppingCart.vue'], () => {
    resolve(require('../components/cart/ShoppingCart.vue'));
  });
};

const ProductDetails = resolve => {
  require.ensure(['../components/product/ProductDetails.vue'], () => {
    resolve(require('../components/product/ProductDetails.vue'));
  });
};

const Shop = resolve => {
  require.ensure(['../views/Shop.vue'], () => {
    resolve(require('../views/Shop.vue'));
  });
};

const NikeLab = resolve => {
  require.ensure(['../views/NikeLab.vue'], () => {
    resolve(require('../views/NikeLab.vue'));
  });
};

const AdidasLab = resolve => {
  require.ensure(['../views/AdidasLab.vue'], () => {
    resolve(require('../views/AdidasLab.vue'));
  });
};

const NotFound = resolve => {
  require.ensure(['../views/NotFound.vue'], () => {
    resolve(require('../views/NotFound.vue'));
  });
};

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
      path: '/nike-lab',
      name: 'NikeLab',
      component: NikeLab
    },
    {
      path: '/adidas-lab',
      name: 'AdidasLab',
      component: AdidasLab
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
