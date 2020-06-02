module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "~@/assets/sass/_variables.scss"`
      }
    }
  },
  devServer: {
    host: 'localhost'
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
};