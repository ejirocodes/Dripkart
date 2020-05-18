<template>
  <header class="header-main">
    <div class="header-left">
      <h1>
        New Shoes
        <br />
        collection {{new Date().getFullYear()}}
      </h1>
      <p>Dripkart brings you to a new collection of shoes. A new advanced breed of shoes</p>
      <p class="price">&#36;899</p>
      <div class="header-left-btn">
        <a href="#">Discover</a>
        <button @click="addToCart()">Add to cart</button>
      </div>
    </div>
    <div class="header-right">
      <img :src="HeroImage" alt />
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
@import "../../assets/sass/variables.scss";
.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-left {
  // width: 50vw;
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: $gutter-2;
  }
  p {
    font-size: 1rem;
    color: $colour-ter;
    margin-bottom: $gutter-2;
    width: 70%;
    line-height: 1.5;
    &.price {
      color: #222222;
      font-size: 1.8rem;
    }
  }
}
.header-right {
  // width: 50vw;
  img {
    width: 35rem;
  }
}
</style>