require('dotenv').config()

module.exports = {
  base_url: process.env.base_url,
  database_url: process.env.database_url,
  environment: process.env.environment,
  port: process.env.port,
}
