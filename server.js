//require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require ("express-handlebars");

var PORT = process.env.PORT || 8080;

//express to run
var app = express();

// Link from public folder
app.use(express.static("public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
