<template>
  <header>
    <div class="hero-main">
      <div class="hero-main-left">
        <h1>
          DripKart
          <br />
          collection {{new Date().getFullYear()}}
        </h1>
        <p>Dripkart brings you to a new collection of next-generation <br> BattleKnit technology engineered shoes.</p>
        <p class="price">&#36;899</p>
        <div class="hero-main-left-btn">
          <a href="#">Shop</a>
          <a href="#">Explore</a>
        </div>
      </div>
      <div class="hero-main-right">
        <img
          class="hero-img"
          :src="selectedImage.src"
          :alt="selectedImage.title"
          :title="selectedImage.title"
        />
        <button @click="prevHero()" title="previous image">
          <font-awesome-icon class="hero-icon" :icon="['fas', 'chevron-circle-left']" />
        </button>
        <button @click="nextHero()" title="next image">
          <font-awesome-icon class="hero-icon" :icon="['fas', 'chevron-circle-right']" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import heroImg from "../../data/products";
const img = heroImg.heroImage;

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "HeroMain",
  data() {
    return {
      selectedHeroIndex: 0
    };
  },
  created() {
    console.log(img);
  },
  computed: {
    selectedImage() {
      return img[this.selectedHeroIndex];
    }
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
@import "../../assets/sass/bounce-to-right.scss";
@import "../../assets/sass/_variables.scss";

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
    margin-bottom: $gutter-2;
    line-height: 1.5;
    &.price {
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
    background-color: $colour-sec;
    margin-right: $gutter-1;
    text-decoration: none;
    user-select: none;
    &:nth-child(2) {
      margin-right: 0;
      color: #fff;
      background-color: $colour-pri;
    }
  }
}
@mixin hover-trans-1 {
  transition: all cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
}
.hero-main-right {
  @include hover-trans-1;
  display: flex;
  position: relative;
  height: 31rem;
  max-height: 100%;
  background-color: $colour-sec;
  user-select: none;
  cursor: pointer;
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