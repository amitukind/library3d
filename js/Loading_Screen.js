/* CUSTOM LOADING SCREEN */
        
var loadedPercent = 0;
var loadingScreenDiv = window.document.getElementById("loadingScreen");
var loadingScreenShowTimer = null;
var topmenuLink = window.document.getElementById("header");
var leftmenuLink = window.document.getElementById("leftMenu");

function MyLoadingScreen() {
}
MyLoadingScreen.prototype.displayLoadingUI = function() {
   loadingScreenShowTimer = window.setInterval(function(){
    loadingScreenDiv.innerHTML = 
    "<div class='content'>" +
        "<h1>LIBRARY INTERACTIVE MAP<h1>" + "<h2>MTP<h2>" + "<img src=\"css/giphy_bar_crop.gif\" />" + "<br>" +
        "<span id='loadPercent'> "+loadedPercent+"% </span>" +
    "</div>" +
    "<div id='madeby'>Created by Cstfan</div>"
   }, 50);
};
MyLoadingScreen.prototype.hideLoadingUI = function() {
    loadingScreenDiv.style.opacity = 1;
    var loadingScreenHideTimer = window.setInterval(hideLoadingScreen, 50);
    function hideLoadingScreen(){
        if(loadingScreenDiv.style.opacity > 0){
            loadingScreenDiv.style.opacity -= 0.05;
        }
        if(loadingScreenDiv.style.opacity <= 0){
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