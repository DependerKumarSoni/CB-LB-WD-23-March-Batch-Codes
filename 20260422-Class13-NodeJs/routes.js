const { getNotes, addNotes } = require('./controller');

async function handleRequest(req, res) {
    if (req.method == "GET" && req.url == "/notes") {
        const notes = await getNotes(req, res);
        res.end(notes);
    }
    if (req.method == "POST" && req.url == "/notes") {
        const notes = await addNotes(req, res);
        res.end(notes);
    }
}

module.exports = { handleRequest };