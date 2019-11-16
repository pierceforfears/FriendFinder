const possibleFriends = require("../data/friends");

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
        const newFriend = req.body;

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        friends.push(newFriend)

        res.json(newFriend);

    });

    app.post("/api/clear", function (req, res) {
        //Empty out the arrays of data
        possibleFriends.length = 0;

        res.json({ ok: true });

    });
}

