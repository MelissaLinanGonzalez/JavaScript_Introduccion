let numero = -10;
let valorAbsoluto = Math.abs(numero);
console.log(valorAbsoluto); //10

// Redondeo
let num2 = 8.5, redondeo, truncado;

// Redondea al valor más cercano, si es .5 redondea hacia arriba
redondeo = Math.round(num2);
console.log(redondeo); //9

// Elimina los decimales
truncado = Math.trunc(num2);
console.log(truncado); //8