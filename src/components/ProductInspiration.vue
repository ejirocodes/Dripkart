<template>
    <section class="hero-main">
      <div class="hero-main-right example-3d">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(image, index) in img" :key="index">
            <img class="hero-img" :src="image.src" :alt="image.title" :title="image.title" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="hero-main-left">
        <h1>Made for icons</h1>
        <p>Capturing all the glory of the 1971 original, the Stan Smith&nbsp;returns&nbsp;for the&nbsp;win.</p>
        <div class="hero-main-left-btn">
          <a href="#">Shop</a>
        </div>
      </div>
    </section>
</template>

<script>
import heroImg from "../data/HeaderImages";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
const img = heroImg.image;

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "ProductInspiration",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      img,
      selectedHeroIndex: 0,
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    nextHero() {
      this.selectedHeroIndex = getNextValidIndex(
        this.selectedHeroIndex,
        img.length
      );
    },
    prevHero() {
      this.selectedHeroIndex = getPreviousValidIndex(
        this.selectedHeroIndex,
        img.length
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/variables.scss";
@import "../assets/sass/bounce-to-right.scss";

.hero-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-top: 4rem;
}
.hero-main-left {
  margin-right: 1rem;
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: $gutter-2;
  }
  p {
    font-size: 1rem;
    color: $colour-ter;
    margin-bottom: $gutter-2;
    line-height: 1.5;
    &.price {
      color: $colour-uni;
      font-size: 1.8rem;
      margin-bottom: $gutter-2;
    }
  }
}
@mixin button-style {
  font-size: 1rem;
  padding: 0.8rem 2.2rem;
}
.hero-main-left-btn {
  a {
    @include hvr-bounce-to-right;
    @include button-style;
    padding: 0.9rem 2.62rem;
    color: $colour-uni;
    margin-right: $gutter-1;
    text-decoration: none;
    background-color: $colour-pri;
    user-select: none;
  }
}
@mixin hover-trans-1 {
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
}
.hero-main-right {
  @include hover-trans-1;
  display: flex;
  position: relative;
  height: 100% !important;
  background-color: $colour-sec;
  .hero-img {
    @include hover-trans-1;
    width: 35rem;
    max-width: 100%;
    padding: 3rem;
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
  padding-top: 50px;
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
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}

// Media Queries
@media screen and (max-width: 991px) {
  .hero-main-right {
    height: 25rem;
    .hero-img {
      margin: 0;
      object-fit: contain;
    }
  }
}
@media screen and (max-width: 768px) {
  .hero-main {
    align-items: flex-start;
    margin-top: 2rem;
  }
  .hero-main-left {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
  }
  .hero-main-right {
    .hero-img {
      padding: 1.5rem;
    }
  }
}
@media screen and (max-width: 670px) {
  .hero-main {
    flex-direction: column;
    height: 100%;
  }
  .hero-main-left {
    margin-right: 0;
    margin-bottom: $gutter-3;
    h1 {
      font-size: 3rem;
    }
    p {
      margin-bottom: $gutter-1;
      &.price {
        margin-bottom: $gutter-1;
      }
    }
  }
  .hero-main-right {
    .hero-img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 375px) {
  .hero-main-left {
    h1 {
      font-size: 2.2rem;
      margin-bottom: $gutter-1;
    }
    p {
      &.price {
        font-size: 1.6rem;
      }
    }
  }
  .hero-main-left-btn {
    a {
      padding: 0.9rem 2.02rem;
      margin-right: $gutter-0;
    }
    button {
      padding: 0.8rem 1.6rem;
    }
  }
}
</style>