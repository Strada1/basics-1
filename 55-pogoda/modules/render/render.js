import { popupMessage } from '../showMessage/showMessage.js';

const allDomCityName = document.querySelectorAll('[data-current_city]');
const allDomTemp = document.querySelectorAll('[data-current_temp]');
const weatherImg = document.querySelector('[data-weather-icon]');
const feelsLikeElement = document.querySelector('[data-feels-like]');
const weatherElement = document.querySelector('[data-weather]');
const sunriseElement = document.querySelector('[data-sunrise]');
const sunsetElement = document.querySelector('[data-sunset]');

const getTime = (timeMs) => {
   const timeFull = new Date(Number(timeMs) * 1000);
   console.log(timeFull)
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
   weatherImg.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;
   sunriseElement.textContent = getTime(sunrise);
   sunsetElement.textContent = getTime(sunset);
}

export { render }