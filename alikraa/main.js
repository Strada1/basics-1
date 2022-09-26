const ELEMENTS = {
    FORM: document.querySelector('.search__city'),
    INPUT: document.querySelector('.searching'),
    TAB_NOW_TEMPERATURE: document.querySelector('.temperature'),
    TAB_NOW_NAME: document.querySelector('.name'),
    TAB_NOW_ICON: document.querySelector('.cloud')
}

const KEYS = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: '3a93792a7ff7223513e2ff98278e394d',
}

ELEMENTS.FORM.addEventListener('submit', getCityName);

function getCityName () {
    const CITY_NAME = ELEMENTS.INPUT.value;
    getCityData(CITY_NAME);
    ELEMENTS.INPUT.value = '';
    
    event.preventDefault();
}

function getCityData (cityName) {
    const URL = `${KEYS.SERVER_URL}?q=${cityName}&APPID=${KEYS.API_KEY}&units=metric`;

    fetch(URL)
    .then(response => response.json())
    .then(weatherData => {
        ELEMENTS.TAB_NOW_TEMPERATURE.textContent = Math.round(weatherData.main.temp) + '°';
        ELEMENTS.TAB_NOW_NAME.textContent = cityName[0].toUpperCase() + cityName.slice(1);
        ELEMENTS.TAB_NOW_ICON.src = `http://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@4x.png`
    })
}