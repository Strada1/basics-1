import { UI_ELEMENTS, ERROR_LIST, HTML_ELEMENTS, FOR_DATE } from './view.js';
import { API } from './api.js';
import { сitiesAdded, recordToStorage, getFromStorage, setCurrentCity, getCurrentCity  } from './storage.js';

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
    let сitiesAdded = [];
    if(getFromStorage()) {
        сitiesAdded = getFromStorage();
    };
    while (UI_ELEMENTS.added_location.lastElementChild) {
        UI_ELEMENTS.added_location.removeChild(UI_ELEMENTS.added_location.lastElementChild);
    }
    if(сitiesAdded.length !== 0) {
        сitiesAdded.forEach(city => {          
            UI_ELEMENTS.citiesDiv = publishCities(city);
            UI_ELEMENTS.added_location.prepend(UI_ELEMENTS.citiesDiv);     
        });
    }
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
            const currentCity = getCurrentCity();
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
    UI_ELEMENTS.a_ref.setAttribute('href', `https://openweathermap.org/city/${dataWeather.id}`);
}

async function fetchDataWeatherForecast(cityName = 'Moscow') {
    const urlForecast = `${API.forecastURL}?q=${cityName}&appid=${API.apiKey}&units=metric`;
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
    while (UI_ELEMENTS.now_tab.lastElementChild) {
        UI_ELEMENTS.now_tab.removeChild(UI_ELEMENTS.now_tab.lastElementChild);
    }
    const containerTempAndData = htmlElementConstructor(HTML_ELEMENTS.containerTempAndData);

    const dataTemperature = htmlElementConstructor(HTML_ELEMENTS.dataTemperature);
    dataTemperature.innerText = Math.round(dataWeather.main.temp) + '°';
    containerTempAndData.append(dataTemperature);

    const timeNow = htmlElementConstructor(HTML_ELEMENTS.timeNow);

    const timeNowDate = htmlElementConstructor(HTML_ELEMENTS.timeNowDay);

    const timeShift = new Date() - (10800 * 1000) + (dataWeather.timezone * 1000);
    timeNowDate.innerText = new Date(timeShift).toLocaleDateString('en', FOR_DATE.optionsDate);
    timeNow.append(timeNowDate);

    const timeNowTime = htmlElementConstructor(HTML_ELEMENTS.timeNowTime);
    timeNowTime.innerText = new Date(timeShift).toLocaleTimeString('nu', FOR_DATE.optionsTime);
    timeNow.append(timeNowTime);
    containerTempAndData.append(timeNow);

    UI_ELEMENTS.now_tab.append(containerTempAndData);

    const imgCityWeather = htmlElementConstructor(HTML_ELEMENTS.imgCityWeather);
    imgCityWeather.src = `https://openweathermap.org/img/wn/${dataWeather.weather[0]['icon']}@4x.png`;

    UI_ELEMENTS.now_tab.append(imgCityWeather);

    const divFooterNow = htmlElementConstructor(HTML_ELEMENTS.divFooterNow);

    UI_ELEMENTS.now_tab.append(divFooterNow);
    UI_ELEMENTS.city_footer = divFooterNow;

    const cityNameField = htmlElementConstructor(HTML_ELEMENTS.cityNameField);

    cityNameField.innerText = dataWeather.name;
    UI_ELEMENTS.city_footer.append(cityNameField);
    UI_ELEMENTS.city_name = cityNameField;

    const btnLike = htmlElementConstructor(HTML_ELEMENTS.btnLike);
    btnLike.addEventListener('click', (event) => handlerAddCity(event));

    if(dataWeather.name === getCurrentCity() || сitiesAdded.includes(dataWeather.name)) {
        btnLike.classList.add('like-btn-added')
    } else (btnLike.classList.remove('like-btn-added'));

    UI_ELEMENTS.city_footer.append(btnLike);
    UI_ELEMENTS.city_btn_like = btnLike;
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
    const timeShiftForecast = (dataWeather.timezone * 1000) - (10800 * 1000);
    for(let i = 0; i < 10; i++) {
        const cardForecast = htmlElementConstructor(HTML_ELEMENTS.cardForecast);
        const timesPeriod = htmlElementConstructor(HTML_ELEMENTS.timesPeriod);

        HTML_ELEMENTS.periodDate.innerText = new Date(dataWeatherForecast.list[i].dt * 1000 + timeShiftForecast).toLocaleDateString('en', FOR_DATE.optionsDate);
        const periodDate = htmlElementConstructor(HTML_ELEMENTS.periodDate);
        
        HTML_ELEMENTS.periodTime.innerText = new Date(dataWeatherForecast.list[i].dt * 1000 + timeShiftForecast).toLocaleTimeString('nu', FOR_DATE.optionsTime);
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

function handlerAddCity(event) {
    event.preventDefault();
    getFromStorage();
    const newCityName = UI_ELEMENTS.city_name.textContent;
    if(сitiesAdded.length !== 0) {
        if(сitiesAdded.includes(newCityName)) {
            return;
        }
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
        city = cityFiltered.at(-1);
        setCurrentCity(city);
        const currentCity = getCurrentCity();
        fetchDataWeather(currentCity);
        handlerFavoriteCity();
    };
    const handlerFavoriteCity = () => {
        const cityFavorite = city;
        fetchDataWeather(cityFavorite);
        setCurrentCity(cityFavorite);
        renderAddedCities();
        UI_ELEMENTS.tab_first.click();
        fetchDataWeatherForecast(cityFavorite);
    };
    UI_ELEMENTS.citiesDiv = document.createElement('div');
    UI_ELEMENTS.citiesDiv.classList = 'city-name-container';
    const cityMarkBtn = htmlElementConstructor(HTML_ELEMENTS.cityMarkBtn);
    UI_ELEMENTS.citiesDiv.append(cityMarkBtn);
    const cityMarkBtnImg = htmlElementConstructor(HTML_ELEMENTS.cityMarkBtnImg);
    cityMarkBtn.append(cityMarkBtnImg);
    const cityName = htmlElementConstructor(HTML_ELEMENTS.cityName)
    cityName.innerText = city;
    cityName.addEventListener('click', handlerFavoriteCity);
    if(city === getCurrentCity()) {
        cityMarkBtnImg.classList.add('is-mark');
        UI_ELEMENTS.citiesDiv.classList.add('active-current');
        cityName.classList.add('active');
    }
    UI_ELEMENTS.citiesDiv.append(cityName);
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

function getSunRiseAndSet(timeNeed) {
    const dateNow = new Date();
    const localOffset = dateNow.getTimezoneOffset() * 60000;
    const localTime_sun = timeNeed * 1000;
    const utc_sun = localTime_sun + localOffset;
    const nd_sun = utc_sun + (dataWeather.timezone * 1000);
    const timeRequest = new Date(nd_sun).toLocaleTimeString(navigator.language, FOR_DATE.optionsTime);
    return timeRequest;
}
