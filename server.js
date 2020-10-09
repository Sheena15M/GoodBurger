//Express creates routes, no express, no routes
var express = require ("express");

//process.env.PORT is to connect to Heroku and 8080 is for local use
var PORT = process.env.PORT || 8080;

var app = express ();

app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Handlebar time
var exphbs = require ("express-handlebars");
app. engine ("handlebars", exphbs({ defaultLayout: "main" }));
app. set ("view engine", "handlebars");

//Server acess for the routes
var routes = require("./controllers/burgers_controller.js");

app.use (routes);

//The server starts here 
app.listen(PORT, function(){
   console.log("Server listening on: http://localhost:" + PORT); 
});