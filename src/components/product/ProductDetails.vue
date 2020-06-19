<template>
  <section>
    <div class="prod-det">
      <div class="prod-det-left">
        <h1 class="product-title">{{product.title}}</h1>
        <p class="product-desc">{{product.description}}</p>
        <p class="product-cost">&#36;{{product.cost}}</p>
        <c-button class="cart-btn-2" @click="addToCart()">
          <span>
            <i class="fas fa-shopping-cart"></i> Add to cart
          </span>
        </c-button>
      </div>
      <div class="prod-det-right">
        <img class="product-img" :src="product.src" :alt="product.title" :title="product.title" />
      </div>
    </div>
    <!-- <button @click="NextProd()">Next</button> -->
    <!-- <button @click="PrevProd()">Prev</button> -->
    <router-link tag="div" class="more-link" to="/shop">Discover Everything</router-link>
    <CBox />
  </section>
</template>

<script>
import products from '../../data/products';
const featuredProduct = products.featured;
const newArrival = products.newArrivals;

import { CBox, CButton } from '@chakra-ui/vue';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'ProductDetails',
  components: { CBox, CButton },
  data() {
    return {
      featuredProduct,
      addedToCart: false,
      selectedProdIndex: 0
    };
  },
  computed: {
    product() {
      const slug = this.$route.params.slug;
      return (
        featuredProduct.find(prod => prod.slug === slug) ||
        newArrival.find(prod => prod.slug === slug)
      );
    },
    selectedProd() {
      return featuredProduct[this.selectedProdIndex];
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    NextProd() {
      this.selectedProdIndex = getNextValidIndex(
        this.selectedProdIndex,
        featuredProduct.length
      );
    },
    PrevProd() {
      this.selectedProdIndex = getPreviousValidIndex(
        this.selectedProdIndex,
        featuredProduct.length
      );
    },
    showToast() {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        position: 'top-right'
      });
    },
    addToCart() {
      // Add products to cart
      const product = this.product;
      const cost = product.cost;
      this.$store.commit('addProductToCart', Object.assign({}, product, cost));
      console.log(Object.assign({}, product, cost));
      this.addedToCart = true;
      this.$toast({
        title: ` ${this.product.title} have been added to cart.`,
        description: ` You have ${this.cart.length} items in cart`,
        status: 'success',
        duration: 10000,
        position: 'bottom'
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../assets/sass/_variables.scss';
h1 {
  font-size: 5rem;
}
.prod-det {
  font-size: 3rem !important;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  .prod-det-right,
  .prod-det-left {
    width: 100%;
  }
  .prod-det-right {
    transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
    &:hover {
      transform: rotate(-5deg);
      filter: gray;
      -webkit-filter: grayscale(1);
      filter: grayscale(1);
    }
    .product-img {
      width: 100%;
    }
  }
  .prod-det-left {
    margin-right: 1rem;
    .cart-btn-2 {
      &:hover {
        &:after {
          left: 120%;
          transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
      &:active {
        box-shadow: none;
      }
      border-radius: 40px;
      font-family: 'Lato', sans-serif;
      padding: 0.8rem 2.5rem;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      position: relative;
      transition-property: color !important;
      transition-duration: 0.5s !important;
      transition-timing-function: unset;
      border: none;
      background: #f71565;
      color: #fff;
      text-transform: uppercase;
      overflow: hidden;
      display: flex;
      span {
        z-index: 20;
        font-size: 0.8rem;
      }
      &:after {
        background: #fff;
        content: '';
        height: 155px;
        left: -75px;
        opacity: 0.2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -10;
      }
      .fa-shopping-cart {
        font-size: 0.8rem;
        margin-right: 0.7rem;
      }
    }
    .product-title {
      font-size: 3.2rem;
      font-weight: 700;
      text-transform: uppercase;
      word-spacing: 5px;
      letter-spacing: 2px;
      color: $colour-pri;
      margin-bottom: 2rem;
    }
    .product-desc {
      margin-bottom: 1rem;
      line-height: 1.5;
      text-align: justify;
    }
    .product-cost {
      margin-bottom: 2rem;
    }
  }
}
.more-link {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.2px;
  color: $colour-uni;
  float: right;
  text-decoration: underline;
  cursor: pointer;
}
.cart-info {
  font-size: 1rem;
  color: #79d70f;
}

// MEDIA QUERIES
@media screen and (max-width: 768px) {
  .prod-det {
    flex-direction: column-reverse;
    height: 100%;
    margin-top: 3rem;
    .prod-det-left {
      margin-right: 0;
    }
    .prod-det-right {
      margin-bottom: 2rem;
      justify-content: center;
      display: flex;
      .product-img {
        width: 80%;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .prod-det {
    .prod-det-left {
      .product-title {
        font-size: 2rem;
      }
      .product-desc {
        font-size: 1rem;
      }
      .cart-btn-2 {
        padding: 0.7rem 1.8rem;
      }
    }
  }
  .more-link {
    display: none;
  }
}

</style>

<style lang="scss">
  .css-1acfs8s {
    font-size: 2.4rem;
  }
</style>