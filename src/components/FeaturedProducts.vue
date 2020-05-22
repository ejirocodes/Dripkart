<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product, index) in featuredProducts" :key="index">
          <figure class="imghvr-push-right">
            <img class="product" :src="product.src" :alt="product.title" :title="product.title" />
            <figcaption>
              <h3>{{product.title}}</h3>
              <p>{{product.category}}</p>
              <p>&#36;{{product.cost}}</p>
            </figcaption>
            <div class="product-title">
              <p>{{product.category}}</p>
              <h3>{{product.title}}</h3>
              <p>&#36;{{product.cost}}</p>
              <CartButton />
            </div>
          </figure>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </section>
</template>

<script>
import products from "../data/products";
const featuredProducts = products.featured;
import CartButton from "./CartButton.vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "FeaturedProducts",
  components: {
    CartButton,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      title: "What's trending",
      featuredProducts,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
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
  margin-bottom: 4.6rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    &::before {
      border-top: 2px solid $colour-pri;
      display: block;
      position: relative;
      top: -12px;
      margin: 0 auto;
      width: 10%;
      content: "";
    }
  }
}
.products-container {
  display: flex;
  figure:not(:last-of-type) {
    margin-right: 0.8rem;
  }
  figure {
    width: 18rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
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
    color: #222;
    h3 {
      color: #222;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1rem;
    }
    p:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
  .product-title {
    margin-top: 1rem;
    h3 {
      font-size: 1.2rem;
    }
    color: $colour-uni;
    p:first-of-type {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
    p:last-of-type {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
  [class^="imghvr-"] figcaption {
    background-color: $colour-pri;
    padding: 1rem;
  }
}
</style>