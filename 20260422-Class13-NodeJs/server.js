const http = require("http");
const { handleRequest } = require("./routes");

const server = http.createServer((req, res) => {
    handleRequest(req, res);
})

server.listen(5500, () => {
    console.log("Server is running on PORT: 5500");
})