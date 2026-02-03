let promesa = new Promise((resolver) => {
    //console.log('Inicio de la promesa');
    setTimeout( () => resolver('Saludos con promesa y timeout'), 3000);
    //console.log('Fin de la promesa');
});

// async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));