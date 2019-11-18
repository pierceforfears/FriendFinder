const possibleFriends = require("../data/friends.js");
const path = require("path");

module.exports = function (app) {
    // displays JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(possibleFriends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    app.post("/api/friends", function (req, res) {

        let newFriend = req.body;

        for (let i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] === "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] === "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        let comparisonArray = [];

        for (let i = 0; i < possibleFriends.length; i++) {
            let comparedFriend = possibleFriends[i];
            let totalDifference = 0;

            for (let j = 0; j < comparedFriend.scores.length; j++) {
                let differenceOneScore = Math.abs(comparedFriend.scores[j] - newFriend.scores[j]);
                totalDifference += differenceOneScore;
            }
            comparisonArray[i] = totalDifference;
        }

        let bestFriendNum = comparisonArray[0];
        let bestFriend = 0;

        for (let i = 1; i < comparisonArray.length; i++) {
            if (comparisonArray[i] < bestFriendNum) {
                bestFriendNum = comparisonArray[i];
                bestFriend = i;
            }
        }

        possibleFriends.push(newFriend);
        res.json(possibleFriends[bestFriend]);



        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        // console.log(newFriend);

        // friends.push(newFriend)

        // res.json(newFriend);

    });

    // app.post("/api/clear", function (req, res) {
    //     //Empty out the arrays of data
    //     possibleFriends.length = 0;

    //     res.json({ ok: true });

    // });
}

