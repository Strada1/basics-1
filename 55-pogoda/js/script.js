import { popupMessage } from '../modules/showMessage/showMessage.js';
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
      addCityListToStorege(currentCity, localStorage.arrWeatherLocations);
      renderCityList(localStorage.arrWeatherLocations)
   } catch (error) {
      popupMessage(error.message, error.name)
   }
}

const handlerCityesList = (e) => {
   if (e.target.classList.contains('item__delete-cyty-btn')) {
      const deleteCity = e.target.dataset.deleteCity;
      deleteCityFromStorege(localStorage.arrWeatherLocations, deleteCity);
      renderCityList(localStorage.arrWeatherLocations);
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

            render(nameCity, temp, feels_like, weatherMain, icon, sunrise, sunset);

            const newArrCity = increaseCityPriority(localStorage.arrWeatherLocations, e.target.textContent);
            localStorage.arrWeatherLocations = JSON.stringify(newArrCity);

         }).catch(error => {
            popupMessage(error.message, error.name)
         })
      } catch (error) {
         popupMessage(error.message, error.name)
      }
   }

   renderCityList(localStorage.arrWeatherLocations);
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

document.addEventListener('DOMContentLoaded', renderCityList(localStorage.arrWeatherLocations))
saveCityBtn.addEventListener('click', handlerAddInCityList);
locationsList.addEventListener('click', handlerCityesList)
searchLocationForm.addEventListener('submit', handlerApp);