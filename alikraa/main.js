import { ELEMENTS, TAB_NOW, TAB_DETAILS, SERVER, citiesList, getCityName, newCityName, convertTime } from './view.js'

ELEMENTS.BODY.addEventListener('DOMContentLoaded', function () {
    location.href = '#now';

    getCitiesData(citiesList);
    getCurrentCityData();
})

ELEMENTS.FORM.addEventListener('submit', getCityName);

export function getCityNow (cityName) {
    const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;

    fetch(URL)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('data is not found');
        }
    })
    .then(weatherData => {
        TAB_NOW.TEMPERATURE.textContent = Math.round(weatherData.main.temp) + '°';
        TAB_NOW.NAME.textContent = newCityName(cityName);
        TAB_NOW.ICON.src = `http://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@4x.png`;
    })
    .catch(error => {
        console.log('Error: ' + error.message);
    })

    ELEMENTS.INPUT.value = '';
    TAB_NOW.FAVORITES.classList.remove('like');
    getCityDetails(cityName);
}

TAB_NOW.FAVORITES.addEventListener('click', addCityToList);
    
function addCityToList() {
    try {
        if (!citiesList.includes(TAB_NOW.NAME.textContent)) {
            citiesList.push(TAB_NOW.NAME.textContent);
            TAB_NOW.FAVORITES.classList.add('like');

            savedCitiesData(citiesList);
            getCitiesData(citiesList);
        } else {
            throw new Error('Ошибка: этот город уже добавлен в избранное!');
        }
    } catch (error) {
        alert(error.message);
    }
}
    
function render (citiesList) {
    let clearListLocations = document.querySelectorAll('.city__name-wrap');
    clearListLocations.forEach(function (item) {
        return item.remove();
    })

    citiesList.forEach(function (item) {
        let cityWrap = document.createElement('div');
        cityWrap.className = 'city__name-wrap';
        ELEMENTS.ADDED_CITIES.prepend(cityWrap);
    
        let newCity = document.createElement('p');
        newCity.className = 'city__name';
        newCity.textContent = item;
        cityWrap.prepend(newCity);
    
        newCity.addEventListener('click', function () {
            getCityNow(item);
            
            savedCitiesData(newCity.textContent);
            getCurrentCityData();
            TAB_NOW.FAVORITES.classList.add('like');
        })
    
        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete__button';
        cityWrap.append(deleteButton);
    
        let deleteIcon = document.createElement('img');
        deleteIcon.src = 'img/delete-icon.svg';
        deleteIcon.alt = 'Delete';
        deleteButton.prepend(deleteIcon);
    
        deleteButton.addEventListener('click', function() {
            cityWrap.remove();
            const removeCityName = JSON.parse(localStorage.getItem('cities'));
            const newCitiesList = removeCityName.filter(function (item) {
                return item !== newCity.textContent;
            })
            savedCitiesData(newCitiesList);
            TAB_NOW.FAVORITES.classList.remove('like');
        })
    })
}

function savedCitiesData (data) {
    if(Array.isArray(data)) {
        return localStorage.setItem('cities', JSON.stringify(data));
    } else {
        return localStorage.setItem('currentCity', JSON.stringify(data));
    }
}

function getCitiesData (data) {
    data = JSON.parse(localStorage.getItem('cities'));
    render(data);
}

function getCurrentCityData () {
    const currentCity = JSON.parse(localStorage.getItem('currentCity'));
    getCityNow(currentCity);

    TAB_NOW.FAVORITES.classList.add('like');
}

function getCityDetails (cityName) {
    const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;

    fetch(URL)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            console.log('Error: ' + response.status);
        }
    })
    .then(weatherDetails => {
        TAB_DETAILS.HEADER.textContent = TAB_NOW.NAME.textContent;
        TAB_DETAILS.TEMPERATURE.textContent = 'Temperature: ' + Math.round(weatherDetails.main.temp) + '°';
        TAB_DETAILS.FEELING.textContent = 'Feels like: ' + Math.round(weatherDetails.main.feels_like) + '°';
        TAB_DETAILS.WEATHER.textContent = 'Weather: ' + weatherDetails.weather[0]['main'];
        TAB_DETAILS.SUNRISE.textContent = 'Sunrise: ' + convertTime(weatherDetails.sys.sunrise);
        TAB_DETAILS.SUNSET.textContent = 'Sunset: ' + convertTime(weatherDetails.sys.sunset);
    })
}

TAB_NOW.BUTTON.forEach(function (elem) {
    elem.addEventListener('click', function () {
        TAB_NOW.BUTTON.forEach(function (elem) {
            elem.classList.remove('active');
        })
        elem.classList.add('active');
    })
})

TAB_NOW.LINK.forEach(function (elem) {
    elem.addEventListener('click', function () {
        TAB_NOW.LINK.forEach(function (elem) {
            elem.classList.remove('link');
        })
        elem.classList.add('link');
    })
})

render(citiesList);