require('dotenv').config()

module.exports = {
  base_url: process.env.base_url || 'http://localhost',
  database_url: process.env.database_url || 'postgresql://postgres:postgres@127.0.0.1/postgres',
  environment: process.env.environment || 'development',
  port: process.env.port || 3000,
  token_key: process.env.token_key || 'qwerty',
}
