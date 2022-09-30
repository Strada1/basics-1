const ELEMENTS = {
  INPUT: document.querySelector('.search__input'),
  BTN: document.querySelector('.search__btn'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  ICON_NOW: document.querySelector('.now__icon-img'),
  CITY_NOW: document.querySelector('.now__city'),
  DELETE_LOCATION: document.querySelectorAll('.locations__delete'),
  ADD_LOCATION: document.querySelector('.now__heart'),
  LIST_LOCATION: document.querySelector('.list'),
  NOW_CITY_NAME: document.querySelector('.now__city-name'),
  LIST_CITY: document.querySelectorAll('.list-item'),
  BODY: document.body,
  DETAILS_CITY: document.querySelector('.details__city'),
  DETAILS_TEMPERATURE: document.querySelector('#details__temperature'),
  DETAILS_FEELS_LIKE: document.querySelector('#details__feels-like'),
  DETAILS_WEATHER: document.querySelector('#details__feels-weather'),
  DETAILS_SUNRISE: document.querySelector('#details__sunrise'),
  DETAILS_SUNSET: document.querySelector('#details__sunset'),
};
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
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
  console.log(CITY);
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
      let url = `${serverUrl}?q=${p.textContent}&appid=${apiKey}&units=metric`;
      changeNow(url);
      changeDetails(url);
      localStorage.setItem('currentCity', JSON.stringify(p.textContent));
      getLocalStorageCurrentCity();
    });
    btn.addEventListener('click', () => {
      let deleteCity = JSON.parse(localStorage.getItem('cityes'));
      let newCityes = deleteCity.filter((city) => city !== p.textContent);
      localStorage.setItem('cityes', JSON.stringify(newCityes));
      li.remove();
    });
  });
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
      ELEMENTS.DETAILS_TEMPERATURE.textContent =
        'Temperature: ' + Math.round(result.main.temp) + '°';
      ELEMENTS.DETAILS_FEELS_LIKE.textContent =
        'Feels like: ' + Math.round(result.main.feels_like) + '°';
      ELEMENTS.DETAILS_WEATHER.textContent = 'Weather: ' + result.weather[0].main;
      let sunrise = new Date(result.sys.sunrise * 1000);
      sunrise = sunrise.toLocaleTimeString();
      ELEMENTS.DETAILS_SUNRISE.textContent = 'Sunrise: ' + sunrise.slice(0, -3);
      let sunset = new Date(result.sys.sunset * 1000);
      sunset = sunset.toLocaleTimeString();
      ELEMENTS.DETAILS_SUNSET.textContent = 'Sunset: ' + sunset.slice(0, -3);
    })
    .catch(alert);
}
