import { UI_NOW, renderNowTab } from "./UI.js";

export function getCityWeather(cityName) {
  const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '358eaa62b262b36cac42f77b107308e8';
  const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}`;
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
    .then((weather) => renderNowTab(weather, UI_NOW))
    .catch((e) => console.log(e.message));
}
