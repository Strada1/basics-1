const weatherAPI = {
    serverUrl: "http://api.openweathermap.org/data/2.5/weather",
    cityName: "",
    apiKey: "f660a2fb1e4bad108d6160b7f58c555f",
    url() {return `${this.serverUrl}?q=${this.cityName}&units=metric&appid=${this.apiKey}`}
}

const pageElements = {
    form: document.querySelector(".weather__form"),
    inputCity: document.querySelector('.weather__input'),
    nameCity: document.querySelector('.weather__city span'),
    temperature: document.querySelector('.weather__temperature'),
    weather_img: document.querySelector('.weather__icon'),
    weatherAddButton: document.querySelector('.weather__added'),
    weatherAddedLocations: document.querySelector('.weather__added-locations'),
    weatherSavedLocation: 0,
}

const savedLocations = [];

const getWeather = async function(callback){
    let json;
    let result = await fetch(weatherAPI.url())
    .catch(alert);
    if(result.ok){
        json = await result.json();
    } else{
        alert(new Error("Ошибка!"));
    }
    callback(json);
}

const inputHandler = function(event){
    event.preventDefault();
    weatherAPI.cityName = pageElements.inputCity.value;
    getWeather(json => {
        pageElements.nameCity.textContent = json.name;
        pageElements.temperature.textContent = Math.round(json.main.temp) + '°';
        pageElements.weather_img.setAttribute('src', `./img/${json.weather[0].icon}.png`);

        const setCurrentCity = {
            currentLocation: json.name,
            currentTemp: Math.round(json.main.temp) + '°',
            currentIcon: `./img/${json.weather[0].icon}.png`,
        };

        localStorage.setItem('currentData', JSON.stringify(setCurrentCity));
    })

}

/// загрузка текущего города, при обновлении страницы данные используется последнего указанного

function currentLocationHandler(){
    const getCurrentCity = JSON.parse(localStorage.getItem("currentData"));
    pageElements.nameCity.textContent = getCurrentCity.currentLocation;
    pageElements.temperature.textContent = getCurrentCity.currentTemp;
    pageElements.weather_img.setAttribute('src', getCurrentCity.currentIcon);
}



const createLocation = function(localName){
    const savedCity = document.createElement('div');
    savedCity.className = "weather__saved-location";
    const nameCity = document.createElement('span');
    nameCity.textContent = localName || pageElements.nameCity.textContent;
    const removeButton = document.createElement('div');
    removeButton.textContent = "X";
    removeButton.className = "weather__saved-remove";
    savedCity.append(nameCity);
    savedCity.append(removeButton);
    pageElements.weatherAddedLocations.append(savedCity);
    
    savedLocations.push(nameCity.textContent);
}

const saveCity = function(){
    if(!savedLocations.includes(pageElements.nameCity.textContent)){
        createLocation();
    }

    pageElements.weatherSavedLocation = document.querySelectorAll('.weather__saved-location');
    localStorage.setItem("saveLocations", JSON.stringify(savedLocations));

    /// инициализация функции удаления
    removeLocation();

    /// инициализация функции выбора города из списка
    selectedLocation();
}

const renderHandler = function(){
    const parseLocations = JSON.parse(localStorage.getItem("saveLocations"));
    for(city of parseLocations){
        createLocation(city);
    }
}

const removeLocation = function(){
    pageElements.weatherSavedLocation.forEach(button => button.querySelector('.weather__saved-remove').addEventListener('click', function(){
        savedLocations.find((item,index) => (item == button.querySelector('span').textContent) ? savedLocations.splice(index,1): false);
        localStorage.setItem("saveLocations", JSON.stringify(savedLocations));
        button.remove();
    }));
}

const selectedLocation = function(){
    pageElements.weatherSavedLocation.forEach(button => button.addEventListener('click', function(){
        weatherAPI.cityName = button.querySelector('span').textContent;
        getWeather(json => {
            pageElements.nameCity.textContent = json.name;
            pageElements.temperature.textContent = Math.round(json.main.temp) + '°';
            pageElements.weather_img.setAttribute('src', `./img/${json.weather[0].icon}.png`);
        })

        const setCurrentCity = {
            currentLocation: pageElements.nameCity.textContent,
            currentTemp: pageElements.temperature.textContent,
            currentIcon: pageElements.weather_img.getAttribute('src')
        };
        alert(setCurrentCity.currentLocation);
        localStorage.setItem('currentData', JSON.stringify(setCurrentCity));
    }));
}

pageElements.weatherAddButton.addEventListener("click", saveCity);

pageElements.form.addEventListener("submit", inputHandler);

window.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('CurrentData') != ""){
        currentLocationHandler();
    }

    renderHandler();
    
    pageElements.weatherSavedLocation = document.querySelectorAll('.weather__saved-location');
    removeLocation();
    selectedLocation();
})