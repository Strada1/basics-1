document.addEventListener("DOMContentLoaded", renderFavouritesList)
const getInputValue = document.querySelector(".inner_form");
getInputValue.addEventListener ("submit", checkInputValue);

let addedLocations = JSON.parse(localStorage.getItem("favourites"));
let weatherData;

function checkInputValue (event) {
    event.preventDefault();
    const value = document.querySelector(".inner__form-input").value;;

    if (value.trim()) {
        requestByInputValue(value);
    } else {
        alert (`"${value}" - incorrect value`)
    }
    getInputValue.reset();
};

async function requestByInputValue (value) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${value}&appid=${apiKey}&units=metric`;

    try {
        const requestObject = await fetch(url);
        switch (requestObject["status"]) {
            case 401:
                throw new Error ("incorrect token");
            case 404:
                throw new Error ("value not found");
        }

        const result = await requestObject.json();
        weatherData = {
            cityName: result.name,
            temperature: Math.trunc(result.main["temp"]),
            feels_like: result.main["feels_like"],
            maxTemperature: result.main["temp_max"],
            minTemperature: result.main["temp_min"],
            sunrise: result.sys["sunrise"],
            sunset: result.sys["sunset"],
            weatherStatus: result.weather[0].main,
            weatherIcon: result.weather[0].icon,
        };

        renderNowBlock();
        renderDetailsBlock();
    } catch (error) {
        alert (error);
    };
};

function renderFavouritesList () {
    const listItems = document.querySelectorAll(".list__item");
    listItems.forEach((item) => item.remove());

    for (item of addedLocations) {
        layoutFavouritesLocations(item);
    }
}

function pushToFavourites () {
    if (addedLocations.includes(weatherData["cityName"])) {
        alert (`${weatherData["cityName"]} is already stored in the list of favorites`)
    } else {
        addedLocations = addedLocations.concat(weatherData["cityName"]);
        localStorage.setItem("favourites", JSON.stringify(addedLocations))
        renderFavouritesList();
    }
}

function deleteItemFromFavourites (cityName) {
    const list = addedLocations.filter(item => item !== cityName);
    addedLocations = list;
    localStorage.setItem("favourites", JSON.stringify(addedLocations))
    renderFavouritesList();
}

function getTime (ms) {
    const fullTime = new Date(ms * 1000);
    const time = `${fullTime.getHours()}:${fullTime.getMinutes()}`
    
    return time;
}

// ==== VIEW ====

function renderNowBlock () {
    const temperatureField = document.querySelector(".block__now-temperature");
    temperatureField.textContent = `${weatherData["temperature"]}°`;
    const weatherIconField = document.querySelector(".status__icon");
    weatherIconField.src = `http://openweathermap.org/img/wn/${weatherData["weatherIcon"]}@2x.png`;
    const locationField = document.querySelector(".location__now");
    locationField.textContent = weatherData["cityName"];

    const addToFavouritesButton = document.querySelector("#location-button");
    addToFavouritesButton.src = `./images/heart-icon.png`;
    addToFavouritesButton.addEventListener("click", pushToFavourites);
}

function renderDetailsBlock () {
    const locationField = document.querySelector(".location__details");
    locationField.textContent = weatherData["cityName"];

    const detailsTemperature = document.querySelector(".info__temperature");
    detailsTemperature.textContent = `Temperature: ${weatherData["temperature"]}`;
    const detailsFeelsLike = document.querySelector(".info__feels");
    detailsFeelsLike.textContent = `Feels like: ${Math.trunc(weatherData["feels_like"])}`;
    const detailsWeather = document.querySelector(".info__weather");
    detailsWeather.textContent = `Weather: ${weatherData["weatherStatus"]}`;

    const detailsSunrise = document.querySelector(".info__sunrise");
    const getTimeSunrise = getTime(weatherData["sunrise"]);
    detailsSunrise.textContent = `Sunrise: ${getTimeSunrise}`;

    const detailsSunset = document.querySelector(".info__sunset");
    const getTimeSunset = getTime(weatherData["sunset"]);
    detailsSunset.textContent = `Sunset: ${getTimeSunset}`;
}

function layoutFavouritesLocations (item) {
    const itemWrapper = document.querySelector(".favourites__list");
    const listItem = document.createElement("li");
    listItem.classList.add("list__item");
    itemWrapper.prepend(listItem);

    const itemName = document.createElement("div");
    itemName.classList.add("item__name");
    itemName.textContent = item;
    itemName.addEventListener("click", () => {
        requestByInputValue(item);
    })
    listItem.prepend(itemName);

    const itemButton = document.createElement("button");
    itemButton.classList.add("item__button");
    listItem.append(itemButton)
    itemButton.id = item;
    itemButton.addEventListener("click", () => {
        deleteItemFromFavourites(item);
    })
}

