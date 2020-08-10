<template>
  <div id="app-shell">
    <router-link exact to="/">
      <HomeSvg />

      <span class="icon-label">Home</span>
    </router-link>
    <router-link exact to="/shop">
      <ShopSvg />

      <span class="icon-label">Shop</span>
    </router-link>
    <router-link class="cart-router-link" exact to="/cart">
      <CartSvg />
      <p class="icon-label">Cart</p>
      <span v-if="itemsInCart">{{itemsInCart}}</span>
    </router-link>
    <router-link exact to="/signup">
      <UserSvg />
      <span class="icon-label">User</span>
    </router-link>
  </div>
</template>

<script>
import HomeSvg from '../assets/svg/browser.svg';
import ShopSvg from '../assets/svg/store.svg';
import CartSvg from '../assets/svg/basket.svg';
import UserSvg from '../assets/svg/user.svg';
import { mapGetters } from 'vuex';
export default {
  components: {
    HomeSvg,
    ShopSvg,
    CartSvg,
    UserSvg
  },
  computed: { 
    ...mapGetters(['itemsInCart']) 
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';

#app-shell {
  position: fixed;
  left: 0px;
  bottom: -1px;
  height: 3.4rem;
  width: 100%;
  background: $colour-pri;
  font-size: 2rem;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    fill: #fff;
    margin: 0;
    width: 1.6rem;
    height: 1.6rem;
  }
  a {
    padding: 0.3rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    &.router-link-active {
      background: darken($colour-pri, 100%);
      height: 100%;
      display: flex;
      padding: 0.3rem 1rem;
    }
    .icon-label {
      font-size: 0.7rem;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 0;
    }
  }
  .cart-router-link {
    position: relative;
    span {
      position: absolute;
      top: 0px;
      right: 9px;
      color: #fff;
      font-size: 1rem;
      background: #000;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid #fff;
    }
  }
}
@media (min-width: 992px) {
  #app-shell {
    display: none;
  }
}
</style>