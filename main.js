import { ELEMENTS, serverUrl, apiKey } from './value.js';

let CITY = ['Amur', 'Samara', 'Bali'];

ELEMENTS.BTN.addEventListener('click', function (event) {
  event.preventDefault();
  let cityName = ELEMENTS.INPUT.value;
  let url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  checkCityName(cityName, url);
});

function checkCityName(cityName, url) {
  if (!cityName || !isNaN(cityName)) {
    alert('Enter a correct city');
  } else {
    changeNow(url);
    changeDetails(url);
  }
}

function changeNow(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('data not received from the server');
      }
      return response.json();
    })
    .then((result) => {
      ELEMENTS.NOW_CITY_NAME.textContent = result.name;
      ELEMENTS.TEMPERATURE.textContent = Math.round(result.main.temp) + '°';
      let iconCode = result.weather[0].icon;
      let urlWeather = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      ELEMENTS.ICON_NOW.src = urlWeather;
    })
    .catch(alert);
}

ELEMENTS.BODY.onload = function () {
  if (localStorage.getItem('cityes')) {
    CITY = JSON.parse(localStorage.getItem('cityes'));
  }
  getLocalStorageCityes();
  getLocalStorageCurrentCity();
};

ELEMENTS.ADD_LOCATION.addEventListener('click', () => addCityArray());

function addCityArray() {
  let nowCity = ELEMENTS.NOW_CITY_NAME.textContent;
  let pos = CITY.findIndex((city) => city === nowCity);
  if (pos === -1) {
    CITY.push(nowCity);
  } else {
    alert('City already added');
  }
  saveLocalStorageCityes();
  getLocalStorageCityes();
}

function saveLocalStorageCityes() {
  localStorage.setItem('cityes', JSON.stringify(CITY));
}

function getLocalStorageCityes() {
  if (localStorage.getItem('cityes')) {
    let cityes = localStorage.getItem('cityes');
    cityes = JSON.parse(cityes);
    renderLocation(cityes);
  }
}

function getLocalStorageCurrentCity() {
  let currentCity = localStorage.getItem('currentCity');
  currentCity = JSON.parse(currentCity);
  let url = `${serverUrl}?q=${currentCity}&appid=${apiKey}&units=metric`;
  changeNow(url);
  changeDetails(url);
}

function renderLocation(cityes) {
  document.querySelectorAll('.list-item').forEach(function (city) {
    city.remove();
  });

  cityes.forEach((city) => {
    let li = document.createElement('li');
    li.className = 'list-item';
    ELEMENTS.LIST_LOCATION.prepend(li);
    let p = document.createElement('p');
    p.className = 'list-item-city';
    p.textContent = city;
    li.append(p);
    let btn = document.createElement('button');
    btn.className = 'locations__delete';
    btn.textContent = 'X';
    li.append(btn);
    li.addEventListener('click', () => {
      changeCurrentCity(p.textContent);
    });
    btn.addEventListener('click', () => {
      deleteCity(p.textContent, li);
    });
  });
}

function changeCurrentCity(nameCity) {
  let url = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;
  changeNow(url);
  changeDetails(url);
  localStorage.setItem('currentCity', JSON.stringify(nameCity));
  getLocalStorageCurrentCity();
}

function deleteCity(nameCity, li) {
  let deleteCity = JSON.parse(localStorage.getItem('cityes'));
  let newCityes = deleteCity.filter((city) => city !== nameCity);
  localStorage.setItem('cityes', JSON.stringify(newCityes));
  li.remove();
}

function changeDetails(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('data not received from the server');
      }
      return response.json();
    })
    .then((result) => {
      ELEMENTS.DETAILS_CITY.textContent = result.name;
      changeTemperature(ELEMENTS.DETAILS_TEMPERATURE, 'Temperature: ', result.main.temp);
      changeTemperature(ELEMENTS.DETAILS_FEELS_LIKE, 'Feels like: ', result.main.feels_like);
      ELEMENTS.DETAILS_WEATHER.textContent = 'Weather: ' + result.weather[0].main;
      changeSunriseSunset(result.sys.sunrise, 'Sunrise: ', ELEMENTS.DETAILS_SUNRISE);
      changeSunriseSunset(result.sys.sunset, 'Sunset: ', ELEMENTS.DETAILS_SUNSET);
    })
    .catch(alert);
}

function changeTemperature(elementTemperature, textTemperature, resultTemp) {
  elementTemperature.textContent = textTemperature + Math.round(resultTemp) + '°';
}

function changeSunriseSunset(time, timeOfDay, elementsTimeOfDay) {
  let resultTime = new Date(time * 1000);
  resultTime = resultTime.toLocaleTimeString();
  elementsTimeOfDay.textContent = timeOfDay + resultTime.slice(0, -3);
}
