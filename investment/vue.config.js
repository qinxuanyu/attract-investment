module.exports = {
  lintOnSave: false,
  baseUrl: '/',
  outputDir: undefined,
  assetsDir: './',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer: {
    proxy: {
      '/invite_business_api': {
        target: 'http://47.105.108.139/invite_business_api',
        changeOrigin: true,
        pathRewrite:{
          '^/invite_business_api': ''
        }
      }
    }
  }
}