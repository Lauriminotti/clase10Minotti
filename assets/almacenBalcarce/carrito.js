/* Esto se va  a ver al ingresar a la página*/

function ingreso() {
    let ubicacion = prompt("¿Sos de San Justo? SI / NO");

    if (ubicacion !== "SI") {
        alert("Solo hacemos envíos en San Justo");
        return;
    }
    let edad = parseInt(prompt("Ingresa tu edad"));
    if (edad < 18) {
        alert("No podrás comprar bebidas alcoholicas");
    }
}

ingreso();

/*Funciones en el carrito*/
function validarDatos() {
    const nombre = document.getElementById("nombreApellido").value;
    if (nombre === "") {
        alert("Tenes que ingresar su nombre");
        return;
    }
    /* alert(nombre);*/

    const numero = document.getElementById("telefono").value;
    if (numero === "") {
        alert("Tenes que ingresar tu número de teléfono");
        return;
    }
    /*alert(numero);*/
    const direccion = document.getElementById("direccion").value;
    if (direccion === "") {
        alert("Tenes que ingresar tu dirección");
        return;
    }
    /*alert(direccion);*/
    validarWhatsApp(nombre, direccion);

}

function validarWhatsApp(nombre, direccion) {
    const almacen = "+5493498478319";
    const texto = "Hola, soy " + nombre + " quiero pedir estos productos: . Mi dirección es " + direccion + ".";
    const url = "https://api.whatsapp.com/send?phone=" + almacen + "&text=" + texto;
    window.open(url);
    alert(url);
}

/*objetos*/

class Producto {
    constructor(nombre, imagen, precio, descuento) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.descuento = descuento;
    }

    getPrecioDescuento() {
        return (this.precio - this.precio * this.descuento / 100);
    }

}

const snaks = new Producto("Combo Snaks saludables", "assets/img/promoSnakSaludable.jpg", 850, 20);
const vinos = new Producto("Set de 5 Vinos", "assets/img/promoVinoUno.jpg", 2200, 40);
const pollo = new Producto("Pollo a las brasas más porción de papas fritas", "assets/img/promoPolloPapas.png", 1000, 15);
const snaksDos = new Producto("Combo Snaks variado", "assets/img/promoSnakUno.jpg", 1450, 20);
const fernet = new Producto("Combo de Fernet más Coca-Cola", "assets/img/promoFernet.jpg", 950, 45);
const sorrentinos = new Producto("Sorrentinos caseros por 12 u.", "assets/img/promoSorrentinosUno.jpg", 300, 15);


/*
console.log(snaks);
console.log("Precio con descuento: $" + snaks.getPrecioDescuento());
console.log(vinos);
console.log("Precio con descuento: $" + vinos.getPrecioDescuento());
console.log(pollo);
console.log("Precio con descuento: $" + pollo.getPrecioDescuento());
console.log(snaksDos);
console.log("Precio con descuento: $" + snaksDos.getPrecioDescuento());
console.log(fernet);
console.log("Precio con descuento: $" + fernet.getPrecioDescuento());
console.log(sorrentinos);
console.log("Precio con descuento: $" + sorrentinos.getPrecioDescuento());
*/

let productos = [];
productos.push(snaks);
productos.push(vinos);
productos.push(pollo);
productos.push(snaksDos);
productos.push(fernet);
productos.push(sorrentinos);

console.log("En total hay: " + productos.length);

class Cliente {
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    saludar() {
        return "Hola " + this.nombre + " enviaremos el producto a " + this.direccion;
    }
}

const esteban = new Cliente("Esteban Lazzaroni", "3498415203", "Figueredo 2515");
console.log(esteban.saludar());
