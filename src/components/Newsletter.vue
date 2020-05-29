<template>
  <section class="newsletter">
    <div class="newsletter-left">
      <h2>Subscribe to our newsletter</h2>
      <p>Subscribe to stay updated with the latest trend in the shoe industry</p>
    </div>
    <div class="newsletter-left">
      <FormulateForm v-model="values" @submit="handleLogin">
        <FormulateInput type="text" name="email" label="Email address" validation="required|email" />
        <FormulateInput type="submit" label="Login" />
      </FormulateForm>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { values: {}, handleLogin: () => alert("Logged in") };
  }
};
</script>