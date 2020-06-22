<template>
  <section id="prod-feature" class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product, index) in featuredProducts" :key="index + 'new'">
          <router-link
            :to="{
          name: 'ProductDetails',
          params: { slug: product.slug}
        }"
          >
            <ProdSlider :product="product" />
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </section>
</template>

<script>
import products from '../../data/products';
const featuredProducts = products.featured;
import ProdSlider from '../product/ProductSlider';
export default {
  name: 'FeaturedProducts',
  components: { ProdSlider },
  data() {
    return {
      title: "What's trending",
      featuredProducts,
      cart: [],
      selectedProdIndex: 0,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
      const cost = featuredProducts.map(prod => prod.cost);
      this.cart.push(Object.assign({}, { cost }));
    }
  }
};
</script>
<style lang="scss">
  @media screen and (max-width: 768px) {
    .prod-feature.prod-showcase {
      margin: 4rem 0 0 0 !important;
    }
  }
</style>