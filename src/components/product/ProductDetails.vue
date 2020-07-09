<template>
  <section>
    <div class="prod-det">
      <div class="prod-det-left">
        <h1 class="product-title">{{product.title}}</h1>
        <p class="product-desc">{{product.description}}</p>
        <p class="product-cost">&#36;{{product.cost}}</p>
        <c-button class="cart-btn-2" @click="addToCart()">
          <span>
            <svg viewBox="-35 0 512 512.00102" width="22px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"
              />
            </svg> Add to Bag
          </span>
        </c-button>
      </div>
      <div class="prod-det-right">
        <vue-picture-swipe
          class="product-img"
          :items="[
    {src: product.src,thumbnail: product.src,w: 600,h: 400, title: `${product.title}`, alt: product.title}
  ]"
        ></vue-picture-swipe>
      </div>
      <!-- <vue-picture-swipe
          src-placeholder="https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif"
        :items="[
    {src: 'http://example.org/xl.jpg',thumbnail: 'http://example.org/sm1.jpg',w: 600,h: 400, title: 'Will be used for caption'},
    {src: 'http://example.org/xxl.jpg',thumbnail: 'http://example.org/sm2.jpg',w: 1200,h: 900}
  ]"
      ></vue-picture-swipe>-->
    </div>
    <!-- <button @click="NextProd()">Next</button> -->
    <!-- <button @click="PrevProd()">Prev</button> -->
    <router-link tag="div" class="more-link" to="/shop">Discover Everything</router-link>
  </section>
</template>

<script>
import products from '../../data/products';
const featuredProduct = products.featured;
const newArrival = products.newArrivals;

import { CButton } from '@chakra-ui/vue';

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
  components: { CButton },
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
    addToCart() {
      // Add products to cart
      const product = this.product;
      const cost = product.cost;
      this.$store.commit('addProductToCart', Object.assign({}, product, cost));
      this.addedToCart = true;
      this.$toast({
        title: ` ${this.product.title} have been added to cart.`,
        description: ` You have ${this.cart.length} items in cart`,
        status: 'success',
        duration: 1400,
        position: 'top-right'
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
  padding: 1rem;
  .prod-det-right,
  .prod-det-left {
    width: 100%;
  }
  .prod-det-right {
    transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
    // &:hover {
    //   transform: rotate(-5deg);
    //   filter: gray;
    //   -webkit-filter: grayscale(1);
    //   filter: grayscale(1);
    // }
    
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
      border-radius: 0;
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
      background: $colour-pri;
      color: #fff;
      overflow: hidden;
      display: flex;
      span {
        z-index: 20;
        font-size: 1rem;
        display: flex;
        align-items: center;
        svg {
          fill: #fff;
        }
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

// MEDIA QUERIES

@media screen and (max-width: 992px) {
  .prod-det {
    padding-bottom: 2rem;
  }
}
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
        font-size: 1.6rem;
      }
      .product-desc {
        font-size: 1rem;
      }
      .cart-btn-2 {
        padding: 1rem 1.8rem;
      }
      .product-cost {
        margin-bottom: 1.2rem;
      }
    }
  }
  .more-link {
    display: none;
  }
}
</style>

<style lang="scss">
@import '../../assets/sass/_variables.scss';
.css-1acfs8s,
.css-1acfs8s {
  font-size: 2.4rem !important;
  background-color: $colour-pri !important;
}
.pswp__img {
  object-fit: contain !important;
}
img[itemprop="thumbnail"] {
      width: 100% !important;
    }
</style>