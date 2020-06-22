<template>
  <section class="shop">
    <h1>{{title}}</h1>
    <div class="shop-container">
      <figure v-for="(product, index) in  newArrival" :key="index">
        <img :src="product.src" :alt="product.title" :title="product.title" />
      </figure>
      <figure v-for="(product, index) in  featuredProducts" :key="index">
        <img :src="product.src" :alt="product.title" :title="product.title" />
      </figure>
    </div>
  </section>
</template>

<script>
import products from '../data/products';
const featuredProducts = products.featured;
const newArrival = products.newArrivals;
export default {
  data() {
    return {
      title: 'Shop',
      featuredProducts,
      newArrival
    };
  }
};
</script>

<style>
</style>