class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen() {
        return `${this.nombre} | ${this.categoria} | $${this.precio}`;
    }

    tarjeta() {
        return `${this.nombre} (${this.categoria}) - Total con IVA: $${this.calcularTotal()}`;
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio; // sin IVA
    }

    tarjeta() {
        return `${this.nombre} (Digital - ${this.licencia}) - Precio: $${this.calcularTotal()}`;
    }
}

module.exports = { Producto, ProductoDigital };