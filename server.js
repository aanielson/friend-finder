// ## Your survey should have 10 questions of your choosing.
//Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// ## Your server.js file should require the basic npm packages we've used in class: express and path.

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//point the server to the api routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  