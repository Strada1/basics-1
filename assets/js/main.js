import { timeConverter, padTo2Digits } from "/assets/js/time.js";

document.addEventListener("DOMContentLoaded", function (event) {

    const form = document.querySelector("form");
    const wrapper = document.querySelector(".wrapper");
    const nowTemperature = document.querySelector(".nowTemperature i");
    const nowCity = document.querySelector(".nowWishlist h3");
    const nowIcon = document.querySelector(".nowCondition img");
    const detailCity = document.querySelector("section#details h2");
    const detailTemperature = document.querySelector(".temperature span");
    const detailFeelsLike = document.querySelector(".feelslike span");
    const detailWeather = document.querySelector(".weather span");
    const detailSunrise = document.querySelector(".sunrise span");
    const detailSunset = document.querySelector(".sunset span");
    const addToFavourites = document.querySelector(".love");

    const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
    wrapper.prepend(form);

    const locationList = document.createElement("ul");
    locationList.id = "favorites";
    const locationHeading = document.querySelector(".addedLocations");
    locationHeading.after(locationList);

    let favoriteCities = [];
    if (localStorage.getItem("favoriteCities") === null) {
        localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
    }
    const localStorageFavCities = localStorage.getItem("favoriteCities");
    const parsedFavourites = JSON.parse(localStorageFavCities);

    function getCity(event) {
        event.preventDefault();
        const cityName = document.querySelector(".cityInput").value;
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(function (json) {
                if (json.cod === "404") {
                    alert(`${json.message}`);
                } else { 
                    const { 
                            weather: [ { description: description, icon: icon } ] ,
                            main: { temp: temp, feels_like: feels_like,  },
                            sys:{ sunrise:sunrise, sunset:sunset },
                            name:name,
                            } = json;

                    nowTemperature.textContent = temp.toFixed(0);
                    nowCity.textContent = name;
                    nowIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    nowIcon.alt = description;
                    detailCity.textContent = name;
                    detailTemperature.textContent = temp.toFixed(0);
                    detailFeelsLike.textContent = feels_like;
                    detailWeather.textContent = description;
                    detailSunrise.textContent = timeConverter(sunrise);
                    detailSunset.textContent = timeConverter(sunset);

                    favoriteCities = [];
                    favoriteCities.push({
                        name: `${name}`,
                        temperature: `${temp.toFixed(0)}`,
                        icon: `${icon}`,
                        feelslike: `${feels_like}`,
                        weather: `${description}`,
                        sunrise: `${timeConverter(sunrise)}`,
                        sunset: `${timeConverter(sunset)}`,
                    });
                    form.querySelector("input.cityInput").value = "";
                }
            })
            .catch(error => alert(error.message));
    }

    function addCityToFav() {
        const locationItem = document.createElement("li");
        locationList.prepend(locationItem);
        const lastCityItem = favoriteCities[favoriteCities.length - 1];
        const lastCityItemName = lastCityItem.name;

        if (parsedFavourites.find(i => i.name === lastCityItemName)) {
            alert("город уже добавлен");
        } else {
            parsedFavourites.push(...favoriteCities);
            localStorage.setItem("favoriteCities", JSON.stringify(parsedFavourites));

            const deleteLocation = document.createElement("a");
            locationItem.textContent = lastCityItem.name;
            locationItem.setAttribute("class", `${lastCityItem.name}`);
            locationItem.after(deleteLocation);
            deleteLocation.textContent = "x";
            deleteLocation.setAttribute("class", `${lastCityItem.name}`);
            deleteLocation.setAttribute("href", "#");
            deleteLocation.addEventListener("click", deleteFavCity);
        }
        showCurrentCity();
    }

    function renderFavCities() {
        let ul = document.getElementById("favorites");
        ul.innerHTML = "";

        if (parsedFavourites) {
            parsedFavourites.forEach(city => {
                const locationItem = document.createElement("li");
                locationList.prepend(locationItem);
                const lastCityItem = city;
                const deleteLocation = document.createElement("a");
                locationItem.textContent = lastCityItem.name;
                locationItem.setAttribute("class", `${lastCityItem.name}`);
                locationItem.after(deleteLocation);
                deleteLocation.innerHTML = "x";
                deleteLocation.setAttribute("class", `${lastCityItem.name}`);
                deleteLocation.setAttribute("href", "#");
                deleteLocation.addEventListener("click", deleteFavCity);
            })
        }
    }

    function deleteFavCity(event, name) {
        name = event.target.className;
        let position = parsedFavourites.findIndex(item => item.name == name);
        if (position >= 0) {
            parsedFavourites.splice(position, 1);
            localStorage.removeItem("favoriteCities");
            localStorage.setItem("favoriteCities", JSON.stringify(parsedFavourites));
            renderFavCities();
        }
    }

    function showCurrentCity() {
        let storedCityList = document.querySelectorAll(".citylist ul li");
        storedCityList.forEach(city => {
            city.addEventListener("click", () => {
                let currentCity = city.textContent;
                let cityObj = parsedFavourites.filter((city) => city.name == currentCity);
                const [{ name: name,
                    temperature: temperature,
                    icon: icon,
                    feelslike: feelslike,
                    weather: weather,
                    sunrise: sunrise,
                    sunset: sunset
                }] = cityObj;

                nowTemperature.textContent = temperature;
                nowCity.textContent = name;
                nowIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                nowIcon.alt = weather;
                detailCity.textContent = name;
                detailTemperature.textContent = temperature;
                detailFeelsLike.textContent = feelslike;
                detailWeather.textContent = weather;
                detailSunrise.textContent = sunrise;
                detailSunset.textContent = sunset;
            })
        })
    }

    form.addEventListener("submit", getCity);
    addToFavourites.addEventListener("click", addCityToFav);
    renderFavCities();
    showCurrentCity();

});