const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule

    // File loader for SCSS
    .oneOf('file')
      .resourceQuery(/file/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'img/[name].[hash:8].[ext]'
        })
      .end()
    .end()

    // OSVG loader for Vue
    .oneOf('inline')
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
      .end()
    .end()
  }
}