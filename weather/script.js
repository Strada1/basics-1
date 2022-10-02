const cityInput = document.querySelector('.forecast-form');
const nameInp = document.querySelector('.inputForm');
const addFavorite = document.querySelector('#favoriteAdd');
const ELEMENTS_PARENTS = {
    weatherCity:document.querySelector('.forecast-months'),
    weatherTemp:document.querySelector('.degrees'),
    favoriteItems:document.querySelector('.locations-items'),
    textHeader:document.querySelector('.locations-header'),
    detailList:document.querySelector('.details-items'),
};
const NEW_ELEMENTS = {
    nameCity:document.createElement('p'),
    tempCity:document.createElement('p'),
    detailsTemp:document.createElement('li'),
    detailsFeelsLike:document.createElement('li'),
    detailsWeather:document.createElement('li'),
    detailsSunrise:document.createElement('li'),
    detailsSunset:document.createElement('li'),
    newCity:document.createElement('p'),
};
const CITY_NAME = localGet2();
const FAVORITE_CITY = localGet();

cityInput.addEventListener('submit' , serverToDOM);
//Запрос на сервер
function serverToDOM(event) {
    event.preventDefault();
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = nameInp.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        if(response.cod !== 200) {
            alert(response.cod + ' ' + response.message)
        } else {
            showCurrentCity(response.name , response.main.temp , response.main.feels_like, response.weather[0].main, response.sys.sunset, response.sys.sunrise);
            renderDetails();
        }
    })
    .catch(err => alert(err.message));
};
// Добавление города в избранные (массив)
addFavorite.addEventListener('click' , addFavoriteInArray);
function addFavoriteInArray() {
    const favoriteCity = FAVORITE_CITY.find(item => item.name == CITY_NAME.name)
    if(FAVORITE_CITY.includes(favoriteCity)) {
        alert('Такой город уже в избранных!');
    } else {
        FAVORITE_CITY.push({name: CITY_NAME.name,temp: CITY_NAME.temp, feelslike: CITY_NAME.feelslike, weather: CITY_NAME.weather,sunset: CITY_NAME.sunset, sunrise:CITY_NAME.sunrise,});
        localSet();
        renderFavoriteCity();
    }
};
// Удаление города из массива 
function deleteCityArray(cityName) {
    const CityFavorite = FAVORITE_CITY.findIndex(item => item.name == cityName);
    FAVORITE_CITY.splice(CityFavorite , 1);
    localSet();
    renderFavoriteCity();
};
// localStorage Added Locations
function localSet() {
    localStorage.setItem('cityNow', JSON.stringify(CITY_NAME));
    localStorage.setItem('favoriteCity' , JSON.stringify(FAVORITE_CITY));
};
function localGet() {
    if(localStorage.getItem('favoriteCity') !== null) {
        return JSON.parse(localStorage.getItem('favoriteCity'));
    } else {
        return [];
    }
};
function localGet2() {
    if(localStorage.getItem('cityNow') !== null) {
        return JSON.parse(localStorage.getItem('cityNow'));
    } else {
        return [];
    }
};
// Отображение города в NOW
function showCurrentCity(cityName, cityTemp, cityFeel, cityWeather, citySunSet, citySunRise) {
    CITY_NAME.name =cityName;
    CITY_NAME.temp = cityTemp;
    CITY_NAME.feelslike = cityFeel;
    CITY_NAME.weather = cityWeather;
    CITY_NAME.sunset = citySunSet;
    CITY_NAME.sunrise = citySunRise;
    NEW_ELEMENTS.nameCity.textContent = cityName;
    ELEMENTS_PARENTS.weatherCity.prepend(NEW_ELEMENTS.nameCity);
    NEW_ELEMENTS.tempCity.textContent = Math.round(cityTemp);
    NEW_ELEMENTS.tempCity.className = 'degrees-num';
    ELEMENTS_PARENTS.weatherTemp.prepend(NEW_ELEMENTS.tempCity);
    nameInp.value = '';
    localSet();
};
// Отображение избранных городов
function renderFavoriteCity() {
    ELEMENTS_PARENTS.favoriteItems.textContent = '';
    FAVORITE_CITY.forEach(function(item) {  
        const newFavoriteCity = document.createElement('li');
        newFavoriteCity.textContent = item.name;
        ELEMENTS_PARENTS.favoriteItems.prepend(newFavoriteCity);
        const removeCityIcon = document.createElement('button');
        removeCityIcon.innerHTML = `<img src="./img/heart.svg" alt="">`;
        newFavoriteCity.appendChild(removeCityIcon);
        removeCityIcon.addEventListener('click' , () => {
            deleteCityArray(newFavoriteCity.textContent);
        })
        newFavoriteCity.addEventListener('click', () => {
            showCurrentCity(item.name, item.temp, item.feelslike, item.weather, item.sunset, item.sunrise);
            renderDetails();
        });
    });
};
// Отображение подробной информации о городе
function renderDetails() {
    const normalDataSunSet = new Date(CITY_NAME.sunset * 1000);
    const normalDataSunRise = new Date(CITY_NAME.sunrise * 1000);
        // render city name
        NEW_ELEMENTS.newCity.className = 'text-locations';
        ELEMENTS_PARENTS.textHeader.textContent = '';
        NEW_ELEMENTS.newCity.textContent = CITY_NAME.name;
        ELEMENTS_PARENTS.textHeader.prepend(NEW_ELEMENTS.newCity);
        //Render city details
        ELEMENTS_PARENTS.detailList.textContent = '';
        NEW_ELEMENTS.detailsTemp.textContent = `Temperature: ${Math.round(CITY_NAME.temp)}°`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsTemp);
        NEW_ELEMENTS.detailsFeelsLike.textContent = `Feels like: ${Math.round(CITY_NAME.feelslike)}°`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsFeelsLike);
        NEW_ELEMENTS.detailsWeather.textContent = `Weather: ${CITY_NAME.weather}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsWeather);
        NEW_ELEMENTS.detailsSunrise.textContent = `Sunrise: ${normalDataSunRise.toLocaleTimeString()}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsSunrise);
        NEW_ELEMENTS.detailsSunset.textContent = `Sunset: ${normalDataSunSet.toLocaleTimeString()}`;
        ELEMENTS_PARENTS.detailList.append(NEW_ELEMENTS.detailsSunset);
};

window.onload = showCurrentCity(CITY_NAME.name, CITY_NAME.temp, CITY_NAME.feelslike, CITY_NAME.weather,CITY_NAME.sunset , CITY_NAME.sunrise);
window.onload = renderFavoriteCity();
window.onload = renderDetails();