const http = require("http");
const fs = require("fs");

const handler = function (req, res){
    const headers = {
        'content-type': 'text/html'
    }

    if(req.url == "/home"){
        returnFile("home.html",res);
    }
    else if(req.url == "/about"){
        returnFile("description.html",res);
    }
    else if(req.url == "/thirdpage"){
        returnFile("thirdpage.html",res);
    }
    else{
        res.writeHead(404, headers);
        res.write("Page not found");
    }
    

}

const server = http.createServer(handler);

server.listen(8080);

function returnFile(fileName,res){
    const headers = {
        'Content-Type': 'text/html'
    }
    res.writeHead(200, headers);

    fs.readFile("D:/ITI/NodeJS/Lec 1/Lab 1"+fileName,function(err,data){
        res.write(data);
        res.end();
    })
}


