<template>
  <section class="cart-page">
    <div class="cart-left" v-for="(product, index) in cart" :key="index =+ 'new'">
      <div class="cart-img">
        <img :src="product.src" :alt="product.title" :title="product.title" />
      </div>
      <div class="product-title">
        <h1>{{product.title}}</h1>
        <p>{{product.category}}</p>
      </div>
      <div class="product-cost">
        <p>$ {{product.cost}}</p>
      </div>
    </div>
    <div class="cart-left" v-if="cart.length">
      <div class="cart-left-top">
        <h2>Summary</h2>
        <p>You have {{cart.length}} items in your cart</p>
      </div>
      <div class="cart-left-center">
        <p>Shipping Cost {{cart.cost / 12}}</p>
        <p>Total Cost{{cart.cost}} items in your cart</p>
      </div>
    </div>
    <div v-else>Your cart is empty</div>
  </section>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  beforeCreate() {
    console.log('from the cart', this.$store.state.cart);
  }
};
</script>

<style scoped lang="scss">
.cart-pag {
  display: flex;
}
img {
  width: 100%;
}
</style>
