import {
  UI_NOW,
  renderNowTab,
  renderDetailsTab,
  UI_DETAILS,
} from './UI.js';
import { setCurrentCityLocalStorage } from './localStorage.js';

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
      renderDetailsTab(weather, UI_DETAILS);
      return weather;
    })
    .then((weather) => setCurrentCityLocalStorage(weather.name))
    .catch((e) => console.log(e.message));
}

export function getWeatherFavoriteList(event) {
  if (event.target.classList.contains('favorites__item')) {
    const cityName = event.target.textContent;
    getCityWeather(cityName);
  }
}
