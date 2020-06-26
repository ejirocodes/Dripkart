<template>
  <section class="newsletter">
    <div class="newsletter-left">
      <h2>Subscribe to our newsletter</h2>
      <p>
        Subscribe to stay updated with the latest
        trend in the shoe industry
      </p>
    </div>
    <div class="newsletter-right">
      <FormulateForm v-model="values" @submit="handleLogin">
        <div class="input-con">
          <FormulateInput
            type="text"
            name="email"
            id="email"
            aria-labelledby="Email Address"
            placeholder="Email Address"
            aria-placeholder="Email Address"
            validation="required|email"
          />
        </div>
        <FormulateInput type="submit" label="Subscribe" />
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
@import '../../assets/sass/_variables.scss';

.newsletter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4rem;
  background-color: $colour-pri;
  color: $colour-sec;
  padding: 6rem 0;
  .newsletter-left {
    line-height: 1.5;
    width: 50%;
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
@import '../../assets/sass/_variables.scss';
.newsletter {
  .newsletter-right {
    .formulate-input[data-classification='text'] input {
      font-size: 1rem !important;
      color: #fff;
      border-color: #fff;
      border-radius: 0;
      &::placeholder {
        color: $colour-sec;
        text-align: center;
      }
      &:focus {
        border-color: #fff;
      }
    }
    .formulate-input[data-classification='button'] button {
      font-size: 1rem;
      padding: 0.75em 1.8rem;
      border-radius: 0;
      background-color: $colour-uni;
      border: none;
      width: 100%;
      display: flex;
      justify-content: center;
      span {
        font-size: 1rem;
        font-weight: 400;
      }
    }
    .formulate-input {
      margin-bottom: 0;
      .formulate-input-element {
        max-width: 100%;
        width: 100%;
      }
    }
    li.formulate-input-error {
      color: $colour-uni;
      font-size: 0.9rem;
    }
    .input-con {
      margin-bottom: 0.5rem;
      label {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
    }
  }
}
// Media Queries
@media screen and (max-width: 768px) {
  .input-con {
    width: 20rem;
  }
  .newsletter {
    flex-direction: column;
    .newsletter-left {
      text-align: center;
      margin-bottom: 2.2rem;
    }
    .newsletter-right {
      .formulate-input[data-classification='button'] button {
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
    .newsletter-left {
      width: 100% !important;
    }
  }
}
@media screen and (max-width: 375px) {
  .newsletter {
    .newsletter-right {
      .formulate-input[data-classification='text'] input,
      .formulate-input[data-classification='button'] button {
        width: 84%;
      }
      .formulate-input .formulate-input-element {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>