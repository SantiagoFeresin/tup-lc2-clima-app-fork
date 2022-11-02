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
    cities.push(document.getElementById("agregarCiudad").value); 
    localStorage.setItem("CITIES", JSON.stringify(cities)); 
 }
 