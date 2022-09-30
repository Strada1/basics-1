import { getCityList, getCurrentCity } from './storage.js';
import { ELEMENT, renderNow, checkCity, renderCityList, renderDetails } from './view.js';



const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  API_KEY: '03f7974d0ab4b131f38536a817c7d22b',
}

const cityList = getCityList();
const currentCity = getCurrentCity();
if (currentCity) {
  getWeatherData(currentCity);
}
renderCityList(cityList);

ELEMENT.SEARCH_FORM.addEventListener('submit', event => {
  event.preventDefault();
  const cityName = ELEMENT.SEARCH_INPUT.value;
  getWeatherData(cityName);
});

export function getWeatherData(cityName) {
  checkCity(cityName);
  const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
  fetch(url)
    .then(responce => {
      const promise = responce.json();
      renderNow(promise);
      renderDetails(promise);
    })
    .catch(error => alert(error))
}

