<template>
  <section class="signup">
    <div class="signup-title">
      <h1>{{title}}</h1>
    </div>
    <div class="signup-main">
      <div class="signup-left">
        <img src="../data/images/josh-redd-unsplash.jpg" aria-hidden="true" alt />
      </div>
      <div class="signup-right">
        <c-box class="c-box-container">
          <c-tabs variant="enclosed-colored" is-fitted>
            <c-tab-list class="tab-list">
              <c-tab>Sign in</c-tab>
              <c-tab>Sign up</c-tab>
            </c-tab-list>
            <c-tab-panels>
              <c-tab-panel>
                <form action method="post">
                  <c-form-control is-required>
                    <c-form-label for="email">Email</c-form-label>
                    <c-input width="100%" type="email" id="email" aria-describedby="email" />
                    <c-form-helper-text id="email-helper-text">We'll never share your email.</c-form-helper-text>
                    <c-form-label for="password">Password</c-form-label>
                    <c-input
                      type="password"
                      width="100%"
                      id="password"
                      aria-describedby="password input"
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
                    >Sign in</c-button>
                  </c-form-control>
                </form>
                <c-link
                  class="respass-link"
                  as="router-link"
                  to="/resetpassword"
                >Forgot your password?</c-link>
                <div class="hor-line">
                  <div class="circle"></div>
                </div>
                <div class="auth-signin">
                  <p>
                    <a href="/facebook">Facebook</a>
                  </p>
                  <p>
                    <a href="/twitter">Twitter</a>
                  </p>
                  <p>
                    <a href="/google">Google</a>
                  </p>
                </div>
              </c-tab-panel>
              <c-tab-panel>
                <form action method="post">
                  <c-form-control is-required>
                    <c-form-label for="name">Full Name</c-form-label>
                    <c-input
                      width="100%"
                      type="name"
                      aria-describedby="first name and last name"
                      aria-placeholder="first name and last name"
                      placeholder="First name Last name"
                    />
                    <c-form-label for="email-2">Email</c-form-label>
                    <c-input
                      width="100%"
                      type="email"
                      id="email-2"
                      aria-describedby="email address"
                    />
                    <c-form-helper-text id="email-helper-text">We'll never share your email.</c-form-helper-text>
                    <c-form-label for="password-2">Password</c-form-label>
                    <c-input type="password" width="100%" id="password-2" />
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
                    >Sign up</c-button>
                  </c-form-control>
                </form>
                <c-link
                  class="respass-link"
                  as="router-link"
                  to="/resetpassword"
                >Forgot your password?</c-link>
                <div class="hor-line">
                  <div class="circle"></div>
                </div>
                <div class="auth-signin">
                  <p>
                    <a href="/facebook">Facebook</a>
                  </p>
                  <p>
                    <a href="/twitter">Twitter</a>
                  </p>
                  <p>
                    <a href="/google">Google</a>
                  </p>
                </div>
              </c-tab-panel>
            </c-tab-panels>
          </c-tabs>
        </c-box>
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
  CButton,
  CLink
} from '@chakra-ui/vue';
export default {
  name: 'Signup',
  data() {
    return {
      title: 'Create Account'
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
    CButton,
    CLink
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/_variables.scss';
.signup {
  font-size: 5rem;
  .signup-main {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .signup-left {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 50vw;
    animation: circle 3s infinite;
    clip-path: circle(75%);
    transition: clip-path 1s;
    cursor: pointer;
    &:hover {
      clip-path: circle(25%);
    }
    img {
      width: 100%;
    }
  }
}
@keyframes circle {
  0% {
    clip-path: circle(75%);
  }
  50% {
    clip-path: circle(25%);
  }
  100% {
    clip-path: circle(75%);
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
    min-height: 13.5rem;
  }
  form {
    line-height: 1.6;
  }
  .tab-list {
    margin-bottom: 1.8rem;
  }
  .respass-link,
  .respass-link:active,
  .respass-link:visited {
    color: $colour-uni;
  }
  .respass-link {
    text-align: center;
    display: block;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    border-color: $colour-uni;
  }
  #password-helper-text,
  #email-helper-text {
    margin-bottom: 1.2rem;
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: -2rem;
    background-color: $colour-uni;
  }
  .hor-line {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
  }
  .hor-line::before,
  .hor-line::after {
    display: inline-block;
    content: '';
    border-top: 2px solid black;
    width: 7rem;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
  .auth-signin {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: $colour-uni;
    p:not(:last-of-type) {
      margin-right: 2rem;
    }
    a {
      color: $colour-uni;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

//////////MEDIA QUERIES
@media screen and (max-width: 768px) {
  .signup-main {
    .signup-left {
      height: 100%;
      margin-right: 1rem;
    }
  }
}
@media screen and (max-width: 650px) {
  .signup {
    .signup-title {
      margin-bottom: 1.5rem;
    }
    .signup-main {
      flex-direction: column;
      .signup-left {
        width: 80vw;
        margin: 0 0 1.5rem 0;
      }
      .signup-right {
        width: 80vw;
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .signup-title {
    font-size: 3rem;
  }
}
</style>

<style lang="scss">
@import '../assets/sass/_variables.scss';
.css-16tdle4[aria-selected='true'] {
  color: $colour-uni;
  border-color: $colour-uni;
  border-top-color: $colour-uni;
  border-bottom-color: transparent;
}
.css-16tdle4 {
  user-select: none;
}
</style>