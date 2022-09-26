const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

const temperature = document.querySelector('.now__temperature span');
const city = document.querySelector('.now__city-name');

// default city on page load
let cityName = 'Aktobe';

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

// default city's weather
document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData();
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // if there's an empty input throw alert
  if (!searchInput.value.length) {
    alert('Please type a city name');
  } else {
    // change cityName from default city to the one you search
    cityName = searchInput.value;

    // fetch data from the weather API
    fetchWeatherData();

    // remove text after entering
    searchInput.value = '';
  }
});

// fetch data from the weather API

function fetchWeatherData() {
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // adding temperature
      temperature.innerHTML = Math.floor(data.main.temp) + '°';
      city.innerHTML = data.name;
    });
}
