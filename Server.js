var qs = require("querystring")
var http = require("http")
var fs = require("fs")
var socketio = require("socket.io")

var server = http.createServer(function (req, res) {
		//console.log(req.method)

		switch (req.method) {
				case "GET":

						//console.log("Zadany: " + req.url)

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
						else if (req.url == "/field/Model.js") {
								fs.readFile("field/Model.js", function (error, data) {
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
						else if (req.url == "/libs/tris.js") {
								fs.readFile("libs/tris.js", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'application/javascript' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/libs/socketio.js") {
								fs.readFile("libs/socketio.js", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'application/javascript' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/ralph.png") {
								fs.readFile("gfx/ralph.png", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/leo.png") {
								fs.readFile("gfx/leo.png", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/mich.png") {
								fs.readFile("gfx/mich.png", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/donatello.png") {
								fs.readFile("gfx/donatello.png", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/1.jpg") {
								fs.readFile("gfx/1.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/2.jpg") {
								fs.readFile("gfx/2.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/3.jpg") {
								fs.readFile("gfx/3.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/4.jpg") {
								fs.readFile("gfx/4.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/5.jpg") {
								fs.readFile("gfx/5.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/gfx/6.jpg") {
								fs.readFile("gfx/6.jpg", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'image/gif' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/game_mechanics/Ui.js") {
								fs.readFile("game_mechanics/Ui.js", function (error, data) {
										res.writeHead(200, { 'Content-Type': 'application/javascript' });
										res.write(data);
										res.end();
								});
						}
						else if (req.url == "/game_mechanics/Raycasting.js") {
						    fs.readFile("game_mechanics/Raycasting.js", function (error, data) {
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

var clients = [];
var currentTurn = null;
var colors = ["red", "blue", "orange", "purple"];

var io = socketio.listen(server)
io.sockets.on("connection", function (client) {
		console.log("Klient sie podłączył: " + client.id)
		client.emit("onconnect", { clientName: client.id, clients: clients })
		clients.push({id: client.id});

        client.on("setColor", function (data) {
            if(currentTurn == null)
                currentTurn = data.color;
            for(i = 0; i < clients.length; i++)
                if(clients[i].id == client.id)
                    clients[i].color = data.color;
            console.log(clients)       
            io.sockets.emit("newTurn", { newTurn: currentTurn });
        })

        client.on("newTurn", function (data) {
            index = colors.indexOf(currentTurn)
            var newTurn = null;
            while(newTurn == null) {
                if(index == 3)
                    index = 0;
                else
                    index++;
                for(k = 0; k < clients.length; k++)
                    if(clients[k].color == colors[index]) {
                        newTurn = colors[index];
                        currentTurn = newTurn;
                    }
            }
            console.log("newTurn " + newTurn)
            io.sockets.emit("newTurn", { newTurn: newTurn });
        })
})





