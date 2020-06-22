<template>
  <section class="shop">
    <h1>{{title}}</h1>
    <div class="shop-container">
      <figure v-for="(product) in  newArrival" :key="product.slug">
        <img :src="product.src" :alt="product.title" :title="product.title" />
        <h2>{{product.title}}</h2>
        <p>&#36;{{product.cost}}</p>
      </figure>
      <figure v-for="(product) in  featuredProducts" :key="product.slug">
        <img :src="product.src" :alt="product.title" :title="product.title" />
        <h2>{{product.title}}</h2>
        <p>&#36;{{product.cost}}</p>
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
      title: 'Discover the best',
      featuredProducts,
      newArrival
    };
  }
};
</script>

<style>
</style>