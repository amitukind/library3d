/******* Call Functions ******/

// *** Icons actions of top Menu ***
leftMenuDisplay();
initFullScreen();

// Menu Item Focus
$(document).ready(function() {
    $("#leftMenu button").click(function() {
        $("#leftMenu button").removeClass('selected');
        $(this).addClass('selected');
    });
});

/******* Functions ******/

// *** Top Menu jquery method ***
function leftMenuDisplay() {

$(document).ready(function(){
    $("#leftmenu_button").click(function(){
    //   $("#leftMenu").slideToggle("slow");
      $("#leftMenu").fadeToggle("slow");
    
    });
  });

}

// ****** Fullscreen switch *******
function initFullScreen() {
    var fsButton = document.getElementById('fullscreen_button');
    if (!fsButton) return;

        fullscreen_button.addEventListener('click', function(event) {
        event.stopPropagation();
        if (document.fullscreenElement || 
                document.webkitFullscreenElement ||     /* Chrome, Safari & Opera */ 
                document.mozFullScreenElement ||        /* Firefox */
                document.msFullscreenElement) {         /* IE/Edge */
            exitFullscreen();
        } else
            requestFullscreen(document.body);
    });
}

function requestFullscreen(elem) {
    if (elem.requestFullscreen)
        elem.requestFullscreen();
    else if (elem.mozRequestFullScreen)
        elem.mozRequestFullScreen();                    /* Firefox */
    else if (elem.webkitRequestFullscreen)          
        elem.webkitRequestFullscreen();                 /* Chrome, Safari & Opera */
    else if (elem.msRequestFullscreen)
        elem.msRequestFullscreen();                     /* IE/Edge */
}

function exitFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();                 /* Firefox */
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();                /* Chrome, Safari & Opera */
    else if (document.msExitFullscreen)
        document.msExitFullscreen();                    /* IE/Edge */
}



// *** Left Menu ***

// ****** Information Desk *******
function leftMenuInfoDesk() {

    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(5, 10, -0));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(11.4, 0, -0));
    // console.log(camera);
    // console.log(camera.target);

    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });
  
    // Outline Render
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("Bureau_Accueil") != -1){
            mesh.renderOverlay = true;
        }
    });
    
    /* GLow effect (test) */
    // var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    // myMaterial.emissiveColor = new BABYLON.Color3.Red();
    // accueil.material = myMaterial;
    // var gl = new BABYLON.GlowLayer("glow", scene);
    // gl.intensity = 1.2;
  
}

// ****** Study Area *******
function leftMenuStudyArea() {

    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(-11, 10, 0));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(5,0,-7.5));

    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Tables_Lectures");
    StudyArea.renderOverlay = true;

}

// ****** Group Study Room *******
function leftMenuGroupeStudyRoom() {

    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(11, 10, 0));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(-5.5,0,-5.8));

    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Murs_Groupe");
    StudyArea.renderOverlay = true;

}

// ****** Books *******
function leftMenuBooks() {

    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(15, 10, -5));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(2.3,0,-2.3));

    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Etageres_Books");
    StudyArea.renderOverlay = true;

}

// ****** Newspapers *******
function leftMenuNewspapers() {

    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(17, 10, -12));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(7.3,0,-3.6));

   
    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Presentoire_Journaux");
    StudyArea.renderOverlay = true;

}

// ****** News Books Display *******
function leftMenuNewBooksDisplay() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(-2, 6, -7.5));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(13, 0, -5.5));


    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Etagere_Nouveautes");
    StudyArea.renderOverlay = true;

}

// ****** Current Periodicals *******
function leftMenuPeriodicals() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(15, 10, -10));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(8, 0, -1.4));


    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Etagere_Revues");
    StudyArea.renderOverlay = true;
    
}


// ****** Book Drop *******
function leftMenuBookDrop() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(19, 10, 12));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(15, 5, 5.4));


    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Boite_a_Livres");
    StudyArea.renderOverlay = true;

}

// ****** Troc Livre *******
function leftMenuTrocLivre() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(15.9, 7.5, -1.7));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(8.6, 0, 9.2));


    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Etagere_Troc");
    StudyArea.renderOverlay = true;

}


// ****** Bloomberg Terminals *******
function leftMenuBloomberg() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(6.6, 6.2, -1.6));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(12.44, 0.75, 7.4));

  
    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Tables_Bloomberg");
    StudyArea.renderOverlay = true;

}



// ****** Printers *******
function leftMenuPrinter() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(0, 8.2, 2.75));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(10, 0, -9.5));
    
    
    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

    // Outline Render
    var StudyArea = scene.getMeshByName("Imprimante");
    StudyArea.renderOverlay = true;

}


// ****** Special for deltakosh *******
function leftMenuDeltakosh() {
    
    var speed1 = 45;
    var speed2 = 45;
    var frameCount = 200;
    
    //Animation Camera position
    var animateCameraToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'position', speed, frameCount, cam.position, newPos, 0, ease);
    }
    animateCameraToPosition(camera, speed1, frameCount, new BABYLON.Vector3(8.8, 1.7, 1.7));

    //Animation Camera target
    var animateCameraTargetToPosition = function(cam, speed, frameCount, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at5', cam, 'target', speed, frameCount, cam.target, newPos, 0, ease);
    }
    animateCameraTargetToPosition(camera, speed2, frameCount, new BABYLON.Vector3(11.51, 1.05 , 4.3));
    
    
    // ** Disable all before apply Outline Render  **
    scene.meshes.forEach(function(mesh){
        if(mesh.name.indexOf("") != -1){
            mesh.renderOverlay = false;
        }
    });

}