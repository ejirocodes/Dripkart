<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: '/',
        brandImage: require('../assets/logo.png'),
        brandImageAltText: 'Dripkart',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'New Releases',
            path: '/new-releases',
            subMenuOptions: [
              {
                isLinkAction: true,
                type: 'link',
                text: 'SHOP ALL NEW ARRIVALS',
                subText:
                  'All the lastest sneaker from the top brands at your feet.',
                path: './new-arrivals'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'NIKELAB',
                subText: 'The latest sneakers from addidas at your feet',
                path: './nike-lab'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'ADDIDASLAB',
                subText: 'The latest sneakers from addidas at your feet',
                path: './addidas-lab'
              }
            ]
          },
          {
            type: 'link',
            text: 'Shop',
            path: '/shop',
            subMenuOptions: [
              {
                type: 'link',
                text: 'Customer Service',
                path: './customer-service'
              },
              {
                type: 'link',
                text: 'Accounting',
                path: './accounting'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Reception',
                path: './reception',
                iconLeft: ''
              }
            ]
          },
          {
            type: 'link',
            text: 'Men',
            path: '/men-sneakers'
          },
          {
            type: 'link',
            text: 'Women',
            path: '/women-sneakers'
          },
          {
            type: 'link',
            text: 'About',
            path: './about',
            iconRight: ''
          }
        ],
        menuOptionsRight: [
          {
            type: 'button',
            text: 'Signup',
            path: '/signup',
            class: 'login-btn signup-custom'
          },
          {
            type: 'link',
            text: 'Cart',
            path: './cart',
            class: 'cart-btn',
            iconRight:
              '<svg height="30px" viewBox="-35 0 512 512.00102" width="35px" xmlns="http://www.w3.org/2000/svg"><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/></svg>'
          }
        ]
      }
    };
  }
};
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
</script>

<style lang="scss">
@import '../assets/sass/_variables.scss';
@import '../assets/sass/bounce-to-right.scss';
#main-navbar {
  position: sticky;
  top: 0;
  z-index: 2;
  background: rgba($color: #fff, $alpha: 0.9);
}
.vnb {
  .signup-custom {
    padding: 0.6rem 1.6rem;
    .login-btn:hover {
      background: $colour-pri-hover !important;
    }
  }
  .login-btn {
    @include hvr-bounce-to-right;
    background: $colour-pri !important;
    color: #fff !important;
  }
}
.vnb__sub-menu-options__option__link:hover {
  border-left: 2px solid $colour-pri;
  background-color: $colour-pri;
}
.vnb__sub-menu-options__option__link__text-wrapper__text {
  color: $colour-uni;
  font-size: 1rem;
}
.vnb__sub-menu-options__option__link__text-wrapper__sub-text {
  color: $colour-uni;
}
.vnb__menu-options__option__link {
  text-transform: uppercase;
  font-weight: 600;
  color: $colour-uni;
}
@media screen and (max-width: 991px) {
  .vnb__popup__bottom__menu-options__option__link--no-highlight,
  .vnb__popup__bottom__sub-menu-options__option__link {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: $colour-uni;
    line-height: 1.4;
    padding: 10px 24px;
    border-left: none;
  }
  .vnb__popup__bottom__menu-options {
    border-left: 2px solid $colour-pri;
    border-right: 2px solid $colour-pri;
  }
  .vnb__popup__bottom__menu-options__option__link {
    font-size: 1.2rem;
  }
}
.vnb__menu-options__option__button__icon--right {
  margin-left: 0;
  margin-right: 5px;
  transform: scaleX(-1);
}
.vnb__menu-options__option__link__icon svg {
  max-height: none !important;
}
.tippy-tooltip.light-theme[x-placement^=bottom] .tippy-arrow {
  background-color: transparent !important;
}
.vnb__menu-options__option__link:hover {
  text-decoration: underline;
}
</style>