const form = document.querySelector('.search__form');
const formInput = document.querySelector('.search__form-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(formInput.value);
    formInput.value = '';
})

function getWeatherInfo(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(weather => renderNowTab(weather))
}

function renderNowTab(weatherInfo) {
    const temperatureValue = document.querySelector('.temperature__value');
    const currentCity = document.querySelector('.current__city-nowtab');
    const weatherIcon = document.querySelector('.weather__icon');
    temperatureValue.textContent = Math.trunc(weatherInfo.main.temp);
    currentCity.textContent = weatherInfo.name;
    formInput.placeholder = weatherInfo.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0]['icon']}@4x.png`;
    weatherIcon.alt = weatherInfo.weather[0]['main'];
    console.log(weatherInfo)
}