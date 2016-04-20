// file : /config/webpack-production.config.js

const webpack = require('webpack')
const WebpackConfig = require('webpack-config')

module.exports = new WebpackConfig().extend('./config/webpack-base.config.js').merge({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})
