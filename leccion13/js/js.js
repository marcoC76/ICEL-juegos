//configuracion
var configTeclado = { prevent_repeat : true };9
//no es necesario repulsar, con solo pulsar una vez se queda pegado

var evtTeclado = new window.keypress.Listener(this,configTeclado);


function pulsaA(){
    console.log("Has pulsado a");
}

function pulsaAB(){
    console.log("Has pulsado a y b a la vez");
}

function ataqueEspecial(){
    console.log("ATAQUE ESPECIAL!!!");
}


evtTeclado.simple_combo("a", pulsaA);
evtTeclado.simple_combo("a b", pulsaAB);
evtTeclado.sequence_combo("up down a b", ataqueEspecial);