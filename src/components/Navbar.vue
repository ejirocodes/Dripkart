<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script>
import cartIcon from '../assets/images/supermarket.svg'
export default {
  name: "Navbar",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("../assets/logo.png"),
        brandImageAltText: "Dripkart",
        // collapseButtonImageOpen: require('../src/assets/images/collapse-menu-dark.png'),
        // collapseButtonImageClose: require('../src/assets/images/times.png'),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "New Releases",
            path: "/new-releases",
            subMenuOptions: [
              {
                isLinkAction: true,
                type: "link",
                text: "SHOP ALL NEW ARRIVALS",
                subText:
                  "All the lastest sneaker from the top brands at your feet.",
                path: "./new-arrivals"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "NIKELAB",
                subText: "The latest sneakers from addidas at your feet",
                path: "./nike-lab"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "ADDIDASLAB",
                subText: "The latest sneakers from addidas at your feet",
                path: "./addidas-lab"
              }
            ]
          },
          {
            type: "link",
            text: "Shop",
            path: "/shop",
            subMenuOptions: [
              {
                type: "link",
                text: "Customer Service",
                path: "./customer-service"
              },
              {
                type: "link",
                text: "Accounting",
                path: "./accounting"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Reception",
                path: "./reception",
                iconLeft:
                  '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'
              }
            ]
          },
          {
            type: "link",
            text: "Men",
            path: "/men-sneakers"
          },
          {
            type: "link",
            text: "Women",
            path: "/women-sneakers"
          },
          {
            type: "link",
            text: "About",
            path: "./about",
            iconRight: `<${cartIcon} />`,
              // '<svg id="<i-telephone></i-telephone>" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 490.674 490.674" style="enable-background:new 0 0 490.674 490.674;" xml:space="preserve" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path style="fill:#FFC107;" d="M488,78.276c-2.026-2.294-4.94-3.607-8-3.605H96c-5.891-0.001-10.668,4.773-10.669,10.664	c0,0.717,0.072,1.433,0.216,2.136l42.667,213.333c1.014,4.967,5.384,8.534,10.453,8.533c0.469,0.031,0.939,0.031,1.408,0l320-42.667	c4.807-0.642,8.576-4.446,9.173-9.259l21.333-170.667C490.989,83.681,490.047,80.592,488,78.276z"/> <circle cx="16" cy="21" r="4" /> </svg>'
          }
        ],
        menuOptionsRight: [
          {
            type: "link",
            text: "Signup",
            path: "/signup",
            class: "login-btn signup-custom"
          },
          {
            type: "button",
            text: "Login",
            path: "./login",
            class: "login-btn",
            iconRight:
              '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </>'
          }
        ]
      }
    };
  },
  beforeCreate() {
    console.log(cartIcon);
    
  }
};
import "vue-navigation-bar/dist/vue-navigation-bar.css";
</script>

<style lang="scss">
@import "../assets/sass/variables.scss";
@import "../assets/sass/bounce-to-right.scss";
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
      background: $colour-pri-hover;
    }
  }
  .login-btn {
    @include hvr-bounce-to-right;
    background: $colour-pri;
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
</style>