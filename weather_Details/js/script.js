const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a6efa68218cab903e4bd5ea3af73853d';
const cityName = document.querySelector('.input_User');
const FORM = document.querySelector('form');
const currentCity = document.querySelectorAll('.name__current_city');
const currentCityElement = document.querySelector('span.name__current_city');
const changeColorTabs = document.querySelector('.tabs__items');
const btnCurrent = document.querySelectorAll('.tab-item');
const imagesCurrentWeather = document.querySelector('.images_current_weather');
const weatherWidgetsDegrees = document.querySelector(
  '.weather_widgets-degrees'
);
const feelsLike = document.querySelectorAll('.feels_like');
const temperatureView = document.querySelector('.temperature_block');
const weatherBlockTabTwo = document.querySelector('.weather_blockTabTwo');
const favoriteBtn = document.querySelector('.favorite_btn');
const sunsetTime = document.querySelector('.sunset_block');
const sunriseTime = document.querySelector('.sunrise_block');
const listOfСities = [];

function exampleList(task) {
  const index = listOfСities.findIndex(item => item == task);
  return index;
}

function addCity(value) {
  if (value) {
    const url = `${SERVER_URL}?q=${value}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        createTabOne(data.name, data.main.temp, data.weather[0].icon);
        createTabTwo(
          data.main.feels_like,
          data.main.temp,
          data.weather[0].main,
          new Date(data.sys.sunset * 1000),
          new Date(data.sys.sunrise * 1000)
        );
        recordToStorage({ name: value }, 'lastItem');
      });
  }
}

function addFavoriteCity() {
  if (exampleList(currentCityElement.textContent) === -1) {
    listOfСities.push(currentCityElement.textContent);
    recordToStorage(listOfСities, 'Task');
    recordToStorage({ name: currentCityElement.textContent }, 'lastItem');
    addFavoriteCityinHtml(currentCityElement.textContent);
  } else {
    alert('Такой элемент уже добавлен в избранное');
  }
}

function addFavoriteCityinHtml(currentCityEl) {
  const locationList = document.querySelector('.location-list');
  const item = document.createElement('li');
  const close = document.createElement('img');
  const cityLi = document.createElement('span');
  cityLi.textContent = currentCityEl;

  close.src = './images/close.svg';
  close.classList.add('close-city');

  close.addEventListener('click', () => {
    let index = exampleList(currentCityEl);
    if (index !== -1) {
      listOfСities.splice(index, 1);
      item.remove();
      recordToStorage(listOfСities, 'Task');
    }
  });

  cityLi.addEventListener('click', () => {
    addCity(currentCityEl);
    recordToStorage(listOfСities, 'Task');
    recordToStorage({ name: currentCityEl }, 'lastItem');
  });
  item.append(cityLi);
  item.append(close);
  locationList.append(item);
}

function createTabOne(nameOfCity, degrees, iconWeather) {
  currentCity.forEach(item => {
    item.textContent = nameOfCity;
  });
  imagesCurrentWeather.src = `https://openweathermap.org/img/wn/${iconWeather}@4x.png`;
  weatherWidgetsDegrees.innerHTML = `${Math.round(degrees)}&deg;`;
}

function createTabTwo(
  feelsLikeValue,
  degrees,
  weatherValue,
  sunsetValue,
  sunriseValue
) {
  temperatureView.innerHTML = `Temperature: ${Math.round(degrees)}&deg;`;
  weatherBlockTabTwo.textContent = `Weather: ${weatherValue}`;
  feelsLike.forEach(item => {
    item.innerHTML = `Feels like: ${Math.round(feelsLikeValue)}&deg;`;
  });
  sunsetTime.textContent = `Sunset: ${
    convertTime(sunsetValue.getHours()) +
    ':' +
    convertTime(sunsetValue.getMinutes())
  }`;
  sunriseTime.textContent = `Sunrise: ${
    convertTime(sunriseValue.getHours()) +
    ':' +
    convertTime(sunriseValue.getMinutes())
  }`;
}

function convertTime(value) {
  value = value < 10 ? '0' + value : '' + value;
  return value;
}

function getInfoStorage(value) {
  if (JSON.parse(localStorage.getItem(value))) {
    const task = JSON.parse(localStorage.getItem(value));
    return task;
  }
  return;
}

function recordToStorage(tasks, nameOfTask) {
  const tasksStorage = JSON.stringify(tasks);
  localStorage.setItem(nameOfTask, tasksStorage);
}

changeColorTabs.addEventListener('click', e => {
  btnCurrent.forEach(item => {
    console.log(e.target);
    if (item === e.target || item === e.target.parentElement) {
      item.classList.add('active');
      document.querySelector(`.${item.textContent}`).style.display = 'block';
      console.log();
    } else {
      document.querySelector(`.${item.textContent}`).style.display = 'none';
      item.classList.remove('active');
    }
  });
});

if (localStorage.length) {
  if (getInfoStorage('Task')) {
    listOfСities.push(...getInfoStorage('Task'));
    listOfСities.forEach(item => {
      addFavoriteCityinHtml(item);
    });
  }
  addCity(getInfoStorage('lastItem').name);
} else {
  addCity('Aktobe');
}

FORM.addEventListener('submit', e => {
  e.preventDefault();
  addCity(cityName.value);
  cityName.value = '';
});

favoriteBtn.addEventListener('click', addFavoriteCity);
