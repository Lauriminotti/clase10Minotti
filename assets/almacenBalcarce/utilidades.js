function convertirObjetoATexto(obj){
    return JSON.stringify(obj);
}
/*
const ejjson = {
    "nombre": "lauri",
    "edad": 28,
    "mujer": true,
    "celular": {
        "marca": "Xiaomi",
        "modelo": "MiA3"
    },
    "perros": ["ruddy", "Loli", "Rodo"],
    "idiomas": [
        {
            "idioma": "ingles",
            "nivel": "intermedio"
        },
        {
            "idioma": "frances",
            "nivel": "basico"
        }
    ]
};
 */

function guardarStorage(clave, valor){
    localStorage.setItem(clave, valor);
}
/*
guardarStorage( "ultimoAcceso", "25/10/2021");
 */

function leerStorage(clave){
    let valor= localStorage.getItem(clave);
    console.log(valor);
    return valor;
}
function eliminarStorage(clave){
    let valor= localStorage.removeItem(clave);
}


guardarStorage("clave", "valor");
leerStorage("ultimoAcceso");
eliminarStorage("clave");




