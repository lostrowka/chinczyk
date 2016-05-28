﻿/// <reference path="../libs/three.js" />

function FieldElement() {
    var plansza = new THREE.Object3D();
    //getQuarter();
    plansza.add(getQuarter("red"));
    plansza.add(getQuarter("blue"));
    plansza.add(getQuarter("yellow"));
    plansza.add(getQuarter("green"));

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
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0xEE0000 });
                break;
            case "blue":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0x0000CC });
                break;
            case "yellow":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0xEEFF00 });
                break;
            case "green":
                var materialPlane = new THREE.MeshBasicMaterial({ color: 0x00AA00 });
                break;
        }
        var geometryPlane = new THREE.PlaneGeometry(50, 50);

        for (var i = 1; i <= 4; i++) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);

            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(25, 0, 25);
            meshPlane.position.x += 50 * i;
            lineOuterLine.position.x += 50 * i;

            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
        }
        for (var i = 5; i > 0; i--) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);

            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(25, 0, 75);
            meshPlane.position.x += 50 * i;
            lineOuterLine.position.z += 50;
            lineOuterLine.position.x += 50 * i;

            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
        }
        for (var i = 1; i < 6; i++) {
            var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);

            var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
            meshPlane.rotation.x = Math.PI / 2 + Math.PI;
            meshPlane.position.set(75, 0, 25);
            meshPlane.position.z += 50 * i;
            lineOuterLine.position.z += 50 * i;
            lineOuterLine.position.x += 50;
            fieldElementObject.add(meshPlane);
            fieldElementObject.add(lineOuterLine);
        }
        var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
        var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
        lineOuterLine.position.set(0, 0, 250);
        meshPlane.rotation.x = Math.PI / 2 + Math.PI;
        meshPlane.position.set(25, 0, 275);
        fieldElementObject.add(meshPlane);
        fieldElementObject.add(lineOuterLine);

        for (var i = 0; i < 2; i++){
            for (var j = 0; j < 2; j++) 
            {
                    var lineOuterLine = new THREE.Line(geometryOuterLine, materialOuterLine);
                    var meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
                    meshPlane.rotation.x = Math.PI / 2 + Math.PI;
                    meshPlane.position.set(225, 0, 225);
                    meshPlane.position.x += 50 * i;
                    meshPlane.position.z += 50 * j;
                    lineOuterLine.position.set(200, 0, 200);
                    lineOuterLine.position.z += 50 * i;
                    lineOuterLine.position.x += 50 * j;
                    fieldElementObject.add(meshPlane);
                    fieldElementObject.add(lineOuterLine);
                }
            }

        switch (color)
        {
            case "red":
                return fieldElementObject;
            case "blue":
                fieldElementObject.rotation.y = Math.PI / 2 + Math.PI;
                fieldElementObject.position.x = +50;
                return fieldElementObject;
            case "yellow":
                fieldElementObject.rotation.y = Math.PI;
                fieldElementObject.position.x = +50;
                fieldElementObject.position.z = +50;
                return fieldElementObject;
            case "green":
                fieldElementObject.rotation.y = Math.PI / 2;
                fieldElementObject.position.z = +50;
                return fieldElementObject;

        }

    }
}