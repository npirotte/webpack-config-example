const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('../../webpack.config.js')

const compiler = webpack(config)

/**
 * Create a webpack dev server and lift it on the given port
 * @param {number} PORT - the port on whish lift the server
 * @param {number} API_PORT - the port on whish will be binded the proxy
 */
module.exports = (PORT, API_PORT) => {
  if (!PORT || !API_PORT) {
    throw new Error('PORT and API_PORT must be set !')
  }

  const server = new WebpackDevServer(compiler, {
    contentBase: './server',
    publicPath: '/assets/',
    stats: { colors: true },
    proxy: {
      '/api/*': {
        target: `http://localhost:${API_PORT}`
      }
    }
  })

  server.listen(PORT, 'localhost', function () {
    console.log(`WebpackDevServer listening to port ${PORT}`)
  })
}
