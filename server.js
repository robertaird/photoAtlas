require('dotenv').config();
const express = require('express');
const path = require('path');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');
const Photos = require('./app/models/photo.js');
const request = require('./app/request-handlers.js');
const routes = require('./app/routes.js');

const app = express();

const {PORT: port = 8080, NODE_ENV} = process.env;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

app.use(routes);
app.use('/test-data', express.static(`${__dirname}/config/test-data`));

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// app.use(express.static(`${__dirname}/dist`));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
