<template>
  <button @click="addToCart()">add to cart</button>
</template>

<script>
export default {
  name: "CartButton",
  methods: {
    addToCart() {}
  }
};
</script>
<style scoped lang="scss">
@import "../assets/sass/variables.scss";
@import "../assets/sass/bounce-to-right.scss";
button {
  @include hvr-bounce-to-right;
  padding: 0.8rem 1.5rem;
  border: none;
  background: $colour-pri;
  font-size: 0.8rem;
  color: #fff;
  text-transform: uppercase;
}
</style>