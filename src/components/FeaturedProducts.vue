<template>
  <section class="prod-feature prod-showcase">
    <div class="prod-showcase-heading">
      <span class="stroke"></span>
      <h1>{{title}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedProducts",
  data() {
    return {
      title: "Featured"
    };
  }
};
</script>