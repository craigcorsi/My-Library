var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var works = [
    {
        keyword: 'didion1',
        title: 'The Year of Magical Thinking',
        author: 'Joan Didion',
        genre: 'memoir',
        notes: 'There was a scene I liked but forgot; I think she was writing her late husband letters and to-do lists even though he had died...',
    }, {
        keyword: 'geometry1',
        title: 'A Mathematical Space Odyssey: Solid Geometry in the 21st Century',
        author: 'Claudi Alsina and Roger Nelson',
        genre: 'mathematics',
        notes: 'I loved being able to show an 8th-grader the visual proofs of summation formulas.',
    }, {
        keyword: 'anshaw1',
        title: 'The Last Speaker of the Language',
        author: 'Carol Anshaw',
        genre: 'short fiction',
        notes: "Perfect last image of Darlyn's alcoholic mother's new boyfriend teaching her prodigal daughter how to gamble",
    }
];



app.get("/", function (req, res) {
    res.send("Welcome to my library! Try routes /api/works followed by /didion1, /geometry1, or /anshaw1!");
});

app.get("/api/works", function (req, res) {
    return res.json(works);
});

app.get("/api/works/:work", function (req, res) {
    var chosen = req.params.work;
    console.log(chosen);

    for (var i = 0; i < works.length; i++) {
        if (chosen === works[i].keyword) {
            return res.json(works[i]);
        }
    }
    return res.send("No entry found!");
});



// add new work to library
app.post("/api/works", function(req, res){
    var newWork = req.body;
    console.log(newWork);
    works.push(newWork);
    res.json(newWork);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});