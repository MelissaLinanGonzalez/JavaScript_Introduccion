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