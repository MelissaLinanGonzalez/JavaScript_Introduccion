// Obtener el largo de una cadena
let cadena1 = 'Hola';

console.log(cadena1.length);

// NO podemos modificar una cadena, ya que son inmutables
cadena1[0] = 'x'; // Esto no tendrá efecto

// Si podemos asignar una nueva cadena

cadena1 = 'Adios';
console.log(cadena1);

// Recorrer cada caracter
for(let i = 0; i < cadena1.length; i++){
    console.log(cadena1[i]);
}

// Subcadenas
let cadena2 = 'Hola Mundo';

// substring(inicio, final)
let cadena3 = cadena2.substring(0, 4);
let cadena4 = cadena2.substring(5);
console.log(cadena4);