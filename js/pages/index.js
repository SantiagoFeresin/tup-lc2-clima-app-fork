//import { consultarAPIclima, getCitiesFromLocalStorage } from "../common.js"; INTENTO FALLIDO DE IMPORTACION GLOBAL (requiere type="module")

//const { getCitiesFromLocalStorage, consultarAPIclima } = await import("../common.js"); INTENTO FALLIDO DE IMPORTACION GLOBAL (requiere type="module")

/*async () => {
    const { getCitiesFromLocalStorage, consultarAPIclima } = await import("../common.js"); }; INTENTO FALLIDO DE IMPORTACION GLOBAL (no corre)*/

async function Opciones() {
    let { getCitiesFromLocalStorage } = await import("../common.js"); //Importacion en funcion :/
    let seleccion = document.getElementById("SelecCiudad");
    let ciudades = getCitiesFromLocalStorage();
    for (let ciudad of ciudades) {
        let opcion = document.createElement("option");
        opcion.value = ciudad;
        opcion.innerHTML = ciudad;
        seleccion.appendChild(opcion);
    }
}

//Funcion para consultar la API
async function Consultar() {
    let { consultarAPIclima } = await import("../common.js"); //Importacion en funcion :/
    let seleccion = document.getElementById("SelecCiudad").value;

    document.getElementById("card").style.display = "none";
    document.getElementById("error").style.display = "none";

    //document.getElementById("spinner").style.display = "block";
    let objeto = await consultarAPIclima(seleccion);
    //document.getElementById("spinner").style.display = "none";

    if (objeto.cod != 200) {
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("card").style.display = "block";
        document.getElementById("ciudad").innerHTML = objeto.name;
        document.getElementById("temp").innerHTML = `Temperatura: ${objeto.main.temp}°`;
        document.getElementById("feels_like").innerHTML = `Sensación térmica: ${objeto.main.feels_like}°`;
        document.getElementById("humidity").innerHTML = `Humedad: ${objeto.main.humidity}%`;
        document.getElementById("wind").innerHTML = `Velocidad del viento: ${(objeto.wind.speed * 3.6).toFixed(2)}km/h`;
        document.getElementById("pressure").innerHTML = `Presión: ${objeto.main.pressure} P`;
    }
}
