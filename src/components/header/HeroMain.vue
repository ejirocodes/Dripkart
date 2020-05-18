<template>
  <header>
    <div class="header-left">
      <h1>
        New Shoes
        <br />
        collection {{new Date().getFullYear()}}
      </h1>
      <p>Dripkart brings you to a new collection of shoes. A new advanced breed of shoes</p>
      <p class="price">$899</p>
      <div class="header-left-btn">
        <a href="#">Discover</a>
        <button @click="addToCart()">Add to cart</button>
      </div>
    </div>
    <div class="header-right">
      <img :src="HeroImage" alt="" />
    </div>
  </header>
</template>

<script>
import HeroImage from "../../assets/images/nike-red.png";
export default {
  name: "HeroMain",
  data() {
    return {
      HeroImage
    };
  },
  methods: {
    addToCart() {}
  }
};
</script>

<style lang="scss">
.header-left {
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.2rem;
  }
}
</style>