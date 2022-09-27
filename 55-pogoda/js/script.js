import { popupMessage } from '../modules/showMessage/showMessage.js';
import { render } from '../modules/render/render.js';
import { } from '../modules/tabs/tabs.js';

const searchLocationForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');

const SERVER_URL = 'http://api.openweathermap.org/dataы/2.5/weather'; //ОШИБКА
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'metric';

const generateUrl = (cityName) => `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=${UNITS}`;
const isInputValid = (cityName) => !!cityName && !!cityName.trim && !!cityName.trim();
const getDataWeather = (cityName) => {
   const url = generateUrl(cityName);
   return fetch(url).then(result => result.json());
}

const handlerApp = async (e) => {
   e.preventDefault();

   try {
      if (!isInputValid(searchInput.value)) {
         throw new Error(`Название города не определено. Попробуйте заново!`)
      }
      const {
         name: nameCity,
         main: { feels_like, temp },
         sys: { sunrise, sunset },
         weather: [weatherArr],
      } = await getDataWeather(searchInput.value);
      const {
         main: weatherMain,
         icon,
      } = weatherArr;
      render(nameCity, temp, feels_like, weatherMain, icon, sunrise, sunset);
   } catch (error) {
      popupMessage(error.message, error.name)
   } finally {
      searchInput.value = '';
   }
}

searchLocationForm.addEventListener('submit', handlerApp)