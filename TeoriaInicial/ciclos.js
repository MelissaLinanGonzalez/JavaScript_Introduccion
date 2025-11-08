// WHILE
// Imprimir los valores del 0 al 5
let contador = 0;
let repeticiones = 5;
/*while(contador <= repeticiones){
    console.log(contador);
    contador++;
}*/

// DO WHILE
do{
    console.log(contador++);
}while(contador <= repeticiones);

// FOR
for(let i = 0; i <= repeticiones; i++){
    console.log(i);
}

// Imprimir los primeros 10 números de 3 en 3
// 1 - 4 - 7 - 10
for(let i = 1; i <= 10; i+=3){
    console.log(i);
}

// Lo mismo pero con números negativos
for(let i = 1; i >= -10; i-= 3){
    console.log(i);
}