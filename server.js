
// dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 
require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);


var friends = require("./data/friends")
app.get("/api/friends", function(req, res) {
  res.JSON(friends);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

