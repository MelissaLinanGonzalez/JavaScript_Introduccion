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