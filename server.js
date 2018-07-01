var express = require("express");

var app = express();
var PORT = 3000;

var notes = [
    {
        title: 'The Year of Magical Thinking',
        author: 'Joan Didion',
        genre: 'memoir',
        notes: 'There was a scene I liked but forgot; I think she was writing her late husband letters and to-do lists even though he had died...',
    }, {
        title: 'A Mathematical Space Odyssey: Solid Geometry in the 21st Century',
        author: 'Claudi Alsina and Roger Nelson',
        genre: 'mathematics',
        notes: 'I loved being able to show an 8th-grader the visual proofs of summation formulas.',
    }, {
        title: 'The Last Speaker of the Language',
        author: 'Carol Anshaw',
        genre: 'short fiction',
        notes: "Perfect last image of Darlyn's alcoholic mother's new boyfriend teaching her prodigal daughter how to gamble",
    }
];



app.get("/", function(req, res){
    res.send("Welcome to my library! Try routes /didion, /geometry, or /anshaw!");
});

app.get("/didion", function(req, res){
    res.json(notes[0]);
});

app.get("/geometry", function(req, res){
    res.json(notes[1]);
});

app.get("/anshaw", function(req, res){
    res.json(notes[2]);
});




app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});