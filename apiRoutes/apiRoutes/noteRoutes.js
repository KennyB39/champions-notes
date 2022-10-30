const router = require('express').Router();
const {note} = require('../../db.json');
const {createNewNote, noteDeleteNote} = require('../../lib/noteFunction')

router.get('/notes',(req, res) =>{
    let saved = notes 
    res.json(saved);
})
router.post('/notes', (req, res) =>{
    req.body.id = notes.legnth.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/id', (req,res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;