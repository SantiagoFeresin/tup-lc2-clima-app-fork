export function getCitiesFromLocalStorage() { 
    let cities = localStorage.getItem("CITIES"); 
    if(cities) { 
        cities = JSON.parse(cities); 
    } else { 
        cities = []; 
    } 
    return cities; 
}

export async function consultarAPIclima(city) {
    let data;
    let response;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a39893ad1a88e0da7a7a9b7d373a631f&units=metric&lang=es`;

    response = await fetch(url);
    data = await response.json();

    return data;
}