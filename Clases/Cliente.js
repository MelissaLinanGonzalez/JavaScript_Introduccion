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
let cliente2 = new Cliente('Iñaki', 'Irazalbabeitia', 36, new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());