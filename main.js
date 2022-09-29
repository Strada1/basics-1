const form = document.querySelector('.search__form');
const formInput = document.querySelector('.search__form-input');
const likeButton = document.querySelector('.like__button');
const currentCity = document.querySelector('.current__city-nowtab');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
let addedLocationsMassive = [];

document.addEventListener("DOMContentLoaded", () => {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        if (JSON.parse(localStorage.getItem(`${key}`)).isSelected === true) getWeatherInfo(JSON.parse(localStorage.getItem(`${key}`)).name);
        addedLocationsMassive = addedLocationsMassive.concat(JSON.parse(localStorage.getItem(`${key}`)));
    }
    renderLocationList(addedLocationsMassive);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(formInput.value);
    formInput.value = '';
})

likeButton.addEventListener('click', () => {
    if (cityPresenceCheck(currentCity.textContent)) {
        deleteCityFromFavorite(currentCity.textContent);
    } else {
        addCityToFavorite(currentCity.textContent);
    }
})

function getWeatherInfo(cityName) {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(weather => renderNowTab(weather))
        .catch(err => console.log(err.message))
}

function renderNowTab(weatherInfo) {
    const temperatureValue = document.querySelector('.temperature__value');
    const weatherIcon = document.querySelector('.weather__icon');
    const likeIcon = likeButton.childNodes[1];
    likeIcon.addEventListener('click', () => {
        likeIcon.setAttribute('fill', 'red');
    })
    if (cityPresenceCheck(weatherInfo.name)) {
        likeIcon.setAttribute('fill', 'red');
    } else {
        likeIcon.setAttribute('fill', 'none');
    }
    temperatureValue.textContent = Math.trunc(weatherInfo.main.temp);
    currentCity.textContent = weatherInfo.name;
    formInput.placeholder = weatherInfo.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0]['icon']}@4x.png`;
    weatherIcon.alt = weatherInfo.weather[0]['main'];
    addedLocationsMassive.forEach(element => {
        (currentCity.textContent === element.name) ? element.isSelected = true : element.isSelected = false;
    });
    saveData(addedLocationsMassive);
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        if (JSON.parse(localStorage.getItem(`${key}`)).isSelected === false) {
            continue;
        }
    }
}

function cityPresenceCheck(cityName) {
    for (let city of addedLocationsMassive) {
        if (city.name === cityName) {
            return true;
        }
    }
    return false;
}

function addCityToFavorite() {
    let newCity = { name: currentCity.textContent, url: `${serverUrl}?q=${currentCity.textContent}&appid=${apiKey}&units=metric`, }
    addedLocationsMassive = addedLocationsMassive.concat(newCity);
    renderLocationList(addedLocationsMassive);
    addedLocationsMassive.forEach(element => {
        (currentCity.textContent === element.name) ? element.isSelected = true : element.isSelected = false;
    });
    saveData(addedLocationsMassive);
}

function deleteCityFromFavorite(cityName) {
    addedLocationsMassive = addedLocationsMassive.filter(item => item.name !== cityName);
    getWeatherInfo(cityName);
    renderLocationList(addedLocationsMassive);
    saveData(addedLocationsMassive);
}

function renderLocationList(list) {
    let citiesForDelete = document.querySelectorAll('.list__item');
    citiesForDelete.forEach((item) => item.remove());
    const addedLocationsList = document.querySelector('.added__locations-list');
    list.forEach(element => {
        addedLocationsList.append(createItem(element));
    });
}

function createItem(element) {
    listItem = document.createElement('li');
    listItem.classList.add('list__item');
    cityNameHolder = document.createElement('span');
    cityNameHolder.textContent = element.name;
    closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButtonIcon = document.createElement('img');
    closeButtonIcon.src = './image/delete-btn.svg';
    closeButton.append(closeButtonIcon);
    listItem.append(cityNameHolder);
    listItem.append(closeButton);
    cityNameHolder.addEventListener('click', () => {
        getWeatherInfo(element.name);
    })
    closeButton.addEventListener('click', () => {
        deleteCityFromFavorite(element.name);
        renderLocationList(addedLocationsMassive);
    })
    return listItem;
}

function saveData(list) {
    localStorage.clear();
    list.forEach((element, index) => {
        localStorage.setItem(`${index}`, JSON.stringify(element))
    });
}