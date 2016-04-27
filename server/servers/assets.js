const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../../webpack.config.js')

const compiler = webpack(config)

/**
 * Create a webpack dev server and lift it on the given port
 * @param {int} PORT - the port on whish lift the server
 */
module.exports = (PORT) => {
  const server = new WebpackDevServer(compiler, {
    contentBase: './server',
    publicPath: '/assets/',
    stats: { colors: true }
  })

  server.listen(PORT, 'localhost', function () {
    console.log(`WebpackDevServer running on port ${PORT}`)
  })
}
