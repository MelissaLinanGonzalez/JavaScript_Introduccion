let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);
console.log(persona.nombreCompleto());

// Otra forma de crear objetos
let persona2 = new Object();
persona2.nombre = 'Amparo';
persona2.direccion = 'Calle Luna 123';
persona2.telefono = '666666666';

console.log(persona2.nombre)