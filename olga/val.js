const items = document.querySelectorAll(".weather__item");
const links = document.querySelectorAll(".weather__link");
const nameTown = document.querySelectorAll(".weather__item--name");
const temperatureTown = document.querySelectorAll(".temperature span");
const iconsMain = document.querySelector(".weather__item--icon img");
const input = document.querySelector(".weather__search input");
const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
export { items, links, nameTown, temperatureTown, iconsMain, input, serverUrl, apiKey };
