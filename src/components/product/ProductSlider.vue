<template>
  <figure class="imghvr-push-right">
    <v-lazy-image
      class="product"
      :src="product && product.src"
      src-placeholder="https://cdn.dribbble.com/users/148670/screenshots/5252136/dots.gif"
      :alt="product && product.title"
      :title="product && product.title"
    />
    <figcaption>
      <h4>{{product && product.title}}</h4>
      <p>{{product && product.category}}</p>
      <p>&#36;{{product && product.cost}}</p>
    </figcaption>
    <div class="product-title">
      <p>{{product && product.category}}</p>
      <h4>{{product && product.title}}</h4>
      <p>&#36;{{product && product.cost}}</p>
      <button class="cart-btn" @click="addToCart()">add to cart</button>
    </div>
  </figure>
</template>

<script>
export default {
  props: ['product']
};
</script>

<style lang="scss">
@import '../../assets/sass/_variables.scss';
@import '../../assets/sass/bounce-to-right.scss';

.cart-btn {
  @include hvr-bounce-to-right;
  padding: 0.8rem 1.5rem;
  border: none;
  background: $colour-pri;
  font-size: 0.8rem;
  color: #fff;
  text-transform: uppercase;
}

.prod-showcase {
  margin: 4rem 0;
}
.prod-showcase-heading {
  margin-bottom: 3rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    &::before {
      border-top: 2px solid $colour-pri;
      display: block;
      position: relative;
      top: -12px;
      margin: 0 auto;
      width: 10%;
      content: '';
    }
  }
}
.products-container {
  display: flex;
  figure:not(:last-of-type) {
    margin-right: 0.8rem;
  }
  a {
    text-decoration: none;
  }
  figure {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    padding: 1rem;
    height: 22rem;
    background: transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    .product {
      width: 100%;
    }
  }
  figcaption {
    color: $colour-sec;
    h4 {
    font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1rem;
    }
    p:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
  .product-title {
    margin-top: 1rem;
    h4 {
      font-size: 1.2rem;
    }
    p:first-of-type {
      font-size: 0.8rem;
      margin-bottom: 0.6rem;
    }
    p:last-of-type {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
  [class^='imghvr-'] figcaption {
    background-color: $colour-uni;
    padding: 1rem;
  }
  .swiper-container {
    padding: 0.5rem;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: $colour-uni;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: $colour-pri;
  }
}
</style>