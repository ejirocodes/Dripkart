<template>
  <div>
    <h1 class="product-title">{{product.title }}</h1>
    <img class="product-img" :src="product.src" :alt="product.src" :title="product.title" />
    <p class="product-title">{{product.descriotion}}</p>
    <p class="product-cost">{{product.cost}}</p>
  </div>
</template>

<script>
import products from '../../data/products';
const featuredProduct = products.featured;
const newArrival = products.newArrivals;
export default {
  name: 'ProductDetails',
  computed: {
    product() {
      const slug = this.$route.params.slug;
      return featuredProduct.find(prod => prod.slug === slug) || newArrival.find(prod => prod.slug === slug);
    }
  }
};
</script>
<style scoped lang="scss">
div {
  font-size: 3rem !important;
}
img {
  width: 15rem;
}
</style>
