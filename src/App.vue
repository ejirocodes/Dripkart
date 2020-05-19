<template>
  <div id="app">
    <HeroMain />
  </div>
</template>

<script>
import HeroMain from "./components/HeroMain.vue";

export default {
  name: "App",
  components: {
    HeroMain
  }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
