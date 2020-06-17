<template>
  <section>
    <div class="prod-det">
      <div class="prod-det-left">
        <h1 class="product-title">{{product.title}}</h1>
        <p class="product-desc">{{product.description}}</p>
        <p class="product-cost">&#36;{{product.cost}}</p>
        <button class="cart-btn-2">
          <span>
            <i class="fas fa-shopping-cart"></i> Add to cart
          </span>
        </button>
      </div>
      <div class="prod-det-right">
        <img class="product-img" :src="product.src" :alt="product.title" :title="product.title" />
      </div>
    </div>
    <p>
      <router-link class="more-link" to="/shop">Discover Everything</router-link>
    </p>
  </section>
</template>

<script>
import products from '../../data/products';
const featuredProduct = products.featured;
const newArrival = products.newArrivals;
export default {
  name: 'ProductDetails',
  computed: {
    product() {
      const slug = this.$route.params.slug;
      return (
        featuredProduct.find(prod => prod.slug === slug) ||
        newArrival.find(prod => prod.slug === slug)
      );
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../assets/sass/_variables.scss';
.prod-det {
  font-size: 3rem !important;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  .prod-det-right,
  .prod-det-left {
    width: 100%;
  }
  .prod-det-right {
    transition: all cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
    &:hover {
      transform: rotate(-5deg);
      filter: gray;
      -webkit-filter: grayscale(1);
      filter: grayscale(1);
    }
    .product-img {
      width: 100%;
    }
  }
  .prod-det-left {
    margin-right: 1rem;
    .cart-btn-2 {
      &:hover {
        &:after {
          left: 120%;
          transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
      &:active {
        box-shadow: none;
      }
      border-radius: 40px;
      font-family: 'Lato', sans-serif;
      padding: 0.8rem 2.5rem;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      position: relative;
      transition-property: color !important;
      transition-duration: 0.5s !important;
      transition-timing-function: unset;
      border: none;
      background: #f71565;
      color: #fff;
      text-transform: uppercase;
      overflow: hidden;
      display: flex;
      span {
        z-index: 20;
        font-size: 0.8rem;
      }
      &:after {
        background: #fff;
        content: '';
        height: 155px;
        left: -75px;
        opacity: 0.2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -10;
      }
      .fa-shopping-cart {
        font-size: 0.8rem;
        margin-right: 0.7rem;
      }
    }
    .product-title {
      font-size: 3.2rem;
      font-weight: 700;
      text-transform: uppercase;
      word-spacing: 5px;
      letter-spacing: 2px;
      color: $colour-pri;
      margin-bottom: 2rem;
    }
    .product-desc {
      margin-bottom: 1rem;
      line-height: 1.5;
      text-align: justify;
    }
    .product-cost {
      margin-bottom: 2rem;
    }
  }
}
.more-link {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.2px;
  color: $colour-uni;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

// MEDIA QUERIES
@media screen and (max-width: 768px) {
  .prod-det {
    flex-direction: column-reverse;
    height: 100%;
    .prod-det-left {
      margin-right: 0;
    }
    .prod-det-right {
      margin-bottom: 2rem;
    }
  }
}
@media screen and (max-width: 425px) {
  .prod-det {
    .prod-det-left {
      .product-title {
        font-size: 2rem;
      }
      .product-desc {
        font-size: 1rem;
      }
      .cart-btn-2 {
            padding: 0.7rem 1.8rem;
      }
    }
  }
}
.more-link {
  display: none;
}
</style>
