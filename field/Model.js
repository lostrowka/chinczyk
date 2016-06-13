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

        meshModel = new THREE.MorphAnimMesh(geometry, mat_swiatlo);
        meshModel.name = "ninjaRed1";

        //meshModel.rotation.y = 400;
        meshModel.position.z = 275;
        meshModel.position.x = 275;
        meshModel.position.y = 25;
        //meshModel.scale.set(1, 1, 1);
        model2 = meshModel.clone();
        model2.name = "ninjaRed2";
        model2.position.set(225, 25, 225);
        model3 = meshModel.clone();
        model3.name = "ninjaRed3";
        model3.position.set(275, 25, 225);
        model4 = meshModel.clone();
        model4.name = "ninjaRed4";
        model4.position.set(225, 25, 275);

    });
    ///////////////////////////// niebieski //////////////////////////
    loader.load('/libs/tris.js', function (geometry, mat) {
        geometry.computeMorphNormals();
        // dwa materialy - jeden zwykly, drugi do swiatla (TBA)
        var mat_ninja = new THREE.MeshBasicMaterial(
                   {
                       map: THREE.ImageUtils.loadTexture("gfx/leo.png"),
                       morphTargets: true, //konieczne do animacji
                       morphNormals: true, //konieczne animacji
                       specular: 0xffffff,
                       shininess: 60,
                       shading: THREE.SmoothShading,
                       vertexColors: THREE.FaceColors
                   });
        var mat_swiatlo = new THREE.MeshLambertMaterial(
                    {
                        map: THREE.ImageUtils.loadTexture("gfx/leo.png"),
                        morphTargets: true, //konieczne do animacji
                        morphNormals: true, //konieczne animacji
                        specular: 0xffffff,
                        shininess: 60,
                        shading: THREE.SmoothShading,
                        vertexColors: THREE.FaceColors

                    });

        ninjaBlue1 = new THREE.MorphAnimMesh(geometry, mat_swiatlo);
        ninjaBlue1.name = "ninjaBlue1";
        ninjaBlue1.rotation.y = -Math.PI/2;
        ninjaBlue1.position.set(-175, 25, 225);
        ninjaBlue2 = ninjaBlue1.clone();
        ninjaBlue2.name = "ninjaBlue2";
        ninjaBlue2.position.set(-175, 25, 275);
        ninjaBlue3 = ninjaBlue1.clone();
        ninjaBlue3.name = "ninjaBlue3";
        ninjaBlue3.position.set(-225, 25, 225);
        ninjaBlue4 = ninjaBlue1.clone();
        ninjaBlue4.name = "ninjaBlue4";
        ninjaBlue4.position.set(-225, 25, 275);

    });
    ///////////////////////////// pomaranoczowy //////////////////////////
    loader.load('/libs/tris.js', function (geometry, mat) {
        geometry.computeMorphNormals();
        // dwa materialy - jeden zwykly, drugi do swiatla (TBA)
        var mat_ninja = new THREE.MeshBasicMaterial(
                   {
                       map: THREE.ImageUtils.loadTexture("gfx/mich.png"),
                       morphTargets: true, //konieczne do animacji
                       morphNormals: true, //konieczne animacji
                       specular: 0xffffff,
                       shininess: 60,
                       shading: THREE.SmoothShading,
                       vertexColors: THREE.FaceColors
                   });
        var mat_swiatlo = new THREE.MeshLambertMaterial(
                    {
                        map: THREE.ImageUtils.loadTexture("gfx/mich.png"),
                        morphTargets: true, //konieczne do animacji
                        morphNormals: true, //konieczne animacji
                        specular: 0xffffff,
                        shininess: 60,
                        shading: THREE.SmoothShading,
                        vertexColors: THREE.FaceColors

                    });

        ninjaOrange1 = new THREE.MorphAnimMesh(geometry, mat_swiatlo);
        ninjaOrange1.name = "ninjaOrange1";
        ninjaOrange1.rotation.y = Math.PI ;
        ninjaOrange1.position.set(-175, 25, -175);
        ninjaOrange2 = ninjaOrange1.clone();
        ninjaOrange2.name = "ninjaOrange2";
        ninjaOrange2.position.set(-175, 25, -225);
        ninjaOrange3 = ninjaOrange1.clone();
        ninjaOrange3.name = "ninjaOrange3";
        ninjaOrange3.position.set(-225, 25, -175);
        ninjaOrange4 = ninjaOrange1.clone();
        ninjaOrange4.name = "ninjaOrange4";
        ninjaOrange4.position.set(-225, 25, -225);

    });
    ///////////////////////////// fioletowy //////////////////////////
    loader.load('/libs/tris.js', function (geometry, mat) {
        geometry.computeMorphNormals();
        // dwa materialy - jeden zwykly, drugi do swiatla (TBA)
        var mat_ninja = new THREE.MeshBasicMaterial(
                   {
                       map: THREE.ImageUtils.loadTexture("gfx/donatello.png"),
                       morphTargets: true, //konieczne do animacji
                       morphNormals: true, //konieczne animacji
                       specular: 0xffffff,
                       shininess: 60,
                       shading: THREE.SmoothShading,
                       vertexColors: THREE.FaceColors
                   });
        var mat_swiatlo = new THREE.MeshLambertMaterial(
                    {
                        map: THREE.ImageUtils.loadTexture("gfx/donatello.png"),
                        morphTargets: true, //konieczne do animacji
                        morphNormals: true, //konieczne animacji
                        specular: 0xffffff,
                        shininess: 60,
                        shading: THREE.SmoothShading,
                        vertexColors: THREE.FaceColors

                    });

        ninjaPurple1 = new THREE.MorphAnimMesh(geometry, mat_swiatlo);
        ninjaPurple1.name = "ninjaPurple1";
        ninjaPurple1.rotation.y = Math.PI/2;
        ninjaPurple1.position.set(225, 25, -175);
        ninjaPurple2 = ninjaPurple1.clone();
        ninjaPurple2.name = "ninjaPurple2";
        ninjaPurple2.position.set(225, 25, -225);
        ninjaPurple3 = ninjaPurple1.clone();
        ninjaPurple3.name = "ninjaPurple3";
        ninjaPurple3.position.set(275, 25, -175);
        ninjaPurple4 = ninjaPurple1.clone();
        ninjaPurple4.name = "ninjaPurple4";
        ninjaPurple4.position.set(275, 25, -225);
        setTimeout(function () {
            document.getElementById("startScreen").style.display = "none";
            document.getElementById("chooseColor").style.visibility = "visible";
            document.getElementById("div1").style.visibility = "visible";
        }, 5000);



    });

    this.returnModel1 = function () {
        return meshModel;
    }
}
