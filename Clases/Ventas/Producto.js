class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}€`;
    }
}

let producto1 = new Producto('Pantalon', 35);
let producto2 = new Producto('Sudadera', 25);
console.log(producto1.toString());
console.log(producto2.toString());