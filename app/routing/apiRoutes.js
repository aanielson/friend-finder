var friends = require("../data/friends.js");
// ## Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. 
// This will be used to display a JSON of all possible friends.

module.exports = function (app) {
    // Displays all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.

    // Create New Friends - takes in JSON input
    app.post("/api/friends", function(req, res) { 
        //-----------------------create new friend with survey input-----------------------
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        // Using a RegEx Pattern to remove spaces from newFriend
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newFriend = newFriend.name.replace(/\s+/g, "").toLowerCase();
        //more stuff here to pull in form input
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);

        //-----------------------handle the compatibility logic-----------------------
        //-----------------------no idea how to do this yet-----------------------
        
        // ## Determine the user's most compatible friend using the following as a guide:
        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). -- in suvey.html
        // With that done, compare the difference between current user's scores against those from other users,
        //question by question.

        //necessary variables
        var userScore = newFriend.scores;
        var friendsDifferences = [];
        var leastDifference;
        var bestfriend;
        //Add up the differences to calculate the totalDifference.
        // sqrt((q1a-q1b)^2) all the way through 10 = totalDifference + i
            //compare minmum
        // Example:
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            var difference;
            for (var j = 0; j < userScore.length; j++) {
                // ### Remember to use the absolute value of the differences.
                //Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
                difference = Math.abs(friends[i].scores[x] - userScore[x]);
                totalDifference += difference;               
            }
            //push to an array
            friendsDifferences.push(totalDifference);
            //sort array so that the smallest difference is at the first spot
            friendsDifferences.sort(function(a, b) {
                return a - b;
            });   
        }
        // The closest match will be the user with the least amount of difference.
        //store that smallest difference in a variable
        leastDifference = friendsDifferences[0];

        ///match that least difference with the friend it belongs to
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            var difference;
            for (var j = 0; j < userScore.length; j++) {
                difference = Math.abs(friends[i].scores[x] - userScore[x]);
                totalDifference += difference;  
            }
            //once a match is found between the leastDifference and the friends array, that is the bestfriend!
            if (leastDifference === totalDifference) {
                bestfriend = friends[i];
                return bestfriend;
            }  
        }
    });
}
