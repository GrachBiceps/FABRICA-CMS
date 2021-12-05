module.exports = {
    devServer: {
      proxy: {
        '/auth': {
          target: 'http://localhost:3001/'
        },
      }
    }
}