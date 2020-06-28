const {resolve} = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'src/assets'),
        '@components': resolve(__dirname, 'src/components'),
        '@data': resolve(__dirname, 'src/data'),
        '@graphql': resolve(__dirname, 'src/graphql'),
        '@layouts': resolve(__dirname, 'src/layouts'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@utils': resolve(__dirname, 'src/utils'),
      },
    },
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
      .yearsOfStudy({
        name: 'img/[name].[hash:8].[ext]',
      })
      .end()
      .end()

      // OSVG loader for Vue
      .oneOf('inline')
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .end();
  },
};
