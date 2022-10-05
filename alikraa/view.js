import { getCityNow } from './main.js'

export const ELEMENTS = {
    FORM: document.querySelector('.search__city'),
    INPUT: document.querySelector('.searching'),
    ADDED_CITIES: document.querySelector('.cities'),
    LOCATIONS_CITY_NAME: document.querySelector('.city__name'),
    BODY: document
}

export const TAB_NOW = {
    TEMPERATURE: document.querySelector('.temperature'),
    NAME: document.querySelector('.name'),
    ICON: document.querySelector('.cloud'),
    FAVORITES: document.querySelector('svg'),
    BUTTON: document.querySelectorAll('.tab'),
    LINK: document.querySelectorAll('a')
}

export const TAB_DETAILS = {
    HEADER: document.querySelector('.header__city'),
    TEMPERATURE: document.querySelector('.temper'),
    FEELING: document.querySelector('.feeling'),
    WEATHER: document.querySelector('.weather'),
    SUNRISE: document.querySelector('.sunrise'),
    SUNSET: document.querySelector('.sunset')
}

export const SERVER = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: '3a93792a7ff7223513e2ff98278e394d'
}

export const citiesList = []

export function getCityName() {
    try {
        if (ELEMENTS.INPUT.value.trim() && isNaN(ELEMENTS.INPUT.value)) {
            getCityNow(ELEMENTS.INPUT.value);
        } else {
            throw new Error('Ошибка: введите название города!');
        }
    } catch (error) {
        alert(error.message);
    }
    event.preventDefault();
}

export function newCityName (string) {
    let newString = string.split(' ');

    return newString.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

export function convertTime (time) {
    let hours = new Date(time * 1000);
    let minutes = new Date(time * 1000);
    return hours.getHours() + ':' + minutes.getMinutes();
}