<template>
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
</template>

<script>
import products from '../../data/products';
const featuredProducts = products.featured;
import ProdSlider from './ProductSlider';
export default {
  components: { ProdSlider },
  created() {
    console.log(this.featuredProducts[0].category);
  },
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
</style>