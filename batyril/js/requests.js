import {
  UI_NOW,
  renderNowTab,
  renderDetailsTab,
  renderForecastTab,
  UI_DETAILS, UI,
} from './UI.js';
import { setCurrentCityLocalStorage } from './localStorage.js';
import { openPopup } from './popup.js';

export const SERVERS_URL = {
  CURRENT_WEATHER: 'http://api.openweathermap.org/data/2.5/weather',
  FORECAST_WEATHER: 'http://api.openweathermap.org/data/2.5/forecast',
  API_KEY: '358eaa62b262b36cac42f77b107308e8',
};

export function getCityWeatherForecast(cityName) {
  const url = `${SERVERS_URL.FORECAST_WEATHER}?q=${cityName}&appid=${SERVERS_URL.API_KEY}&units=metric`;
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
      renderForecastTab(weather);
      return weather;
    })
    .catch((e) => openPopup(UI.POPUP, e.message));
}

export function getCityWeather(cityName) {
  const url = `${SERVERS_URL.CURRENT_WEATHER}?q=${cityName}&appid=${SERVERS_URL.API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 401:
          throw new Error('Token error');
        case 404:
          throw new Error('The city was not found, try again');
        default:
          throw new Error('error');
      }
    })
    .then((weather) => {
      renderNowTab(weather, UI_NOW);
      renderDetailsTab(weather, UI_DETAILS);
      return weather;
    })
    .then((weather) => {
      getCityWeatherForecast(weather.name);
      setCurrentCityLocalStorage(weather.name);
    })
    .catch((e) => openPopup(UI.POPUP, e.message));
}

export function getWeatherFavoriteList(event) {
  if (event.target.classList.contains('favorites__item')) {
    const cityName = event.target.textContent;
    getCityWeather(cityName);
  }
}
