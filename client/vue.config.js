const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
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
