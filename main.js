const ELEMENTS = {
    citySearch : document.querySelector('.forecast-form'),
    cityInput : document.querySelector('.city-input'),
    forecastDegrees : document.querySelector('.degrees-num'),
    forecastIcon : document.querySelector('.cloud'),
    forecastCity : document.querySelector('.city-name'),
}

const SERVER = {
    serverUrl : 'http://api.openweathermap.org/data/2.5/weather',
    apiKey : '6ca767a0f89bdb44703b66b9c5240f30',

}

function cityNow(event) {
    
const cityName = ELEMENTS.cityInput.value;
const url = `${SERVER.serverUrl}?q=${cityName}&appid=${SERVER.apiKey}&units=metric`;

fetch(url) 
.then(response => {
    if(response.ok) {
       return response.json()
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    
    response.json()})
.then(forecast => {
    let degrees = Math.round(forecast.main.temp);
    let icon = forecast.weather[0].icon;

    ELEMENTS.forecastDegrees.textContent = degrees;
    ELEMENTS.forecastCity.textContent = forecast.name;

    ELEMENTS.forecastIcon.removeAttribute('src');
    ELEMENTS.forecastIcon.removeAttribute('width');
    ELEMENTS.forecastIcon.removeAttribute('height');

    ELEMENTS.forecastIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)

})
.catch(err => alert(err));
event.preventDefault();
ELEMENTS.cityInput.value = '';
}


ELEMENTS.citySearch.addEventListener('submit', (event) => {
    cityNow(event);
})
