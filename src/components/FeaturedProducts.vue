<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <!-- <span class="stroke"></span> -->
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <figure v-for="(product, index) in featuredProducts" :key="index">
        <img class="product" :src="product.src" :alt="product.title" :title="product.title" />
        <figcaption>{{product.title}}</figcaption>
        <p>{{product.category}}</p>
        <p>&#36;{{product.cost}}</p>
        <CartButton />
      </figure>
    </section>
  </section>
</template>

<script>
import products from "../data/products";
const featuredProducts = products.featured;
import CartButton from "./CartButton.vue";
export default {
  name: "FeaturedProducts",
  components: {
    CartButton
  },
  data() {
    return {
      title: "What's trending",
      featuredProducts
    };
  },
  beforeCreate() {
    console.log(products);
  }
};
</script>
<style lang="scss">
@import "../assets/sass/variables.scss";
.prod-showcase {
  margin: 8rem 0;
}
.prod-showcase-heading {
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    &::before {
      border-top: 2px solid $colour-pri;
      display: block;
      position: relative;
      top: -25px;
      margin: 0 auto;
      width: 10%;
      content: "";
    }
  }
}
.products-container {
  display: flex;
  figure {
    width: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #fff;
    height: 22rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .product {
      width: 100%;
    }
  }
  figcaption {
    font-size: 1.4rem;
  }
}
</style>