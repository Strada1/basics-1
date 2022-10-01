import { UI_ELEMENTS } from "./view.js";

let favoritesCities = [];

function getCurrentCity() {
    return localStorage.getItem('currentCity');
}
const currentCity = getCurrentCity();

function getFavoriteCities() {
    return JSON.parse(localStorage.getItem('cities'));
}
const favoriteCities = getFavoriteCities();
renderFavorites(favoriteCities);
getWeather(currentCity);

// Переключение табов
document.querySelectorAll('.tab').forEach((item) => 
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const id = event.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tab').forEach(
            (child) => child.classList.remove('active-tab')
        );
        document.querySelectorAll('.tab__item').forEach(
            (child) => child.classList.remove('active')
        )
        
        item.classList.add('active-tab');
        document.getElementById(id).classList.add('active');
    })
);

document.querySelector('.tab').click();

// Получение погоды
UI_ELEMENTS.FIND_FORM.addEventListener('submit', handlerCitySearch);
UI_ELEMENTS.FIND_CITY.addEventListener('click', handlerCitySearch);

function handlerCitySearch(event) {
    event.preventDefault();

    const city = UI_ELEMENTS.FIND_INPUT.value;
    getWeather(city);
};

async function getWeather(city) {

    const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '0a8c506a0f09e19f0f5a48594460c570';
    const URL = `${SERVER_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
    
    try {
        let response = await fetch(URL);

        if (response.ok) {
            let dataWeather = await response.json();
    
            const SRC_IMG = `
            https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@4x.png
            `;

            renderNow(Math.round(dataWeather.main.temp) ,dataWeather.name, SRC_IMG);
            renderDetails(dataWeather);
            renderForecast(dataWeather);
            localStorage.setItem('currentCity', dataWeather.name);
        } else {
            alert('Ошибочка вышла: ' + response.status);
        }
    } catch (error) {
        alert(error.stack);
    }
    
    UI_ELEMENTS.FIND_INPUT.value = '';
}
// Отрисовка вкладки NOW
function renderNow(temp, city, icon) {

    while(UI_ELEMENTS.TAB_NOW.firstChild){
        UI_ELEMENTS.TAB_NOW.removeChild(UI_ELEMENTS.TAB_NOW.firstChild);
    };

    const p1 = document.createElement('p');
    p1.classList.add('tab-now__temperature');
    p1.textContent = temp + '°';
    UI_ELEMENTS.TAB_NOW.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('tab-now__city');
    p2.textContent = city;
    UI_ELEMENTS.TAB_NOW.appendChild(p2);

    const input = document.createElement('input');
    input.classList.add('tab-now__add');
    input.type = 'button';
    input.addEventListener('click', () => addToFavorites(city));
    UI_ELEMENTS.TAB_NOW.appendChild(input);

    const img = document.createElement('img');
    img.classList.add('tab-now__img');
    img.src = icon;
    img.alt = 'weather icon';

    UI_ELEMENTS.TAB_NOW.appendChild(img);
};

// Добавление в избранное
function addToFavorites(city) {
    favoritesCities = JSON.parse(localStorage.getItem('cities'));
    favoritesCities = favoritesCities.concat([city]);
    localStorage.setItem('cities', JSON.stringify(favoritesCities));

    renderFavorites(favoritesCities);
};

// Отрисовка избранного
function renderFavorites(cities) {

    while(UI_ELEMENTS.ADDED_CITIES_LIST.firstChild){
        UI_ELEMENTS.ADDED_CITIES_LIST.removeChild(
            UI_ELEMENTS.ADDED_CITIES_LIST.firstChild
            );
    };

    for (const elem of cities) {
        const li = document.createElement('li');
        li.classList.add('added-cities__item');
        li.textContent = elem + '   ';
        li.addEventListener('click', () => findFromFavorite(elem));
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-city');
        deleteButton.addEventListener('click', () => delFromFavorites(event, cities, elem));
        li.appendChild(deleteButton);
        UI_ELEMENTS.ADDED_CITIES_LIST.appendChild(li);
    };
};

// Удаление из избранного
function delFromFavorites(event, cities, elem) {
    event.stopPropagation();

    cities = JSON.parse(localStorage.getItem('cities'));
    favoritesCities = cities.filter(item => item !== elem);
    localStorage.cities = JSON.stringify(favoritesCities);
    renderFavorites(favoritesCities);
};

// Поиск из избранного
function findFromFavorite(elem) {
    let city = elem;
    getWeather(city);
};

// Отрисовка вкладки DETAILS
function renderDetails(data) {

    while(UI_ELEMENTS.TAB_DETAILS.firstChild){
        UI_ELEMENTS.TAB_DETAILS.removeChild(UI_ELEMENTS.TAB_DETAILS.firstChild);
    };

    const dateInMsSunrise = data.sys.sunrise * 1000;
    const hoursSunrise = new Date(dateInMsSunrise).getHours();
    const minutesSunrise = new Date(dateInMsSunrise).getMinutes();
    const dateInMsSunset = data.sys.sunset * 1000;
    const hoursSunset = new Date(dateInMsSunset).getHours();
    const minutesSunset = new Date(dateInMsSunset).getMinutes();

    const arrData = [
        `Температура: ${Math.round(data.main.temp)}°`,
        `По ощущениям: ${Math.round(data.main.feels_like)}°`,
        `Погода: ${data.weather[0].description}`,
        `Восход: ${hoursSunrise}:${minutesSunrise}`,
        `Закат: ${hoursSunset}:${minutesSunset}`,
    ];

    const p = document.createElement('p');
    p.classList.add('tab-details__city');
    p.textContent = data.name;
    UI_ELEMENTS.TAB_DETAILS.appendChild(p);

    const ul = document.createElement('ul');
    ul.classList.add('tab-details__list');
    
    for (const item of arrData) {
        const li = document.createElement('li');
        li.classList.add('tab-details__item');
        li.textContent = item;
        ul.appendChild(li);
    }

    UI_ELEMENTS.TAB_DETAILS.appendChild(ul);
};

function renderForecast(data) {
};