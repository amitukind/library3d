// Add autocompletion - Download file babylon.d.ts to https://github.com/BabylonJS/Babylon.js/tree/master/dist
// / <reference path="libs/babylon.d.ts" />

// *** http://babylonjsguide.github.io/basics/Lights *** //

// There are three properties of lights that affect color. Two of these diffuse and specular apply to all four types of light, the third, groundColor, only applies to an Hemispheric Light.
// Diffuse gives the basic color to an object;
// Specular produces a highlight color on an object.

// Choosing Meshes to Light
// http://www.babylonjs-playground.com/#20OAV9#8

// On, Off or Dimmer
// Every light can be switched off using
//light.setEnabled(false);

// and switched on with
// light.setEnabled(true);

// Want to dim or brighten the light? Then set the intensity property (default values is 1)
// light0.intensity = 0.5;
// light1.intensity = 2.4;

// For point and spot lights you can set how far the light reaches using the range property
// light.range = 100;

//HemiLight - Light direction is up and left
var light = new BABYLON.HemisphericLight(
  "HemiLight",
  new BABYLON.Vector3(0, 1, 0),
  scene
);
light.intensity = 0.7;
light.diffuse = new BABYLON.Color3(0.95, 0.95, 0.95);
// light.specular = new BABYLON.Color3(0.95, 0.95, 0.95);
// light.groundColor = new BABYLON.Color3(0.95, 0.95, 0.95);

//The Directional Light - Light direction is directly down
// var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, 1, 0), scene);
// light.diffuse = new BABYLON.Color3(0.95, 0.95, 0.95);
// light.specular = new BABYLON.Color3(0.95, 0.95, 0.95);

//PointLight - A point light is a light defined by an unique point in world space. The light is emitted in every direction from this point. A good example of a point light is a standard light bulb.
// var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 1, 0), scene);
// light.diffuse = new BABYLON.Color3(0.95, 0.95, 0.95);
// light.specular = new BABYLON.Color3(0.95, 0.95, 0.95);

//SpotLight - Light direction is directly down from a position one unit up, slow decay
// var light = new BABYLON.SpotLight("SpotLight", new BABYLON.Vector3(-1, 1, -1), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, scene);
// light.diffuse = new BABYLON.Color3(0.95, 0.95, 0.95);
// light.specular = new BABYLON.Color3(0.95, 0.95, 0.95);
