import { ELEMENT } from './view.js';
import { renderNow } from './view.js';
import { checkCity } from "./view.js";

const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
}

ELEMENT.SEARCH_FORM.addEventListener('submit', event => {
  event.preventDefault();
  getWeatherData();
});

function getWeatherData(){
  const cityName = ELEMENT.SEARCH_INPUT.value;
  checkCity(cityName);
  const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  fetch(url)
    .then(responce => renderNow(responce.json()))
    .catch(error => alert(error))
}