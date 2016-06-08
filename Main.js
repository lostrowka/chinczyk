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
				model2 = model.returnModel2();
				model3 = model.returnModel3();
				model4 = model.returnModel4();
            ///anim
				model2.parseAnimations();
				meshModel.parseAnimations();
				tablica = [];
				for (var key in meshModel.geometry.animations) {
						if (key === 'length' || !meshModel.geometry.animations.hasOwnProperty(key)) continue;
						tablica.push(key);
				}
				meshModel.playAnimation(tablica[0], 5);
				model2.playAnimation(tablica[0], 5);
				model3.playAnimation(tablica[0], 5);
				model4.playAnimation(tablica[0], 5);

				scene.add(meshModel);
				scene.add(model2);
				scene.add(model3);
				scene.add(model4);
		    /////////////////team blue 
				ninjaBlue1 = model.returnNinjaClone1();
				ninjaBlue2 = model.returnNinjaClone2();
				ninjaBlue3 = model.returnNinjaClone3();
				ninjaBlue4 = model.returnNinjaClone4();

				ninjaBlue1.parseAnimations();
				ninjaBlue1.playAnimation(tablica[0], 5);
				ninjaBlue2.playAnimation(tablica[0], 5);
				ninjaBlue3.playAnimation(tablica[0], 5);
				ninjaBlue4.playAnimation(tablica[0], 5);

				scene.add(ninjaBlue1);
				scene.add(ninjaBlue2);
				scene.add(ninjaBlue3);
				scene.add(ninjaBlue4);
		    ///// team orange
				ninjaOrange1 = model.returnNinjaOrange1();
				ninjaOrange2 = model.returnNinjaOrange2();
				ninjaOrange3 = model.returnNinjaOrange3();
				ninjaOrange4 = model.returnNinjaOrange4();

				ninjaOrange1.parseAnimations();
				ninjaOrange1.playAnimation(tablica[0], 5);
				ninjaOrange2.playAnimation(tablica[0], 5);
				ninjaOrange3.playAnimation(tablica[0], 5);
				ninjaOrange4.playAnimation(tablica[0], 5);

				scene.add(ninjaOrange1);
				scene.add(ninjaOrange2);
				scene.add(ninjaOrange3);
				scene.add(ninjaOrange4);
		}

		client.on("onconnect", function (data) {
			 console.log(data.clientName)
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
				if (typeof meshModel != 'undefined') {
				    meshModel.updateAnimation(delta * 1000);
				    model2.updateAnimation(delta * 1000);
				    model3.updateAnimation(delta * 1000);
				    model4.updateAnimation(delta * 1000);
				    ninjaBlue1.updateAnimation(delta * 1000);
				    ninjaBlue2.updateAnimation(delta * 1000);
				    ninjaBlue3.updateAnimation(delta * 1000);
				    ninjaBlue4.updateAnimation(delta * 1000);
				}
		}
		animateScene();
}
