<template>
  <!-- OLD 404 PAGE -->
  <!-- <section class="not-found">
    <h1>Lost in space?</h1>
    <div class="not-found-img">
      <NotFoundImg />
    </div>
    <div class="not-found-info">
      <p>The page you requested could not be found</p>
      <router-link to="/" class="cart-btn">Back to Home</router-link>
    </div>
  </section>-->
  <section class="page_404">
    <h1 class="text-center">Lost in the jungle?</h1>
    <div class="four_zero_four_bg"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-offset-1 text-center">
            <div class="contant_box_404">
              <p>The page you are looking for not avaible!</p>
              <router-link to="/shop" class="link_404 cart-btn">Go Shopping</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import NotFoundImg from '../assets/svg/404.svg';
export default {
  components: {
    // NotFoundImg
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/_variables.scss';
.page_404 {
  padding: 40px 0;
  background: #fff;
}

h1 {
  font-size: 2.5rem;
}
.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}
.link_404 {
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 425px) {
  .page_404 {
    h1 {
      font-size: 2rem;
    }
    .contant_box_404 {
      p {
        font-size: 1rem;
      }
    }
  }
}
// OLD 404 STYLE
@mixin fontStyle {
  font-weight: 600;
}
.not-found {
  text-align: center;
  h1 {
    font-size: 3.5rem;
    @include fontStyle;
  }
  .not-found-img {
    svg {
      max-width: 100%;
      path[d='M0 0h1440v1024H0z'] {
        fill: transparent;
      }
      margin-right: 0;
    }
  }
  .not-found-info {
    p {
      @include fontStyle;
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 425px) {
  .not-found {
    h1 {
      font-size: 2rem;
    }
    .not-found-info {
      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>