<template>
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
        <h5>Products</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">New Arrivals</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Nike Lab</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Adidas Lab</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Women Sneakers</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Mens's Sneakers</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-lg">
        <h5>Support</h5>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">Product help</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Service & Warranty</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Authorised Servie</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Customer Care</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Rigting Beats</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center mb-2">
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
    <div class="row justify-content-center">
      <div class="col-auto">
        <c-link href="https://github.com/Ejiro-Asiuwhu/dripkart" is-external>View on GitHub</c-link>
      </div>
    </div>
  </footer>
</template>

<script>
import { CLink } from '@chakra-ui/vue';
export default {
  components: {
    CLink
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


 