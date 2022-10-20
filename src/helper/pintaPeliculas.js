export function pintarPeliculas(peliculas){

    let fila=document.getElementById("fila")

    peliculas.forEach(function(pelicula){
    
        //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
    
        //1. creamos una columna para cada pelicula
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //2. creamos una tarjeta para cada pelicula
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        //3. creamos una foto para cada pelicula
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
        //4. Creamos el nombre de la pelicula
        let nombre = document.createElement('h3')
        nombre.classList.add('card-title','text-center')
        nombre.textContent = pelicula.nombre
    
        //5. Creamos el genero de cada pelicula
        let genero = document.createElement("h5")
        genero.classList.add("text-start")
        genero.textContent = "Genero: "+pelicula.genero
    
        //6. Creamos el idioma de cada pelicula
        let idioma=document.createElement("h6")
        idioma.classList.add("fw-bold")
        idioma.textContent=pelicula.idioma
    
        //7. Creamos la sinopsis
        let sinopsis=document.createElement("p")
        sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.sinopsis

        //7. Creamos el director
        let director=document.createElement("p")
        director.classList.add("text-muted")
        director.textContent=pelicula.director
        
    
        //Padres e Hijos
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(director)
        tarjeta.appendChild(sinopsis)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    
    })

}