const items = document.querySelectorAll(".weather__item");
const links = document.querySelectorAll(".weather__link");
const nameTown = document.querySelectorAll(".weather__item--name");
const temperatureTown = document.querySelectorAll(".temperature span");
const iconsMain = document.querySelector(".weather__item--icon img");
const input = document.querySelector(".weather__search input");
const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
const favorites = document.querySelector(".weather__favorites");
const locationList = document.querySelector(".location__list");
const close = document.querySelectorAll(".location__list .click");
const weatherList = document.querySelector(".weather span");
const feelsList = document.querySelectorAll(".feels span");
const sunriseList = document.querySelector(".sunrise span");
const sunsetList = document.querySelector(".sunset span");
let arr = JSON.parse(localStorage.getItem("cities")) || [];
export {
  items,
  links,
  nameTown,
  temperatureTown,
  iconsMain,
  input,
  serverUrl,
  apiKey,
  favorites,
  arr,
  locationList,
  close,
  weatherList,
  feelsList,
  sunriseList,
  sunsetList,
};
