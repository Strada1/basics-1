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

export async function getCityWeather(cityName) {
  try {
    const urlNow = `${SERVERS_URL.CURRENT_WEATHER}?q=${cityName}&appid=${SERVERS_URL.API_KEY}&units=metric`;
    const responseNow = await fetch(urlNow);
    if (responseNow.ok) {
      const weatherJSON = await responseNow.json();
      renderNowTab(weatherJSON, UI_NOW);
      renderDetailsTab(weatherJSON, UI_DETAILS);
      setCurrentCityLocalStorage(weatherJSON.name);
    } else {
      throw new Error(`Ошибка HTTP:  ${responseNow.status}`);
    }
    const urlForecast = `${SERVERS_URL.FORECAST_WEATHER}?q=${cityName}&appid=${SERVERS_URL.API_KEY}&units=metric`;
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const weatherJSON = await responseForecast.json();
      renderForecastTab(weatherJSON);
    } else {
      throw new Error(`Ошибка HTTP:  ${responseForecast.status}`);
    }
  } catch (error) {
    openPopup(UI.POPUP, error.message);
  }
}

export function getWeatherFavoriteList(event) {
  if (event.target.classList.contains('favorites__item')) {
    const cityName = event.target.textContent;
    getCityWeather(cityName);
  }
}
