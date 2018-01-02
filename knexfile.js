// Update with your config settings.

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
