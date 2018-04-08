const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8800;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))

var routes_setter = require('./config/routes.js');
routes_setter(app);


app.listen(port, function() {
  console.log('Listening on', port);
});
