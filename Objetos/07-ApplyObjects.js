let persona1 = {
    nombre : 'Juan',
    apellido : 'Pérez',
    //nombreCompleto : function(){
    //    return this.nombre + ' ' + this.apellido;
    //}
    nombreCompleto : function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let persona2 = {
    nombre : 'Amparo',
    apellido : 'Castro',
}

// Uso de aplly para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto());

let array = ['Ingeniero', '9879879'];
console.log(persona1.nombreCompleto.apply(persona2, array));

