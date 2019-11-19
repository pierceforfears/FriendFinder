const path = require("path");

module.exports = function (app) {
    // displays survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // catch-all displaying home.html 
    app.get("*", function (req, res) {
        res.sendfile(path.join(__dirname, "/../public/home.html"))
    })
}