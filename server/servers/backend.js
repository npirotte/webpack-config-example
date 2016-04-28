const express = require('express')
const expressRestResource = require('express-rest-generator')
const Nedb = require('nedb')

/**
 * Create an api mock server and lift it on the given port
 * @param {number} PORT - the port on whish lift the server
 */
module.exports = (PORT) => {
  if (!PORT) {
    throw new Error('PORT and API_PORT must be set !')
  }

  const app = express()

  ;(() => {
    const users = new Nedb({
      timestampData: true
    })

    // This is some fake data I insert in our fake database
    users.insert([
      {
        firstName: 'Nicolas',
        lastName: 'Pirotte'
      },
      {
        firstName: 'Christelle',
        lastName: 'Adriaens'
      }
    ])

    const config = {
      db: users,
      beforeInsert: function (data) {
        return data
      },
      beforeSend: function (data) {
        data.id = data._id
        return data
      }
    }

    app.use('/api/person', expressRestResource(config))
  })()

  app.listen(PORT, () => {
    console.log(`Backend server listening to port ${PORT}`)
  })
}
