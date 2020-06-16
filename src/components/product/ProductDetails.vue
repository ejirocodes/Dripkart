<template>
  <div>
    <h1>{{product.title }}</h1>
    <img :src="product.src" :alt="product.src" :title="product.title" />
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
