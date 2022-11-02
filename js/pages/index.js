function getCitiesFromLocalStorage() { 
    let cities = localStorage.getItem("CITIES"); 
    if(cities) { 
        cities = JSON.parse(cities); 
    } else { 
        cities = []; 
    } 
    return cities; 
}

var seleccion = document.getElementById("SelecCiudad");
var cities = getCitiesFromLocalStorage()

function agregar(ciudad) {
    let opcion = document.createElement("option");
    opcion.value = ciudad;
    opcion.innerHTML = ciudad;
    seleccion.appendChild(opcion);
}

for (let ciudad of cities) {
    agregar(ciudad)
}


let respuesta;
async function consultarAPIclima() {
    try {
        let ciudad = document.getElementById("SelecCiudad").value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=a39893ad1a88e0da7a7a9b7d373a631f&units=metric&lang=es`;

        respuesta = await fetch(url);
    } catch (error) {
        console.log("error");
    } finally {
        console.log(respuesta.JSON);
    }
}