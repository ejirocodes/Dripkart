<template>
  <div>
    <HeroMain />
    <FeaturedProducts />
    <ProductInspiration />
    <NewArrival />
    <TestimonialSection />
    <Newsletter />
  </div>
</template>

<script>
import HeroMain from "./HeroMain.vue";
import FeaturedProducts from "./FeaturedProducts.vue";
import ProductInspiration from "./ProductInspiration.vue";
import NewArrival from "./NewArrival.vue";
import TestimonialSection from "./TestimonialSection.vue";
import Newsletter from "./Newsletter.vue";

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