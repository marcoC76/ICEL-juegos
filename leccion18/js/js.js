function inicializa(){
    
}

var mochila = [];
mochila.push("a");
mochila.push("b");
mochila.push("c");
mochila.push("d");
mochila.push("e");

function compra(obj) {
    if (obj == 1) {
        mochila.push("Espada");
    } else {
        mochila.push("Pocion");
    }
    muestraInvt();
}

function vender() {
   mochila.splice(2,1);
}

function muestraInvt() {
    for (let a = 0; a < mochila.length; a++) {
        console.log(a + "-" + mochila[a]);
    }
}