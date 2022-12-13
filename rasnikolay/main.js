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
};
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const CITY = ['Amur', 'Samara', 'Bali'];

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
    addLocation();
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
    addLocation();
}

function addLocation() {
    document.querySelectorAll('.list-item').forEach(function (city) {
        city.remove();
    });
    CITY.forEach((city) => {
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
        });
        btn.addEventListener('click', () => li.remove());
    });
}