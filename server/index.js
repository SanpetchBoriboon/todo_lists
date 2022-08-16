const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const { port, environment } = require('./config')

const logsConfig = require('./src/logs/config')

const routes = require('./src/routes')
const { errorLogger, errorResponder, invalidPathHandler } = require('./src/middlewares/errorHandler')

const app = express()
const portConnect = port || 3000
const logger = logsConfig.getLogger()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const httpLogReq = environment === 'production' ? morgan('combined') : morgan('dev')

app.use(httpLogReq)

app.use(routes)

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

app.listen(port, () => {
  logger.info(`app listening at port:${portConnect}`)
})
