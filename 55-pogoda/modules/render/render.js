import { createElement } from '../view/createDom.js';
import { STOREGE } from '../localStorege/localStorege.js';

const allDomCityName = document.querySelectorAll('[data-current_city]');
const allDomTemp = document.querySelectorAll('[data-current_temp]');
const weatherImg = document.querySelector('[data-weather-icon]');
const feelsLikeElement = document.querySelector('[data-feels-like]');
const weatherElement = document.querySelector('[data-weather]');
const sunriseElement = document.querySelector('[data-sunrise]');
const sunsetElement = document.querySelector('[data-sunset]');
const locationsList = document.querySelector('.locations-list');

const deleteCityFromStorege = (deleteCity) => {
   const cityArr = STOREGE.pullLocalStoregeArr(true);
   const resultArr = cityArr.filter(item => item.name !== deleteCity)
   STOREGE.pushLocalStoregeArr(resultArr);
}

const increaseCityPriority = (cityName) => {
   const cityArr = STOREGE.pullLocalStoregeArr(true).map(item => {
      if (item.name === cityName) {
         ++item.elementWeight;
      }
      return item;
   })
   STOREGE.pushLocalStoregeArr(cityArr);
}

const deleteElements = (container) => {
   while (container.firstChild) {
      container.removeChild(container.firstChild)
   }
}

const isValideCity = (cityName, cityList) => {
   const checkValid = cityList.find(item => item.name === cityName)
   if (checkValid) {
      throw new Error('Данный город уже в списке!')
   }
}

const addCityListToStorege = (currentCity) => {
   let cityArr = STOREGE.pullLocalStoregeArr(true);
   if (cityArr && cityArr.length) {
      isValideCity(currentCity, cityArr)
   } else {
      cityArr = []
   }
   cityArr.push({ name: currentCity, elementWeight: 1 })
   STOREGE.pushLocalStoregeArr(cityArr);
}

const addSityToDomList = (city, list) => {
   const currentCity = city.name;
   const deleteCytyBtn = createElement('button', 'item__delete-cyty-btn', null, 'data-delete-city', city.name);
   const showCityBtn = createElement('button', 'item__show-cyty-btn', currentCity);
   const element = createElement('div', ['locations-list__items', 'item']);

   element.append(showCityBtn);
   element.append(deleteCytyBtn);
   list.append(element)
}

const renderCityList = () => {
   let cityArr = STOREGE.pullLocalStoregeArr() ? STOREGE.pullLocalStoregeArr(true) : [];

   deleteElements(locationsList);

   if (cityArr.length >= 1) {
      cityArr = cityArr.sort((a, b) => b.elementWeight - a.elementWeight);
      cityArr.forEach(city => {
         addSityToDomList(city, locationsList);
      })
   }
}

const getTime = (timeMs) => {
   const timeFull = new Date(Number(timeMs) * 1000);
   const hours = String(timeFull.getHours());
   const minutes = (timeFull.getMinutes() >= 10) ? timeFull.getMinutes() : `0${timeFull.getMinutes()}`;
   return `${hours}:${minutes}`
}

const render = (city, temp, feelsLike, weather, icon, sunrise, sunset) => {

   allDomCityName.forEach(item => {
      item.textContent = city;
   })
   allDomTemp.forEach(item => {
      item.textContent = Math.round(temp);
   })

   feelsLikeElement.textContent = Math.round(feelsLike);
   weatherElement.textContent = weather;
   weatherImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
   sunriseElement.textContent = getTime(sunrise);
   sunsetElement.textContent = getTime(sunset);
}

export { render, renderCityList, addCityListToStorege, deleteCityFromStorege, locationsList, increaseCityPriority }