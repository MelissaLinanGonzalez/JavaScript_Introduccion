class Persona {
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'idPersona: ' + this._idPersona + ', ' +
               this._nombre + ' ' +
               this._apellido + ', ' +
               this._edad + ' años';
    }
}

let persona1 = new Persona('Juan', 'Rodríguez', 20);
console.log(persona1.toString());

class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ', idEmpleado: ' + this._idEmpleado + ', Sueldo: ' + this._sueldo;
    }
}

let empleado1 = new Empleado('Carmen', 'Almonte', 33, 2500);
console.log(empleado1.toString());

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ', idCliente: ' + this._idCliente + ', Fecha de Registro: ' + this._fechaRegistro;
    }
}

let cliente1 = new Cliente('Roberto', 'Almenar', 38, new Date());
let cliente2 = new Cliente('Iñaki', 'Iralzabalbeitia', 36, new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());

console.log(Persona.contadorPersona);
console.log(Empleado.contadorEmpleado);
console.log(Cliente.contadorCliente);

console.log("--- Pruebas Clase Persona ---");
let personaPrueba = new Persona('Ana', 'García', 25);

// Probar Getters
console.log('Nombre (getter):', personaPrueba.nombre); 
console.log('ID único Persona:', personaPrueba.idPersona);

// Probar Setters
personaPrueba.nombre = 'Marta';
personaPrueba.apellido = 'López';
personaPrueba.edad = 26;
console.log('Persona tras cambios (setter):', personaPrueba.toString());

console.log("\n--- Pruebas Clase Empleado ---");
let empleadoPrueba = new Empleado('Luis', 'Pérez', 40, 3000);

// Comprobar que hereda de Persona
console.log('¿Es empleado una Persona?:', empleadoPrueba instanceof Persona);

// Probar Getter/Setter de sueldo
console.log('Sueldo original:', empleadoPrueba.sueldo);
empleadoPrueba.sueldo = 3500;
console.log('Nuevo sueldo:', empleadoPrueba.sueldo);

// Probar ID de empleado (independiente del de Persona)
console.log('ID Empleado:', empleadoPrueba.idEmpleado);

console.log("\n--- Pruebas Clase Cliente ---");
let clientePrueba = new Cliente('Laura', 'Méndez', 22, new Date());

// Probar Getter de fecha
console.log('Fecha registro:', clientePrueba.fechaRegistro);

// Probar el ID Cliente
console.log('ID Cliente:', clientePrueba.idCliente);