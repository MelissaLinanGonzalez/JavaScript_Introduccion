// Definir el procedimiento
function saludar(mensaje){
    console.log(mensaje);
}

// Invocar el procedimiento
saludar("Hola");

function sumar(a, b){
    let suma = a + b;
    return suma;
}

let num1 = 15, num2 = 30;
let resultado = sumar(num1, num2);
console.log(resultado);

// Pasando información de tipo primitico (number, bool, string)

function cambiarValor(parametro){
    parametro = 20
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento); // no se cambiar el valor porque el valor de la variable se pasa por copia

// Paso por referencia (objetos, arrays, matrices)
function cambiar(parametro){
    parametro[0] = 20;
}

let array = [10];
cambiar(array);
console.log(array[0]);

// Cadena inmutable
function cambiarCadena(cadena){
    cadena = "Adiós";
}

let saludo = "Hola";
cambiarCadena(saludo);
console.log(saludo);

// Alcance de variables
let variableGlobal = 5;

function miFuncion(variableLocal){
    console.log(variableLocal);
    variableGlobal = 20;
}

miFuncion(variableGlobal);
console.log(variableGlobal); //La variable global fue modificada dentro de la función

