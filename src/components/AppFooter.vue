<template>
  <!-- <footer>
    <c-link href="https://github.com/Ejiro-Asiuwhu/dripkart" is-external>
      View on GitHub
    </c-link> -->
    <footer class="pb-4 bg-primary-3 text-light" id="footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <div class="card card-body o-hidden mb-0 bg-primary text-light">
            <div class="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div class="h3 text-center mb-md-0">Start building beautiful websites</div>
              <a href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                class="btn btn-lg btn-white">
                Download the app
              </a>
            </div>
            <div class="decoration layer-0">
              <img class="bg-primary-2" src="assets/img/decorations/deco-blob-1.svg" alt="deco-blob-1 decoration"
                data-inject-svg />
            </div>
          </div>

        </div>
      </div>
      <div class="row mb-5">
        <div class="col-6 col-lg-3 col-xl-2">
          <h5>Navigate</h5>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link">Demos</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Pages</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Elements</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg">
          <h5>Contact</h5>
          <ul class="list-unstyled">
            <li class="mb-3 d-flex">
              <img class="icon" src="assets/img/icons/theme/map/marker-1.svg" alt="marker-1 icon" data-inject-svg />
              <div class="ml-3">
                <span>348 Greenpoint Avenue
                  <br />Brooklyn, NY</span>
              </div>
            </li>
            <li class="mb-3 d-flex">
              <img class="icon" src="assets/img/icons/theme/communication/call-1.svg" alt="call-1 icon"
                data-inject-svg />
              <div class="ml-3">
                <span>+61 3928 3324</span>
                <span class="d-block text-muted text-small">Mon - Fri 9am - 5pm</span>
              </div>
            </li>
            <li class="mb-3 d-flex">
              <img class="icon" src="assets/img/icons/theme/communication/mail.svg" alt="mail icon" data-inject-svg />
              <div class="ml-3">
                <a href="#">hello@company.io</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-5 col-xl-4 mt-3 mt-lg-0">
          <h5>Subscribe</h5>
          <p>The latest Leap news, articles, and resources, sent straight to your inbox every month.</p>
          <form action="https://mailform.mediumra.re/leap/mailchimp.php" data-form-email novalidate>
            <div class="form-row">
              <div class="col-12">
                <input type="email" class="form-control mb-2" placeholder="Email Address" name="email" required>
              </div>
              <div class="col-12">
                <div class="d-none alert alert-success" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div class="d-none alert alert-danger" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
                <div data-recaptcha data-sitekey="6Lemz4gUAAAAAElq4ZHFBzI7j8QUiYMn9I0mzQWG" data-size="invisible"
                  data-badge="bottomleft">
                </div>
                <button type="submit" class="btn btn-primary btn-loading btn-block" data-loading-text="Sending">
                  <img class="icon" src="assets/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
          <small class="text-muted form-text">We’ll never share your details. See our <a href="#">Privacy Policy</a>
          </small>

        </div>
      </div>
      <div class="row justify-content-center mb-2">
        <div class="col-auto">
          <ul class="nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon undefined" src="assets/img/icons/social/instagram.svg" alt="instagram social icon"
                  data-inject-svg />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon undefined" src="assets/img/icons/social/twitter.svg" alt="twitter social icon"
                  data-inject-svg />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon undefined" src="assets/img/icons/social/youtube.svg" alt="youtube social icon"
                  data-inject-svg />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon undefined" src="assets/img/icons/social/medium.svg" alt="medium social icon"
                  data-inject-svg />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img class="icon undefined" src="assets/img/icons/social/facebook.svg" alt="facebook social icon"
                  data-inject-svg />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-auto text-center">
          <small class="text-muted">&copy;2019 This page is protected by reCAPTCHA and is subject to the Google <a
              href="https://www.google.com/policies/privacy/">Privacy Policy</a> and <a
              href="https://policies.google.com/terms">Terms of Service.</a>
          </small>
        </div>
      </div>
    </div>
  </footer>
  <!-- </footer> -->
</template>

<script>
// import { CLink } from '@chakra-ui/vue';
export default {
  components: {
    // CLink
  }
};
</script>

<style scoped lang="scss">
footer {
  font-size: 1rem;
}
</style>


 