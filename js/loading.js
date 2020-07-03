/* CUSTOM LOADING SCREEN */

var loadedPercent = 0;
var loadingScreenDiv = window.document.getElementById("loadingScreen");
var loadingScreenShowTimer = null;
var topmenuLink = window.document.getElementById("header");
var leftmenuLink = window.document.getElementById("leftMenu");

function MyLoadingScreen() {}
MyLoadingScreen.prototype.displayLoadingUI = function () {
  loadingScreenShowTimer = window.setInterval(function () {
    loadingScreenDiv.innerHTML =
      "<div class='content'>" +
      "<h1>3D Interactive Library<h1>" +
      "<h2>WebGL Demo<h2>" +
      '<img src="assets/images/loading_bar.gif" />' +
      "<br>" +
      "<span id='loadPercent'> " + 'Loading . . . '+
      loadedPercent +
      "% </span>" +
      "</div>" ;
  }, 50);
};
MyLoadingScreen.prototype.hideLoadingUI = function () {
  loadingScreenDiv.style.opacity = 1;
  var loadingScreenHideTimer = window.setInterval(hideLoadingScreen, 50);
  function hideLoadingScreen() {
    if (loadingScreenDiv.style.opacity > 0) {
      loadingScreenDiv.style.opacity -= 0.05;
    }
    if (loadingScreenDiv.style.opacity <= 0) {
      loadingScreenDiv.style.opacity = 0;
      clearInterval(loadingScreenHideTimer);
      clearInterval(loadingScreenShowTimer);
      loadingScreenDiv.style.display = "none";
      topmenuLink.style.display = "block";
      leftmenuLink.style.display = "flex";
    }
  }
};

var loadingScreen = new MyLoadingScreen();
//Set the loading screen in the engine to replace the default one
engine.loadingScreen = loadingScreen;

/* END OF CUSTOM LOADING SCREEN */
