import {
  saveNowCityLocalStorage,
  saveCitiesLocalStorage,
  deleteCityLocalStorage,
  FavoriteCities,
} from "./localstorage.js";

const dataServer = {
  serverUrl: "http://api.openweathermap.org/data/2.5/weather",
  apiKey: "f660a2fb1e4bad108d6160b7f58c555f",
};
const ELEMENTS = {
  inputCityName: document.querySelector(".find_input"),
  formCity: document.querySelector(".find_city"),
  temp: document.querySelector(".temp"),
  iconCloud: document.querySelector(".cloud"),
  spanCity: document.querySelector(".span_city"),
  like: document.querySelector("#like"),
  listLocation: document.querySelector(".scroll"),
  locations: document.getElementsByClassName("location"),
  body: document.querySelector("body"),
};
const DETAILS = {
  city: document.querySelector(".top"),
  temp: document.querySelector(".info_temp"),
  feels: document.querySelector(".info_feels"),
  weater: document.querySelector(".info_weater"),
  sunrise: document.querySelector(".info_sunrise"),
  sunset: document.querySelector(".info_sunset"),
};

ELEMENTS.body.onload = function () {
  render();
};

function render() {
  let cities = localStorage.getItem("cities");
  cities = JSON.parse(cities);
  for (let city of cities) {
    addLocation(city);
    FavoriteCities.push(city);
  }
  let cityNow = localStorage.getItem("city");
  
  addWeaterCity(cityNow);
}

ELEMENTS.formCity.addEventListener("submit", function (event) {
  event.preventDefault();
  let cityName = ELEMENTS.inputCityName.value;
  addWeaterCity(cityName);
  event.target.reset();
  ELEMENTS.like.style.color = "rgb(107, 107, 107)";
});

function addWeaterCity(cityName) {
  const url = `${dataServer.serverUrl}?q=${cityName}&appid=${dataServer.apiKey}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((result) => {
      if (Number(result.cod) === 404) {
        throw new Error("Город не найден");
      }
      if (Number(result.cod) === 400) {
        throw new Error("Введите город");
      }
      ELEMENTS.spanCity.textContent = result.name;
      let temp_now = Math.round(result.main.temp);
      ELEMENTS.temp.textContent = `${temp_now}°`;
      let code_icon = result.weather[0].icon;
      let url_icon = ` https://openweathermap.org/img/wn/${code_icon}@4x.png`;
      ELEMENTS.iconCloud.src = url_icon;

      DETAILS.city.textContent = result.name;
      DETAILS.temp.textContent = `${temp_now}°`;
      let temp_feels = Math.round(result.main.feels_like);
      DETAILS.feels.textContent = `${temp_feels}°`;
      DETAILS.weater.textContent = result.weather[0].main;
      let timesunrise = result.sys.sunrise;
      let timesunset = result.sys.sunset;
      let timezoneCity = result.timezone;
      convertTimeSunrise(timesunrise, timezoneCity, "sunrise");
      convertTimeSunrise(timesunset, timezoneCity, "sunset");

      checkListLocations(result.name);
      saveNowCityLocalStorage(result.name);
    })
    .catch((Error) => alert(Error.message));
}

function convertTimeSunrise(time, timezoneCity, sun) {
  let timezone = new Date().getTimezoneOffset() * 60;
  let newTimeSunrise = (time + timezone + timezoneCity) * 1000;
  let timesun = new Date(newTimeSunrise);

  if (sun === "sunrise") {
    DETAILS.sunrise.textContent = timesun.toLocaleTimeString();
  } else {
    DETAILS.sunset.textContent = timesun.toLocaleTimeString();
  }
}

function checkListLocations(cityName) {
  for (let location of ELEMENTS.locations) {
    if (location.textContent === cityName) {
      ELEMENTS.like.style.color = "black";
      return true;
    }
  }
  return false;
}

ELEMENTS.like.addEventListener("click", function () {
  let cityName = ELEMENTS.spanCity.textContent;
  ELEMENTS.like.style.color = "black";
  let check = checkListLocations(cityName);
  if (check === false) {
    addLocation(cityName);
    saveCitiesLocalStorage(cityName);
  }
});

function addLocation(cityName) {
  let locate = document.createElement("li");
  locate.className = "locate";
  ELEMENTS.listLocation.append(locate);

  let iconClose = document.createElement('i')
  iconClose.className = "fas fa-times";
  locate.append(iconClose)

  let location = document.createElement("div");
  location.className = "location";
  location.textContent = cityName;
  locate.prepend(location);

  handler_location();
  delete_location();
}

function handler_location() {
  for (let location of ELEMENTS.locations) {
    location.addEventListener("click", function () {
      let cityName = this.textContent;
      ELEMENTS.like.style.color = "black";
      addWeaterCity(cityName);
    });
  }
}

function delete_location() {
  let btns_delete = document.querySelectorAll(".fa-times");
  for (let btn of btns_delete) {
    btn.addEventListener("click", function () {
      this.parentNode.remove();
      let nameCity = this.previousElementSibling.textContent;
      deleteCityLocalStorage(nameCity);
    });
  }
}
