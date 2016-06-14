/// <reference path="libs/three.js" />

function Main() {
    var ui = new Ui();
	scene = new THREE.Scene();
	var meshModel;
	camera = new THREE.PerspectiveCamera(
		90, // kąt patrzenia kamery (FOV - field of view)
		4 / 3, // proporcje widoku
		0.1, // min renderowana odległość
		10000 // max renderowana odległość
	);
	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xFFFFFF);
	renderer.setSize(window.innerWidth, window.innerHeight);
	

	//var axis = new THREE.AxisHelper(2000);
	//scene.add(axis);

	camera.position.x = 0;
	camera.position.y = 400;
	camera.position.z = 400;
	scene.add(camera);

	camera.lookAt(scene.position);
    //light
	var light = new THREE.PointLight(0xffffff, 1.4, 0);
	light.position.set(-125, 1400,125);
	scene.add(light);
    //
    //sb mafia
	
	var skybox_tab = [];
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb1.jpg') }));
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb2.jpg') }));
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb3.jpg') }));
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb4.jpg') }));
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb5.jpg') }));
	skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/sb6.jpg') }));

	mat4sb = new THREE.MeshFaceMaterial(skybox_tab);
	var geometrySB = new THREE.BoxGeometry(1500, 1500, 1500);
	var skybox = new THREE.Mesh(geometrySB, mat4sb);
    scene.add(skybox);
    
    // koniec sb mafii
	var client = io();
	var dice;

	var mongoData;

	client.on("onconnect", function (data) {
		console.log(data.clientName)
			for(i = 0; i < data.clients.length; i++)
			 	if(document.getElementById(data.clients[i].color) != null) {
			 		document.getElementById(data.clients[i].color + "Color").className = "colorCircles selected";
			 		document.getElementById(data.clients[i].color + "Color").style.backgroundColor = "#444444"; 
			 	}
		if(data.dice != null)
			dice = data.dice;
		mongoData = data.mongoData;
		console.log(mongoData)
	})

	var currentTurn = null;

	client.on("newTurn", function (data) {
		currentTurn = data.newTurn;
        ui.writeCurrentPlayer(data.newTurn);
        ui.setDice(data.dice);
   	})

   	client.on("winner", function (data) {
   		var kolor = null;
   		switch(data.color) {
   			case "red":
   				kolor = "czerwony";
   				break;
   			case "blue":
   				kolor = "niebieski";
   				break;
   			case "orange":
   				kolor = "pomarańczowy";
   				break;
   			case "purple":
   				kolor = "fioletowy";
   				break;

   		}
		alert("Wygrał: " + kolor);
		if(selectedColorDiv.id == data.color) {
			var nickname = prompt("Podaj swój nick")
			client.emit("winnerName", { name: nickname, color: kolor })
		}
   	})

   	turtles = [];

   	client.on("newMove", function (data) {
		turtles = data.turtles;
		for(i = 0; i < turtles.length; i++) {
			scene.getObjectByName(turtles[i].name).position.x = turtles[i].x;
			scene.getObjectByName(turtles[i].name).position.z = turtles[i].z;
		}
   	})

	selectedColorDiv = null;

	
	var rc = new Raycasting();

	window.onclick = function (e) {
		if(e.target.parentNode.className == "colors") {
			console.log(e.target.style.backgroundColor)
			if(e.target.style.backgroundColor != "rgb(68, 68, 68)") {
				if(selectedColorDiv != null) {
					selectedColorDiv.className = "colors";
				}
				selectedColorDiv = e.target.parentNode;
				selectedColorDiv.className += " selfSelected";
			}
		}
	}

	window.onkeydown = function (e) {
		if(e.which == 13)
			if(currentTurn == selectedColorDiv.id)
				client.emit("newTurn", {})
	}

	document.getElementById("select").onclick = function() {
		if(selectedColorDiv != null)
			initGame();
	}

	function initGame() {
		client.emit("setColor", { color: selectedColorDiv.id })
		document.getElementById("chooseColor").style.visibility = "hidden";
		ui.writeColor(selectedColorDiv.id);
		ui.drawDice();
		ui.setDice(dice);
		controls = new THREE.OrbitControls( camera );
		controls.addEventListener( 'change', renderer );
		model1 = model.returnModel1();
				///anim
		model2.parseAnimations();
		tablica = [];
		for (var key in model1.geometry.animations) {
				if (key === 'length' || !model1.geometry.animations.hasOwnProperty(key)) continue;
				tablica.push(key);
		}
		model1.playAnimation(tablica[0], 5);
		model2.playAnimation(tablica[0], 5);
		model3.playAnimation(tablica[0], 5);
		model4.playAnimation(tablica[0], 5);

		scene.add(model1);
		scene.add(model2);
		scene.add(model3);
		scene.add(model4);

		/////////////////team blue

		ninjaBlue1.parseAnimations();
		ninjaBlue1.playAnimation(tablica[1], 5);
		ninjaBlue2.playAnimation(tablica[1], 5);
		ninjaBlue3.playAnimation(tablica[1], 5);
		ninjaBlue4.playAnimation(tablica[1], 5);

		scene.add(ninjaBlue1);
		scene.add(ninjaBlue2);
		scene.add(ninjaBlue3);
		scene.add(ninjaBlue4);
			///////////////// team orange
		ninjaOrange1.parseAnimations();
		ninjaOrange1.playAnimation(tablica[12], 5);
		ninjaOrange2.playAnimation(tablica[12], 5);
		ninjaOrange3.playAnimation(tablica[12], 5);
		ninjaOrange4.playAnimation(tablica[12], 5);

		scene.add(ninjaOrange1);
		scene.add(ninjaOrange2);
		scene.add(ninjaOrange3);
		scene.add(ninjaOrange4);
		///////////////// purple
		ninjaPurple1.parseAnimations();
		ninjaPurple1.playAnimation(tablica[11], 5);
		ninjaPurple2.playAnimation(tablica[11], 5);
		ninjaPurple3.playAnimation(tablica[11], 5);
		ninjaPurple4.playAnimation(tablica[11], 5);

		scene.add(ninjaPurple1);
		scene.add(ninjaPurple2);
		scene.add(ninjaPurple3);
		scene.add(ninjaPurple4);

		ui.helper();
		ui.sala(mongoData);
		document.body.appendChild(renderer.domElement);
		ui.sound();
		

		
	}

	document.addEventListener("mousedown", onDocumentMouseDown, false);

    var raycaster = new THREE.Raycaster(); 
    var mouseVector = new THREE.Vector2();

    var thisTurtle = null;

    function onDocumentMouseDown(event) {

        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);

        var intersects = raycaster.intersectObjects(scene.children,true);

        if (intersects.length > 0) {
            console.log("Ninja " + intersects[0].object.name + " " + intersects[0].object.position.x + " " + intersects[0].object.position.z);
            if (intersects[0].object.name.substr(0, 5) == "ninja") {
            	if(intersects[0].object.name.substr(5, (intersects[0].object.name.length - 6)).toLowerCase() == selectedColorDiv.id) {
            		console.log(currentTurn)
            		if(selectedColorDiv.id == currentTurn) {
		                thisTurtle = intersects[0].object;
		                console.log(thisTurtle);
		                client.emit("newMove", { name: thisTurtle.name, color: intersects[0].object.name.substr(5, (intersects[0].object.name.length - 6)) })
		            }
	            }
            }
        }
    }

	var fieldElement = new FieldElement();
	scene.add(fieldElement.getFieldElement());

	var model = new Model();

	var clock = new THREE.Clock();

	function animateScene() {
		requestAnimationFrame(animateScene);
		renderer.render(scene, camera);
		//animacja modelu
		var delta = clock.getDelta();
		if (typeof model1 != 'undefined') {
			model1.updateAnimation(delta * 1000);
			model2.updateAnimation(delta * 1000);
			model3.updateAnimation(delta * 1000);
			model4.updateAnimation(delta * 1000);

			ninjaBlue1.updateAnimation(delta * 1000);
			ninjaBlue2.updateAnimation(delta * 1000);
			ninjaBlue3.updateAnimation(delta * 1000);
			ninjaBlue4.updateAnimation(delta * 1000);

			ninjaOrange1.updateAnimation(delta * 1000);
			ninjaOrange2.updateAnimation(delta * 1000);
			ninjaOrange3.updateAnimation(delta * 1000);
			ninjaOrange4.updateAnimation(delta * 1000);

			ninjaPurple1.updateAnimation(delta * 1000);
			ninjaPurple2.updateAnimation(delta * 1000);
			ninjaPurple3.updateAnimation(delta * 1000);
			ninjaPurple4.updateAnimation(delta * 1000);

		}
	}
	animateScene();
}
