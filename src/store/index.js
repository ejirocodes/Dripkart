import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addProductToCart(state, product) {
      state.cart.push(product);
    }
  },
  getters: {
    itemsInCart: state => {
      return state.cart.length;
    }
  }
});
