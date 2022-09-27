import { UI_NOW, updateNowTab } from "./UI.js";

export function getCityWeather(cityName) {
  const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '358eaa62b262b36cac42f77b107308e8';
  const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((weather) => updateNowTab(weather, UI_NOW));
}
