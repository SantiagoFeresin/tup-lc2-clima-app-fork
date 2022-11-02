function getCitiesFromLocalStorage() { 
    let cities = localStorage.getItem("CITIES"); 
    if(cities) { 
        cities = JSON.parse(cities); 
    } else { 
        cities = []; 
    } 
    return cities; 
}

function addNewCityToLocalStorage() { 
    let cities = getCitiesFromLocalStorage(); 
    let ciudadAgregada = document.getElementById("agregarCiudad").value
    if (cities.includes(ciudadAgregada)) {
        document.getElementById("Success").style.display = "none";
        document.getElementById("Error").style.display = "none";
        document.getElementById("Warning").style.display = "block";
    } else if (1) {
        document.getElementById("Success").style.display = "none";
        document.getElementById("Error").style.display = "block";
        document.getElementById("Warning").style.display = "none";
    } else {
        cities.push(ciudadAgregada);
        document.getElementById("Success").style.display = "block";
        document.getElementById("Error").style.display = "none";
        document.getElementById("Warning").style.display = "none";
    }
    localStorage.setItem("CITIES", JSON.stringify(cities)); 
 }
 