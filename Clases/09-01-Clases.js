// No se pueden crear objetos antes de haber creado la clase
// No se aplica el concepto de hoisting

class Persona {

    static contadorPersona = 0; // Atributo de la clase. Se accede con Persona.contadorObjetosPersona

    email = 'valor por defecto email' // Atributo de los objetos. Se accede con objeto.email

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre; // Convención: usar guion bajo para propiedades privadas
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        } else{
            console.log('Se ha superado el máximo de objetos permitidos');
        }
        //console.log('Se incrementa el contador: ' + Persona.contadorPersona);
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
        return this.idPersona + ' ' +this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el método static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
console.log(persona1); // se usa el getter

let persona2 = new Persona('Pepe', 'Pérez');
console.log(persona2)

let empleado1 = new Empleado('Manuel', 'Fernández', 'Ventas');
console.log(empleado1);
console.log(empleado1.nombre); // Se usa el getter de la clase padre
console.log(empleado1.departamento); // Se usa el getter de la clase hija.

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

// persona1.saludar(); no es posible llamar a un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


console.log(Persona.contadorPersona);
console.log(Empleado.contadorPersona);

console.log(persona1.email);
console.log(empleado1.email);

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Jesus', 'Lusan');
let persona4 = new Persona('Miguel', 'García');
let persona5 = new Persona('Rosa', 'López');
console.log(persona5.toString());