// file : /config/webpack-dev.config.js

const WebpackConfig = require('webpack-config')

module.exports = new WebpackConfig().extend('./config/webpack-base.config.js').merge({
  debug: true,
  output: {
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: './server'
  }
})
