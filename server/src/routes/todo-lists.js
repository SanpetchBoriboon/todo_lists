const route = require("express").Router();
const db = require("../../database-connecting");

const logConfig = require("../logs/config");
const logger = logConfig.getLogger();

const tableName = "todo_table";

route.get("/", async (req, res) => {
  try {
    const response = await db(tableName).select();
    res.status(200).send({ results: response });
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

module.exports = route;
