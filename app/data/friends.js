// ## Your survey should have 10 questions of your choosing.
//Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

// ## Your server.js file should require the basic npm packages we've used in class: express and path.

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ## You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
var friends = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name":"John",
        "photo":"https://www.goodfreephotos.com/albums/people/young-man-smiling-and-thumbs-up.jpg",
        "scores":[
            5,
            5,
            4,
            4,
            2,
            3,
            2,
            4,
            2,
            4
        ]
    },
    {
        "name":"Miguel",
        "photo":"https://www.goodfreephotos.com/cache/people/old-wrinkly-person-smiling.jpg",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            1
        ]
    },
    {
        "name":"Hailee",
        "photo":"https://www.publicdomainpictures.net/pictures/30000/velka/young-girl-smiling.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            1,
            1,
            1
        ]
    },
    {
        "name":"Ashley",
        "photo":"https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            4,
            5
        ]
    }
]


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  