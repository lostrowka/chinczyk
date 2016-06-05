/// <reference path="libs/three.js" />

function Main() {
    var scene = new THREE.Scene();
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
    camera.position.y = 300;
    camera.position.z = 300;
    scene.add(camera);

    camera.lookAt(scene.position);

    var client = io();

    document.getElementById("start").onclick = function() {
        document.getElementById("cover").style.visibility = "hidden";
        controls = new THREE.OrbitControls( camera );
        controls.addEventListener( 'change', renderer );
    }

    client.on("onconnect", function (data) {
       alert(data.clientName)
    })

    var fieldElement = new FieldElement();
    scene.add(fieldElement.getFieldElement());

    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
    }
    animateScene();
}
