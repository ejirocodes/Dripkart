import Vue from 'vue';
import Vuex from 'vuex';
import myApi from '../myApi'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: null,
    },
    getters: {
        cartSize: (state) => {
            return state.cart.length;
        },
        cartTotalAmount: (state) => {
            return state.cart.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);
        },
    },
    mutations: {
        setUpProducts: (state, productsPayload) => {
            //sets the state's  products property to the products array recieved as payload
            state.products = productsPayload;
        },
        addToCart: (state, productId) => {
            //find the product in the products list
            let product = state.products.find((product) => product.id === productId);
            //find the product in the cart list
            let cartProduct = state.cart.find((product) => product.id === productId);

            if (cartProduct) {
                //product already present in the cart. so increase the quantity
                cartProduct.quantity++;
            } else {
                state.cart.push({
                    // product newly added to cart
                    ...product,
                    stock: product.quantity,
                    quantity: 1,
                });
            }
            //reduce the quantity in products list by 1
            product.quantity--;
        },
    },
    actions: {
        fetchProducts: ({ commit }) => {
            //simulating a fake ajax request to fetch products from database
            myApi.getProducts().then((products) => {
                //passing the products recieved from response as a payload to the mutation
                commit("setUpProducts", products);
                commit("showToast", "products loaded");
            });
        },
        addToCart: ({ commit }, productId) => {
            myApi.products("add", productId).then((productId) => {
                commit("addToCart", productId);
                commit("showToast", "added to cart");
            });
        },
        removeFromCart: ({ commit }, productId) => {
            myApi.products("remove", productId).then((productId) => {
                commit("removeFromCart", productId);
                commit("showToast", "removed from cart");
            });
        },
        deleteFromCart: ({ commit }, productId) => {
            myApi.products("delete", productId).then((productId) => {
                commit("deleteFromCart", productId);
                commit("showToast", "deleted from cart");
            });

        }
    }
})