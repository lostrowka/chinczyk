var qs = require("querystring")
var http = require("http")
var fs = require("fs")
var socketio = require("socket.io")

var server = http.createServer(function (req, res) {
    console.log(req.method)

    switch (req.method) {
        case "GET":

            console.log("Zadany: " + req.url)

            if (req.url == "/") {
                fs.readFile("index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/style.css") {
                fs.readFile("style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/index.html") {
                fs.readFile("index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/Main.js") {
                fs.readFile("Main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/field/FieldElement.js") {
                fs.readFile("field/FieldElement.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/libs/OrbitControls.js") {
                fs.readFile("libs/OrbitControls.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                });
            }
            else if (req.url == "/libs/three.js") {
                fs.readFile("libs/three.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                });
            }
            break;

        case "POST":
            servResp(req, res)
            break;
    }
})

function servResp(req, res) {
    var allData = "";

    req.on("data", function (data) {
        console.log("data: " + data)
        allData += data;
    })

    req.on("end", function (data) {
        var finish = qs.parse(allData)
        switch (finish.action) {

        }
    })
}

server.listen(3000);
console.log("serwer staruje na porcie 3000 - ten komunikat zobaczysz tylko raz")


var io = socketio.listen(server)
io.sockets.on("connection", function (client) {
    console.log("klient sie podłączył" + client.id)
    // client.id - unikalna nazwa klienta generowana przez socket.io
    client.emit("onconnect", {
        clientName: client.id
    })
})
