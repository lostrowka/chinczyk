function Raycasting() {
    document.addEventListener("mousedown", onDocumentMouseDown, false);

    var raycaster = new THREE.Raycaster(); 
    var mouseVector = new THREE.Vector2();

    function onDocumentMouseDown(event) {

        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);

        var intersects = raycaster.intersectObjects(scene.children,true);

        if (intersects.length > 0) {
            console.log(intersects[0].object.name);
            if (intersects[0].object.name == "ninjaRed") {
                this_turtle = intersects[0].object;
                console.log(this_turtle);
            }

            if (intersects[0].object.name == "" && typeof this_turtle != 'undefined')
            {
                var new_pos = intersects[0].object.position;
                this_turtle.position.x = new_pos.x;
                this_turtle.position.z = new_pos.z;
            }

            

        }


    }

}