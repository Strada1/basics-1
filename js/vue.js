import { showForecast } from "./main.js";
import { ELEMENTS } from "./elements.js";
import { list } from "./main.js";
import { deleteFavoriteLocation } from "./main.js";

export function render() {
  let delCity = document.querySelectorAll(".locations-items li");
  delCity.forEach((item) => item.remove());

  for (let item of list) {
    addFavoriteHTML(item);
  }
}

export function addFavoriteHTML(cityName) {
  const ul = document.querySelector(".locations-items");
  let li = document.createElement("li");
  ul.prepend(li);
  li.addEventListener("click", (event) => {
    event.preventDefault();
    showForecast(cityName);
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

export function setNowHTML(degrees, icon, forecastCity) {
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

export function setDetailHTML(
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

ELEMENTS.tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    ELEMENTS.tabs.forEach((item) => item.classList.remove("active"));
    ELEMENTS.forecastScreen.forEach((item) =>
      item.classList.remove("forecast-start")
    );
    tab.classList.add("active");
    ELEMENTS.forecastScreen[index].classList.add("forecast-start");
  });
});
