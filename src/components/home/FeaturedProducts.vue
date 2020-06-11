<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <h1>{{title}}</h1>
    </div>
    <productSelector />
  </section>
</template>

<script>
import productSelector from '../product/ProductSelector.vue';

export default {
  name: 'FeaturedProducts',
  components: {
    productSelector,
  },
  data() {
    return {
      title: "What's trending",
    };
  },
};
</script>