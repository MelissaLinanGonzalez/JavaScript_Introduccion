// No se pueden crear objetos antes de haber creado la clase
// No se aplica el concepto de hoisting

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre; // Convención: usar guion bajo para propiedades privadas
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        // Se aplica polimorfismo (múltiples formas en tiempo de ejecución)
        // El método que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Se llama al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura del método de la clase padre nombreCompleto
    nombreCompleto(){
        //return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Amparo', 'Rodríguez');
persona1.nombre = 'Amparito'; // se usa el setter
console.log(persona1.nombre); // se usa el getter

let persona2 = new Persona('Pepe', 'Pérez');
console.log(persona2)

let empleado1 = new Empleado('Manuel', 'Fernández', 'Ventas');
console.log(empleado1);
console.log(empleado1.nombre); // Se usa el getter de la clase padre
console.log(empleado1.departamento); // Se usa el getter de la clase hija.

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());