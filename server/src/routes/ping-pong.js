const route = require("express").Router();
const db = require("../../database-connecting");

const logConfig = require("../logs/config");
const logger = logConfig.getLogger();

route.get("/ping", async (req, res) => {
  try {
    const messages = await db("ping_pong_table").select();
    messages.push("pong");
    res.status(200).send({ message: messages });
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

module.exports = route;
