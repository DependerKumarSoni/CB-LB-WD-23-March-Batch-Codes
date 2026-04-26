const { readFile, writeFile } = require('./util/file');
const fs = require('fs');
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
    return new Promise((resolve, reject) => {
        let body = "";
    
        req.on("data", chunk => {
            body += chunk;
            console.log("✔️✔️ This is the chunk: ", JSON.parse(chunk));
        })
        
        console.log("💵💵 This is the body: ", body);
        
        req.on("end", async () => {
            try {
                const note = JSON.parse(body);
                console.log("✔️✔️ Notes: ", note);
                await writeFile(filePath2, note);
                resolve(JSON.stringify({
                    status: "Ok",
                    success: true,
                    data: note
                }))
            } catch (error) {
                reject(error);
            }
        })
    })
}

function streamNote (req, res) {
    const stream = fs.createReadStream(filePath, "utf-8");

    stream.on("data", chunk => {
        console.log("chunk: ", chunk);
        res.write(chunk);
    })

    stream.on("end", () => {
        res.end(res);
    })

    stream.on("error", err => {
        res.statusCode = 500;
        res.end("Error reading file");
    })
} 


module.exports = { getNotes, addNotes, streamNote }