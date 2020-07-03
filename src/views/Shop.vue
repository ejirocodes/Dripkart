<template>
  <section class="shop-container">
    <h1 class="shop-heading">{{title}}</h1>
    <div class="shop">
      <figure v-for="(product) in  newArrival" :key="product.id">
        <v-lazy-image
        class="shop-img"
        src-placeholder="https://i0.wp.com/www.rankred.com/wp-content/uploads/2017/06/Loader.gif"
        :src="product.src"
        :alt="product.title"
        :title="product.title"
        />
        <h2 class="shop-title">{{product.title}}</h2>
        <p class="shop-cost">&#36;{{product.cost}}</p>
        <button class="add-to-cart" @click="addToCart(product)">
          <CartIcon />
        </button>
      </figure>
      <figure v-for="(product) in  featuredProducts" :key="product.slug">
        <v-lazy-image
          class="shop-img"
          :src="product.src"
          src-placeholder="https://i0.wp.com/www.rankred.com/wp-content/uploads/2017/06/Loader.gif"
          :alt="product.title"
          :title="product.title"
        />
        <h2 class="shop-title">{{product.title}}</h2>
        <p class="shop-cost">&#36;{{product.cost}}</p>
        <button class="add-to-cart" @click="addToCart(product)">
          <CartIcon />
        </button>
      </figure>
    </div>
  </section>
</template>

<script>
import CartIcon from '../assets/svg/plus.svg';
import products from '../data/products';
const featuredProducts = products.featured;
const newArrival = products.newArrivals;
export default {
  data() {
    return {
      title: 'Discover the best',
      featuredProducts,
      newArrival
    };
  },
  components: {
    CartIcon
  },
  methods: {
    addToCart(product) {
      const products = this.newArrival;
      products.forEach(function(prod) {
        return prod === product;
      });
      this.$store.commit('addProductToCart', product);
      this.$toast({
        title: ` ${product.title} have been added to cart.`,
        description: ` You have ${this.$store.getters.itemsInCart} items in cart`,
        status: 'success',
        duration: 1400,
        position: 'top-right'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';
.shop-container {
  margin: 2.5rem 0;
  font-size: 6rem;
  background-color: $colour-sec;
  border-radius: 2rem;
  .shop-heading {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding-top: 2rem;
  }
  .shop {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    padding: 2rem;
    figure {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: #fff;
      .add-to-cart {
        float: right;
        background: transparent;
        border: 1px solid #949494;
        padding: 0.5rem 0.6rem;
        border-radius: 1rem;
        svg {
          width: 1.4rem;
          float: right;
          margin: 0;
          fill: #949494;
        }
      }
    }
    .shop-img {
      max-width: 100%;
      background-color: $colour-sec;
      object-fit: contain;
      height: 20rem;
      padding: 1.4rem;
      border-radius: 1rem;
    }
    .shop-title {
      margin: 1rem 0;
    }
  }
}

// MEDIA QUERIES
@media screen and (max-width: 375px) {
  .shop-container {
    .shop {
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      padding: 1rem;
    }
    .shop-heading {
      font-size: 1.5rem;
    }
  }
}
</style>