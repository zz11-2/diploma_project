// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
  
// })
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('less')
      .test(/\.less$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('less-loader')
      .loader('less-loader')
      .end();
  },
};