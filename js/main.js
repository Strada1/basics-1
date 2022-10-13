import { ELEMENTS } from "./elements.js";
import { storageList, storageCity, setLocal } from "./storage.js";
import { cityTime } from "./setTime.js";
import { render, setNowHTML, setDetailHTML } from "./vue.js";

const SERVER = {
  serverForecast: "http://api.openweathermap.org/data/2.5/forecast",
  serverUrl: "http://api.openweathermap.org/data/2.5/weather",
  apiKey: "6ca767a0f89bdb44703b66b9c5240f30",
};

export let list = new Set([
  "Amur",
  "Samara",
  "Bali",
  "Dane",
  "Kilo",
  "Nur-Sultan",
]);

let cityName;

if (storageList) {
  list = new Set(JSON.parse(storageList));
}

if (storageCity) {
  cityName = storageCity;
  showForecast(cityName);
}

export function showForecast(cityName) {
  if (!cityName) {
    cityName = ELEMENTS.cityInput.value;
  }

  if (list.has(cityName)) {
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

  const forecastUrl = `${SERVER.serverForecast}?q=${cityName}&cnt=3&appid=${SERVER.apiKey}&units=metric`;

  fetch(forecastUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    })
    .then((forecastData) => {
      const newForecast = forecastData.list.map((item) => {
        return [
          new Date(item.dt_txt).getDate(),
          new Date(item.dt_txt).toLocaleString("en-us", { month: "short" }),
          `${new Date(item.dt_txt).getHours()}:00`,
          Math.round(item.main.temp),
          Math.round(item.main.feels_like),
          item.weather[0].main,
          item.weather[0].icon,
        ];
      });

      document.querySelector('.text-locations.details').textContent = forecastData.city.name;

      const DATA = [
        document.querySelectorAll(".forecast-date p:nth-child(1) span:nth-child(1)"),
        document.querySelectorAll(".forecast-date p:nth-child(1) span:nth-child(2)"),
        document.querySelectorAll(".forecast-date p:nth-child(2)"),
        document.querySelectorAll(".forecast-temperature p:nth-child(1) span"),
        document.querySelectorAll(".forecast-temperature p:nth-child(2) span"),
        document.querySelectorAll(".rain"),
        document.querySelectorAll(".forecast-icons"),
      ];

      let j = 0;
      for (let elem of DATA) {
        let i = 0;
        for (let item of elem) {
          if (j === DATA.length - 1) {
            item.setAttribute(
              "src",
              `http://openweathermap.org/img/wn/${newForecast[i][j]}@2x.png`
            );
          } else {
            item.textContent = newForecast[i][j];
          }
          ++i;
        }
        j++;
      }
    });

  ELEMENTS.cityInput.value = "";
}

ELEMENTS.citySearch.addEventListener("submit", (event) => {
  event.preventDefault();
  showForecast();
});

function addFavoriteLocation() {
  if (list.delete(ELEMENTS.forecastCity.textContent)) {
    document.querySelector(".like svg").classList.remove("heart");
  } else {
    list.add(ELEMENTS.forecastCity.textContent);
    document.querySelector(".like svg").classList.add("heart");
  }
  setLocal(list);
  setLocal(cityName);
  render();
}

export function deleteFavoriteLocation(city) {
  list.delete(city);
  setLocal(list);
  render();
}

render();

ELEMENTS.buttonFavorite.addEventListener("click", addFavoriteLocation);
