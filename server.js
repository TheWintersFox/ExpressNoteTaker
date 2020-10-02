const express = require("express");
// var DB = require('./db/db.json');
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { notDeepEqual } = require("assert");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static('public'));

//API ROUTES
app.get("/api/notes", (req, res) => {
    // read the db.json file
    //return 
    //parse?
    res.sendFile(path.join(__dirname, "./db/db.json"));
});

app.post("/api/notes", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body
    let uniqueID = uuidv4();
    newNote.id = uniqueID; 
    savedNotes.push(newNote);
    res.sendFile(path.join(__dirname, "./db/db.json"));
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});

app.delete("/api/notes/:id", (req, res) => {
    console.log(req.params);
    savedNote.filter(note=>note.id !== req.params.id)
    // let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // let newNote = req.body
    // let uniqueID = uuidv4();
    // newNote.id = uniqueID; 
    // savedNotes.push(newNote);
    // res.sendFile(path.join(__dirname, "./db/db.json"));
    // fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    // res.json(savedNotes);
});

//HTML ROUTES
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});




app.listen(PORT, function () {
    console.log("APP listening on PORT " + PORT);
});