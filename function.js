import {city, cityNameNow} from "./variable.js";
import {addCity} from "./main.js"

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'ca303486726129b9a3bc59b41b03cd15';

export function getUrl(event) {
    let cityName = city.value
    if (!city.value){
        cityName = event.currentTarget.textContent
    }
    return `${serverUrl}?q=${cityName}&appid=${apiKey}`
}

export function getTemperature(data) {
    return  Math.round(data['main']['temp'] - 273.15)
}

export function removeCity(event){
    event.currentTarget.parentNode.remove()
}

export function saveFavoriteCities() {
    let elemFavoriteCities = document.querySelectorAll('.name-favorite')
    let nameFavoriteCities = [];

    elemFavoriteCities.forEach((elem, index) => {
        nameFavoriteCities[index] = elem.textContent;
    })
    
    let nameFavoriteCitiesJson = JSON.stringify(nameFavoriteCities);
    localStorage.setItem('citiesFavorite', nameFavoriteCitiesJson)
}

export function limitFavoriteCities() {

    let favoriteCities = document.querySelectorAll('.add-city')
    favoriteCities.forEach((elem, index) => {
        if (index > 4) {
            elem.remove()
        }
    })
}

export function showFavoriteCities() {
    let citiesFavoriteJson = localStorage.getItem('citiesFavorite');
    let citiesFavorite = JSON.parse(citiesFavoriteJson)
    citiesFavorite.forEach((elem, index) =>{
        
        cityNameNow.textContent = elem;
        addCity()
    })
}

export function showCityNow() {
    let divs = document.querySelectorAll('.name-favorite')
    divs.forEach(elem =>{
        if(elem.textContent === localStorage.getItem('cityNameNow')){
            elem.click()
        }
    })
}












