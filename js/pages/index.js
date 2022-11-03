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
        objeto = await respuesta.json();

    } catch (error) {
        document.getElementById("card").style.display = "none"
    } finally {
        document.getElementById("card").style.display = "block"
        document.getElementById("ciudad").innerHTML = objeto.name;
        document.getElementById("temp").innerHTML = `Temperatura: ${objeto.main.temp}°`;
        document.getElementById("feels_like").innerHTML = `Sensación térmica: ${objeto.main.feels_like}°`;
        document.getElementById("humidity").innerHTML = `Humedad: ${objeto.main.humidity}%`;
        document.getElementById("wind").innerHTML = `Velocidad del viento: ${(objeto.wind.speed * 1.60934).toFixed(2)}km/h`;
        document.getElementById("pressure").innerHTML = `Presión: ${objeto.main.pressure}P`;
    }
}