var canvas;
var ctx;//contexto del canvas
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var cesped ="#028c37";
var agua ="#42b9f4";
var tierra = "#473300";

var escenario = [
    [0,1,0,2,2,0,1,0,2,0],
    [0,1,1,2,0,0,1,0,2,0],
    [0,0,1,2,1,0,1,1,2,0],
    [0,2,2,2,1,0,1,2,2,2],
    [2,2,2,0,1,0,1,0,2,0],
    [0,1,0,2,2,0,1,1,2,2],
    [0,1,1,2,0,0,1,1,2,2],
    [0,0,1,2,1,0,1,2,2,1],
    [0,2,2,2,1,0,1,0,2,1],
    [2,2,2,0,1,0,1,2,2,1]
];

function dibujaEsce() {
    var color;
    for (y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            //console.log(escenario[y][x]);
            if (escenario[y][x] == 0) {
                color = cesped;   
            }            
            if (escenario[y][x] == 1) {
                color = agua;   
            }            
            if (escenario[y][x] == 2) {
                color = tierra;   
            }
            
            ctx.fillStyle = color;
            ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
        }
    }
}


function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    dibujaEsce();

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

//borrado del canvas
function borraCanvas(){
    canvas.width = 500;
    canvas.height= 400;
}

function principal (){
    //borraCanvas();

    
}