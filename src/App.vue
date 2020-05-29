<template>
  <div id="app">
    <Navbar />
    <HeroMain />
    <main>
      <FeaturedProducts />
      <ProductInspiration />
      <NewArrival />
      <TestimonialSection />
      <Newsletter />
    </main>
  </div>
</template>

<script>
import HeroMain from "./components/HeroMain.vue";
import Navbar from "./components/Navbar.vue";
import FeaturedProducts from "./components/FeaturedProducts.vue";
import ProductInspiration from "./components/ProductInspiration.vue";
import NewArrival from "./components/NewArrival.vue";
import TestimonialSection from "./components/TestimonialSection.vue";
import Newsletter from "./components/Newsletter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HeroMain,
    FeaturedProducts,
    ProductInspiration,
    NewArrival,
    TestimonialSection,
    Newsletter,
  }
};
</script>

<style lang="scss">
@import "./assets/sass/variables.scss";

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
