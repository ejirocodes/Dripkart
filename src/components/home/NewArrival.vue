<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <h1>{{title}}</h1>
    </div>
    <section class="products-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(product, index) in newArrival" :key="index + 'new'">
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
const newArrival = products.newArrivals;
import ProdSlider from '../product/ProductSlider';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'NewArrival',
  components: {
    Swiper,
    SwiperSlide,
    ProdSlider
  },
  data() {
    return {
      title: 'New Arrivals',
      newArrival,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
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
    addToCart() {}
  }
};
</script>