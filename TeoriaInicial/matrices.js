// Declaración de una matriz
let matriz = [[],[]];

// Modificar los valores
matriz[0][0] = 10;
matriz[0][1] = 20;
matriz[0][2] = 30;

matriz[1][0] = 110;
matriz[1][1] = 200;
matriz[1][2] = 310;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}

// Otra manera de inicializar una matriz

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6]
]

for(let i = 0; i < matriz2.length; i++){
    for(let j = 0; j < matriz2[i].length; j++){
        console.log(matriz2[i][j]);
    }
}