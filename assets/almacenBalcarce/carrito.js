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

