const searchForm = document.querySelector(".forecast-form");
const searchInput = document.querySelector(".inputForm");

import { ELEMENTS } from "./elements.js";
import {city, CITYNAME } from "./storage.js";

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

searchForm.addEventListener("submit", getCity);

function getCity(event) {
  event.preventDefault();
  const searchInput = document.querySelector(".inputForm").value;
  request(searchInput);
}

function request(item) {
  const url = `${serverUrl}?q=${item}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((result) => result.json())
    .then((result) => {
      if (result.cod !== 200) {
        alert(`${result.message}`);
      } else {
        renderLeftNow(result.name, result.main.temp, result.weather[0].icon);
        renderDetails(
          result.name,
          result.main.temp,
          result.weather[0].main,
          result.main.feels_like,
          result.sys.sunrise,
          result.sys.sunset,
        );
      }
    })
    .catch((err) => err.message);
  searchInput.value = "";
}

function renderLeftNow(cityName, cityTemp, cityImg) {
  let CLOUD_IMG = document.querySelector(".cloud");
  CLOUD_IMG.src = ` https://openweathermap.org/img/wn/${cityImg}@4x.png `;

  ELEMENTS.NEW_NAME_CITY.textContent = cityName;
  ELEMENTS.CITY_NAME.prepend(ELEMENTS.NEW_NAME_CITY);

  ELEMENTS.NEW_TEMP.textContent = Math.round(cityTemp) + "°";
  ELEMENTS.NEW_TEMP.classList.add("degrees-num");
  ELEMENTS.DEGREES_NUMBER.prepend(ELEMENTS.NEW_TEMP);
}

ELEMENTS.HEART.addEventListener("click", function () {
  SaveCity(ELEMENTS.CITY_NAME.innerText);
});

ELEMENTS.HEART.addEventListener("click", renderRight);

function SaveCity(name) {
  if (city !== '') {
    city.add(name);
    console.log(city)
  }

}

function renderRight() {
  city.forEach((item) => {
    let SAVED_CITY = document.createElement("li");
    SAVED_CITY.textContent = item
    ELEMENTS.SAVE_CITY_FORM.prepend(SAVED_CITY);
    let REMOVE_SAVED_CITY = document.createElement("button");
    REMOVE_SAVED_CITY.innerHTML = `<img src="/weather/img/delete-btn.svg">`;
    SAVED_CITY.appendChild(REMOVE_SAVED_CITY);
   
    SAVED_CITY.addEventListener("click", function () {
      request(item);
    });
    REMOVE_SAVED_CITY.addEventListener('click', function() {
      deleteCity(item);
    })
  });
}

function deleteCity(name) {
  city.delete(name)
  renderRight();
}

function renderDetails(cityName, cityTemp, cityWether, cityFeelLike, citySunset, citySunrise) {
 
  ELEMENTS.DETAILS_CITY.textContent = cityName;
  ELEMENTS.DETAILS_TEMP.textContent = "Temperature:" + " " + Math.round(cityTemp) + "°";
  ELEMENTS.DETAILS_WEATHER.textContent = `Weather: ${cityWether}`;
  ELEMENTS.DETAILS_FEEL_LIKE.textContent = "Feels like:" + " " + Math.round(cityFeelLike) + "°";
  let SUNRISE = new Date(citySunrise * 1000);
  let SUNSET = new Date(citySunset * 1000);

  ELEMENTS.DETAILS_SUNRISE.textContent = "Sunrise:" + " " + SUNRISE.toLocaleTimeString();
  ELEMENTS.DETAILS_SUNSET.textContent = "Sunset:" + " " + SUNSET.toLocaleTimeString();

}
