import { getWeatherData } from "./main.js";
import { deleteCityFromStorage, saveCityList, getCityList, addCurrentCity } from "./storage.js";

// const cityList = getCityList();

export const ELEMENT = {
  SEARCH_FORM: document.querySelector('.weather__search-form'),
  SEARCH_INPUT: document.querySelector('.weather__search-input'),
  NOW: document.getElementById('tab_01'),
  NOW_TEMPERATURE: document.querySelector('.tabs__block-temperature'),
  NOW_ICON: document.querySelector('.tabs__block-img'),
  NOW_CITY: document.querySelector('.tabs__block-city'),
  NOW_BUTTON: document.querySelector('.tabs__block-button'),
  CITY_UL: document.querySelector('.weather__cities-list'),
  DETAILS: document.getElementById('tab_02'),
  DETAILS_CITY: document.querySelector('.tabs__block-title'),
  DETAILS_UL: document.querySelector('.tabs__block-list'),
  FORECAST: document.getElementById('tab_03'),
}

ELEMENT.NOW_BUTTON.addEventListener('click', addCity);

export function renderNow(promise) {
  promise
    .then(weatherData => {
      const temperature = weatherData.main.temp.toFixed(0);
      const icon = weatherData.weather[0].icon;
      const cityName = weatherData.name;
      ELEMENT.NOW_TEMPERATURE.textContent = temperature + '°';
      ELEMENT.NOW_ICON.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      ELEMENT.NOW_CITY.textContent = cityName;
      ELEMENT.SEARCH_INPUT.placeholder = cityName;
    });
}

export function renderDetails(promise) {
  promise
    .then(weatherData => {
      const cityName = weatherData.name;
      const temperature = weatherData.main.temp.toFixed(0);
      const feelsLike = weatherData.main.feels_like.toFixed(0);
      const weather = weatherData.weather[0].main;
      const sunrise = getTime(weatherData.sys.sunrise);
      const sunset = getTime(weatherData.sys.sunset);

      const dataList = [{ weatherData: temperature },
      { weatherData: feelsLike },
      { weatherData: weather },
      { weatherData: sunrise },
      { weatherData: sunset }];
      ELEMENT.DETAILS_CITY.textContent = cityName;

      const spanList = ELEMENT.DETAILS_UL.querySelectorAll('.tabs__block-list-item span');
      spanList.forEach((span, spanIndex) => {
        span.textContent = dataList[spanIndex].weatherData;
      })
    })
}

function getTime(time){
  const sunDate = new Date(time*1000);
  return sunDate.toLocaleTimeString();
}

export function checkCity(cityName) {
  if (!cityName.trim()) {
    alert('Empty stroke!');
    return;
  }
}

function addCity() {
  const cityList = getCityList();
  const cityName = ELEMENT.NOW_CITY.textContent;
  if (checkCityList(cityName, cityList)) {
    return;
  }
  const updateCityList = cityList.concat({ name: cityName });
  saveCityList(updateCityList);
  addCurrentCity(cityName);
  renderCityList()
}

function deleteCity(event) {
  const cityList = getCityList();
  const deleteButton = event.currentTarget;
  const cityName = deleteButton.previousElementSibling.textContent;
  if (checkCityList(cityName, cityList)) {
    deleteCityFromStorage(cityName);
    renderCityList();
  }
}

function checkCityList(cityName, cityList) {
  for (let cityID = 0; cityID < cityList.length; cityID++) {
    if (cityName === cityList[cityID].name) {
      return true;
    }
  }
}


function showCity(event) {
  const city = event.currentTarget;
  const cityName = city.textContent;
  addCurrentCity(cityName);
  getWeatherData(cityName);
}


export function renderCityList() {
  const cityList = getCityList();
  const UL = document.querySelectorAll('.weather__city');
  UL.forEach(li => li.remove());

  cityList.forEach((city, cityIndex) => {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const cityButton = document.createElement('button');
    li.classList.add('weather__city');
    cityButton.classList.add('weather__city-button');
    cityButton.onclick = function () { showCity(event) };
    cityButton.textContent = city.name;
    deleteButton.classList.add('weather__delete-button');
    deleteButton.onclick = function () { deleteCity(event) };
    li.append(cityButton);
    li.append(deleteButton);
    ELEMENT.CITY_UL.append(li);
  });
}