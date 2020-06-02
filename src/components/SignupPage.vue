<template>
  <section class="signup">
    <div class="signup-left">
      <h2>{{title}}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      title: "Creat Account"
    };
  }
};
</script>

<style scoped lang="scss">
.signup {
  .signup-left {
  }
}
</style>