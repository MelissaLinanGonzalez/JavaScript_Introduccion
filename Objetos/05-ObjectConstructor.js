// Constructor de objetos tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '5646546'; // Se agrega la propiedad para todos los objetos tipo Persona


let padre = new Persona('Juan', 'Pérez', 'jperez@mail.com');
padre.tel = '55586'
console.log(padre);

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());


