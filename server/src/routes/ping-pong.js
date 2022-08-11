const route = require("express").Router();
const knex = require("../../database/database");

const logConfig = require("../logs/config");
const logger = logConfig.getLogger();

route.get("/ping", async (req, res) => {
  try {
    res.status(200).send({ message: "pong" });
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

module.exports = route;
