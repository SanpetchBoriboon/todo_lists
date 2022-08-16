const bodyParser = require('body-parser')
const express = require('express')

const logsConfig = require('./src/logs/config')
const { PORT } = require('./config')

const routes = require('./src/routes')
const { errorLogger, errorResponder, invalidPathHandler } = require('./src/middlewares/errorHandler')

const app = express()
const port = PORT || 3000
const logger = logsConfig.getLogger()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(routes)

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

app.listen(port, () => {
  logger.info(`app listening at port:${port}`)
})
