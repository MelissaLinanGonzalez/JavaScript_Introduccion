'use strict' // Modo estricto

try{
    let x = 10;
    //miFuncion();
    throw 'Mi error'; // Lanza un error personalizado
}
catch(error){
    console.log(error);
}

finally{ // Opcional
    console.log('Termina la revisión de errores')
}



console.log('continuamos ...');

// ********************************++

let resultado = 2;

try{
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacía';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina la revisión de erriores');
}