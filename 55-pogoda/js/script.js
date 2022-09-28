import { popupMessage } from '../modules/showMessage/showMessage.js';
import { render } from '../modules/render/render.js';
import { } from '../modules/tabs/tabs.js';

const searchLocationForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'metric';

const generateUrl = (cityName) => `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=${UNITS}`;
const isInputValid = (cityName) => !!cityName && !!cityName.trim && !!cityName.trim();
const getDataWeather = (cityName) => {
   const url = generateUrl(cityName);
   return fetch(url).then(result => {
      switch (result.status) {
         case 200:
            return result.json();
         case 401:
            throw new Error('Bad token...');
         case 404:
            throw new Error('Not found...');
         default:
            throw new Error('Неизвестная ошибка, обратитесь к разработчику!')
      }
   })
}

const handlerApp = (e) => {
   e.preventDefault();

   try {
      if (!isInputValid(searchInput.value)) {
         throw new Error(`Название города не определено. Попробуйте заново!`)
      }
      getDataWeather(searchInput.value).then(result => {
         const {
            name: nameCity,
            main: { feels_like, temp },
            sys: { sunrise, sunset },
            weather: [{
               main: weatherMain,
               icon,
            }],
         } = result;

         render(nameCity, temp, feels_like, weatherMain, icon, sunrise, sunset);
      }).catch(error => {
         popupMessage(error.message, error.name)
      })
   } catch (error) {
      popupMessage(error.message, error.name)
   } finally {
      searchInput.value = '';
   }
}

searchLocationForm.addEventListener('submit', handlerApp)