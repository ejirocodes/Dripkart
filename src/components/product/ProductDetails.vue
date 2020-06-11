<template>
  <div>
    <h1>{{product.title}}</h1>
    <p>{{product.description}}</p>
  </div>
</template>

<script>
export default {
  component: 'Details',
  props: ['id'],
  data() {
    return {
      product: {
        title: 'Shoe Name',
        description: 'Shoe Description'
      }
    };
  }
};
</script>
<style lang="scss">
</style>