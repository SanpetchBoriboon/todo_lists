const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { port, environment, base_url } = require('./environment-configs')

const logsConfig = require('./src/logs/log-configs')

const routes = require('./src/routes')
const { errorLogger, errorResponder, invalidPathHandler } = require('./src/middlewares/error-handler')

const app = express()
const logger = logsConfig.getLogger()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const httpLogReq = environment === 'production' ? morgan('combined') : morgan('dev')

app.use(httpLogReq)

app.use(routes)

app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

app.listen(port, () => {
  logger.info(`app listening at ${base_url}:${port}`)
})
