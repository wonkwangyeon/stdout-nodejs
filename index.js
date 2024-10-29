const express = require('express')
const app = express()
const port = 3001
const logger = require("./config/logger");

let stdoutRouter = require('./routes/stdout.js');
app.use('/', stdoutRouter);


app.listen(port, () => {
  logger.info(`Start stdout service port - ${port}`)
})