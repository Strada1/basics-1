import { UI_ELEMENTS, ERROR_LIST, HTML_ELEMENTS } from './view.js';
import { API } from './api.js';
import { сitiesAdded, recordToStorage, getFromStorage, setCurrentCity, getCurrentCity  } from './storadge.js';

let dataWeather = {};
let dataWeatherForecast = {};

UI_ELEMENTS.city_search.addEventListener('submit', (event) => handlerCitySearch(event));

renderAddedCities();
let currentCity = getCurrentCity();
fetchDataWeather(currentCity);

function handlerCitySearch(event) {
    event.preventDefault();
    let cityName = '';
    if(! UI_ELEMENTS.city_input.value.trim()) {
        ERROR_LIST.empty_search();
        return;
    }
    cityName = UI_ELEMENTS.city_input.value;
    UI_ELEMENTS.city_input.value = '';
    fetchDataWeather(cityName);
    UI_ELEMENTS.tab_first.click();
}

function renderAddedCities() {
    let сitiesAdded = getFromStorage();
    while(UI_ELEMENTS.added_location.firstChild) {
        UI_ELEMENTS.added_location.removeChild(UI_ELEMENTS.added_location.firstChild);
    }
    сitiesAdded.forEach(city => {          
        UI_ELEMENTS.citiesDiv = publishCities(city);
        UI_ELEMENTS.added_location.prepend(UI_ELEMENTS.citiesDiv);     
    });
}

UI_ELEMENTS.btn_tab.forEach(function(button) {
    button.addEventListener('click', function() {
        const currentBtn = button;
        const tabId = currentBtn.getAttribute('data-tab');
        const currentTab = document.querySelector(tabId);
        if(!currentBtn.classList.contains('btn-active')) {
            UI_ELEMENTS.btn_tab.forEach(function(button) {
                button.classList.remove('btn-active');
            });   
            UI_ELEMENTS.tab.forEach(function(tab) {
                tab.classList.remove('active');
            });   
            currentBtn.classList.add('btn-active');
            currentTab.classList.add('active');

            let currentCity = getCurrentCity();
            fetchDataWeather(currentCity);
            fetchDataWeatherForecast(currentCity);
        }        
    })
});
UI_ELEMENTS.tab_first.click();



async function fetchDataWeather(cityName = 'Moscow') {
    const urlWeather = `${API.serverURL}?q=${cityName}&appid=${API.apiKey}&units=metric`;
    try {
        const response = await fetch(urlWeather);
        dataWeather = await response.json();
    }
    catch {
        ERROR_LIST.errors_request();
        return;
    }
    if(Number(dataWeather.cod) !== 200) {
        ERROR_LIST.API_errors(dataWeather.cod, dataWeather.message);
        return;
    }
    if(UI_ELEMENTS.now_tab.classList.contains('active')) {
        renderTabNow(dataWeather);
    }
    if(UI_ELEMENTS.tab_details.classList.contains('active')) {
        renderTabDetailes(dataWeather);
    }
}

async function fetchDataWeatherForecast(cityName = 'Moscow') {
    const urlForecast = 'http://httpstat.us/500'; // для проверки отлавливания 500 ошибки
    // const urlForecast = `${API.forecastURL}?q=${cityName}&appid=${API.apiKey}&units=metric`;
    try {
        const response = await fetch(urlForecast);
        dataWeatherForecast = await response.json();
    }
    catch {
        ERROR_LIST.errors_request();
        return;
    }
    if(Number(dataWeather.cod) !== 200) {
        ERROR_LIST.API_errors(dataWeather.cod, dataWeather.message);
        return;
    }
    if(UI_ELEMENTS.forecast_tab.classList.contains('active')) {
        renderTabForecast(dataWeatherForecast);
    }
}

function renderTabNow(dataWeather) {
    // очищаем страницу перед рендерингом
    while (UI_ELEMENTS.now_tab.lastElementChild) {
        UI_ELEMENTS.now_tab.removeChild(UI_ELEMENTS.now_tab.lastElementChild);
    }
    // записываем данные по температуре
    let dataTemperature = document.createElement('span');
    dataTemperature.classList = 'data-temperature';
    dataTemperature.innerText = Math.round(dataWeather.main.temp) + '°';
    UI_ELEMENTS.now_tab.append(dataTemperature);
    // находим и размещаем картинку погоды
    let imgCityWeather = document.createElement('img');
    imgCityWeather.classList = 'img-weather';
    imgCityWeather.src = `https://openweathermap.org/img/wn/${dataWeather.weather[0]['icon']}@4x.png`;
    UI_ELEMENTS.now_tab.append(imgCityWeather);
    // создаем оболочку для названия города и кнопки лайк
    let divFooterNow = document.createElement('div');
    divFooterNow.classList = 'footer-now';
    UI_ELEMENTS.now_tab.append(divFooterNow);
    UI_ELEMENTS.city_footer = divFooterNow;
    // записываем название города
    let cityNameField = document.createElement('span');
    cityNameField.classList = 'city';
    cityNameField.innerText = dataWeather.name;
    UI_ELEMENTS.city_footer.append(cityNameField);
    UI_ELEMENTS.city_name = cityNameField;
    // создаем кнопку лайк - добавить город в список выбранных
    let btnLike = document.createElement('button');
    btnLike.setAttribute('type', 'button');
    btnLike.classList.add('like-btn')
    btnLike.addEventListener('click', (event) => handlerAddCity(event));
    if(dataWeather.name === getCurrentCity()) {
        btnLike.classList.add('like-btn-added')
    }
    UI_ELEMENTS.city_footer.append(btnLike);
    UI_ELEMENTS.city_btn_like = btnLike;
    // помещаем всё на страницу
    UI_ELEMENTS.now_tab.append(UI_ELEMENTS.city_footer);
    return UI_ELEMENTS.now_tab;
}

