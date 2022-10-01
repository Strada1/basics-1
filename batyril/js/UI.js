import { getConvertTime } from "./checks.js";

export const UI = {
  FORM: document.querySelector('.weather__form'),
  FAVORITE_CITIES_LIST: document.querySelector('.favorites__list'),
};

export const UI_NOW = {
  ADD_FAVORITE_ICON: document.querySelector('.now__add-favorite>img'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  CITY_NAME: document.querySelector('.now__city'),
  IMAGE: document.querySelector('.now__image>img'),
  CURRENT_CITY: document.querySelector('.now__city'),
};

export const UI_DETAILS = {
  CITY_NAME: document.querySelector('.details__city'),
  TEMPERATURE: document.querySelector('.details__temperature>span'),
  FEELS_LIKE: document.querySelector('.details__feels-like>span'),
  WEATHER: document.querySelector('.details__weather>span'),
  SUNRISE: document.querySelector('.details__sunrise>span'),
  SUNSET: document.querySelector('.details__sunset>span'),
};

function getImageLink(imageNumber) {
  const SERVER_URL = 'http://openweathermap.org/img/wn/';
  const IMAGE_FORMAT = '@2x.png';
  return `${SERVER_URL}${imageNumber}${IMAGE_FORMAT}`;
}

export function renderNowTab(jsonWeatherCity, place) {
  place.TEMPERATURE.textContent = `${Math.trunc(jsonWeatherCity.main.temp)}°`;
  place.CITY_NAME.textContent = jsonWeatherCity.name;
  place.IMAGE.src = getImageLink(jsonWeatherCity.weather[0].icon);
}

export function renderDetailsTab(jsonWeatherCity, place) {
  place.CITY_NAME.textContent = jsonWeatherCity.name;
  place.TEMPERATURE.textContent = `${Math.trunc(jsonWeatherCity.main.temp)}°`;
  place.FEELS_LIKE.textContent = jsonWeatherCity.main.feels_like;
  place.WEATHER.textContent = jsonWeatherCity.weather[0].main;
  place.SUNRISE.textContent = getConvertTime(jsonWeatherCity.sys.sunrise);
  place.SUNSET.textContent = getConvertTime(jsonWeatherCity.sys.sunset);
}

export function addFavoriteCityUI(city, place) {
  const delImage = document.createElement('img');
  delImage.src = 'image/delete-icon.png';
  delImage.alt = 'delete icon';
  delImage.classList.add('favorites__delete');
  const liCity = document.createElement('li');
  const spanCity = document.createElement('span');
  spanCity.classList.add('favorites__item');
  spanCity.textContent = city;
  liCity.append(spanCity);
  liCity.append(delImage);
  place.append(liCity);
}

export function renderFavoriteCities(array, place = UI.FAVORITE_CITIES_LIST) {
  while (place.firstChild) {
    place.firstChild.remove();
  }
  array.forEach((city) => addFavoriteCityUI(city, place));
}
