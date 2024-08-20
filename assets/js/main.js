// Importación de las clases Proveedor, Articulo y ProveedorEspecial
import { Proveedor } from './proveedor.js';
import { Articulo } from './articulo.js';
import { ProveedorEspecial } from './proveedorEspecial.js';

// Creación de instancias de las clases
const proveedor1 = new Proveedor('Daniel Salazar', 'danielsalazar284@gmail.com', '55551234');
const articulo1 = new Articulo('Aceite', { tipo: 'Oliva', marca: 'Acuenta' }, 1500);

const proveedorEspecial1 = new ProveedorEspecial('Susan Vega', 'susanvega@example.com', '55555678', 'Verduras');

// Mostrar información en la consola
console.log(proveedor1.getInfoProveedor());
console.log(proveedorEspecial1.getInfoProveedor());

// Uso del operador spread para copiar objetos
const copiaArticulo = { ...articulo1 };
const mezclaProveedor = { ...proveedor1, ...proveedorEspecial1 };
console.log(copiaArticulo);
console.log(mezclaProveedor);

// Función para calcular el impuesto sobre un artículo
const calcularImpuesto = (articulo) => {
    const tasaImpuesto = 0.19; // Tasa de impuesto del 19%
    return articulo.precio * tasaImpuesto;
};

console.log(`Impuesto a pagar: $${calcularImpuesto(articulo1)}`);
