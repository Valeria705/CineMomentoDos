import {peliculas} from '../helper/baseDatos.js'

import {pintarPeliculas} from '../helper/pintaPeliculas.js'


let fila=document.getElementById("fila")

//Llamo a la funcion pintarPeliculas
pintarPeliculas(peliculas)


//DETECTANDO SELECCION DE UNA PELICULA
let peliculaSeleccionada={}
fila.addEventListener("click",function(evento){

    peliculaSeleccionada.poster=evento.target.parentElement.querySelector('img').src
    peliculaSeleccionada.nombre=evento.target.parentElement.querySelector('h3').textContent //nombre
    peliculaSeleccionada.genero=evento.target.parentElement.querySelector('h5').textContent //genero
    peliculaSeleccionada.idioma=evento.target.parentElement.querySelector('h6').textContent //idioma
    peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector('p').textContent //sinopsis
    peliculaSeleccionada.director=evento.target.parentElement.querySelector('.text-muted').textContent //sinopsis



    console.log(peliculaSeleccionada)

    //LLAMANDO A LA MEMORIA DEL NAVEGADOR
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada)) 


    //rederirecciona a otra vista
    window.location.href="./src/views/ampliarInfoPelicula.html"

})
