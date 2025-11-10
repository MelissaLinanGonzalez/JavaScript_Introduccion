let persona1 = {
    nombre : 'Juan',
    apellido : 'Pérez',
    nombreCompleto : function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona2 = {
    nombre : 'Amparo',
    apellido : 'Castro',
}

// Uso de call para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Periodista', '88789'));

console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '454848'));
