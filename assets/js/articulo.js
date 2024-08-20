// Clase que representa un Artículo
export class Articulo {
    constructor(nombre, objeto, precio) {
        this.nombre = nombre;
        this.objeto = objeto;
        this.precio = precio;
    }

    // Getter y Setter para el nombre del artículo
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    // Getter y Setter para el objeto del artículo
    get objeto() {
        return this._objeto;
    }

    set objeto(value) {
        this._objeto = value;
    }

    // Getter y Setter para el precio del artículo
    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }
}
