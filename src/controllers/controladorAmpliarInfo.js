//PREGUNTANDO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let poster=datosPeliculaSeleccionada.poster
let nombre=datosPeliculaSeleccionada.nombre
let genero=datosPeliculaSeleccionada.genero
let idioma=datosPeliculaSeleccionada.idioma
let sinopsis=datosPeliculaSeleccionada.sinopsis


//CARGANDO DATOS
let foto=document.getElementById("foto")
foto.src=poster

let titulo = document.getElementById("titulo")
titulo.textContent=nombre

let generopelicula = document.getElementById("genero")
generopelicula.textContent = genero

let idiomaPelicula= document.getElementById("idioma")
idiomaPelicula.textContent= "Idioma: "+ idioma

let sinopsisPelicula = document.getElementById('sinopsis')
sinopsisPelicula.textContent=sinopsis

//let director

//let actores