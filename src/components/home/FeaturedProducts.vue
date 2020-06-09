<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product, index) in featuredProducts" :key="index + 'new'">
          <figure class="imghvr-push-right">
            <img class="product" :src="product.src" :alt="product.title" :title="product.title" />
            <figcaption>
              <h4>{{product.title}}</h4>
              <p>{{product.category}}</p>
              <p>&#36;{{product.cost}}</p>
            </figcaption>
            <div class="product-title">
              <p>{{product.category}}</p>
              <h4>{{product.title}}</h4>
              <p>&#36;{{product.cost}}</p>
              <button class="cart-btn" @click="addToCart()">add to cart</button>
            </div>
          </figure>
        </swiper-slide>
        <div
          class="cart"
          v-for="(item, index) in this.$store.state.cart"
          :key="index"
        >{{item.title}}</div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </section>
</template>

<script>
import products from "../../data/products";
const featuredProducts = products.featured;
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "FeaturedProducts",
  components: {
    Swiper,
    SwiperSlide
  },
  beforeCreate() {
    console.log("featured pro", featuredProducts);
    console.log("prod", products);
  },
  data() {
    return {
      title: "What's trending",
      featuredProducts,
      addedToCart: false,
      cart: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  methods: {
    addToCart() {
      const product = this.featuredProducts;
      const cost = product.cost;
      this.$store.commit("addProductToCart", Object.assign({}, product, {cost}));
      this.addedToCart = true;
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/sass/_variables.scss";
@import "../../assets/sass/bounce-to-right.scss";

.cart-btn {
  @include hvr-bounce-to-right;
  padding: 0.8rem 1.5rem;
  border: none;
  background: $colour-pri;
  font-size: 0.8rem;
  color: #fff;
  text-transform: uppercase;
}

.prod-showcase {
  margin: 4rem 0;
}
.prod-showcase-heading {
  margin-bottom: 3rem;
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
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    padding: 1rem;
    height: 22rem;
    background: transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    .product {
      width: 100%;
    }
  }
  figcaption {
    color: #222;
    h4 {
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
    h4 {
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
  .swiper-container {
    padding: 0.5rem;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: $colour-uni;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: $colour-pri;
  }
}
</style>