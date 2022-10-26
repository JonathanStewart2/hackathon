'use strict';
const express = require('express');
const app = express();
const routes = require("./routes.js");
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session')
const cookieParser = require("cookie-parser")
const passport = require('passport');

app.use(passport.initialize())
app.use(passport.session())
app.use(cors());
app.use(bodyParser.json());

// LOGGER
const logger = (req,res,next) => {
    console.log(`Request received at: ${new Date()}`);
    next()
}

app.use(
  session({
  secret: 'and in the darkness bind them', 
  resave: false,
  saveUninitialized: false
  })
)

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});


// app.post('/login/password',
//   passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
//   function(req, res) {
//     res.redirect('/~' + req.user.username);
//   });


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