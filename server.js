//Express creates routes, no express, no routes
var express = require ("express");

//process.env.PORT is to connect to Heroku and 8080 is for local use
var PORT = process.env.PORT || 8080;

var app = express ();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());