<template>
  <section class="prod-det">
    <div class="prod-det-left">
      <h1 class="product-title">{{product.title }}</h1>
      <p class="product-desc">{{product.description}}</p>
      <p class="product-cost">&#36;{{product.cost}}</p>
      <button>
        <i class="fas fa-shopping-cart"></i> Add to cart
      </button>
    </div>
    <div class="prod-det-right">
      <img class="product-img" :src="product.src" :alt="product.title" :title="product.title" />
    </div>
  </section>
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
      return (
        featuredProduct.find(prod => prod.slug === slug) ||
        newArrival.find(prod => prod.slug === slug)
      );
    }
  }
};
</script>
<style scoped lang="scss">
.prod-det {
  font-size: 3rem !important;
  font-family: 'Lato', sans-serif;
  display: flex;
  .prod-det-right,
  .prod-det-left {
    width: 50vw;
  }
  .prod-det-right {
    .product-img {
      width: 100%;
    }
  }
  .product-title {
    font-size: 4rem;
    font-weight: 700;
  }
}
</style>
