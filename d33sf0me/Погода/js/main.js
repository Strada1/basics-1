import { ELEMENTS } from "./elements.js";
import { storageList, storageCity, setLocal } from "./storage.js";
import { cityTime } from "./setTime.js";
import { render, setNowHTML, setDetailHTML } from "./vue.js";

const SERVER = {
  serverUrl: "http://api.openweathermap.org/data/2.5/weather",
  apiKey: "6ca767a0f89bdb44703b66b9c5240f30",
};

export let list = ["Amur", "Samara", "Bali", "Dane", "Kilo", "Nur-Sultan"];

let cityName;

if (storageList) {
  list = JSON.parse(storageList);
}

if (storageCity) {
  cityName = storageCity;
  showForecast(cityName);
}

export function showForecast(cityName) {
  if (!cityName) {
    cityName = ELEMENTS.cityInput.value;
  }
  if (list.includes(cityName)) {
    document.querySelector(".like svg").classList.add("heart");
  } else {
    document.querySelector(".like svg").classList.remove("heart");
  }
  setLocal(cityName);

  const url = `${SERVER.serverUrl}?q=${cityName}&appid=${SERVER.apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    })
    .then((forecast) => {
      const FORECAST = {
        degrees: Math.round(forecast.main.temp),
        degreesFeelsLike: Math.round(forecast.main.feels_like),
        icon: forecast.weather[0].icon,
        forecastCity: forecast.name,

        currentTimeZone: forecast.timezone,
        sunrise: forecast.sys.sunrise,
        sunset: forecast.sys.sunset,

        detailsWeather: forecast.weather[0].main,
      };

      const sunriseTime = cityTime(FORECAST.sunrise, FORECAST.currentTimeZone);
      const sunsetTime = cityTime(FORECAST.sunset, FORECAST.currentTimeZone);

      setNowHTML(FORECAST.degrees, FORECAST.icon, FORECAST.forecastCity);
      setDetailHTML(
        sunriseTime,
        sunsetTime,
        FORECAST.degrees,
        FORECAST.degreesFeelsLike,
        FORECAST.detailsWeather,
        FORECAST.forecastCity
      );
    })
    .catch((err) => alert(err));
  ELEMENTS.cityInput.value = "";
}

ELEMENTS.citySearch.addEventListener("submit", (event) => {
  event.preventDefault();
  showForecast();
});

function addFavoriteLocation() {
  if (list.includes(ELEMENTS.forecastCity.textContent)) {
    let newList = list.filter(
      (item) => item !== ELEMENTS.forecastCity.textContent
    );
    list = newList;
    document.querySelector(".like svg").classList.remove("heart");
  } else {
    const city = ELEMENTS.forecastCity.textContent;
    list = [city, ...list];
    document.querySelector(".like svg").classList.add("heart");
  }
  setLocal(list);
  setLocal(cityName);
  render();
}

export function deleteFavoriteLocation(city) {
  if (list.includes(city)) {
    let newList = list.filter((item) => item !== city);
    list = newList;
  }
  setLocal(list);
  render();
}

render();

ELEMENTS.buttonFavorite.addEventListener("click", addFavoriteLocation);