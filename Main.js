/// <reference path="libs/three.js" />

function Main() {
		var scene = new THREE.Scene();
		var meshModel;
		var camera = new THREE.PerspectiveCamera(
				90, // kąt patrzenia kamery (FOV - field of view)
				4 / 3, // proporcje widoku
				0.1, // min renderowana odległość
				10000 // max renderowana odległość
		);
		var renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xFFFFFF);
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		var axis = new THREE.AxisHelper(2000);
		scene.add(axis);

		camera.position.x = 0;
		camera.position.y = 400;
		camera.position.z = 400;
		scene.add(camera);

		camera.lookAt(scene.position);

		var client = io();

		document.getElementById("start").onclick = function() {
				document.getElementById("cover").style.visibility = "hidden";
				controls = new THREE.OrbitControls( camera );
				controls.addEventListener( 'change', renderer );
				meshModel = model.returnModel();
				meshModel.parseAnimations();

				tablica = [];
				for (var key in meshModel.geometry.animations) {
						if (key === 'length' || !meshModel.geometry.animations.hasOwnProperty(key)) continue;
						tablica.push(key);
				}
				meshModel.playAnimation(tablica[0], 5);
				scene.add(meshModel);
		}

		client.on("onconnect", function (data) {
			 alert(data.clientName)
		})

		var fieldElement = new FieldElement();
		scene.add(fieldElement.getFieldElement());

		var model = new Model();

		var clock = new THREE.Clock();

		function animateScene() {
				requestAnimationFrame(animateScene);
				renderer.render(scene, camera);

				//animacja modelu
				var delta = clock.getDelta();
				if (typeof meshModel != 'undefined')
						meshModel.updateAnimation(delta * 1000);
		}
		animateScene();
}
