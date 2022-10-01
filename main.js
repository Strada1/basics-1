const ELEMENTS = {
  citySearch: document.querySelector(".forecast-form"),
  cityInput: document.querySelector(".city-input"),
  forecastDegrees: document.querySelector(".degrees-num"),
  forecastIcon: document.querySelector(".cloud"),
  forecastCity: document.querySelector(".city-name"),
  buttonFavorite: document.querySelector(".like"),
  iconFavorite: document.querySelector(".like svg"),

  detailsTemperature: document.querySelector(
    ".details-items li:nth-child(1) span"
  ),
  detailsFeelsLike: document.querySelector(
    ".details-items li:nth-child(2) span"
  ),
  detailsWeather: document.querySelector(".details-items li:nth-child(3) span"),
  detailsSunrise: document.querySelector(".details-items li:nth-child(4) span"),
  detailsSunset: document.querySelector(".details-items li:nth-child(5) span"),
  detailsCity: document.querySelector(".forecast-details p"),
};

console.log(ELEMENTS.detailsTemperature);

const SERVER = {
  serverUrl: "http://api.openweathermap.org/data/2.5/weather",
  apiKey: "6ca767a0f89bdb44703b66b9c5240f30",
};

let list = ["Amur", "Samara", "Bali", "Dane", "Kilo", "Nur-Sultan"];
const storageList = localStorage.getItem("newList");
const storageCity = localStorage.getItem("cityName");
let cityName;

if (storageList) {
  list = JSON.parse(storageList);
}

if (storageCity) {
  cityName = storageCity;
  console.log(cityName);
  cityNow(cityName);
}
console.log(list);

//Add city in Now

function cityNow(cityName) {
  if (!cityName) {
    cityName = ELEMENTS.cityInput.value;
  }
  if (list.includes(cityName)) {
    document.querySelector(".like svg").classList.add("heart");
    console.log(ELEMENTS.iconFavorite);
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
  cityNow();
});

// Add favorite locations

function addFavoriteLocation() {
  if (list.includes(ELEMENTS.forecastCity.textContent)) {
    let newList = list.filter(
      (item) => item !== ELEMENTS.forecastCity.textContent
    );
    list = newList;
    document.querySelector(".like svg").classList.remove("heart");
  } else {
    list.push(ELEMENTS.forecastCity.textContent);
    document.querySelector(".like svg").classList.add("heart");
  }
  setLocal(list);
  setLocal(cityName);
  render();
}

// delete favorite location

function deleteFavoriteLocation(city) {
  if (list.includes(city)) {
    let newList = list.filter((item) => item !== city);
    list = newList;
    console.log(list);
  }
  setLocal(list);
  render();
}

// Render favorite cities

function render() {
  let delCity = document.querySelectorAll(".locations-items li");
  delCity.forEach((item) => item.remove());

  for (let item of list) {
    addFavoriteHTML(item);
  }
}
render();

function addFavoriteHTML(cityName) {
  const ul = document.querySelector(".locations-items");
  let li = document.createElement("li");
  ul.prepend(li);
  li.addEventListener("click", (event) => {
    event.preventDefault();
    cityNow(cityName);
  });

  let p = document.createElement("p");
  li.prepend(p);
  p.textContent = cityName;

  let button = document.createElement("button");
  button.classList.add("button-exit");
  li.append(button);
  button.addEventListener("click", () => {
    deleteFavoriteLocation(cityName);
  });
}

ELEMENTS.buttonFavorite.addEventListener("click", addFavoriteLocation);

function setLocal(item) {
  if (Array.isArray(item)) {
    localStorage.setItem("newList", JSON.stringify(item));
  } else {
    localStorage.setItem("cityName", item);
  }
}

// add sunset and sunrise time
function cityTime(dayTime, currentTimeZone) {
  let localDate =
    dayTime * 1000 +
    new Date(dayTime * 1000).getTimezoneOffset() * 60000 +
    currentTimeZone * 1000;
  const date = new Date(localDate).toLocaleTimeString();
  let localTime = date.replace(/:\d\d$/, "");
  return localTime;
}

// add forecast in Now

function setNowHTML(degrees, icon, forecastCity) {
  ELEMENTS.forecastDegrees.textContent = degrees;
  ELEMENTS.forecastCity.textContent = forecastCity;

  ELEMENTS.forecastIcon.removeAttribute("src");
  ELEMENTS.forecastIcon.removeAttribute("width");
  ELEMENTS.forecastIcon.removeAttribute("height");

  ELEMENTS.forecastIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
}

// add forecast in Details

function setDetailHTML(
  sunriseTime,
  sunsetTime,
  degrees,
  degreesFeelsLike,
  detailsWeather,
  forecastCity
) {
  ELEMENTS.detailsSunrise.textContent = sunriseTime;
  ELEMENTS.detailsSunset.textContent = sunsetTime;

  ELEMENTS.detailsTemperature.textContent = degrees;
  ELEMENTS.detailsFeelsLike.textContent = degreesFeelsLike;
  ELEMENTS.detailsWeather.textContent = detailsWeather;

  ELEMENTS.detailsCity.textContent = forecastCity;
}
