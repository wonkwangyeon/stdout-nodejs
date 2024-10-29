const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.get("/logStdout", function (req, res) {
  try {
    let level = req.query.level;
    let msg = req.query.msg;
    if (level == "" || level == undefined) level = "all";

    if (msg == "" || msg == undefined) msg = "Log Hello World";

    level = level.toUpperCase();
    switch (level) {
      case "DEBUG":
        logger.debug(msg);
        break;
      case "INFO":
        logger.info(msg);
        break;
      case "WARN":
        logger.warn(msg);
        break;
      case "ERROR":
        logger.error(msg);
        break;
      default:
        logger.debug(msg);
        logger.info(msg);
        logger.warn(msg);
        logger.error(msg);
    }

    let result = {
      level: level,
      msg: msg,
    };

    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get("/print", function (req, res) {
  try {
    let msg = req.query.msg;

    if (msg == "" || msg == undefined) msg = "Print Hello World";

    console.log(msg);

    let result = {
      level: "console.log",
      msg: msg,
    };
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;
