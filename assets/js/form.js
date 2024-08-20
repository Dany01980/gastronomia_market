// Manejo del envío del formulario para crear instancias de Proveedor o ProveedorEspecial
import { Proveedor } from './proveedor.js';
import { ProveedorEspecial } from './proveedorEspecial.js';

document.getElementById('dataForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const especialidad = document.getElementById('especialidad').value;

    // Crear una instancia de Proveedor o ProveedorEspecial
    let proveedor;
    if (especialidad) {
        proveedor = new ProveedorEspecial(nombre, email, telefono, especialidad);
    } else {
        proveedor = new Proveedor(nombre, email, telefono);
    }

    // Mostrar los datos del proveedor en la consola
    console.log('Datos del Proveedor:');
    console.log(`Nombre: ${proveedor.nombre}`);
    console.log(`Email: ${proveedor.email}`);
    console.log(`Teléfono: ${proveedor.telefono}`);
    if (proveedor instanceof ProveedorEspecial) {
        console.log(`Especialidad: ${proveedor.especialidad}`);
    }

    // Mostrar información del proveedor usando el método getInfoProveedor()
    console.log(proveedor.getInfoProveedor());
});
