// Subclase que representa un Proveedor con una especialidad específica
import { Proveedor } from './proveedor.js';

export class ProveedorEspecial extends Proveedor {
    constructor(nombre, email, telefono, especialidad) {
        super(nombre, email, telefono);
        this.especialidad = especialidad;
    }

    // Getter y Setter para la especialidad del proveedor
    get especialidad() {
        return this._especialidad;
    }

    set especialidad(value) {
        this._especialidad = value;
    }

    // Método que devuelve la información completa del proveedor especial
    getInfoProveedor() {
        return `${super.getInfoProveedor()}, Especialidad: ${this.especialidad}`;
    }
}
