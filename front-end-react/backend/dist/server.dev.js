"use strict";

//import basics
var express = require('express');

var cors = require('cors');

require('dotenv').config(); //the server and port


var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); //start the server

app.listen(port, function () {
  console.log("server is running on port: ".concat(port));
});