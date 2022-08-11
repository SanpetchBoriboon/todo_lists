const log4js = require("log4js");

log4js.configure({
  appenders: {
    files: { type: "file", filename: __dirname + "/files/log4js.log" },
    console: { type: "console" },
  },
  categories: {
    default: { appenders: ["files", "console"], level: "ALL" },
  },
});

const logger = log4js;

module.exports = logger;
