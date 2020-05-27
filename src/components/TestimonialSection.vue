
<template>
  <div class="testimonial">
    <swiper class="swiper testimonial-left" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="testimonial-right">
      <img :src="testBanner" :alt="testBanner" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import testBanner from "../data/images/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg";

export default {
  name: "Testimonial",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testBanner,
      swiperOption: {
        direction: "vertical",
        loop: true,
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
  }
};
</script>

<style lang="scss" scoped>
.testimonial {
  display: flex;
  .testimonial-left {
    width: 40%;
  }
  .swiper {
    height: 300px;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 6rem;
      background-color: #fff;
    }
  }
}
</style>