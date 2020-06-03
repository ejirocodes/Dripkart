<template>
  <section class="signup">
    <div class="signup-title">
      <h2>{{title}}</h2>
    </div>
    <div class="signup-main">
      <div class="signup-left">
        <img src="../data/images/air-max-2090-womens-shoe.png" aria-hidden="true" alt />
      </div>
      <div class="signup-right">
        <c-box class="c-box-container">
          <c-tabs variant="enclosed-colored" is-fitted>
            <c-tab-list>
              <c-tab>Sign in</c-tab>
              <c-tab>Sign up</c-tab>
            </c-tab-list>
            <c-tab-panels>
              <c-tab-panel>
                <form action method="post">
                  <c-form-control is-required>
                    <c-form-label for="email">Email</c-form-label>
                    <c-input
                      width="100%"
                      type="email"
                      id="email"
                      aria-describedby="email-helper-text"
                    />
                    <c-form-helper-text id="email-helper-text">We'll never share your email.</c-form-helper-text>
                    <c-form-label for="password">Password</c-form-label>
                    <c-input
                      type="password"
                      width="100%"
                      id="password"
                      ar
                      ia-describedby="email-helper-text"
                    />
                    <c-form-helper-text id="password-helper-text">Your password is secured with us.</c-form-helper-text>
                    <c-form-error-message>Check again, something ain'right</c-form-error-message>
                    <c-button
                      type="submit"
                      rounded="0"
                      height="50px"
                      width="100%"
                      fontSize="14px"
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      variant-color="#FFB667"
                      bg="#000"
                      color="#fff"
                      size="lg"
                      :_active="{ bg: '#000' }"
                      :_hover="{ bg: '#FFB667' } "
                    >Log in</c-button>
                  </c-form-control>
                </form>
              </c-tab-panel>
              <c-tab-panel>
                <p>two!</p>
              </c-tab-panel>
            </c-tab-panels>
          </c-tabs>
        </c-box>
        <c-link class="respass-link" as="router-link" to="/resetpassword">Forgot your password?</c-link>
        <c-spinner thickness="4px" speed="0.65s" empty-color="green.200" color="vue.500" size="xl" />
      </div>
    </div>
  </section>
</template>

<script>
import {
  CBox,
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
  CSpinner,
  CButton,
  CLink
} from "@chakra-ui/vue";
export default {
  name: "Signup",
  data() {
    return {
      title: "Create Account"
    };
  },
  components: {
    CBox,
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
    CSpinner,
    CButton,
    CLink
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/_variables.scss";
.signup {
  font-size: 5rem;
  .signup-main {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .signup-left {
    background: black;
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
    text-align: center;
    margin-bottom: 3rem;
  }
  .signup-right {
    width: 20rem;
    .c-box-container {
      min-height: 15.5rem;
    }
    .respass-link, .respass-link:active, .respass-link:visited {
      text-align: center;
      color: $colour-uni;
    }
  }
}
</style>