const http = require("http");
const fs = require("fs");

const fileContent = fs.readFileSync("CSS grid(tut 39).html")

// now we will create a server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end(fileContent);

})

server.listen(80,"127.0.0.1",()=>{
    console.log("listening on 80! server");
})