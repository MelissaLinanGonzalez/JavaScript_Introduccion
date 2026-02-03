// Llamadas asíncronas con uso de setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 segundos');
}


// No se ejecuta de manera secuencial, sino después del tiempo establecido
setTimeout(miFuncionCallback, 3000);

setTimeout( function(){console.log('Saludo asíncrono 2')}, 4000);

setTimeout( () => console.log('Saludo asíncrono 3'), 1000 );