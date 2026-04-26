const http = require("http");
const { handleRequest } = require("./routes");

const server = http.createServer((req, res) => {
    // console.log("Server is working fine...!");
    handleRequest(req, res);
})

server.listen(3000, () => {
    console.log("Server is running on PORT: 3000");
})