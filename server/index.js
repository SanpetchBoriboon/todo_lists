const bodyParser = require('body-parser')
const express = require('express')
const logsConfig = require('./src/logs/config')
const { PORT } = require('./config')

const routes = require('./src/routes')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(routes)

const logger = logsConfig.getLogger()

const port = PORT || 3000
app.listen(port, () => {
  logger.info(`Sever connected: ${port}`)
})
