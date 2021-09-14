module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001/'
        },
        '/auth': {
          target: 'http://localhost:3002/'
        },
        "/userapi": {
          target: 'http://localhost:3080/',
          pathRewrite: {'^/userapi' : '/api'}
        }
      }
    }
}