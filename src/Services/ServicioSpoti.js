//Consumir datos del API Sapotify


//1. URI= END POINT Y URL

const uri="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us";

//2. TOKEN

const token="Bearer BQAIZnMx3JxALeczH13mF1lxpV9xUfFRrMVFikJDDrZr5OvCYlPZADl3mdhdqiPeahM7kOeTXyyAPwlKgTSlKsowASpJPXHj-XLIUT_zjGff45lQMJ3RwkbrD_S_7WQpmYWtUO-kuRGeCKrSGg1uG4Wwlpv2F_csUytGC9WxLkj7W0bqO3qnGWtrBfSvpWo";

//3.La peticion

const peticion={
    method: "GET",
    headers: {Authorization: token}
    
};
let fila=document.getElementById("fila")
//4. Usamos la promesa fetch
fetch(uri,peticion)
.then(function(respuesta){
    return respuesta.json()
}) 
.then(function(respuesta){
   let canciones=respuesta.tracks

   canciones.forEach(function(cancion){
    console.log(cancion.name);
    console.log(cancion.preview_url);

    let columna= document.createElement("div")
    columna.classList.add("col")

    let tarjeta= document.createElement("div")
    tarjeta.classList.add("card","h-100")

    let audio= document.createElement("audio")
    audio.setAttribute("controls","controls")
    audio.src= cancion.preview_url

    let nombre= document.createElement("h2")
    nombre.classList.add("text-center")
    nombre.textContent= cancion.name
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(audio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


   });

})
.catch(function(){
    console.log("ERROR!")
})