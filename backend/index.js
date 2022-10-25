'use strict';
const express = require('express');
const app = express();
const routes = require("./routes.js");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// LOGGER
const logger = (req,res,next) => {
    console.log(`Request received at: ${new Date()}`);
    next()
}

// ROUTES
app.use(routes, logger);

// ERRORS
app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || `Unknown error`);
    next();
})

// start the server
const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})


module.exports = server;