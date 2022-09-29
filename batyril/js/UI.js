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
