const express = require('express')
var expressRestResource = require('express-rest-resource')
var nedb = require('nedb')

module.exports = (PORT) => {
  const app = express()
  const users = new nedb() // eslint-disable-line

  app.use('/person', expressRestResource({db: users}))

  app.listen(PORT, () => {
    console.log(`Backend server listening to port ${PORT}`)
  })
}
