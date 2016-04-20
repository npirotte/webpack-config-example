
'use strict'

const WebpackConfig = require('webpack-config')

const TARGET = process.env.npm_lifecycle_event
var webpackConfig

if (TARGET === 'start') {
  webpackConfig = './config/webpack-dev.config.js'
}

if (TARGET === 'test') {
  webpackConfig = './config/webpack-test.config.js'
}

// Default configuration
if (TARGET === 'build' || !TARGET) {
  webpackConfig = './config/webpack-production.config.js'
}

module.exports = new WebpackConfig().extend(webpackConfig)
