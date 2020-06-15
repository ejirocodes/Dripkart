<template>
  <div>
    <h1>{{product.title }}</h1>
    <img :src="product.src" :alt="product.src" :title="product.title" />
  </div>
</template>

<script>
import products from '../../data/products';
const selectedProd = products.featured;
export default {
  name: 'ProductDetails',
  created() {
    console.log(this.$route.params.slug);
  },
  computed: {
    product() {
      const slug = this.$route.params.slug;
      return selectedProd.find(prod => prod.slug === slug);
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
