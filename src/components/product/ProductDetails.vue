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
    console.log(selectedProd);
  },
  computed: {
    product() {
      const id = this.$route.params.id * 1;
      return selectedProd.find(prod => prod.id === id);
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
