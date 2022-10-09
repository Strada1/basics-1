
const tabs = document.querySelectorAll('.tab_item');
const tabsContent = document.querySelectorAll('.weather__forecast-main');
const form = document.querySelector('form');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const input = document.querySelector('.search__city');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const nowTemperature = document.querySelector('.count-temperature');
const nowTemperatureDetails = document.querySelector('.count-temperature-text span');
const nowNameCity = document.querySelector('.name_city');
const parentForImage = document.querySelector('.image__wather');
const addedButton = document.querySelector('.button__add_favorites-city');
const parentFavoriteCity = document.querySelector('.weather__forecast-list');
const nameCityDetails = document.querySelector('.name_city_details');
const feelsLikeDetails = document.querySelector('.feels-like span');
const wheather = document.querySelector('.wheather span');
const sunriceValue = document.querySelector('.sunrice span');
const sunsetValue = document.querySelector('.sunset span');
let list = JSON.parse(localStorage.getItem("favoritesCity"));


export {
    tabs,
    tabsContent,
    form,
    serverUrl,
    input,
    apiKey,
    nowTemperature,
    nowTemperatureDetails,
    nowNameCity,
    parentForImage,
    addedButton,
    parentFavoriteCity,
    nameCityDetails,
    feelsLikeDetails,
    wheather,
    sunriceValue,
    sunsetValue,
    list,
}