const fs = require ('fs');

const path = require ('path');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, ' ./db.json'),
        json.strigify({
            notes: noteArray
        }, null, 2)
    )
}