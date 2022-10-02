import { forecastChilds } from './modules/forecastChilds.js';
import { detailsChilds } from './modules/detailsChilds.js';
import { icon } from './modules/icon.js';

const form = document.querySelector('form');
const now = document.querySelector('#tab_01');
const input = document.querySelector('input');
const tabsItems = document.querySelector('.tabsItems');
const rUl = document.querySelector('#rUl');

const serverUrlWeather = 'http://api.openweathermap.org/data/2.5/weather';
const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

let weather = {};
let fore = {};
let cities = [];

JSON.parse(localStorage.getItem('cities'))
  ? (cities = JSON.parse(localStorage.getItem('cities')))
  : (cities = {});

localStorage.getItem('currentCity')
  ? (input.value = localStorage.getItem('currentCity'))
  : (input.value = '');

for (let tab of tabsItems.children) {
  if (localStorage.getItem('navActive') === tab.text) {
    tab.setAttribute('class', 'tabsItem active');
  }
}

tabsItems.addEventListener('click', (event) => {
  for (let tab of tabsItems.children) {
    tab.setAttribute('class', 'tabsItem');
  }
  event.target.setAttribute('class', 'tabsItem active');
  localStorage.setItem('navActive', event.target.text);
});

const nowChilds = (deg, desq, name) => {
  now.replaceChildren();

  const shape = (cities, name) => {
    const imgButton = document.createElement('img');
    imgButton.setAttribute('alt', 'Избранное');
    cities.includes(name)
      ? imgButton.setAttribute('src', '../public/img/shaped.png')
      : imgButton.setAttribute('src', '../public/img/shape.png');
    return imgButton;
  };

  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const button = document.createElement('button');

  const degNode = document.createTextNode(deg);
  const nameNode = document.createTextNode(name);

  img.setAttribute('class', 'icon');
  img.setAttribute('src', `../public/img/${icon(desq.toLowerCase())}`);
  img.setAttribute('alt', desq);
  button.setAttribute('class', 'buttonFavorite');
  h1.appendChild(degNode);
  p.appendChild(nameNode);
  button.appendChild(shape(cities, name));
  div.appendChild(p);
  div.appendChild(button);
  now.appendChild(h1);
  now.appendChild(img);
  now.appendChild(div);

  button.addEventListener('click', () => {
    if (cities.includes(name)) {
      cities = cities.filter((el) => el !== name);
    } else {
      cities = cities.concat(name);
      localStorage.setItem('cities', JSON.stringify(cities));
    }
    button.replaceChildren(shape(cities, name));
    rightUl();
  });
};

const rightUl = () => {
  rUl.replaceChildren();

  if (cities.length > 0) {
    for (let city of cities) {
      const button = document.createElement('button');
      const imgButton = document.createElement('img');
      const li = document.createElement('li');
      const cityNode = document.createTextNode(city);
      button.setAttribute('class', 'buttonDelete');
      imgButton.setAttribute('src', '../public/img/close.png');
      imgButton.setAttribute('alt', 'Удалить');
      button.appendChild(imgButton);
      li.appendChild(cityNode);
      li.appendChild(button);
      rUl.appendChild(li);
      button.addEventListener('click', () => {
        if (cities.includes(city)) {
          cities = cities.filter((el) => el !== city);
        }
        localStorage.setItem('cities', JSON.stringify(cities));
      });
      li.addEventListener('click', (event) => {
        input.value = city;
        localStorage.setItem('currentCity', input.value);
        search(event);
      });
    }
  } else {
    return;
  }
};

const search = (event) => {
  event.preventDefault();
  const cityName = input.value.toLowerCase();
  const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`;
  const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`;

  localStorage.setItem('currentCity', input.value);

  Promise.all([
    fetch(urlWeather)
      .then((response) => {
        if (response.status === 404)
          throw new Error('Ошибка, проверьте, существует ли данный город.');
        else if (response.status === 400) throw new Error('Ошибка, введите город.');
        else return response.json();
      })
      .then((result) => {
        weather = result;
      }),
    fetch(urlForecast)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('Ошибка, проверьте, существует ли данный город.');
        } else if (response.status === 400) {
          throw new Error('Ошибка, введите город.');
        }
        return response.json();
      })
      .then((result) => {
        fore = result;
        render();
      }),
  ]).catch((err) => alert(err.message));
};

form.addEventListener('submit', search);

const render = () => {
  const deg = Math.floor(weather.main.temp - 273.15) + '°';
  const degFeels = Math.floor(weather.main.feels_like - 273.15) + '°';
  const timezone = weather.timezone;
  const desq =
    weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1);
  const name = weather.name;

  const dateNow = new Date(Date.now());
  const timeSunrise = new Date(
    weather.sys.sunrise * 1000 + dateNow.getTimezoneOffset() * 60000 + timezone * 1000,
  );
  const timeSunset = new Date(
    weather.sys.sunset * 1000 + dateNow.getTimezoneOffset() * 60000 + timezone * 1000,
  );

  const sunrise = timeSunrise.toLocaleTimeString();
  const sunset = timeSunset.toLocaleTimeString();

  nowChilds(deg, desq, name);
  detailsChilds(name, deg, degFeels, desq, sunrise, sunset);
  forecastChilds(fore);
  rightUl();
};

rightUl();
