<template>
  <!-- <c-link href="https://github.com/Ejiro-Asiuwhu/dripkart" is-external>
      View on GitHub
  </c-link>-->
  <footer class="footer p-4 bg-pri text-light" id="footer">
    <div class="row mb-5">
      <div class="col-6 col-lg-3 col-xl-2">
        <h5>Our Information</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">Return Policy</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Terms & Conditions</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Site Map</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Store House</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-lg">
        <h5>About Us</h5>
        <ul class="list-unstyled">
          <li class="mb-3 d-flex">
            <img
              class="icon"
              src="assets/img/icons/theme/map/marker-1.svg"
              alt="marker-1 icon"
              data-inject-svg
            />
            <div class="ml-3">
              <span>
                348 Greenpoint Avenue
                <br />Brooklyn, NY
              </span>
            </div>
          </li>
          <li class="mb-3 d-flex">
            <img
              class="icon"
              src="assets/img/icons/theme/communication/call-1.svg"
              alt="call-1 icon"
              data-inject-svg
            />
            <div class="ml-3">
              <span>+61 3928 3324</span>
              <span class="d-block text-muted text-small">Mon - Fri 9am - 5pm</span>
            </div>
          </li>
          <li class="mb-3 d-flex">
            <img
              class="icon"
              src="assets/img/icons/theme/communication/mail.svg"
              alt="mail icon"
              data-inject-svg
            />
            <div class="ml-3">
              <a href="#">hello@company.io</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center mb-2">
      <div class="col-auto">
        <ul class="nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img
                class="icon undefined"
                src="assets/img/icons/social/instagram.svg"
                alt="instagram social icon"
                data-inject-svg
              />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img
                class="icon undefined"
                src="assets/img/icons/social/twitter.svg"
                alt="twitter social icon"
                data-inject-svg
              />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img
                class="icon undefined"
                src="assets/img/icons/social/youtube.svg"
                alt="youtube social icon"
                data-inject-svg
              />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img
                class="icon undefined"
                src="assets/img/icons/social/medium.svg"
                alt="medium social icon"
                data-inject-svg
              />
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <img
                class="icon undefined"
                src="assets/img/icons/social/facebook.svg"
                alt="facebook social icon"
                data-inject-svg
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-md-auto text-center">
        <small class="text-muted">
          &copy;{{new Date().getFullYear()}} Dripkart All Rights Reserved
          <a
            href="https://www.google.com/policies/privacy/"
          >Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service.</a>
        </small>
      </div>
    </div>
  </footer>
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
@import '../assets/sass/_variables.scss';
footer * {
  font-size: 1rem;
}
.footer {
  background-color: $colour-uni;
  .nav-link {
    padding: 0.5rem 0;
  }
  .btn-pri {
    background-color: $colour-pri;
  }
}
</style>


 