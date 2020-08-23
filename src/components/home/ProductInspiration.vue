<template>
  <section class="hero-main">
    <div class="hero-main-left example-3d">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(image, index) in img" :key="index">
          <v-lazy-image
            class="hero-img"
            src-placeholder="https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif"
            :src="image.src"
            :alt="image.title"
            :title="image.title"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="hero-main-right">
      <h1>Made for icons</h1>
      <p>Capturing all the glory of the 1971 original, the Stan Smith&nbsp;returns&nbsp;for the&nbsp;win.</p>
      <div class="hero-main-right-btn">
        <router-link to="/shop">Shop</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import heroImg from '../../data/products';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
const img = heroImg.inspImage;

export default {
  name: 'ProductInspiration',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      img,
      selectedHeroIndex: 0,
      swiperOption: {
        effect: 'flip',
        grabCursor: true,
        centeredSlides: false,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/bounce-to-right.scss';
@import '../../assets/sass/_variables.scss';

.hero-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.hero-main-right {
  margin-right: 1rem;
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: $gutter-2;
  }
  p {
    font-size: 1rem;
    margin-bottom: $gutter-2;
    line-height: 1.5;
  }
}
@mixin button-style {
  font-size: 1rem;
  padding: 0.8rem 2.2rem;
}
.hero-main-right-btn {
  a {
    @include hvr-bounce-to-right;
    @include button-style;
    padding: 0.9rem 2.62rem;
    color: #fff !important;
    margin-right: $gutter-1;
    text-decoration: none;
    background-color: $colour-pri;
    user-select: none;
  }
}
@mixin hover-trans-1 {
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
}
.hero-main-left {
  @include hover-trans-1;
  display: flex;
  position: relative;
  height: 100% !important;
  .hero-img {
    @include hover-trans-1;
    width: 35rem;
    max-width: 100%;
    padding: 0 1rem;
    margin: auto;
    user-select: none;
    &:hover {
      transform: scale(1.07);
    }
  }
  @mixin hero-btn {
    border: none;
    background: transparent;
    position: absolute;
    top: 50%;
  }
  button:first-of-type {
    @include hero-btn;
    left: 0;
  }
  button:last-of-type {
    @include hero-btn;
    right: 0;
  }
  .hero-icon {
    font-size: 1.5rem;
    color: $colour-uni;
    transition: colour;
    &:hover {
      color: $colour-pri;
    }
  }
}
.example-3d {
  width: 50%;
  padding-bottom: 50px;
}
.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: $colour-uni;
    }
  }
}

// Media Queries
@media screen and (max-width: 991px) {
  .hero-main-left {
    height: 25rem;
    .hero-img {
      margin: 0;
      object-fit: contain;
    }
  }
}
@media screen and (max-width: 768px) {
  .hero-main-right {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
  }
  .hero-main-left {
    .hero-img {
      padding: 1.5rem;
    }
  }
  .swiper-slide.swiper-slide-active {
    width: 100% !important;
  }
  .swiper-container-3d {
    perspective: none;
  }
}
@media screen and (max-width: 670px) {
  .hero-main {
    flex-direction: column;
  }
  .hero-main-right {
    text-align: center;
    margin-right: 0;
    margin-bottom: $gutter-3;
    h1 {
      font-size: 3rem;
    }
    p {
      margin-bottom: $gutter-1;
    }
  }
  .hero-main-left {
    width: 100%;
    .hero-img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 375px) {
  .hero-main-right {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
  }
  .hero-main-right-btn {
    a {
      padding: 0.9rem 2.02rem;
      margin-right: $gutter-0;
    }
    button {
      padding: 0.8rem 1.6rem;
    }
  }
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0 !important;
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
  .swiper-container-3d {
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      background-image: none;
    }
  }
}
</style>