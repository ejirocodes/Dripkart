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
        <FormulateInput type="submit" label="SUBSCRIBE" />
      </FormulateForm>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: {},
      handleLogin: () => alert("You've suscribed to our newsletter")
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/_variables.scss";

.newsletter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4rem;
  background-color: $colour-mast;
  padding: 6rem 0;
  .newsletter-left {
    line-height: 1.5;
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
@import "../../assets/sass/_variables.scss";
.newsletter {
  .newsletter-right {
    form {
      display: flex;
    }
    .formulate-input[data-classification="text"] input {
      font-size: 1rem !important;
      color: #fff;
      border-color: #fff;
      &::placeholder {
        color: $colour-sec;
      }
      &:focus {
        border-color: #fff;
      }
    }
    .formulate-input[data-classification="button"] button {
      font-size: 1rem;
      padding: 0.75em 1.8rem;
      background-color: $colour-pri;
    }
    .formulate-input {
      margin-bottom: 0;
      .formulate-input-element {
        max-width: 28rem;
      }
    }
    li.formulate-input-error {
      color: $colour-uni;
      font-size: 0.9rem;
    }
  }
}
// Media Queries
@media screen and (max-width: 768px) {
  .newsletter {
    flex-direction: column;
    .newsletter-left {
      margin-bottom: 2.2rem;
    }
    .newsletter-right {
      .formulate-input[data-classification="button"] button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
@media screen and (max-width: 458px) {
  .newsletter {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    .newsletter-right {
      .formulate-input .formulate-input-element {
        max-width: 8rem;
      }
    }
  }
}
</style>