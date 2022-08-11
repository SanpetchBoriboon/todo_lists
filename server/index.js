const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const logsConfig = require("./src/logs/config");

const pingPongRoutes = require("./src/routes/ping-pong");
const todoListRoutes = require("./src/routes/todo-lists");

const PORT = 3000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const logger = logsConfig.getLogger();

app.use(pingPongRoutes);
app.use(todoListRoutes);

app.listen(PORT, () => {
  logger.info(`Sever connected: ${PORT}`);
});
