import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './assets/css/reset.css';
import VueNavigationBar from "vue-navigation-bar";

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/" },
    { path: "/about" },
    { path: "/locations" },
    { path: "/blog" },
    { path: "/pricing" },
    { path: "/pricing/pro" },
    { path: "/pricing/starter" },
    { path: "/contact" },
    { path: "/customer-service" },
    { path: "/accounting" },
    { path: "/reception" },
    { path: "/signup" },
    { path: "/login" }
  ]
});

Vue.component("vue-navigation-bar", VueNavigationBar);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
