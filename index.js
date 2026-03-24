const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

// Usuarios
const user1 = new Usuario("David", "david@mail.com");
const user2 = new Usuario("Admin", "admin@mail.com", "admin");
const vip = new UsuarioVIP("Carlos", "vip@mail.com", "Gold");

// Productos
const prod1 = new Producto("Laptop", 2000, "tecnologia");
const prod2 = new Producto("Camisa", 100, "ropa");
const prod3 = new ProductoDigital("Curso JS", 50, "mensual");
const prod4 = new ProductoDigital("Ebook", 20, "de por vida");

// Desactivar usuario
user2.desactivar();

// Descuento
console.log("Descuento aplicado:", prod1.aplicarDescuento(20));

// Tarjetas productos
console.log("\n--- PRODUCTOS ---");
console.log(prod1.tarjeta());
console.log(prod2.tarjeta());
console.log(prod3.tarjeta());
console.log(prod4.tarjeta());

// Resumen usuarios
console.log("\n--- USUARIOS ---");
console.log(user1.resumen());
console.log(user2.resumen());
console.log(vip.resumen());