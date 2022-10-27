'use strict';
const express = require('express');
const app = express();
const routes = require("./routes.js");
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session')
const cookieParser = require("cookie-parser")
const passport = require('./auth.js');
const logger = require('morgan');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SECRET, 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));


// LOGGER
// const logger = (req,res,next) => {
//     console.log(`Request received at: ${new Date()}`);
//     next()
// }

app.use(routes, logger);

app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || `Unknown error`);
    next();
})

const server = app.listen(4417, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
})


module.exports = server;