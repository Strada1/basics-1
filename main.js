import { ELEMENT } from './view.js';
import { renderNow } from './view.js';
import { checkCity } from "./view.js";

function deleteCity(){
  console.log('hello');
}

const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  API_KEY: '03f7974d0ab4b131f38536a817c7d22b',
}

ELEMENT.SEARCH_FORM.addEventListener('submit', event => {
  event.preventDefault();
  const cityName = ELEMENT.SEARCH_INPUT.value;
  getWeatherData(cityName);
});

export function getWeatherData(cityName){
  checkCity(cityName);
  const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  fetch(url)
    .then(responce => renderNow(responce.json()))
    .catch(error => alert(error))
}

