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
    },
    DELETE_PRODUCT(state, product) {
      let index = state.cart.findIndex(prod => prod.id === +product.id);
      state.cart.splice(index, 1);
    }
  },
  getters: {
    itemsInCart: state => {
      return state.cart.length;
    }
  }
});
