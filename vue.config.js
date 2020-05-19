module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/src/assets/sass/variables.scss";`
        }
      }
    }
  }
};