// Realizar la suma de los primeros 5 números utilizando un ciclo for
let suma = 0;
for(let i = 1; i <= 5; i++){
    suma += i;
    console.log(suma);
}

// Con while
let suma2 = 0;
let numero = 1;
while(numero <= 5){
    suma2 += numero;
    console.log(suma2);
    numero++;
}

// Con do while
let suma3 = 0;
let num2 = 1;
do{
    suma3 += num2;
    console.log(suma3);
    console.log(num2++);
} while(num2 <= 5);