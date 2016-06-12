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
						else if (req.url == "/gfx/sb1.JPG") {
						    fs.readFile("gfx/sb1.JPG", function (error, data) {
						        res.writeHead(200, { 'Content-Type': 'image/gif' });
						        res.write(data);
						        res.end();
						    });
						}
						else if (req.url == "/gfx/sb2.JPG") {
						    fs.readFile("gfx/sb2.JPG", function (error, data) {
						        res.writeHead(200, { 'Content-Type': 'image/gif' });
						        res.write(data);
						        res.end();
						    });
						}
						else if (req.url == "/gfx/sb3.JPG") {
						    fs.readFile("gfx/sb3.JPG", function (error, data) {
						        res.writeHead(200, { 'Content-Type': 'image/gif' });
						        res.write(data);
						        res.end();
						    });
						}
						else if (req.url == "/gfx/sb4.JPG") {
						    fs.readFile("gfx/sb4.JPG", function (error, data) {
						        res.writeHead(200, { 'Content-Type': 'image/gif' });
						        res.write(data);
						        res.end();
						    });
						}
						else if (req.url == "/gfx/sb5.JPG") {
						    fs.readFile("gfx/sb5.JPG", function (error, data) {
						        res.writeHead(200, { 'Content-Type': 'image/gif' });
						        res.write(data);
						        res.end();
						    });
						}
						else if (req.url == "/gfx/sb6.JPG") {
						    fs.readFile("gfx/sb6.JPG", function (error, data) {
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
var currentDice = null;
var fieldsTable = [
    {name: "red_field_1", x: 275, z: 75},
    {name: "red_field_2", x: 225, z: 75},
    {name: "red_field_3", x: 175, z: 75},
    {name: "red_field_4", x: 125, z: 75},
    {name: "red_field_5", x: 75, z: 75},
    {name: "red_field_6", x: 75, z: 125},
    {name: "red_field_7", x: 75, z: 175},
    {name: "red_field_8", x: 75, z: 225},
    {name: "red_field_9", x: 75, z: 275},
    {name: "red_field_10", x: 25, z: 275},
    {name: "red_field_11", x: 225, z: 25},
    {name: "red_field_12", x: 175, z: 25},
    {name: "red_field_13", x: 125, z: 25},
    {name: "red_field_14", x: 75, z: 25},
    {name: "red_field_15", x: 225, z: 225},
    {name: "red_field_16", x: 225, z: 275},
    {name: "red_field_17", x: 275, z: 225},
    {name: "red_field_18", x: 275, z: 275},
    {name: "blue_field_1", x: -25, z: 275},
    {name: "blue_field_2", x: -25, z: 225},
    {name: "blue_field_3", x: -25, z: 175},
    {name: "blue_field_4", x: -25, z: 125},
    {name: "blue_field_5", x: -25, z: 75},
    {name: "blue_field_6", x: -75, z: 75},
    {name: "blue_field_7", x: -125, z: 75},
    {name: "blue_field_8", x: -175, z: 75},
    {name: "blue_field_9", x: -225, z: 75},
    {name: "blue_field_10", x: -225, z: 25},
    {name: "blue_field_11", x: 25, z: 225},
    {name: "blue_field_12", x: 25, z: 175},
    {name: "blue_field_13", x: 25, z: 125},
    {name: "blue_field_14", x: 25, z: 75},
    {name: "blue_field_15", x: -175, z: 225},
    {name: "blue_field_16", x: -175, z: 275},
    {name: "blue_field_17", x: -225, z: 225},
    {name: "blue_field_18", x: -225, z: 275},
    {name: "orange_field_1", x: -225, z: -25},
    {name: "orange_field_2", x: -175, z: -25},
    {name: "orange_field_3", x: -125, z: -25},
    {name: "orange_field_4", x: -75, z: -25},
    {name: "orange_field_5", x: -25, z: -25},
    {name: "orange_field_6", x: -25, z: -75},
    {name: "orange_field_7", x: -25, z: -125},
    {name: "orange_field_8", x: -25, z: -175},
    {name: "orange_field_9", x: -25, z: -225},
    {name: "orange_field_10", x: 25, z: -225},
    {name: "orange_field_11", x: -175, z: 25},
    {name: "orange_field_12", x: -125, z: 25},
    {name: "orange_field_13", x: -75, z: 25},
    {name: "orange_field_14", x: -25, z: 25},
    {name: "orange_field_15", x: -175, z: -175},
    {name: "orange_field_16", x: -175, z: -225},
    {name: "orange_field_17", x: -225, z: -175},
    {name: "orange_field_18", x: -225, z: -225},
    {name: "purple_field_1", x: 75, z: -225},
    {name: "purple_field_2", x: 75, z: -175},
    {name: "purple_field_3", x: 75, z: -125},
    {name: "purple_field_4", x: 75, z: -75},
    {name: "purple_field_5", x: 75, z: -25},
    {name: "purple_field_6", x: 125, z: -25},
    {name: "purple_field_7", x: 175, z: -25},
    {name: "purple_field_8", x: 225, z: -25},
    {name: "purple_field_9", x: 275, z: -25},
    {name: "purple_field_10", x: 275, z: 25},
    {name: "purple_field_11", x: 25, z: -175},
    {name: "purple_field_12", x: 25, z: -125},
    {name: "purple_field_13", x: 25, z: -75},
    {name: "purple_field_14", x: 25, z: -25},
    {name: "purple_field_15", x: 225, z: -175},
    {name: "purple_field_16", x: 225, z: -225},
    {name: "purple_field_17", x: 275, z: -175},
    {name: "purple_field_18", x: 275, z: -225}
]

var redPath = [
    "red_field_1", "red_field_2", "red_field_3", "red_field_4", "red_field_5", "red_field_6", "red_field_7", "red_field_8", "red_field_9", "red_field_10", 
    "blue_field_1", "blue_field_2", "blue_field_3", "blue_field_4", "blue_field_5", "blue_field_6", "blue_field_7", "blue_field_8", "blue_field_9", "blue_field_10",
    "orange_field_1", "orange_field_2", "orange_field_3", "orange_field_4", "orange_field_5", "orange_field_6", "orange_field_7", "orange_field_8", "orange_field_9", "orange_field_10",
    "purple_field_1", "purple_field_2", "purple_field_3", "purple_field_4", "purple_field_5", "purple_field_6", "purple_field_7", "purple_field_8", "purple_field_9", "purple_field_10",
    "red_field_11", "red_field_12", "red_field_13", "red_field_14"
]

var bluePath = [
    "blue_field_1", "blue_field_2", "blue_field_3", "blue_field_4", "blue_field_5", "blue_field_6", "blue_field_7", "blue_field_8", "blue_field_9", "blue_field_10",
    "orange_field_1", "orange_field_2", "orange_field_3", "orange_field_4", "orange_field_5", "orange_field_6", "orange_field_7", "orange_field_8", "orange_field_9", "orange_field_10",
    "purple_field_1", "purple_field_2", "purple_field_3", "purple_field_4", "purple_field_5", "purple_field_6", "purple_field_7", "purple_field_8", "purple_field_9", "purple_field_10",
    "red_field_1", "red_field_2", "red_field_3", "red_field_4", "red_field_5", "red_field_6", "red_field_7", "red_field_8", "red_field_9", "red_field_10", 
    "blue_field_11", "blue_field_12", "blue_field_13", "blue_field_14"
]

var orangePath = [
    "orange_field_1", "orange_field_2", "orange_field_3", "orange_field_4", "orange_field_5", "orange_field_6", "orange_field_7", "orange_field_8", "orange_field_9", "orange_field_10",
    "purple_field_1", "purple_field_2", "purple_field_3", "purple_field_4", "purple_field_5", "purple_field_6", "purple_field_7", "purple_field_8", "purple_field_9", "purple_field_10",
    "red_field_1", "red_field_2", "red_field_3", "red_field_4", "red_field_5", "red_field_6", "red_field_7", "red_field_8", "red_field_9", "red_field_10", 
    "blue_field_1", "blue_field_2", "blue_field_3", "blue_field_4", "blue_field_5", "blue_field_6", "blue_field_7", "blue_field_8", "blue_field_9", "blue_field_10",
    "orange_field_11", "orange_field_12", "orange_field_13", "orange_field_14"
]

var purplePath = [
    "purple_field_1", "purple_field_2", "purple_field_3", "purple_field_4", "purple_field_5", "purple_field_6", "purple_field_7", "purple_field_8", "purple_field_9", "purple_field_10",
    "red_field_1", "red_field_2", "red_field_3", "red_field_4", "red_field_5", "red_field_6", "red_field_7", "red_field_8", "red_field_9", "red_field_10", 
    "blue_field_1", "blue_field_2", "blue_field_3", "blue_field_4", "blue_field_5", "blue_field_6", "blue_field_7", "blue_field_8", "blue_field_9", "blue_field_10",
    "orange_field_1", "orange_field_2", "orange_field_3", "orange_field_4", "orange_field_5", "orange_field_6", "orange_field_7", "orange_field_8", "orange_field_9", "orange_field_10",
    "purple_field_11", "purple_field_12", "purple_field_13", "purple_field_14"
]

var turtles = [
    { name: "ninjaRed1", x: 275, z: 275},
    { name: "ninjaRed2", x: 225, z: 225},
    { name: "ninjaRed3", x: 275, z: 225},
    { name: "ninjaRed4", x: 225, z: 275},
    { name: "ninjaBlue1", x: -175, z: 225},
    { name: "ninjaBlue2", x: -175, z: 275},
    { name: "ninjaBlue3", x: -225, z: 225},
    { name: "ninjaBlue4", x: -225, z: 275},
    { name: "ninjaOrange1", x: -175, z: -175},
    { name: "ninjaOrange2", x: -175, z: -225},
    { name: "ninjaOrange3", x: -225, z: -175},
    { name: "ninjaOrange4", x: -225, z: -225},
    { name: "ninjaPurple1", x: 225, z: -175},
    { name: "ninjaPurple2", x: 225, z: -225},
    { name: "ninjaPurple3", x: 275, z: -175},
    { name: "ninjaPurple4", x: 275, z: -225},
]

var io = socketio.listen(server)
io.sockets.on("connection", function (client) {
		console.log("Klient sie podłączył: " + client.id)
		client.emit("onconnect", { clientname: client.id, clients: clients })
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
            //console.log("newTurn " + newTurn)
            currentDice = Math.floor((Math.random() * 6) + 1);
            io.sockets.emit("newTurn", { newTurn: newTurn, dice: currentDice });
        })
})





