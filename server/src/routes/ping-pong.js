const route = require("express").Router();
const db = require("../../database-connecting");

const logConfig = require("../logs/config");
const logger = logConfig.getLogger();

const tableNamne = "ping_pong_table";

route.get("/ping", async (req, res) => {
  try {
    const message = await db(tableNamne).select();
    res.status(200).send(message);
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

module.exports = route;
