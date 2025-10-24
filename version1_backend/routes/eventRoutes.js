// EXTERNAL MODULES
const express = require("express");
const { postAddEvent } = require("../controllers/eventController");

const eventRouter = express.Router();

eventRouter.post("/add", postAddEvent);

module.exports = eventRouter;
