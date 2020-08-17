import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  plugins: [createPersistedState()],
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
