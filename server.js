const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const auth = require('./routes/api/users')


const app = express();

// require and configure dotenv.
require('dotenv').config();
// connect to the database with Mongoose
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Mount our custom auth middleware to protect routes below it
app.use(require('./config/auth'));
app.use('/api/horoscopes', require('./routes/api/horoscopes'));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});