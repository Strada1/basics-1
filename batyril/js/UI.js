export const UI = {
  FORM: document.querySelector('.weather__form'),
};

export const UI_NOW = {
  TEMPERATURE: document.querySelector('.now__temperature'),
  CITY_NAME: document.querySelector('.now__city'),
  IMAGE: document.querySelector('.now__image>img'),
};

function getImageLink(imageNumber) {
  const SERVER_URL = 'http://openweathermap.org/img/wn/';
  const IMAGE_FORMAT = '@2x.png';
  return `${SERVER_URL}${imageNumber}${IMAGE_FORMAT}`;
}

export function renderNowTab(jsonWeatherCity, place) {
  place.TEMPERATURE.textContent = Math.trunc(jsonWeatherCity.main.temp - 273) + '°';
  place.CITY_NAME.textContent = jsonWeatherCity.name;
  place.IMAGE.src = getImageLink(jsonWeatherCity.weather[0].icon);
}
