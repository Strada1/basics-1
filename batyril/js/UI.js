import { getConvertDate, getConvertTime } from "./checks.js";

export const UI = {
  FORM: document.querySelector('.weather__form'),
  FAVORITE_CITIES_LIST: document.querySelector('.favorites__list'),
};

export const UI_FORECAST = {
  FORECAST__LIST: document.querySelector('.forecast'),
  FORECAST__CITY_NAME: document.querySelector('.forecast__city'),
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

export function addForecastWeatherUI(data, place) {
  const box = document.createElement('div');
  box.classList.add('forecast__box');

  const top = document.createElement('div');
  top.classList.add('forecast__top');
  box.prepend(top);

  const date = document.createElement('div');
  date.classList.add('forecast__date');
  date.textContent = getConvertDate(data.dt);
  top.prepend(date);

  const time = document.createElement('div');
  time.classList.add('forecast__time');
  time.textContent = `${getConvertTime(data.dt)}0`;
  top.append(time);

  const bottom = document.createElement('div');
  bottom.classList.add('forecast__bottom');
  box.append(bottom);

  const wrapper = document.createElement('div');
  wrapper.classList.add('forecast__wrapper');
  bottom.prepend(wrapper);

  const temperature = document.createElement('div');
  temperature.classList.add('forecast__temperature');
  temperature.textContent = `Temperature: ${Math.trunc(data.main.temp)}°`;
  wrapper.prepend(temperature);

  const feelsLike = document.createElement('div');
  feelsLike.classList.add('forecast__feels-like');
  feelsLike.textContent = `Feels like: ${Math.trunc(data.main.feels_like)}°`;
  wrapper.append(feelsLike);

  const wrapperImage = document.createElement('div');
  wrapperImage.classList.add('forecast__wrapper');
  bottom.append(wrapperImage);

  const imageText = document.createElement('div');
  imageText.classList.add('forecast__image-text');
  imageText.textContent = data.weather[0].main;
  wrapperImage.prepend(imageText);

  const image = document.createElement('img');
  image.alt = 'rain icon';
  image.src = getImageLink(data.weather[0].icon);
  wrapperImage.append(image);
  place.append(box);
}

export function renderForecastTab(dataWeather, forecastList = UI_FORECAST.FORECAST__LIST) {
  while (forecastList.firstChild) {
    forecastList.firstChild.remove();
  }
  const cityName = document.createElement('div');
  cityName.classList.add('forecast__city');
  cityName.textContent = dataWeather.city.name;
  forecastList.prepend(cityName);
  forecastList.textContent = dataWeather.city.name;
  for (let i = 6; i <= 22; i += 8) {
    addForecastWeatherUI(dataWeather.list[i], forecastList);
  }
}

export function renderFavoriteCities(array, place = UI.FAVORITE_CITIES_LIST) {
  while (place.firstChild) {
    place.firstChild.remove();
  }
  array.forEach((city) => addFavoriteCityUI(city, place));
}
