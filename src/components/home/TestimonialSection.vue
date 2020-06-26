
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
      <swiper-slide
        v-for="(testInfo, index) in testData"
        :key="index"
        class="testimony"
        :options="swiperOption"
      >
        <h3 class="testimonial-right-title">{{testInfo.caption}}</h3>
        <p class="testimon">{{testInfo.testimony}}</p>
        <figure>
          <div class="test-avatar-container">
            <img :src="testInfo.avatar" :alt="testInfo.name" class="test-avatar" />
          </div>
          <div class="figure-caption">
            <h1>{{testInfo.name}}</h1>
            <p>{{testInfo.title}}</p>
          </div>
        </figure>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import data from '../../data/testimonial';

const testData = data.testimonial;
export default {
  name: 'Testimonial',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      testData,
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/sass/_variables.scss';
.testimonial {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: $gutter-3 0;
  font-size: 6rem;
  letter-spacing: 1.4px;
  div[role='button']:active {
    outline: -webkit-focus-ring-color auto 1px;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: $colour-uni;
  }
  .testimonial-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: $colour-pri;
    line-height: 1.3;
    text-transform: capitalize;
    text-align: center;
    min-height: 35rem;
    height: 100%;
    border-bottom-right-radius: 5rem;
    .testimonial-left-title {
      position: relative;
      font-size: 3.2rem;
      color: $colour-sec;
      span.quote {
        position: absolute;
        top: -2.4rem;
        left: -2rem;
        font-family: 'PT Serif', serif;
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
    &.swiper {
      width: 50%;
      height: 100%;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        padding: 4rem;
        cursor: grabbing;
      }
    }
    .test-avatar-container {
      width: 5rem;
      height: 5rem;
      margin-bottom: 0.8rem;
      .test-avatar {
        object-fit: cover;
        width: 100%;
        border-radius: 50%;
      }
    }
    .figure-caption {
      h1 {
        font-size: 1.4rem;
        margin-bottom: $gutter-0;
      }
      p {
        font-size: 1rem;
        color: $colour-ter;
      }
    }
  }
  .testimony {
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .testimonial-right-title {
      font-size: 2rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    .testimon {
      line-height: 1.4;
      margin-bottom: 1rem;
    }
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 26px;
  }
}
@media screen and (max-width: 768px) {
  .testimonial {
    flex-direction: column;
    .testimonial-left,
    .testimonial-right {
      width: 100%;
    }
    .testimonial-right {
      &.swiper {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .testimonial {
    .testimonial-left {
      min-height: 23rem;
      .testimonial-left-title {
        font-size: 2.2rem;
      }
    }
    .testimonial-right {
      margin-top: 1.5rem;
      &.swiper {
        .swiper-slide {
          padding: 1rem;
        }
      }
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
      display: none;
    }
  }
}
@media screen and (max-width: 375px) {
}
</style>