// file : /config/webpack-base.config.js

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackConfig = require('webpack-config')
const path = require('path')

module.exports = new WebpackConfig().merge({
  entry: {
    app: ['./src/app.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'app.js',
    library: 'App',
    libraryTarget: 'umd' // others: var, this, commonjs, commonjs2, amd, umd
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(ico)|(jpg)|(png)|(jpeg)|(gif)$/,
        loaders: ['file-loader', 'image-webpack?optimizationLevel=7&interlaced=false']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  }
})
