// Imprimir 3, 2, 1
function funcionRecursiva(num){
    // Caso base
    if (num == 1){
        console.log(num);
    } else{
        console.log(num);
        funcionRecursiva(num - 1);
    }
}

funcionRecursiva(3);