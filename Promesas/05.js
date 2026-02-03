// Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio de función');
    let miPromesa = new Promise( resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);

    console.log('Fin de función');
}

funcionConPromesaAwaitTimeout();