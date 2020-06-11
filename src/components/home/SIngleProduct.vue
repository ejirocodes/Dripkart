<template>
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
</template>

<script>
import products from "../../data/products";
const featuredProducts = products.featured;
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
    
}
</script>