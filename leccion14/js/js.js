var miCanvas;

function inicializar(){
    miCanvas = document.getElementById("canvas");

    miCanvas.addEventListener("mousedown", clicRaton, false);
    miCanvas.addEventListener("mouseup", sueltaRaton, false);
    miCanvas.addEventListener("mousemove", mueveRaton, false);
}

function clicRaton(evt){
    console.log("Pulsando raton");
}
function sueltaRaton(evt){
    console.log("Raton liberado");
}
function mueveRaton(e){
    var x = e.pageX;
    var y = e.pageY;
    console.log("x: " + x + "- y: " + y);
}