const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: process.env.PORT,
    proxy: `http://localhost:3001/`
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
