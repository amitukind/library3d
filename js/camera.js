//** Add a camera type ArcRotateCamera to the scene and attach it to the canvas **//
//** ArcRotateCamera doc : http://doc.babylonjs.com/api/classes/babylon.arcrotatecamera#constructor **//

//** ArcRotateCamera id , .alpha(radians), .beta(radians), .radius(num), target if Vector3(0,0,0) or Vector3.Zero() it's world center **//
//** Angle en radian = pi * (angle en degré) / 180 **//
var camera = new BABYLON.ArcRotateCamera(
  "ArcRotateCamera",
  Math.PI / 13,
  Math.PI / 3.5,
  22,
  new BABYLON.Vector3(8.4, 2.5, 0),
  scene
);

//** X,Y,Z **/
//camera.setPosition(new BABYLON.Vector3(0, 2, -4));

//camera.attachControl(canvas, true);
//** if embeder via iframe in Blackboard or perhaps others web sites, user false argument
camera.attachControl(canvas, false);

// Paramêtre de clipping
camera.minZ = -10;
camera.maxZ = 100;

/** Limit camera **/

/** Rotation horizontal limit **/
// camera.lowerAlphaLimit = Math.PI;
// camera.upperAlphaLimit = 2 * Math.PI;

/** Rotation auto if don't move **/
//camera.useAutoRotationBehavior = true;

/** Rotation vertical limit Math.PI for 180° **/
camera.lowerBetaLimit = 0;
camera.upperBetaLimit = Math.PI / 2.5;

/** Descativation panning cam **/
//camera.panningSensibility = 0;

/** Zoom limit **/
camera.lowerRadiusLimit = 1;
camera.upperRadiusLimit = 30;

/** Zoom sensibility - Low value = more faster **/
camera.wheelPrecision = 100;
camera.pinchPrecision = 100;
