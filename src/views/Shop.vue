<template>
  <section class="shop-container">
    <h1 class="shop-heading">{{title}}</h1>
    <div class="shop">
      <figure v-for="(product) in  newArrival" :key="product.slug">
        <img class="shop-img" :src="product.src" :alt="product.title" :title="product.title" />
        <h2 class="shop-title">{{product.title}}</h2>
        <p class="shop-cost">&#36;{{product.cost}}</p>
        <button class="add-to-cart" @click="addToCart()">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
      </figure>
      <figure v-for="(product) in  featuredProducts" :key="product.slug">
        <img class="shop-img" :src="product.src" :alt="product.title" :title="product.title" />
        <h2 class="shop-title">{{product.title}}</h2>
        <p class="shop-cost">&#36;{{product.cost}}</p>
        <button class="add-to-cart" @click="addToCart()">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
      </figure>
    </div>
  </section>
</template>

<script>
import products from '../data/products';
const featuredProducts = products.featured;
const newArrival = products.newArrivals;
export default {
  data() {
    return {
      title: 'Discover the best',
      featuredProducts,
      newArrival
    };
  },
  //   mounted() {
  //       let prodItem = this.featuredProducts.forEach(function(arrayItem) {
  //         console.log( arrayItem);
  //       }
  //     );
  //   },
  methods: {
    addToCart() {
      const product = this.featuredProducts.forEach(element => {
        // console.log(element.title);
        // console.log(index);
        // console.log(array);
        return element.cost;
      });
      console.log(product);
      //   const cost = product.cost;

      this.$store.commit('addProductToCart', Object.assign({}, product));
      this.addedToCart = true;
      //   this.$toast({
      //     title: ` ${this.product.title} have been added to cart.`,
      //     description: ` You have ${this.cart.length} items in cart`,
      //     status: 'success',
      //     duration: 1000,
      //     position: 'top-right'
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_variables.scss';
.shop-container {
  margin: 2.5rem 0;
  font-size: 6rem;
  background-color: $colour-sec;
  border-radius: 2rem;
  .shop-heading {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding-top: 2rem;
  }
  .shop {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    padding: 2rem;
    figure {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: #fff;
      .add-to-cart {
        float: right;
        background: transparent;
        border: 1px solid #949494;
        padding: 0.5rem 0.6rem;
        border-radius: 1rem;
        svg {
          width: 2rem;
          float: right;
          margin: 0;
          fill: #949494;
        }
      }
    }
    .shop-img {
      max-width: 100%;
      background-color: $colour-sec;
      object-fit: contain;
      height: 20rem;
      padding: 1.4rem;
      border-radius: 1rem;
    }
    .shop-title {
      margin: 1rem 0;
    }
  }
}

// MEDIA QUERIES
@media screen and (max-width: 375px) {
  .shop-container {
    .shop {
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      padding: 1rem;
    }
    .shop-heading {
      font-size: 1.5rem;
    }
  }
}
</style>