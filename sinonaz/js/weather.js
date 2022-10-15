import { saveToStorage, showLastCity } from "./storage.js";

const weahter = ({
  formSelector = `.js-form`,
  inputElement = `.js-input`,
  temperature = `.js-temp`,
  conditions = `.js-condition`,
  tags = {
    now: `.js-now`,
    details: `.js-details`,
    forecast: `.js-forecast`,
  },
}) => {
  const form = document.querySelector(formSelector);
  const input = form.querySelector(inputElement);
  const addBtn = form.querySelector(`.js-add`);
  let cityArr;
  let lastCity;

  if (localStorage.getItem("savedCities")) {
    cityArr = JSON.parse(localStorage.getItem("savedCities"));
  } else {
    cityArr = [];
  }

  async function onFormSubmit(cityName) {
    const serverUrl = "//api.openweathermap.org/data/2.5/weather";
    const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 300) throw new Error(data.message);
        else render(data);
      })
      .catch((error) => console.log(error));
  }

  function toHumanDate(timestamp) {
    let hours = new Date(timestamp * 1000).getHours();
    let minutes = new Date(timestamp * 1000).getMinutes();
    return hours + ":" + minutes;
  }

  function render(data) {
    let cityNameElements = form.querySelectorAll(`.js-city-name`);
    const sunsetElement = form.querySelector(`.js-sunset`);
    const sunriseElement = form.querySelector(`.js-sunrise`);
    const conditionElement = form.querySelector(conditions);
    const tempElements = form.querySelectorAll(temperature);
    const feelsLikeElement = form.querySelector(`.js-feel`);
    const iconUrl = `https://openweathermap.org/img/wn/`;
    const icon = form.querySelector(`.js-icon`);
    let sunrise = toHumanDate(data.sys.sunrise);
    let sunset = toHumanDate(data.sys.sunset);

    cityNameElements.forEach((cityName) => {
      cityName.textContent = data.name;
    });
    icon.src = `${iconUrl}${data.weather[0].icon}@2x.png`;
    tempElements.forEach((temp) => {
      temp.innerHTML = Math.round(data.main.temp - 273) + `<span>&#176</span>`;
    });
    feelsLikeElement.innerHTML =
      Math.round(data.main.feels_like - 273) + `<span>&#176</span>`;
    conditionElement.textContent = data.weather[0].main;
    sunriseElement.innerHTML = `${sunrise}`;
    sunsetElement.innerHTML = `${sunset}`;
    input.value = ``;
  }

  function addFavourite() {
    let cityNameElements = form.querySelectorAll(`.js-city-name`);
    let city = cityNameElements[0].textContent;
    if (city !== "---") {
      let index = cityArr.findIndex((anyCity) => anyCity == city);
      if (index >= 0) {
        cityArr.splice(index, 1);
      } else {
        cityArr.push(city);
      }
    }
    saveToStorage(cityArr);
    cityArr = JSON.parse(localStorage.getItem("savedCities"));
    renderFavorites();
    console.log(cityArr);
    console.log(localStorage);
  }

  function renderFavorites() {
    let cityList = form.querySelector(`.js-list`);
    cityList.innerHTML = ``;
    for (let city of cityArr) {
      const newItem = document.createElement(`li`);
      newItem.className = `weather__item`;
      newItem.textContent = city;
      const newBtn = document.createElement(`button`);
      newBtn.type = `button`;
      newBtn.className = `btn`;
      newBtn.innerHTML = `<img src="img/close-icon.svg" style="pointer-events:none;touch-action:none;">`;
      newItem.append(newBtn);
      const deleteBtn = newItem.querySelector(`button`);
      cityList.append(newItem);
      deleteBtn.addEventListener(`click`, deleteFavourites);
      newItem.addEventListener("click", renderData);
    }

    lastCity = localStorage.getItem(`lastCity`);
    if (localStorage.getItem(`lastCity`)) {
      onFormSubmit(lastCity);
    } else {
      onFormSubmit(`Bukhara`);
    }
    console.log(lastCity);
  }

  function renderData(evt) {
    if (evt.target.className != `btn`) {
      let name = evt.target.textContent;
      onFormSubmit(name);
      showLastCity(name);
      console.log(localStorage.lastCity);
    }
  }

  function deleteFavourites(evt) {
    let item = evt.target.parentNode;
    let city = item.textContent;
    let index = cityArr.findIndex((anyCity) => anyCity == city);
    cityArr.splice(index, 1);
    item.remove();
    saveToStorage(cityArr);
    cityArr = JSON.parse(localStorage.getItem("savedCities"));
    console.log(cityArr);
    console.log(localStorage);
  }

  function getWeather(evt) {
    evt.preventDefault();
    const cityName = input.value;
    onFormSubmit(cityName);
  }
  console.log(localStorage);
  console.log(cityArr);

  addBtn.addEventListener(`click`, addFavourite);
  form.addEventListener(`submit`, getWeather);
  renderFavorites();
};
export default weahter;