function renderTabDetailes(dataWeather) {
    const timeSunRise = getSunRiseAndSet(dataWeather.sys.sunrise);
    const timeSunSet = getSunRiseAndSet(dataWeather.sys.sunset);
    let dataTabDetailes = new Map();
    dataTabDetailes.set('Temperature:', `${Math.round(dataWeather.main.temp)}°`);
    dataTabDetailes.set('Feels like:', `${Math.round(dataWeather.main.feels_like)}°`);
    dataTabDetailes.set('Weather:', dataWeather.weather[0].main);
    dataTabDetailes.set('Sunrise:', timeSunRise);
    dataTabDetailes.set('Sunset:', timeSunSet);
    dataTabDetailes.set('Pressure:', `${Math.round(dataWeather.main.pressure * API.hPaTommHg)} mmHg`);
    while (UI_ELEMENTS.tab_details.lastElementChild) {
        UI_ELEMENTS.tab_details.removeChild(UI_ELEMENTS.tab_details.lastElementChild);
    }
    const currentCity = getCurrentCity();
    HTML_ELEMENTS.cityNameDetails.innerText = currentCity;
    const cityNameDetails = htmlElementConstructor(HTML_ELEMENTS.cityNameDetails);
    
    const detailsContent = htmlElementConstructor(HTML_ELEMENTS.detailsContentContainer);
    UI_ELEMENTS.detailsContentContainer = detailsContent;
    for (let [key, value] of dataTabDetailes) {
        const detailsContentElement = htmlElementConstructor(HTML_ELEMENTS.detailsContentElement);
        detailsContentElement.innerText = `${key} ${value}`;
        UI_ELEMENTS.detailsContentContainer.append(detailsContentElement);
    }
    UI_ELEMENTS.tab_details.append(cityNameDetails);
    UI_ELEMENTS.tab_details.append(UI_ELEMENTS.detailsContentContainer);
    UI_ELEMENTS.tabs_content.append(UI_ELEMENTS.tab_details); 
}

function renderTabForecast(dataWeatherForecast) {
    while (UI_ELEMENTS.forecast_tab.lastElementChild) {
        UI_ELEMENTS.forecast_tab.removeChild(UI_ELEMENTS.forecast_tab.lastElementChild);
    }
    const cityHeaderForecast = htmlElementConstructor(HTML_ELEMENTS.cityHeaderForecast);
    const currentCity = getCurrentCity();
    HTML_ELEMENTS.cityNameForecast.innerText = currentCity;
    const cityNameForecast = htmlElementConstructor(HTML_ELEMENTS.cityNameForecast);
    cityHeaderForecast.append(cityNameForecast);
    const cardsForecastContainer = htmlElementConstructor(HTML_ELEMENTS.cardsForecastContainer);
    for(let i = 0; i < 10; i++) {
        const cardForecast = htmlElementConstructor(HTML_ELEMENTS.cardForecast);
        const timesPeriod = htmlElementConstructor(HTML_ELEMENTS.timesPeriod);

        const optionsDate = { weekday: 'short', day: '2-digit', month: 'long' };
        HTML_ELEMENTS.periodDate.innerText = new Date(dataWeatherForecast.list[i].dt * 1000).toLocaleDateString('en', optionsDate);
        const periodDate = htmlElementConstructor(HTML_ELEMENTS.periodDate);
        
        const optionsTime = { hour: '2-digit', minute: '2-digit' };
        HTML_ELEMENTS.periodTime.innerText = new Date(dataWeatherForecast.list[i].dt * 1000).toLocaleTimeString('nu', optionsTime);
        const periodTime = htmlElementConstructor(HTML_ELEMENTS.periodTime);
        
        const tempRealy = htmlElementConstructor(HTML_ELEMENTS.tempRealy);

        HTML_ELEMENTS.temperature.innerText = `Temperature:  ${Math.round(dataWeatherForecast.list[i].main.temp)}°`;
        const temperature = htmlElementConstructor(HTML_ELEMENTS.temperature);
        
        HTML_ELEMENTS.weatherStatus.innerText = dataWeatherForecast.list[i].weather[0].main;
        const weatherStatus = htmlElementConstructor(HTML_ELEMENTS.weatherStatus);
        
        const tempFeels = htmlElementConstructor(HTML_ELEMENTS.tempFeels);

        HTML_ELEMENTS.temperatureFeels.innerText = `Feels like:  ${Math.round(dataWeatherForecast.list[i].main.feels_like)}°`;
        const temperatureFeels = htmlElementConstructor(HTML_ELEMENTS.temperatureFeels);
       
        const iconWeatherData = dataWeatherForecast.list[i].weather[0].icon;
        const iconWeatherSRC = `https://openweathermap.org/img/wn/${iconWeatherData}@4x.png`;
        HTML_ELEMENTS.objImg.src = iconWeatherSRC;
        const imgCard = htmlElementConstructor(HTML_ELEMENTS.objImg);
        
        timesPeriod.append(periodDate);
        timesPeriod.append(periodTime);
        tempRealy.append(temperature);
        tempRealy.append(weatherStatus);
        tempFeels.append(temperatureFeels);
        tempFeels.append(imgCard);

        cardForecast.append(timesPeriod)
        cardForecast.append(tempRealy)
        cardForecast.append(tempFeels)

        cardsForecastContainer.append(cardForecast) 
    } 
    UI_ELEMENTS.forecast_tab.append(cityHeaderForecast);
    UI_ELEMENTS.forecast_tab.append(cardsForecastContainer);
}

