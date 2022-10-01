import { popupMessage } from '../modules/showMessage/showMessage.js';
import { STOREGE } from '../modules/localStorege/localStorege.js';
import {
   render,
   renderCityList,
   addCityListToStorege,
   deleteCityFromStorege,
   increaseCityPriority,
   locationsList,
} from '../modules/render/render.js';
import { } from '../modules/tabs/tabs.js';

const searchLocationForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');
const saveCityBtn = document.querySelector('.save-city-btn');


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
            throw new Error('Bad token... 401');
         case 404:
            throw new Error('Not found... 404');
         default:
            throw new Error('Неизвестная ошибка, обратитесь к разработчику!')
      }
   })
}

const handlerAddInCityList = (e) => {
   try {
      const currentCity = document.querySelector('.tabs-block__selected-city').textContent;
      addCityListToStorege(currentCity);
      renderCityList()
   } catch (error) {
      popupMessage(error.message, error.name);
      console.error(error);
   }
}

const handlerCityesList = (e) => {
   if (e.target.classList.contains('item__delete-cyty-btn')) {
      const deleteCity = e.target.dataset.deleteCity;
      deleteCityFromStorege(deleteCity);
      renderCityList();
   } else if (e.target.classList.contains('item__show-cyty-btn')) {
      try {
         getDataWeather(e.target.textContent).then(result => {
            const {
               name: nameCity,
               main: { feels_like, temp },
               sys: { sunrise, sunset },
               weather: [{
                  main: weatherMain,
                  icon,
               }],
            } = result;

            STOREGE.setLastSelectedСity(e.target.textContent);
            increaseCityPriority(e.target.textContent);
            renderCityList();
            render(nameCity, temp, feels_like, weatherMain, icon, sunrise, sunset);
         }).catch(error => {
            popupMessage(error.message, error.name)
            console.error(error);
         })
      } catch (error) {
         popupMessage(error.message, error.name)
         console.error(error);
      }
   }
}

const handlerApp = (e) => {
   e.preventDefault();

   const city = searchInput.value ? searchInput.value : STOREGE.getLastSelectedСity();

   try {
      if (!isInputValid(city)) {
         throw new Error(`Название города не определено. Попробуйте заново!`)
      }
      getDataWeather(city).then(result => {
         const {
            name: nameCity,
            main: { feels_like, temp },
            sys: { sunrise, sunset },
            weather: [{
               main: weatherMain,
               icon,
            }],
         } = result;

         STOREGE.setLastSelectedСity(city);
         render(nameCity, temp, feels_like, weatherMain, icon, sunrise, sunset);
         renderCityList();
      }).catch(error => {
         popupMessage(error.message, error.name)
         console.error(error);
      })
   } catch (error) {
      popupMessage(error.message, error.name)
      console.error(error);
   } finally {
      searchInput.value = '';
   }
}

document.addEventListener('DOMContentLoaded', handlerApp)
saveCityBtn.addEventListener('click', handlerAddInCityList);
locationsList.addEventListener('click', handlerCityesList);
searchLocationForm.addEventListener('submit', handlerApp);