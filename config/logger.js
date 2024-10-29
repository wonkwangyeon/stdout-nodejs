const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp(), // adds a timestamp property
    format.printf((log) => `${log.timestamp} ${log.level} : ${log.message}`)
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
