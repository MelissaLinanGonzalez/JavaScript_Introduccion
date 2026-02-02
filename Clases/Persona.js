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