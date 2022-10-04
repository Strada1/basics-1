import {buttonSearch, city, cityNameNow, cityTemperature, descriptionWeather, listCities, newCity} from "./variable.js";

import {
    getTemperature,
    getUrl,
    removeCity,
    saveFavoriteCities,
    limitFavoriteCities,
    showFavoriteCities,
    showCityNow
} from "./function.js";

showFavoriteCities()
showCityNow()

buttonSearch.addEventListener('click', getDataLocation)

export function getDataLocation(event) {
    event.preventDefault()
    // showCitiesNow()
    

    fetch(getUrl(event))
        .then(response => {
            return response.json()
        })
        .then(data => {
            cityTemperature.textContent = `${getTemperature(data)}\u00B0`
            cityNameNow.textContent = data['name']
            descriptionWeather.src = `https://openweathermap.org/img/w/${data['weather'][0]['icon']}.png`
            localStorage.setItem('cityNameNow', cityNameNow.textContent)
        })
        .catch(err => {
            alert(err.message)
        })
    city.value = ''
}


newCity.addEventListener('click', addCity)

 export function addCity() {
    let divWrapper = document.createElement('div')
    divWrapper.style.display = 'flex'
    divWrapper.style.justifyContent = 'space-between'
    let div = document.createElement('div')
     div.className = 'name-favorite'
    divWrapper.className = 'add-city';
    div.textContent = cityNameNow.textContent;
    listCities.prepend(divWrapper)
    divWrapper.append(div)
    let btn = document.createElement('button')
    btn.textContent = 'x'
    divWrapper.append(btn)

    div.addEventListener('click', getDataLocation)
    btn.addEventListener('click', removeCity)
     
     limitFavoriteCities()
     saveFavoriteCities()
     
}






















