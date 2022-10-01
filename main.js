let ADDED_LOCATIONS = [];
let currentForecast = {};


function getWeather(e) {
    e.preventDefault();
    let cityName = document.getElementById('search').value;
    getWeatherForCity(cityName);
}

function getWeatherForCity(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    const promise = fetch(url)
    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            setWeather(json);
            document.getElementById('search').value = "";
        })
        .catch((err) => alert(err));
}

function timestampToString(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}

function setWeather(forecast) {
    currentForecast = forecast;
    console.log(forecast);
    const temperature = forecast.main.temp;
    document.getElementById('temperature').innerHTML = Math.round(temperature) + "&#176;";
    document.getElementById('nowCity').innerHTML = forecast.name;
    document.getElementById('details-city').innerHTML = forecast.name;
    document.getElementById('details-temperature').innerHTML = Math.round(forecast.main.temp) + "&#176;";
    document.getElementById('details-feels-like').innerHTML = Math.round(forecast.main.feels_like) + "&#176;";
    document.getElementById('details-weather').innerHTML = forecast.weather[0].description;
    document.getElementById('details-sunrise').innerHTML = timestampToString(forecast.sys.sunrise); 
    document.getElementById('details-sunset').innerHTML = timestampToString(forecast.sys.sunset);
    
    renderHeartIcon();
    saveCurrentCity(forecast.name);
}

function addLocation() {
    let cityName = currentForecast.name;
    if (ADDED_LOCATIONS.indexOf(cityName) >= 0) {
        ADDED_LOCATIONS = ADDED_LOCATIONS.filter(location => location !== cityName);
    } else {
        ADDED_LOCATIONS.push(cityName);
    }
    renderHeartIcon();
    renderLocations();
    saveAddedLocations(ADDED_LOCATIONS);
}

function renderHeartIcon() {
    const icon = document.getElementById("heart-icon");
    const cityName = currentForecast.name;
    if (ADDED_LOCATIONS.indexOf(cityName) >= 0) {
        icon.className = "fa-solid fa-heart";
    } else {
        icon.className = "fa-regular fa-heart";
    }
}

function renderLocations() {
    const locations = document.getElementById('locations');
    locations.replaceChildren();
    for (let location of ADDED_LOCATIONS) {
        let divLocation = createLocation(location);
        locations.append(divLocation);
    }
}

function createLocation(cityName) {
    let divLocation = document.createElement('div');
    divLocation.className = "location";
    divLocation.innerHTML = cityName;
    divLocation.addEventListener("click", function () {
        getWeatherForCity(cityName);
    });
    return divLocation;
}

function openTab(e, tab) {
    for (let item of document.getElementsByClassName("tabcontent")) {
        item.style.display = 'none';
    }

    for (let item of document.getElementsByClassName("tablinks")) {
        item.className = item.className.replace(" active", "");
    }

    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " active";
}

function init() {
    // restore data
    ADDED_LOCATIONS = loadAddedLocations();
    const currentCity = loadCurrentCity();

    // set search handler
    let form = document.getElementById('form-search');
    form.onsubmit = getWeather;
    getWeatherForCity(currentCity);

    // set 'now' tab
    document.getElementsByClassName('tablinks')[0].click();

    // set like handler
    const likeButton = document.getElementById("like");
    likeButton.addEventListener("click", function (e) {
        e.preventDefault();
        addLocation();
    });

    renderLocations();
}

function loadAddedLocations() {
    let addedLocations = localStorage.getItem('addedLocations');
    addedLocations = addedLocations ? JSON.parse(addedLocations) : [];
    saveAddedLocations(addedLocations);
    return addedLocations;
}

function saveAddedLocations(addedLocations) {
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations));
}

function loadCurrentCity() {
    let city = localStorage.getItem('currentCity');
    if (!city) {
        city = 'Perm';
    }
    saveCurrentCity(city);
    return city;
}

function saveCurrentCity(city) {
    localStorage.setItem('currentCity', city);
}


document.addEventListener('DOMContentLoaded', init);