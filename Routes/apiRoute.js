const router = require("express").Router();
var DB = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');



module.exports = function(app) {
    router.get("/api/notes", (req, res) => {
      
        // read the db.json file
        //return 
        //parse?
        res.json(DB)
    });

    

    // app.post('/api/notes', (req,res) =>{
    //     //grab the note info from the front end
        
    //     //adding an id
    //     //var newNote = {title, text, id: uuidv1()}

    //     //get all your note (router.get), write in all updateNotes, return the newNote
    //     fswrite.DB
    // });

    // app.delete('/api/notes/:id', (req,res) => {
    //     //get all your notes, remove the note with the :id
    //     //write the newly filtered notes
    // });
};

