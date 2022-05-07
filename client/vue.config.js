const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: process.env.SERVER_PORT,
    proxy: `http://localhost:49001/`
  },
  configureWebpack: {
    module: {
    },
    plugins: [ 
    ]
  },
  transpileDependencies: true,

  pwa: {
    name: 'FABRICA',
    themeColor: '#FFFFFF'
  },

  css: {
    sourceMap: true
  },

  productionSourceMap: false
})
