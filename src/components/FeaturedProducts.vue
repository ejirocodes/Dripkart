<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <span class="stroke"></span>
      <h1>{{title}}</h1>
    </div>
    <figure v-for="(product, index) in featuredProducts" :key="index">
      <img :src="product.src" alt="product.title" title="product.title" />
      <figcaption>{{product.title}}</figcaption>
      <p>&#36;{{product.cost}}</p>
      <CartButton />
    </figure>
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
      title: "Featured",
      featuredProducts
    };
  },
  beforeCreate() {
    console.log(products);
  }
};
</script>