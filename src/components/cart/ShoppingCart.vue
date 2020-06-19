<template>
  <section class="cart-page">
    <div class="cart-left-item">
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
    </div>
   
    <div class="cart-right" v-if="cart.length">
      <div class="cart-left-top">
        <h2>Summary</h2>
        <p>You have {{cart.length}} items in your cart</p>
      </div>
      <div class="cart-left-center">
        <p>Shipping Cost {{cart.cost / 12}}</p>
        <p>Total Cost{{cart.cost}} items in your cart</p>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty</p>
      <router-link to="/shop">Go to shop</router-link>
    </div>
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
@import '../../assets/sass/_variables.scss';
.cart-page {
  display: flex;
  justify-content: space-around;
  .cart-left {
    display: flex;
    align-items: center;
    .cart-img {
      width: 20rem;
      margin-right: 4rem;
      img {
        width: 100%;
      }
    }
    .product-title {
      margin-right: 2rem;
      h1 {
        font-size: 1.6rem;
        font-weight: 700;
        color: $colour-pri;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    .product-cost {
          font-size: 2rem;
    font-weight: 700;
    }
  }
  .cart-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .cart-left-top {
      h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: .8rem;
      }
    }
  }
}
</style>
