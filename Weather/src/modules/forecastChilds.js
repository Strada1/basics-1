import { icon } from './icon.js';

const forecast = document.querySelector('#tab_03');

export const forecastChilds = (fore) => {
  forecast.replaceChildren();

  const h1 = document.createElement('h1');
  const h1Node = document.createTextNode(fore.city.name);
  h1.appendChild(h1Node);
  forecast.appendChild(h1);

  const optionsTime = { hour: 'numeric', minute: 'numeric' };
  const optionsDate = { month: 'long', day: 'numeric' };

  for (let list of fore.list) {
    const deg = Math.floor(list.main.temp - 273.15) + '°';
    const degFeels = Math.floor(list.main.feels_like - 273.15) + '°';
    const mainDesq = list.weather[0].main;
    const desq = list.weather[0].description;
    const dateForecast = new Date(
      list.dt * 1000 + new Date(Date.now()).getTimezoneOffset() * 60000 + fore.city.timezone * 1000,
    );

    const time = dateForecast.toLocaleTimeString(['en-Gb'], optionsTime);
    const date = dateForecast.toLocaleDateString(['en-Gb'], optionsDate);

    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'card');
    const divDate = document.createElement('div');
    divDate.setAttribute('class', 'date');
    const spanDate = document.createElement('span');
    const spanTime = document.createElement('span');
    const dateNode = document.createTextNode(date);
    const timeNode = document.createTextNode(time);
    spanDate.appendChild(dateNode);
    spanTime.appendChild(timeNode);
    divDate.appendChild(spanDate);
    divDate.appendChild(spanTime);
    const divDetails = document.createElement('div');
    divDetails.setAttribute('class', 'details');
    const ul = document.createElement('ul');
    const liDeg = document.createElement('li');
    liDeg.setAttribute('class', 'detail');
    const liDegFeels = document.createElement('li');
    liDegFeels.setAttribute('class', 'detail');
    const degNode = document.createTextNode(`Temperature: ${deg}`);
    const degFeelsNode = document.createTextNode(`Feels like: ${degFeels}`);
    liDeg.appendChild(degNode);
    liDegFeels.appendChild(degFeelsNode);
    ul.appendChild(liDeg);
    ul.appendChild(liDegFeels);
    divDetails.appendChild(ul);
    const div = document.createElement('div');
    const h1Div = document.createElement('h1');
    const h1DivNode = document.createTextNode(`${mainDesq}`);
    h1Div.appendChild(h1DivNode);
    const img = document.createElement('img');
    img.setAttribute('src', `../public/img/${icon(desq.toLowerCase())}`);
    img.setAttribute('alt', desq);
    div.appendChild(h1Div);
    div.appendChild(img);
    divDetails.appendChild(div);

    divCard.appendChild(divDate);
    divCard.appendChild(divDetails);

    forecast.appendChild(divCard);
  }
};
