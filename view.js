import { getWeatherData } from "./main.js";

export const ELEMENT = {
  SEARCH_FORM: document.querySelector('.weather__search-form'),
  SEARCH_INPUT: document.querySelector('.weather__search-input'),
  NOW: document.getElementById('tab_01'),
  NOW_TEMPERATURE: document.querySelector('.tabs__block-temperature'),
  NOW_ICON: document.querySelector('.tabs__block-img'),
  NOW_CITY: document.querySelector('.tabs__block-city'),
  NOW_BUTTON: document.querySelector('.tabs__block-button'),
  DETAILS: document.getElementById('tab_02'),
  FORECAST: document.getElementById('tab_03'),
}


export function renderNow(){
  
  const cityName = ELEMENT.SEARCH_INPUT.value;
  if(!cityName.trim()){
    alert('Empty stroke!');
    return;
  }
  const promise = getWeatherData(cityName);
  promise
    .then(weatherData => {
      const temperature = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const name = weatherData.name;
      ELEMENT.NOW_TEMPERATURE.textContent = temperature.toFixed(0) + '°';
      ELEMENT.NOW_ICON.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      ELEMENT.NOW_CITY.textContent = name;
    })
}

