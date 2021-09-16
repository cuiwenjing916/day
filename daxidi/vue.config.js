module.exports = {
  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        // ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/static/scss/base.scss";'
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  }
}
