document.addEventListener("DOMContentLoaded", renderFavLocations);

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener ("submit", getFormVaue);


let addedLocations = [];



function getFormVaue (event) {
    event.preventDefault();
    const searchInput = document.querySelector("#search-input");
    getInputValue = searchInput.value;
    searchForm.reset();

    if (getInputValue.trim()) {
        requestByCityName(getInputValue);
    } else alert ("please, enter city name");
}

async function requestByCityName(getInputValue) {
    const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${SERVER_URL}?q=${getInputValue}&appid=${API_KEY}&units=metric`;

    try {
        const result = await fetch (url);
        switch (result["status"]) {
            case 401:
                throw new Error ("incorrect token")
            case 404:
                throw new Error ("value not found")
        }
        const getObject = await result.json();
    
        const weatherInfo = {
            cityName: getObject.name,
            temperature: getObject.main["temp"],
            feels_like: getObject.main["feels_like"],
            maxTemperature: getObject.main["temp_max"],
            minTemperature: getObject.main["temp_min"],
            sunrise: getObject.sys["sunrise"],
            sunset: getObject.sys["sunset"],
            weatherStatus: getObject.weather[0].main,
            weatherIcon: getObject.weather[0].icon,
        }
        generalRender (weatherInfo);
        pushTemperature(weatherInfo);
    } catch (err) {
        alert (err)
    }
}

function getTime (ms) {
    const fullTime = new Date(ms * 1000);
    const time = `${fullTime.getHours()}:${fullTime.getMinutes()}`
    
    return time;
}

// ----- VIEW ------

function generalRender (weatherInfo) {
    const mainBlock = document.querySelector (".weather__main");
    mainBlock.classList.add("toShow");

    const addToFavouriteButton = document.querySelector (".location__button");
    addToFavouriteButton.addEventListener("click", () => {
        pushFavLocation(weatherInfo)
    })
}

function pushTemperature(weatherInfo) {
    const cityNameFields = document.querySelectorAll(".location__name");
    const temperatureFields = document.querySelectorAll("#general-temperature");

    for (let i = 0; i < cityNameFields.length; i++) {
        cityNameFields[i].textContent = weatherInfo["cityName"];
    }

    for (let i = 0; i < temperatureFields.length; i++) {
        temperatureFields[i].textContent = `${Math.trunc(weatherInfo["temperature"])}°`;
    }

    pushWeatherInfo(weatherInfo)
}

function pushWeatherInfo (weatherInfo) {
    const feelsField = document.querySelector("#general-feels");
    const weatherStatusField = document.querySelector("#general-weather");
    const sunriseField = document.querySelector("#general-sunrise");
    const sunsetField = document.querySelector("#general-sunset");
    const weatherImageField = document.querySelector("#now__block-image");

    feelsField.textContent = `${Math.trunc(weatherInfo["feels_like"])}°`;
    weatherStatusField.textContent = weatherInfo["weatherStatus"];

    sunriseTime = getTime(weatherInfo["sunrise"]);
    sunriseField.textContent = sunriseTime
    sunsetTime = getTime(weatherInfo["sunset"]);
    sunsetField.textContent = sunsetTime

    weatherImageField.src = `http://openweathermap.org/img/wn/${weatherInfo["weatherIcon"]}@2x.png`;
}

function pushFavLocation (weatherInfo) {
    const cityName = weatherInfo["cityName"];
    const hasLocation = addedLocations.includes(cityName);

    if (!hasLocation) {
        addedLocations.push(cityName);
        renderFavLocations(cityName)
    } else {
        console.log('already done');
    }
}

function deleteFavLocation (cityName) {
    let list = addedLocations.filter(item => item !== cityName);
    addedLocations = list;
    renderFavLocations();
}

function layoutFavLocations (cityName) {
    const itemWrapper = document.querySelector(".weather__list-blocks");
    const listItem = document.createElement("li");
    listItem.classList.add("weather__list-block");

    itemWrapper.prepend(listItem);

    const itemName = document.createElement("div");
    itemName.classList.add("list__item-name");
    itemName.textContent = cityName;
    itemName.addEventListener("click", () => {
        requestByCityName(cityName);
    })
    listItem.prepend(itemName);

    const itemButton = document.createElement("button");
    itemButton.classList.add("list__delete-button");
    listItem.append(itemButton)
    itemButton.addEventListener("click", () => {
        deleteFavLocation(cityName);
    })
}

function renderFavLocations () {
    const listItems = document.querySelectorAll(".weather__list-block");
    listItems.forEach((item) => item.remove());
    for (let item of addedLocations) {
        layoutFavLocations(item)
    }
}


