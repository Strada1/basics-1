const ELEMENTS = {
    FORM: document.querySelector('.search__city'),
    INPUT: document.querySelector('.searching'),
    TAB_NOW_TEMPERATURE: document.querySelector('.temperature'),
    TAB_NOW_NAME: document.querySelector('.name'),
    TAB_NOW_ICON: document.querySelector('.cloud')
}

const SERVER = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}

ELEMENTS.FORM.addEventListener('submit', getCityName);

function getCityName () {
    checkCity()
    const CITY_NAME = ELEMENTS.INPUT.value;
    getCityNow(CITY_NAME);
    
    event.preventDefault();
}

function getCityNow (cityName) {
    const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;

    fetch(URL)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('data is not found')
        }
    })
    .then(weatherData => {
        ELEMENTS.TAB_NOW_TEMPERATURE.textContent = Math.round(weatherData.main.temp) + '°';
        ELEMENTS.TAB_NOW_NAME.textContent = newCityName(cityName);
        ELEMENTS.TAB_NOW_ICON.src = `http://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@4x.png`
    })
    .catch(error => {
        console.log('Error: ' + error.message)
    })

    ELEMENTS.INPUT.value = '';
}

function checkCity () {
    try {
        if(ELEMENTS.INPUT.value.trim()) {
            return ELEMENTS.INPUT.value;
        } else {
            throw new Error('Ошибка: введите название города')
        }
    } catch (error) {
        alert(error.message)
    }
}

function newCityName (string) {
    let newString = string.split(' ')

    return newString.map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}