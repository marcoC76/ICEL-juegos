var canvas;
var ctx;//contexto del canvas
var FPS = 50;

var imgRex;




function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    imgRex = new Image();
    imgRex.src = "img/Dino3.png";

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

var protagonista = function(x,y){
    this.x = x;
    this.y = y;
    this.velocidad = 3;
    //metodos
    this.dibuja = function(){
        ctx.drawImage(imgRex, this.x, this.y);
    }
    
    this.texto = function () {
        ctx.font = "30px impact";
        ctx.fillStyle = "#555555";
        ctx.fillText("X: " + this.x, 100, 100);
        ctx.fillText("Y: " + this.y, 100, 200);
    }
    this.arriba = function () {
        this.y -= this.velocidad;
    }
    this.abajo = function () {
        this.y += this.velocidad;
    }
    this.izquierda = function () {
        this.x -= this.velocidad;
    }
    this.derecha = function () {
        this.x += this.velocidad;
    }
}


var personaje = function(x,y){
    this.x = x;
    this.y = y;
    this.derecha = true;

    //metodos
    this.dibuja = function(){
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(this.x,this.y, 50,50);
    }



    this.mueve = function(velocidad){

        if (this.derecha == true) {
            if (this.x < 400) {
                this.x += velocidad;
            }else{
                this.derecha = false;
            }
        }else{
            if (this.x > 50) {
                this.x -= velocidad;
            }else{
                this.derecha = true;
            }
        }
    }
}


document.addEventListener("keydown", function(tecla){
    //arriba
    if (tecla.keyCode == 38) {
        prota.arriba();
    }
    //abajo
    if (tecla.keyCode == 40) {
        prota.abajo();
    }
    //izquierda
    if (tecla.keyCode == 37) {
        prota.izquierda();
    }
    //derecha
    if (tecla.keyCode == 39) {
        prota.derecha();
    }

});

var per1 = new personaje(10,50);
var per2 = new personaje(10,120);
var per3 = new personaje(10,230);
var prota = new protagonista(200,200);

//borrado del canvas
function borraCanvas(){
    canvas.width = 500;
    canvas.height= 400;
}

function principal (){
    borraCanvas();

    per1.dibuja();
    per2.dibuja();
    per3.dibuja();

    per1.mueve(1);
    per2.mueve(2);
    per3.mueve(3);
    prota.dibuja();
    prota.texto();
}
