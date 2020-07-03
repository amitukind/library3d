/** The first parameter can be used to specify which mesh to import. Here we import all meshes **/
BABYLON.SceneLoader.Append(
  "./scenes/main/",
  "Plan_Bibliotheque_Mtp_Compress.glb",
  scene,
  function () {
    var glass = scene.getMaterialByName("Vitre");
    glass.alpha = 0.28;

    /** LIGHTMAP ASSIGNATION PROCESS **/

    function assignLightmapOnMaterial(material, lightmap) {
      material.lightmapTexture = lightmap;
      // we want using UV2
      material.lightmapTexture.coordinatesIndex = 1;
      // our lightmap workflow is a darken one
      material.useLightmapAsShadowmap = true;
    }

    var lightmappedMeshes = [
      "Boite_a_Livres",
      "Books_1_2",
      "Books_3_4",
      "Books_5_6",
      "Books_7_8",
      "Books_Accueil_Troc",
      "Books_Etagere_Fond",
      "Etagere_Troc",
      "Etagere_Accueil",
      "Bureau_Accueil",
      "Bureau_Meuble_Bas",
      "Chaises_Accueil",
      "Chaises",
      "Chaises_Rouges",
      "Chauteuils",
      "Entrance",
      "Espace_Bloomberg_Text",
      "Etagere_Nouveautes_Text",
      "Etagere_Troc_Text",
      "Etageres_Books",
      "Feutres",
      "Imprimante",
      "Livres_Nouveautes",
      "Livres_Publications",
      "Moniteur",
      "Portes_primitive1",
      "Presentation_Publications",
      "Presentoire_Journaux",
      "Boite_a_Livres",
      "Revues",
      "Tables_Basses",
    ];
    // we start cycling through them
    for (var i = 0; i < lightmappedMeshes.length; i++) {
      var currentMesh = scene.getMeshByName(lightmappedMeshes[i]);
      // lightmap loading
      var currentMeshLightmap = new BABYLON.Texture(
        "scenes/main/lightmaps/" + currentMesh.name + "_LM.jpeg",
        scene,
        false,
        false
      );
      currentMeshLightmap.name = currentMesh.name + "_LM";
      // we start cycling through each mesh material(s)
      if (!currentMesh.material) {
        // no material so skipping
        continue;
      } else if (!currentMesh.material.subMaterials) {
        // no subMaterials
        assignLightmapOnMaterial(currentMesh.material, currentMeshLightmap);
      } else if (currentMesh.material.subMaterials) {
        // we cycle through subMaterials
        for (var j = 0; j < currentMesh.material.subMaterials.length; j++) {
          assignLightmapOnMaterial(
            currentMesh.material.subMaterials[j],
            currentMeshLightmap
          );
        }
      }
    }
  },

  // Custom loading screen - Progress bar counter
  function (evt) {
    if (evt.lengthComputable) {
      loadedPercent = ((evt.loaded * 100) / evt.total).toFixed();
    } else {
      var dlCount = evt.loaded / (1024 * 1024);
      loadedPercent = Math.floor(dlCount * 100.0) / 100.0;
    }
  }
);
