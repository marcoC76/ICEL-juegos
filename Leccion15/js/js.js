var personaje = function(x,y,nombre){
    //atributos
    this.x = x;
    this.y = y;
    this.nombre = nombre;

    //metodos
    this.abajo = function(){
        this.y += 10;
    }
    this.ablar = function(){
        console.log("Hola forastero me llamo " + this.nombre);
    }

}

var personaje1 = new personaje(1,5,"Toño");
var personaje2 = new personaje(10,50,"Sam");

personaje1.abajo();