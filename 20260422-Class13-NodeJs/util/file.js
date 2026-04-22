const fs = require("fs");

function readFile(filePath) {
    console.log("Inside the readFile function");
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return reject(err);
            resolve(data || "[]");
        });
    });
}

async function writeFile(filepath, data) {
    return await fs.promises.writeFile(filepath, JSON.stringify(data, null, 2));
}

module.exports = { readFile, writeFile }