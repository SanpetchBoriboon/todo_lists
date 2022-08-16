const bodyParser = require('body-parser')
const express = require('express')
const statusCode = require('http-status')

const logsConfig = require('./src/logs/config')
const { PORT } = require('./config')

const routes = require('./src/routes')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
  const error = new Error('Error Occured')
  res.status(statusCode.INTERNAL_SERVER_ERROR).json({
    error: {
      message: error.message,
    },
  })
})

app.use(routes)

const logger = logsConfig.getLogger()

const port = PORT || 3000
app.listen(port, () => {
  logger.info(`Sever connected: ${port}`)
})
