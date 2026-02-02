class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        this._marca = marca;
    }
}

let dispositivo1 = new DispositivoEntrada('USB', 'Logitech');
let dispositivo2 = new DispositivoEntrada('Bluetooth', 'HP');
console.log(dispositivo1);

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

let raton1 = new Raton('Bluetooth', 'HP');
let raton2 = new Raton('Bluetooth', 'Uiosmuph');
console.log(raton1.toString());

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, tipoEntrada: ${this._idTeclado}, marca: ${this.marca}`;
    }
}

let teclado1 = new Teclado('USB', 'Royal Kludge');
let teclado2 = new Teclado('2.4G', 'Logitech');
console.log(teclado1.toString());

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set marca(marca){
        this._marca = marca;
    }

    set tamanio(tamanio){
        this.tamanio = tamanio;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}`
    }
}

let monitor1 = new Monitor('Acer', 24);
let monitor2 = new Monitor('Samsung', 27);
console.log(monitor1.toString());

class Ordenador {
    static contadorOrdenadores = 0;
    constructor(nombre, Monitor, Raton, Teclado){
        this._nombre = nombre;
        this._monitor = Monitor;
        this._raton = Raton;
        this._teclado = Teclado;
        this._idOrdenador = ++Ordenador.contadorOrdenadores;
    }

    get idOrdenador(){
        return this._idOrdenador;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this.monitor;
    }

    set monitor(Monitor){
        this._monitor = Monitor;
    }

    get raton(){
        return this._raton;
    }

    set raton(Raton){
        this._raton = Raton;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(Teclado){
        this._teclado = Teclado;
    }

    toString(){
        return `Ordenador: ${this._idOrdenador}, nombre: ${this._nombre}\nMonitor: [${this._monitor.toString()}]\nRaton: [${this._raton.toString()}]\nTeclado: [${this._teclado.toString()}]`;
    }

}

let ordenador1 = new Ordenador('HP Pavilion', monitor1, raton1, teclado1);
let ordenador2 = new Ordenador('Dell Inspiron', monitor2, raton2, teclado2);
console.log(ordenador1.toString());

class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._ordenadores = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarOrdenador(Ordenador){
        this._ordenadores.push(Ordenador);
    }

    mostrarOrden(){
        let ordenadoresOrden = '';
        for(let ordenador of this._ordenadores){
            ordenadoresOrden += '\n' + ordenador.toString() + ' | ';
        }
        console.log(`Orden: ${this._idOrden}, Ordenadores: ${ordenadoresOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarOrdenador(ordenador1);
orden1.agregarOrdenador(ordenador2);
orden1.mostrarOrden();