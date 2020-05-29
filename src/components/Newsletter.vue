<template>
  <section class="newsletter">
    <div class="newsletter-left">
      <h2>Subscribe to our newsletter</h2>
      <p>
        Subscribe to stay updated with the latest
        <br />trend in the shoe industry
      </p>
    </div>
    <div class="newsletter-right">
      <FormulateForm v-model="values" @submit="handleLogin">
        <FormulateInput
          type="text"
          name="email"
          placeholder="name@name.com"
          aria-placeholder="myname@example.com"
          validation="required|email"
        />
        <FormulateInput type="submit" label="Login" />
      </FormulateForm>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: {},
      handleLogin: () => alert("Logged in")
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/variables.scss";
.newsletter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4rem;
  background-color: $colour-pri;
  padding: 1rem 3rem;
  .newsletter-left {
    h2 {
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: $gutter-1;
    }
    p {
      font-size: 1rem;
    }
  }
}
</style>

<style lang="scss">
.newsletter {
  .newsletter-right {
    form {
      display: flex;
    }
    .formulate-input[data-classification="text"] input {
      font-size: 1rem !important;
    }
    .formulate-input[data-classification="button"] button {
      font-size: 1rem;
      padding: .75em 1.8rem;
    }
    .formulate-input {
        margin-bottom: 0;
    }
  }
}
</style>