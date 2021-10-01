/* Esto se va  a ver al ingresar a la página*/

function ingreso(){
 let ubicacion= prompt("¿Sos de San Justo? SI / NO");

 if (ubicacion !== "SI"){
     alert("Solo hacemos envíos en San Justo");
     return;
 }
    let edad= parseInt(prompt("Ingresa tu edad"));
 if (edad < 18){
     alert("No podrás comprar bebidas alcoholicas");
 }
}
ingreso();

/*Funciones en el carrito*/
function validarDatos(){
    const nombre= document.getElementById("nombreApellido").value;
    if (nombre === ""){
        alert("Tenes que ingresar su nombre");
        return;
    }
   /* alert(nombre);*/

    const numero= document.getElementById("telefono").value;
    if (numero === ""){
        alert("Tenes que ingresar tu número de teléfono");
        return;
    }
    /*alert(numero);*/
    const direccion= document.getElementById("direccion").value;
    if (direccion === ""){
        alert("Tenes que ingresar tu dirección");
        return;
    }
    /*alert(direccion);*/
validarWhatsApp(nombre, direccion);

}

function validarWhatsApp(nombre, direccion){
    const almacen= "+5493498478319";
    const texto= "Hola, soy " + nombre + " quiero pedir estos productos: . Mi dirección es " + direccion + ".";
    const url= "https://api.whatsapp.com/send?phone="+almacen+"&text="+texto;
    window.open(url);
    alert(url);
}


