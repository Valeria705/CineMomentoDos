import { pintarSillas } from "../helper/pintarSillas.js"
//Estado 0: disponible (negro)
//Estado 1: seleccionado (verde)
//Estado 2: reservado (rojo)

//localStorage.clear();
let asientos=JSON.parse(localStorage.getItem("vectorPersistido"))

if(asientos==null){
    //alert("Nunca se a guardado en LocalStorage este item vectorPersistido")
    asientos =  [
        [{ id: "a1", estado: 0 }, { id: "b1", estado: 0 }, { id: "c1", estado: 0 }, { id: "d1", estado: 0 }],
        [{ id: "a2", estado: 0 }, { id: "b2", estado: 0 }, { id: "c2", estado: 0 }, { id: "d2", estado: 0 }],
        [{ id: "a3", estado: 0 }, { id: "b3", estado: 0 }, { id: "c3", estado: 0 }, { id: "d3", estado: 0 }]
    ]


}

console.log(asientos);



//PINTAR DESDE JS MI SALA DE CINE:
let cinema = document.getElementById("salacinema")
let botonreserva = document.getElementById("botonreserva")
let factura = document.getElementById("factura")
//Recorrer los asientos y aplicar traversing (for anidado para dibujar el html)
pintarSillas(asientos, cinema)

let valorboleta = 10000;

botonreserva.addEventListener("click", function (event) {
    factura.textContent=""
    //Contador para sumar las boletas
    let contador = 0;
    // for anidado para recorrer la estructura
    asientos.forEach(function (hilera) {
        hilera.forEach(function (asiento) {
            //Dentro del for pregunto por los asientos seleccionados
            if (asiento.estado == 1) {

                contador += valorboleta
                let linea = document.createElement("div")
                linea.textContent = "Numero de silla: " + asiento.id + " Valor: " + valorboleta
                // imprime la linea idividual en la factura
                factura.appendChild(linea)

                //Poner asiento en estado Reservado dentro del vector
                asiento.estado=2
                 //Poner el asiento de color rojo en el html
                let itemSeleccionado = document.getElementById(asiento.id)
                console.log(itemSeleccionado.src)
                itemSeleccionado.src="../../assets/img/cinema-red.png"
            }

        })
    })
    
    let total = document.createElement("h5")
    total.textContent= "Total a pagar: " + contador
    //Imp totales despues de recorrer el vector
    factura.appendChild(total)

    localStorage.setItem("vectorPersistido",JSON.stringify(asientos)) 


})



//Evento de clic en la sala de cine
cinema.addEventListener("click", function (evento) {
    if (evento.target.tagName == "IMG") {
        let idAsientoSeleccionado = evento.target.id

        //For anindado para cambiar los estados del vector
        asientos.forEach(function (hilera) {
            hilera.forEach(function (asiento) {
                if (asiento.id == idAsientoSeleccionado) {

                    //encontre el asiento del vector que coindice con el clic
                    if (asiento.estado == 0) {
                        asiento.estado = 1
                        evento.target.src = "../../assets/img/cinema-chair (2).png"
                    } else if (asiento.estado == 1) {
                        asiento.estado = 0
                        evento.target.src = "../../assets/img/cinema-chair.png"
                    }

                }
            })
        })



    }
});