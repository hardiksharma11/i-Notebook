const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Router 1: fetching all notes

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Some error occured");
    }

})

//Router 2: Adding a note

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
], async (req, res) => {



    try {
        const { title, description, tag } = req.body;

        //if errors return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };

        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        });

        const savedNote = await note.save();

        res.json(savedNote);

    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Some error occured");
    }
})

//Route 3: Update note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        //create a new object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        //Allow updation only if the user owns the Note

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("Some error occured");
    }
})

//Route 4: Delete a note
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {
        //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }


        //Allow deleteion only if the user owns the Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router