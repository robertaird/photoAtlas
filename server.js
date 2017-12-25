require('dotenv').config();
const express = require('express');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');
const Photos = require('./app/models/photo.js');
const request = require('./app/request-handlers.js');
const routes = require('./app/routes.js');

const app = express();

const port = process.env.PORT || 8080;


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "id_user, id, items, Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(routes);
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
