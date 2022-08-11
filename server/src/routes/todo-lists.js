const route = require("express").Router();
const knex = require("../../database/database");

const logConfig = require("../logs/config");
const logger = logConfig.getLogger();

route.get("/", async (req, res) => {
  try {
    const response = await knex("todo_table").select();
    res.status(200).send({ results: response });
  } catch (error) {
    logger.error(error);
    throw error;
  }
});

module.exports = route;
