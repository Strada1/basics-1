import { ELEMENT } from './view.js';
import { renderNow } from './view.js';

const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
}

ELEMENT.SEARCH_FORM.addEventListener('submit', event => {
  event.preventDefault();
  renderNow();
});

export async function getWeatherData(cityName){
  const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  const responce = await fetch(url);
  return responce.json();
}

