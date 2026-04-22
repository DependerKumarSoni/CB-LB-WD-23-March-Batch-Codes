const { readFile, writeFile } = require('./util/file');
const path = require("path");

const filePath = path.join(__dirname, 'data', 'text.json');
const filePath2 = path.join(__dirname, 'data', 'output.json');
// const filePath = "./data/text.json";
console.log("FilePath: ", filePath);
async function getNotes() {
    const notes = await readFile(filePath);
    return notes;
}

async function addNotes(req, res) {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    })

    req.on("end", async () => {
        const note = JSON.parse(body);
        console.log("✔️✔️ Notes: ", note);
        const newNote = await writeFile(filePath2, note);
        res.end(newNote);
    })

}

module.exports = { getNotes, addNotes }