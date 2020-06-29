<template>
  <footer class="footer p-5 bg-pri text-light">
    <div class="row mb-4 pb-4 footer-content">
      <div class="col-6 col-lg">
        <h5>Information</h5>
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
            <a href="#" class="nav-link">Our Story</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">The Team</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Parnership</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Community Programmes</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Popular Campaign</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-lg fx">
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
      <div class="col-6 col-lg fx">
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
        <small>
          &copy;{{new Date().getFullYear()}} Dripkart All Rights Reserved
          <a href="#">Privacy Policy</a> and
          <a href="#">Terms of Service.</a>
        </small>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <c-link class="dev-link" href="https://twitter.com/EjiroCodes" is-external>
          Developed by
          <span style="display: none;">Ejiro Asiuhwu</span>
          <span>Ejiro</span>
        </c-link>
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
.footer {
  line-height: 1.5;
  margin-top: 2rem;
  letter-spacing: 1px;
  background-color: $colour-uni;
  .footer-content {
    border-bottom: 1px solid;
    h5 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .nav-link {
      padding: 0.5rem 0;
      font-size: 0.8rem;
      color: $colour-sec;
      display: inline-block;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  small {
    font-size: 0.7rem;
    a {
      color: #fff;
      font-size: 0.7rem;
      text-decoration: underline;
    }
  }
  .dev-link {
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    span {
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 5.5px;
    }
  }
}

// MEDIA QUERIES
@media screen and (max-width: 991px) {
  .fx {
    margin-top: 2rem;
  }
}
@media screen and (max-width: 425px) {
  .footer {
    padding: 1.5rem 1.5rem 3rem 1.5rem !important;
  }
}
@media screen and (max-width: 375px) {
  .footer {
    .footer-content {
      h5 {
        font-size: 1rem;
      }
      .nav-link {
        font-size: 0.7rem;
      }
    }
  }
}
</style>


 