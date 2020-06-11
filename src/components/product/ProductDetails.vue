<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import products from '../../data/products';
export default {
  component: 'Details',
  computed: {
    product() {
    const {productType, id} = this.$route.params;
        return products[productType].find(prod => prod.id === +id)
    }
  }
};
</script>
<style scoped lang="scss">
div {
  font-size: 4rem !important;
}
</style>
