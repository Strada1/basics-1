// import { getCurrentCity, saveFavoriteCities } from "./localstorage";
let cities = []

const ELEMENTS = {
    FINDINPUT: document.querySelector("#find-input"),
    FORM: document.querySelector("#find-form"),
    WEATHERICON: document.querySelector("#weather-icon"),
    TEMPERATURE: document.querySelector("#temperature"),
    LOCATION: document.querySelector("#loca"),
    LOCATIONFORBUTTON: document.querySelector('.location'),
    ADDBUTTON: document.querySelector('#add-button'),
    ADDBUTTONICON: document.querySelector('#add-icon'),
    ADDEDLOCATIONS: document.querySelector("#added-locations"),

    DETAILS_LOCATION: document.querySelector('#city'),
    DETAILS_TEMPERATURE: document.querySelector('#temp'),
    DETAILS_FEEL: document.querySelector('#feel'),
    DETAILS_WEATHER: document.querySelector('#weather'),
    DETAILS_SUNRISE: document.querySelector('#sunrise'),
    DETAILS_SUNSET: document.querySelector('#sunset')

}

const API = {
    APIKEY: 'c0a0007c44e5515d47c139f99a53019b',
    SERVERURL: 'https://api.openweathermap.org/data/2.5/weather'
}

function weatherResponce(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => data)
        .then(function (data) {

            ELEMENTS.WEATHERICON.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            ELEMENTS.TEMPERATURE.textContent = `${Number(data.main.temp).toFixed(0)}°`;
            ELEMENTS.LOCATION.textContent = data.name;
            ELEMENTS.ADDBUTTON.hidden = false;
            ELEMENTS.ADDBUTTONICON.hidden = false;

            localStorage.setItem('icon', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            localStorage.setItem('temperature', `${Number(data.main.temp).toFixed(0)}°`)
            localStorage.setItem('location', `${data.name}`)
            localStorage.setItem('button', JSON.stringify(false))
            localStorage.setItem('iconbutton', JSON.stringify(false))
            
            // ELEMENTS.DETAILS_LOCATION.textContent = data.name;
            
        })
        .catch(error => alert("Произошла ошибка"))
}

function getLocation() {
    const location = ELEMENTS.FINDINPUT.value; 
    ELEMENTS.FINDINPUT.value = '';
    return location;
}

function serverWeatherRequest(event) {
    event.preventDefault()
    const cityName = getLocation();
    const url = `${API.SERVERURL}?q=${cityName}&appid=${API.APIKEY}&units=metric`;
    weatherResponce(url) 
    
}
ELEMENTS.FORM.addEventListener('submit', serverWeatherRequest)

function addLocationToNow(id) {
    const city = cities.find(item => item.id === id)
    const url = `${API.SERVERURL}?q=${city.id}&appid=${API.APIKEY}&units=metric`;
    weatherResponce(url)
}
ELEMENTS.ADDBUTTON.addEventListener('click', addFavoriteLocation)
ELEMENTS.ADDBUTTON.addEventListener('click', addToLocalStorage)

function addToLocalStorage(cities) {
    cities = JSON.parse(localStorage.getItem('cities'))
    render()
}

function deleteFavoriteLocation(button) {
    const newCities = cities.filter((item) => item.id !== `${button}`)
    cities = newCities;
    localStorage.setItem('cities', JSON.stringify(cities))
    addToLocalStorage(cities)

    const li = document.querySelector(`#${button}`);
    li.remove();

    render()
}

function addFavoriteLocation() {
    const newCities = cities.concat({
        id: ELEMENTS.LOCATION.textContent,
    });
    cities = newCities;
    localStorage.setItem('cities', JSON.stringify(cities))
    addToLocalStorage(cities)

    render()
}

function render() {

    const deleteFavotiteCities = document.querySelectorAll('.item')
    deleteFavotiteCities.forEach(function(item) {
        item.remove();
    })
    
    for (let i = 0; i < cities.length; i++) {
        
        const element = document.createElement('li')
        const button = document.createElement('button')
        const closeButton = document.createElement('button')
        const closeIcon = document.createElement('img')

        element.id = cities[i].id
        element.className = 'item'
        button.id = cities[i].id
        button.className = 'location-button';
        button.textContent = cities[i].id
        closeButton.id = cities[i].id
        closeButton.className = 'close-button'
        closeIcon.src = './icons/close-icon.svg'

        button.addEventListener('click', () => addLocationToNow(cities[i].id))
        closeButton.addEventListener('click', () => deleteFavoriteLocation(cities[i].id))
    
        ELEMENTS.ADDEDLOCATIONS.prepend(element);
        element.prepend(button)
        element.append(closeButton)
        closeButton.prepend(closeIcon)
    }
}


ELEMENTS.WEATHERICON.src = localStorage.getItem('icon')
ELEMENTS.TEMPERATURE.textContent = localStorage.getItem('temperature')
ELEMENTS.LOCATION.textContent = localStorage.getItem('location')
ELEMENTS.ADDBUTTON.hidden = JSON.parse(localStorage.getItem('button'))
ELEMENTS.ADDBUTTONICON.hidden = JSON.parse(localStorage.getItem('iconbutton'))

