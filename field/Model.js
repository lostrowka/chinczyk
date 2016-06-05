function Model() {
    var loader = new THREE.JSONLoader();
    var meshModel;
    loader.load('/libs/tris.js', function (geometry, mat) {
        geometry.computeMorphNormals();
        // dwa materialy - jeden zwykly, drugi do swiatla (TBA)
        var mat_ninja = new THREE.MeshBasicMaterial(
                   {
                       map: THREE.ImageUtils.loadTexture("gfx/ralph.png"),
                       morphTargets: true, //konieczne do animacji
                       morphNormals: true, //konieczne animacji
                       specular: 0xffffff,
                       shininess: 60,
                       shading: THREE.SmoothShading,
                       vertexColors: THREE.FaceColors
                   });
        var mat_swiatlo = new THREE.MeshLambertMaterial(
                    {
                        map: THREE.ImageUtils.loadTexture("gfx/ralph.png"),
                        morphTargets: true, //konieczne do animacji
                        morphNormals: true, //konieczne animacji
                        specular: 0xffffff,
                        shininess: 60,
                        shading: THREE.SmoothShading,
                        vertexColors: THREE.FaceColors

                    });

        meshModel = new THREE.MorphAnimMesh(geometry, mat_ninja);
        meshModel.name = "ninja";

        //meshModel.rotation.y = 400;
        meshModel.position.z = 275;
        meshModel.position.x = 275;
        meshModel.position.y = 25;
        //meshModel.scale.set(1, 1, 1);

        //scene.add(meshModel);
        /*
        meshModel.parseAnimations();

        tablica = [];
        for (var key in meshModel.geometry.animations) {
            if (key === 'length' || !meshModel.geometry.animations.hasOwnProperty(key)) continue;
            tablica.push(key);
        }
        meshModel.playAnimation(tablica[0], 5);
        */
    });

    this.returnModel = function () {
        return meshModel;
    }
}
