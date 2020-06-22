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
          <p>${{product.cost}}</p>
        </div>
      </div>
    </div>

    <div class="cart-right" v-if="cart.length">
      <div class="cart-left-top">
        <h2>Summary</h2>
        <p>You have {{cart.length}} items in your cart</p>
      </div>
      <div class="cart-left-center">
        <p class="first-type">
          Shipping Cost
          <span>{{cart.cost / 12}}</span>
        </p>
        <p>
          Total Cost
          <span>{{cart.cost}}</span>
        </p>
      </div>
      <div class="cart-left-bottom">
        <router-link class="back-link" tag="div" to="/shop">Back to Shopping</router-link>
        <button class="checkout-btn">Check out</button>
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
  margin-bottom: 2rem;
  .cart-left {
    display: flex;
    align-items: center;
    margin-bottom: 2.2rem;
    border-bottom: 1px solid $colour-uni;
    padding-bottom: 2rem;
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
        margin-bottom: 0.6rem;
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
    margin-left: 2rem;
    .cart-left-top {
      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 700;
      }
      p {
        font-size: 1rem;
      }
    }
    .cart-left-center {
      p {
        font-size: 1rem;
      }
      .first-type {
        margin-bottom: 1rem;
      }
      span {
        font-weight: 700;
      }
    }
  }
  .cart-left-bottom {
    .back-link {
      font-size: 1rem;
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;
    }
    .checkout-btn {
      padding: 1.2rem 2.2rem;
      margin-top: 1rem;
      font-size: 1rem;
      color: #fff;
      border: none;
      background-color: $colour-pri;
      text-transform: uppercase;
    }
  }
}

// MEDIA QUERIES
@media (max-width: 768px) {
  .cart-page {
    flex-direction: column;
    .cart-right {
      margin-left: 0;
    }
  }
}
@media (max-width: 425px) {
  .cart-page {
    .cart-right {
      align-items: center;
      text-align: center;
      .cart-left-top {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
    .cart-left {
      .product-title {
        margin-right: 1rem;
        h1 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      .cart-img {
        margin-right: 1.5rem;
        width: 100%;
        img {
          width: 8rem;
        }
      }
    }
    .cart-left-bottom .checkout-btn {
      padding: 0.8rem 1.8rem;
      font-size: 0.8rem;
    }
  }
}
@media (max-width: 320px) {
  .cart-page {
    .cart-left {
      .product-title {
        h1 {
          font-size: 0.8rem;
        }
      }
      p {
        font-size: 0.6rem;
      }
    }
  }
}
</style>
