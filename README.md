# Description
In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. Express handles routing, and the app is deployed to Heroku so other users can fill it out.

## Deployed App
You can view our deployed project by clicking <a href="https://aanielsonfriendfinder.herokuapp.com/">HERE</a>
Watch my demo by clicking <a href="https://youtu.be/DPc9erbdPnE">HERE</a>

## Set Up

The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

**The server.js** file requires the basic npm packages of express and path.

**The htmlRoutes.js** file includes two routes:

  1. A GET Route to /survey which should display the survey page.
  2. A default, catch-all route that leads to home.html which displays the home page.

**The apiRoutes.js** file contains two routes:

  1. A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  2. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

### The application's data is saved inside of app/data/friends.js as an array of objects. Each of these objects follows the format below.
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
  }

### The user's most compatible friend is computed using the following as a guide:

Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

The Friend Finder App uses the absolute value of the differences. Put another way: no negative solutions! The app calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.

Once the current user's most compatible friend is found, the result ais displayed as a modal pop-up showing both the name and picture of the closest match.

## Technologies Used
### Front-end Technologies 
* HTML
* CSS
* Handlebars
* Bootstrap
* Javascript
* jQuery

### Back-end Technologies
* Node.js
* MySQL
* Express

## Creator
[Abby Nielson](https://github.com/aanielson)
