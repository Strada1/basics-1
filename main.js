const form = document.querySelector('.search__form');
const formInput = document.querySelector('.search__form-input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(formInput.value);
})

function getWeatherInfo(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json()
        .then(weatherInfo => console.log(weatherInfo)))
}
