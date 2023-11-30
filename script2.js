var numPantalla = "";
var num = 0;
var operacion = null;
let display = document.querySelector("#display");


function press(num) {
    numPantalla = numPantalla + num;
    console.log(num);
    display.innerText = numPantalla;

}

function setOP(op) {
    
    num = parseInt(numPantalla);
    
    numPantalla = "";
    operacion = op; 
    console.log(num);
    console.log(operacion);
}

function calculate() {
    let num2 = parseInt(numPantalla)
    if (operacion == "-") {
        let resultado = num - num2;
    }
    if (operacion == "+") {
        resultado = num+ num2;
    }
    if (operacion == "*") {
        resultado = num * num2;
    }
    if (operacion == "/") {
        resultado = num / num2;
    }
    console.log(resultado);
    
    display.innerText = resultado;

    
}

