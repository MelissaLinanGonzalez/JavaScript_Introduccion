function miFuncion(){
    console.log('Saludos desde mi función');
}
miFuncion();


let miFuncion2 = function(){
    console.log('Saludos desde mi función2');
}

// Es común usar const ya que no se va a modificar la referencia a la función en un futuro
// const miFuncionFlecha = () => { // No se aplica hoisting, por lo que no se puede usar antes de declararla
//     console.log('Saludos desde mi función FLECHA');
// }


// const miFuncionFlecha = () => console.log('Saludos desde mi función FLECHA');
//miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función FLECHA'
// }

const saludar = () => 'Saludos desde función FLECHA' 
console.log(saludar());

const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Rodríguez'});

console.log(regresarObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros2 = mensaje => console.log(mensaje); // Si es solo un parámetro no es necesario usar paréntesis para el parámetro

funcionConParametros2('Hola desde la función con parámetros');

//const funcionConParametros = (op1, op2) => op1 + op2;

const funcionConParametros = (op1, op2) => {
     let resultado = op1 + op2;
     return `Resultado: ${resultado}`;
}

console.log(funcionConParametros(5,7));