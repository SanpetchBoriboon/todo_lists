require('dotenv').config()

module.exports = {
  database_url: process.env.database_url,
  port: process.env.port,
  environment: process.env.environment,
}