// добавляет город в список
function handlerAddCity(event) {
    event.preventDefault();
    getFromStorage();
    let newCityName = UI_ELEMENTS.city_name.textContent;
    if(сitiesAdded.includes(newCityName)) {
        return;
    }
    сitiesAdded.push(newCityName);
    if(сitiesAdded.length > 6) {
        сitiesAdded.splice(0, 1);
    }
    UI_ELEMENTS.city_btn_like.classList.add('like-btn-added');
    setCurrentCity(newCityName);
    recordToStorage(сitiesAdded);
    renderAddedCities();
};

function publishCities(city) {
    getFromStorage();
    const handlerDelete = (event) => {
        event.preventDefault();
        const cityDel = city;
        const cityFiltered = сitiesAdded.filter(city => city !== cityDel);
        recordToStorage(cityFiltered);
        renderAddedCities();
        setCurrentCity(cityFiltered.at(-1));
        const currentCity = getCurrentCity();
        fetchDataWeather(currentCity);
        handlerFavoriteCity();
    };
    const handlerFavoriteCity = () => {
        // event.preventDefault();
        const cityFavorite = city;
        fetchDataWeather(cityFavorite);
        setCurrentCity(cityFavorite);
        renderAddedCities();
        fetchDataWeatherForecast(cityFavorite);
    };
    UI_ELEMENTS.citiesDiv = document.createElement('div');
    UI_ELEMENTS.citiesDiv.classList = 'city-name-container';

// чекбокс cityMarkBtn current city
    const cityMarkBtn = htmlElementConstructor(HTML_ELEMENTS.cityMarkBtn);
    UI_ELEMENTS.citiesDiv.append(cityMarkBtn);

    const cityMarkBtnImg = htmlElementConstructor(HTML_ELEMENTS.cityMarkBtnImg);
    cityMarkBtn.append(cityMarkBtnImg);
// имя города
    const cityName = htmlElementConstructor(HTML_ELEMENTS.cityName)
    cityName.innerText = city;
    cityName.addEventListener('click', handlerFavoriteCity);
    if(city === getCurrentCity()) {
        cityMarkBtnImg.classList.add('is-mark');
    }
    UI_ELEMENTS.citiesDiv.append(cityName);
// кнопка cityDeleteBtn "удалить"
    const cityDeleteBtn = htmlElementConstructor(HTML_ELEMENTS.cityDeleteBtn);
    UI_ELEMENTS.citiesDiv.append(cityDeleteBtn);

    const cityDeleteBtnImg = htmlElementConstructor(HTML_ELEMENTS.cityDeleteBtnImg);
    cityDeleteBtn.append(cityDeleteBtnImg);
    cityDeleteBtn.addEventListener('click', handlerDelete);
    return UI_ELEMENTS.citiesDiv;
}

function htmlElementConstructor(objElementProperty) {
    objElementProperty.name = document.createElement(objElementProperty.tag);
    if(objElementProperty.className) {
        objElementProperty.name.classList = objElementProperty.className;
    }
    if(objElementProperty.innerText) {
        objElementProperty.name.innerText = objElementProperty.innerText;
    }
    if(objElementProperty.src) {
        objElementProperty.name.src = objElementProperty.src;
    }
    if(objElementProperty.attribute) {
        objElementProperty.name.setAttribute('type', objElementProperty.attribute.type);
    }
    return objElementProperty.name;
};

// Sunrise & Sunset Block
function getSunRiseAndSet(timeNeed) {
    const dateNow = new Date();
    const localOffset = dateNow.getTimezoneOffset() * 60000;
    const localTime_sun = timeNeed * 1000;
    const utc_sun = localTime_sun + localOffset;
    const nd_sun = utc_sun + (dataWeather.timezone * 1000);
    const options = { hour: 'numeric', minute: 'numeric'};
    const timeRequest = new Date(nd_sun).toLocaleTimeString(navigator.language, options);
    return timeRequest;
}


