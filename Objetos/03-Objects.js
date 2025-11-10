// Agregar y eliminar propiedades de un objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '666666666';

console.log(persona);

// Eliminar una propiedad
delete persona.tel;
console.log(persona);

// Mostrar las propiedades del objeto de cara a un navegador
console.log(persona.nombre + ',' + persona.apellido);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);