// Clase que representa un Proveedor
export class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    // Getter y Setter para el nombre del proveedor
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    // Getter y Setter para el email del proveedor
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    // Getter y Setter para el teléfono del proveedor
    get telefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }

    // Método que devuelve la información del proveedor
    getInfoProveedor() {
        return `Proveedor: ${this.nombre}, Teléfono: ${this.telefono}`;
    }
}
