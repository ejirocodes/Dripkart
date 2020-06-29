<template>
  <section class="not-found">
    <h1>Lost in space?</h1>
    <div class="not-found-img">
      <img src="../assets/svg/404.svg" alt="404" />
    </div>
    <div class="not-found-info">
      <p>The page you requested could not be found</p>
      <router-link to="/">Back to Home</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-size: 3rem;
}
</style>