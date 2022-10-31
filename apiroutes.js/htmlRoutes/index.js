const path = require('path');
const router = require('express').Router();

router.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname, '../../main_Folder/notes.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

module.exports = router;