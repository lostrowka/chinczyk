/// <reference path="libs/three.js" />

function Main() {
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
	document.body.appendChild(renderer.domElement);

	//var axis = new THREE.AxisHelper(2000);
	//scene.add(axis);

	camera.position.x = 0;
	camera.position.y = 400;
	camera.position.z = 400;
	scene.add(camera);

	camera.lookAt(scene.position);

	var client = io();

	client.on("onconnect", function (data) {
		 console.log(data.clientName)
		 for(i = 0; i < data.clients.length; i++)
		 	if(document.getElementById(data.clients[i].color) != null) {
		 		document.getElementById(data.clients[i].color + "Color").className = "colorCircles selected";
		 		document.getElementById(data.clients[i].color + "Color").style.backgroundColor = "#444444"; 
		 	}
	})

	var currentTurn = null;

	client.on("newTurn", function (data) {
		currentTurn = data.newTurn;
        ui.writeCurrentPlayer(data.newTurn);
   	})

	selectedColorDiv = null;

	var ui = new Ui();
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
		ninjaBlue1.playAnimation(tablica[0], 5);
		ninjaBlue2.playAnimation(tablica[0], 5);
		ninjaBlue3.playAnimation(tablica[0], 5);
		ninjaBlue4.playAnimation(tablica[0], 5);

		scene.add(ninjaBlue1);
		scene.add(ninjaBlue2);
		scene.add(ninjaBlue3);
		scene.add(ninjaBlue4);
			///////////////// team orange
		ninjaOrange1.parseAnimations();
		ninjaOrange1.playAnimation(tablica[0], 5);
		ninjaOrange2.playAnimation(tablica[0], 5);
		ninjaOrange3.playAnimation(tablica[0], 5);
		ninjaOrange4.playAnimation(tablica[0], 5);

		scene.add(ninjaOrange1);
		scene.add(ninjaOrange2);
		scene.add(ninjaOrange3);
		scene.add(ninjaOrange4);
		///////////////// purple
		ninjaPurple1.parseAnimations();
		ninjaPurple1.playAnimation(tablica[0], 5);
		ninjaPurple2.playAnimation(tablica[0], 5);
		ninjaPurple3.playAnimation(tablica[0], 5);
		ninjaPurple4.playAnimation(tablica[0], 5);

		scene.add(ninjaPurple1);
		scene.add(ninjaPurple2);
		scene.add(ninjaPurple3);
		scene.add(ninjaPurple4);
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
