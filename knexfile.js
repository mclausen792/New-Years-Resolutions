// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'resolutions'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
