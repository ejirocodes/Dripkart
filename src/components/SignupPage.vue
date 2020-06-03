<template>
  <section class="signup">
    <div class="signup-title">
      <!-- <h2>{{title}}</h2> -->
    </div>
    <div class="signup-left">
      <img src="../data/images/air-max-2090-womens-shoe.png" aria-hidden="true" alt />
    </div>
    <div class="signup-right">
      <c-box>
        <c-tabs variant="enclosed-colored" is-fitted>
          <c-tab-list>
            <c-tab>Sign in</c-tab>
            <c-tab>Sign up</c-tab>
          </c-tab-list>
          <c-tab-panels>
            <c-tab-panel>
              <p>
                <c-form-control is-required>
                  <c-form-label for="email">Email</c-form-label>
                  <c-input type="email" id="email" aria-describedby="email-helper-text" />
                  <c-form-helper-text id="email-helper-text">We'll never share your email.</c-form-helper-text>
                  <c-form-error-message>Check again, something ain'right</c-form-error-message>
                </c-form-control>
              </p>
            </c-tab-panel>
            <c-tab-panel>
              <p>two!</p>
            </c-tab-panel>
          </c-tab-panels>
        </c-tabs>
      </c-box>forgot your password?
      <c-spinner thickness="4px" speed="0.65s" empty-color="green.200" color="vue.500" size="xl" />
    </div>
  </section>
</template>

<script>
import {
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel,
  CFormControl,
  CFormLabel,
  CInput,
  CFormErrorMessage,
  CFormHelperText,
  CSpinner
} from "@chakra-ui/vue";
export default {
  name: "Signup",
  data() {
    return {
      title: "Create Account"
    };
  },
  components: {
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    CFormControl,
    CFormLabel,
    CInput,
    CFormErrorMessage,
    CFormHelperText,
    CSpinner
  }
};
</script>

<style scoped lang="scss">
.signup {
  display: flex;
  font-size: 5rem;
  .signup-left {
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-clip-path: polygon(
      0% 15%,
      15% 15%,
      15% 0%,
      85% 0%,
      85% 15%,
      100% 15%,
      100% 85%,
      85% 85%,
      85% 100%,
      15% 100%,
      15% 85%,
      0% 85%
    );
    clip-path: polygon(
      0% 15%,
      15% 15%,
      15% 0%,
      85% 0%,
      85% 15%,
      100% 15%,
      100% 85%,
      85% 85%,
      85% 100%,
      15% 100%,
      15% 85%,
      0% 85%
    );
    height: 80vh;
    width: 50vw;
    img {
      width: 100%;
    }
  }
  .signup-title {
    font-size: 4rem;
  }
}
</style>