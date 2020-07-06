<template>
  <div id="home">
    <HeroMain />
    <FeaturedProducts />
    <ProductInspiration />
    <NewArrival />
    <TestimonialSection />
    <Newsletter />
  </div>
</template>

<script>
import HeroMain from "../components/home/HeroMain.vue";
import FeaturedProducts from "../components/home/FeaturedProducts.vue";
import ProductInspiration from "../components/home/ProductInspiration.vue";
import NewArrival from "../components/home/NewArrival.vue";
import TestimonialSection from "../components/home/TestimonialSection.vue";
import Newsletter from "../components/home/Newsletter.vue";

export default {
  name: "Home",
  components: {
    HeroMain,
    FeaturedProducts,
    ProductInspiration,
    NewArrival,
    TestimonialSection,
    Newsletter
  }
};
</script>

<style lang="scss">
  #home {
  padding: 1rem;
  }
</style>