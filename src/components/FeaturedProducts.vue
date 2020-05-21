<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <!-- <span class="stroke"></span> -->
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <figure v-for="(product, index) in featuredProducts" :key="index">
        <img class="product" :src="product.src" :alt="product.title" :title="product.title" />
        <figcaption>{{product.title}}</figcaption>
        <p>&#36;{{product.cost}}</p>
        <CartButton />
      </figure>
    </section>
  </section>
</template>

<script>
import products from "../data/products";
const featuredProducts = products.featured;
import CartButton from "./CartButton.vue";
export default {
  name: "FeaturedProducts",
  components: {
    CartButton
  },
  data() {
    return {
      title: "What's trending",
      featuredProducts
    };
  },
  beforeCreate() {
    console.log(products);
  }
};
</script>
<style lang="scss">
@import "../assets/sass/variables.scss";
.prod-showcase {
  margin: 8rem 0;
}
.prod-showcase-heading {
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    &::before {
      border-top: 2px solid $colour-pri;
      display: block;
      position: relative;
      top: -25px;
      margin: 0 auto;
      width: 10%;
      content: "";
    }
  }
}
.products-container {
  display: flex;
  figure {
  }
  .product {
  }
}
</style>