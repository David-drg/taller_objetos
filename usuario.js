class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }

    saludo() {
        return `Hola, soy ${this.nombre} y mi rol es ${this.rol}`;
    }

    desactivar() {
        this.activo = false;
        return `El usuario ${this.nombre} ha sido desactivado`;
    }

    resumen() {
        return `${this.nombre} | ${this.email} | ${this.rol} | ${this.activo ? "Activo" : "Inactivo"}`;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }

    saludo() {
        return `${super.saludo()} | Membresía: ${this.membresia}`;
    }

    beneficios() {
        return `Beneficios VIP (${this.membresia}): descuentos exclusivos y acceso anticipado`;
    }
}

module.exports = { Usuario, UsuarioVIP };