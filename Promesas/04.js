// async con await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa ); // await sdolo se puede usar dentro de una función declarada con async
}

funcionConPromesaYAwait();