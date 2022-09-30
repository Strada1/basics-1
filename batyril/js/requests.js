import { UI_NOW, renderNowTab } from './UI.js';
import { setCurrentCity } from './localStorage.js';

export function getCityWeather(cityName) {
  const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '358eaa62b262b36cac42f77b107308e8';
  const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 401:
          throw new Error('token error');
        case 404:
          throw new Error('Not Found');
        default:
          throw new Error('error');
      }
    })
    .then((weather) => {
      renderNowTab(weather, UI_NOW);
      return weather;
    })
    .then((weather) => setCurrentCity(weather.name))
    .catch((e) => console.log(e.message));
}

export function getWeatherFavoriteList(event) {
  if (event.target.classList.contains('favorites__item')) {
    const cityName = event.target.textContent;
    getCityWeather(cityName);
  }
}
