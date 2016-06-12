/// <reference path="../libs/three.js" />

function FieldElement() {
    var plansza = new THREE.Object3D();
    //getQuarter();
    plansza.add(getQuarter("red"));
    plansza.add(getQuarter("blue"));
    plansza.add(getQuarter("orange"));
    plansza.add(getQuarter("purple"));

    this.getFieldElement = function() {
        return plansza;
    }

    function getQuarter(color)
    {
        var fieldElementObject = new THREE.Object3D();
        var materialOuterLine = new THREE.LineBasicMaterial({ color: 0x000000 });
        var geometryOuterLine = new THREE.Geometry();
        geometryOuterLine.vertices.push(new THREE.Vector3(0, 0, 0));
        geometryOuterLine.vertices.push(new THREE.Vector3(0, 0, 50));
        geometryOuterLine.vertices.push(new THREE.Vector3(50, 0, 50));
        geometryOuterLine.vertices.push(new THREE.Vector3(50, 0, 0));
        geometryOuterLine.vertices.push(new THREE.Vector3(0, 0, 0));

        switch (color) {
            case "red":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0xEB1515 });
                break;
            case "blue":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0x4366F0 });
                break;
            case "orange":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0xFFAB24 });
                break;
            case "purple":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0x931AAB });
                break;
        }
        var geometryPlane = new THREE.PlaneGeometry(50, 50);

        //win baza
        var bazachujaza = 14;
        for (var i = 1; i <= 4; i++) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(25, 0, 25);
            meshPlane.position.x += 50 * i;
            meshPlane.name = color + "_field_" + bazachujaza;
            lineOuterLine.position.x += 50 * i;

            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
            bazachujaza--;
        }
        //startowy
        var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
        var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
        lineOuterLine.position.set(-50, 0, 250);
        meshPlane.rotation.x = Math.PI / 2 + Math.PI;
        meshPlane.position.set(275, 0, 75);
        meshPlane.name = color + "_field_1";
        fieldElementObject.add(meshPlane);
        fieldElementObject.add(lineOuterLine);

        //baza
        var lid=15;
        for (var i = 0; i < 2; i++){
            for (var j = 0; j < 2; j++)
            {
                    var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
                    var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
                    meshPlane.rotation.x = Math.PI / 2 + Math.PI;
                    meshPlane.position.set(225, 0, 225);
                    meshPlane.position.x += 50 * i;
                    meshPlane.position.z += 50 * j;
                    meshPlane.name = color + "_field_" +lid;
                    lineOuterLine.position.set(200, 0, 200);
                    lineOuterLine.position.z += 50 * i;
                    lineOuterLine.position.x += 50 * j;
                    fieldElementObject.add(meshPlane);
                    fieldElementObject.add(lineOuterLine);
                    lid++;
                }
        }

        //1
        for (var i = 0; i < 3; i++) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
            ///zmieniam material
            var materialPlane = new THREE.MeshBasicMaterial({ color: 0xbbbbbb });
            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(225, 0, 75);
            meshPlane.position.x -= 50 * i;
            meshPlane.name = color+"_field_" + (i+2);
            lineOuterLine.position.z += 50;
            lineOuterLine.position.x -= 50 * (i-4);

            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
        }
        //2
        for (var i = 5; i >= 1; i--) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(75, 0, 25);
            meshPlane.position.z += 50 * i;
            meshPlane.name = color + "_field_" + (i + 4);
            lineOuterLine.position.z += 50 * i;
            lineOuterLine.position.x += 50;
            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
        }

        //last
        var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
        var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
        lineOuterLine.position.set(0, 0, 250);
        meshPlane.rotation.x = Math.PI / 2 + Math.PI;
        meshPlane.position.set(25, 0, 275);
        meshPlane.name = color + "_field_10";
        fieldElementObject.add(meshPlane);
        fieldElementObject.add(lineOuterLine);

        switch (color)
        {
            case "red":
                return fieldElementObject;
            case "blue":
                fieldElementObject.rotation.y = Math.PI / 2 + Math.PI;
                fieldElementObject.position.x = +50;
                return fieldElementObject;
            case "orange":
                fieldElementObject.rotation.y = Math.PI;
                fieldElementObject.position.x = +50;
                fieldElementObject.position.z = +50;
                return fieldElementObject;
            case "purple":
                fieldElementObject.rotation.y = Math.PI / 2;
                fieldElementObject.position.z = +50;
                return fieldElementObject;

        }

    }
}
