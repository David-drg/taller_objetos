const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");


const user1 = new Usuario("David", "david@mail.com");
const user2 = new Usuario("Admin", "admin@mail.com", "admin");
const vip = new UsuarioVIP("Carlos", "vip@mail.com", "Gold");


const prod1 = new Producto("Laptop", 2000, "tecnologia");
const prod2 = new Producto("Camisa", 100, "ropa");
const prod3 = new ProductoDigital("Curso JS", 50, "mensual");
const prod4 = new ProductoDigital("Ebook", 20, "de por vida");


user2.desactivar();


console.log("Descuento aplicado:", prod1.aplicarDescuento(20));


console.log("\n--- PRODUCTOS ---");
console.log(prod1.tarjeta());
console.log(prod2.tarjeta());
console.log(prod3.tarjeta());
console.log(prod4.tarjeta());


console.log("\n--- USUARIOS ---");
console.log(user1.resumen());
console.log(user2.resumen());
console.log(vip.resumen());
