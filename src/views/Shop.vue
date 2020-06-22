<template>
  <section class="shop-container">
    <h1>{{title}}</h1>
    <div class="shop">
      <figure v-for="(product) in  newArrival" :key="product.slug">
        <img class="shop-img" :src="product.src" :alt="product.title" :title="product.title" />
        <h2 class="shop-title">{{product.title}}</h2>
        <p class="shop-cost">&#36;{{product.cost}}</p>
      </figure>
      <figure v-for="(product) in  featuredProducts" :key="product.slug">
        <img class="shop-img" :src="product.src" :alt="product.title" :title="product.title" />
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

<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';
.shop-container {
  font-size: 6rem;
  background-color: $colour-sec;
  border-radius: 2rem;
  .shop {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    margin-top: 2rem;
    padding: 0 2rem;
    figure {
      width: 100%;
      height: 28rem;
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: #fff;
    }
    .shop-img {
      max-width: 100%;
      background-color: $colour-sec;
      object-fit: contain;
      height: 20rem;
      padding: 1.4rem;
      border-radius: 1rem;
    }
  }
}
</style>