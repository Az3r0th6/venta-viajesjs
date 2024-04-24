import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener lo enlaces o documentos del DOM
let enlaces  = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        //REMOVER ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        })

    //AGREGAR ACTIVE AL QUE CORRESPONDA
    this.classList.add('active')

    //TRAER LA INFO DEL OBJETO CORRESPONDIENTE A LA ELECCION
    let contenido = obtenerContenido(this.textContent)

    //MOSTRAR EL CONTENIDO DEL DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
     });  
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}