/* Intenta construir una calculadora con 4 funciones desde cero. */
/* var displayDiv = document.querySelector("#display");
displayDiv.innerText = "Some new value"; */



var pantalla = "";
var operacionActual = 0;
var numeroAnterior = 0;

//Esta funct toma el primer numero
function press(num) {
    var displayDiv = document.getElementById("display"); //toma lo de la pantalla a un displayDiv
    pantalla = pantalla + num;
    displayDiv.innerText = pantalla;
}

function setOP(op) {
    var operacion = op("");
    pantalla = operacion.push;
}


function calculate() {
    let numeroPantalla = parseInt(pantalla);
    numeroAnterior
    console.log(pantalla);
    console.log(numeroPantalla);
}

function clr() {
    pantalla = 0;
    operacionActual = null;
    numeroAnterior = null;
    mostrarResultado();
}

function mostrarResultado() {
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = pantalla;
}

// function press2(num) {
//     console.log(num);
//     pantalla = pantalla + num;
//     console.log(pantalla);
// }

// function press() {
//     let nuevoNumero = [];
//     console.log(nuevoNumero);
//     var displayDiv = document.querySelectorAll("#display");
//     nuevoNumero.push();
//     displayDiv.innerText = nuevoNumero
// }

/* function press(num) {
    let nuevoNumero = [];
    var displayDiv = document.querySelector("#display");

    nuevoNumero.push(num);

    displayDiv.innerText = nuevoNumero.join('');

    // Devolver el número acumulado como una cadena
    return nuevoNumero.join('');
}

// Ejemplo de uso:
var resultado = press();

console.log(resultado); // Esto imprimirá "538" en la consola
*/

/*var pantalla = [0,0,0,0,0,0,0,0,0];

function press(num) {
    var displayDiv = document.querySelectorAll("#display");
    pantalla.push(num);
    displayDiv.innerText = pantalla();
    // document.querySelector("#display").innerText = pantalla[];
} */

// function press() {
    
// }