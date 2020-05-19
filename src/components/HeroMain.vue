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
      <img class="hero-img" :src="HeroImage" alt="Nike shoe" />
    </div>
  </header>
</template>

<script>
import HeroImage from "../assets/images/nike-red.png";
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

<style scoped lang="scss">
@import "../assets/sass/variables.scss";
@import "../assets/sass/bounce-to-right.scss";

.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96vh;
}
.header-left {
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
      color: $colour-uni;
      font-size: 1.8rem;
      margin-bottom: $gutter-2;
    }
  }
}
@mixin button-style {
  font-size: 1rem;
  padding: 0.8rem 2.2rem;
}
.header-left-btn {
  a {
    @include hvr-bounce-to-right;
    @include button-style;
    padding: 0.9rem 2.62rem;
    color: $colour-uni;
    background-color: $colour-sec;
    margin-right: $gutter-1;
    text-decoration: none;
  }
  button {
    @include hvr-bounce-to-right;
    @include button-style;
    color: #fff;
    background-color: $colour-pri;
    border: none;
  }
}
.header-right {
  background-color: $colour-sec;
  .hero-img {
    width: 35rem;
    max-width: 100%;
    padding: 1rem 3rem 7rem 3rem;
  }
}
// Media Queries
@media screen and (max-width: 768px) {
  .header-main {
    align-items: flex-start;
  }
  .header-left {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
    p {
      width: 85%;
    }
  }
  .header-right {
    .hero-img {
      padding: 1.5rem;
    }
  }
}
@media screen and (max-width: 670px) {
  .header-main {
    flex-direction: column;
    height: 100%;
  }
  .header-left {
    margin-bottom: $gutter-3;
    h1 {
      font-size: 3rem;
    }
    p {
      margin-bottom: $gutter-1;
      &.price {
        margin-bottom: $gutter-1;
      }
    }
  }
  .header-right {
    .hero-img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 375px) {
  .header-left {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
    p {
      width: 100%;
      &.price {
        font-size: 1.6rem;
      }
    }
  }
  .header-left-btn {
    a {
      padding: 0.9rem 2.02rem;
      margin-right: $gutter-0;
    }
    button {
      padding: 0.8rem 1.6rem;
    }
  }
}
</style>