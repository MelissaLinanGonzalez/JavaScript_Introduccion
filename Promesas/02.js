let promesa = new Promise((resolver) => {
    console.log('Inicio de la promesa');
    setTimeout( () => resolver('Saludos con promesa y timeout'), 3000);
    console.log('Fin de la promesa');
});

promesa.then(valor => console.log(valor));