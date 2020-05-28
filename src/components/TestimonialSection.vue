
<template>
  <div class="testimonial">
    <div class="testimonial-left">
      <h2 class="testimonial-left-title">
        <span class="quote">"</span> What our
        <br />customers
        <br />are saying
        <div class="dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h2>
    </div>
    <swiper class="swiper testimonial-right" :options="swiperOption">
      <swiper-slide class="testimony">
        <h3 class="testimonial-right-title">I've never felt this confident</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Temporibus voluptatem,
          ab vitae laboriosam corporis veritatis eum,
          iste fuga minus voluptates at laudantium ad natus
          culpa consequuntur animi sit reiciendis esse!
        </p>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Testimonial",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
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
@import "../assets/sass/variables.scss";
.testimonial {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 6rem 0;
  font-size: 6rem;
  .testimonial-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: $colour-pri;
    line-height: 1.3;
    font-family: "Prata", serif;
    text-transform: capitalize;
    text-align: center;
    min-height: 35rem;
    height: 100%;
    border-bottom-right-radius: 5rem;
    .testimonial-left-title {
      position: relative;
      font-size: 3.2rem;
      span.quote {
        position: absolute;
        top: -2.4rem;
        left: -2rem;
        font-family: "PT Serif", serif;
        font-size: 1.5em;
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
        color: $colour-mast;
        background: rgba($colour-mast, 0.2);
      }
      .dots {
        width: 2em;
        height: 2em;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        position: absolute;
        bottom: -1rem;
        left: -2rem;
        opacity: 0.3;
      }

      .dots > div {
        width: 0.4em;
        height: 0.4em;
        background-color: $colour-mast;
        border-radius: 50%;
      }
    }
  }
  .testimonial-right {
    width: 50%;
    &.swiper {
      height: 300px;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        padding: 4rem;
      }
    }
  }
  .testimony {
    .testimonial-right-title {
      font-size: 2rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.4;
    }
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 3.4rem;
  }
}
</style>