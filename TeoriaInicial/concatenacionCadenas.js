let cadena1 = 'Hola';
let cadena2 = 'Mundo';

let cadena3 = cadena1 + ' ' + cadena2;
console.log(cadena3);

// String Interpolation
let cadena4 = `${cadena1} ${cadena2}`;
console.log(cadena4);

// Convertir de cadena a número
let a = '10', b = '20';

console.log(a + b); //1020

let suma = parseInt(a) + parseInt(b);
console.log(suma); //30

// Convertir de número a cadena
let c = 10, d = 20;
console.log(c + d); //30

let cadena5 = c.toString() + d.toString();
console.log(cadena5); //1020