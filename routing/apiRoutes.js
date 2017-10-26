var friends = require("../data/friends")

module.exports = function(app) { 
console.log("res");
app.get("/api/people", function(req, res) {
  res.JSON(friends)

});


}

