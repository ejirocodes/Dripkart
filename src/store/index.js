import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: null,
    },
    mutations: {
        addProductToCart(state, product) {
            state.cart.push(product);
        },
    },
})