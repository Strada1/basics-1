'use strict'
import { addToLocalstorage, getCurrentCity } from "./localstorage.js";


export const cityList = [];
const ELEMENT = {
	SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
	API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
	INPUT: document.querySelector('.title__input'),
	FORM: document.querySelector('form'),
	LOCATIONS_LIST: document.querySelector('.locations__list'),
	FAVORITE: document.querySelector('.now__favorite'),
}
const NOW = {
	city: document.querySelector('.now__city'),
	temperature: document.querySelector('.now__degrees'),
	img: document.querySelector('.icon__cloud'),
}
const DETAILS = {
	city: document.querySelector('.details__city'),
	temperature: document.querySelector('.details__temperature'),
	feels: document.querySelector('.details__feels'),
	sky: document.querySelector('.details__weather'),
	sunrise: document.querySelector('.details__sunrise'),
	sunset: document.querySelector('.details__sunset'),
}



ELEMENT.FORM.addEventListener('submit', getNameCity)


function getNameCity(name) {
	let cityName = ELEMENT.INPUT.value ? ELEMENT.INPUT.value : name;
	if (!cityName) { return }
	fetch(`${ELEMENT.SERVER_URL}?q=${cityName}&appid=${ELEMENT.API_KEY}&units=metric`)
		.then(response => response.json())
		.then(json => {
			changeDegree(json.main.temp)
			changeIconNow(json.weather)
			changeCity(json.name)
			chngeFeelsLike(json.main.feels_like)
			chngeSkyWeather(json.weather)
			chngeTimeSunrise(json.sys.sunrise)
			changeTimeSunset(json.sys.sunset)
		})
		.catch(err => console.error(err))
	ELEMENT.INPUT.value = ''
};

function changeDegree(degree) {
	NOW.temperature.textContent = degree;
	DETAILS.temperature.textContent = `Temperature: ${degree}`;
};

function changeIconNow(arr) {
	let icon = (arr.map(element => element.icon)).join('');
	NOW.img.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
};

function changeCity(cityNameForChange) {
	NOW.city.textContent = cityNameForChange;
	DETAILS.city.textContent = `City: ${cityNameForChange}`;
};

function chngeFeelsLike(feelsLike) {
	DETAILS.feels.textContent = `Feels like: ${feelsLike}`;
};

function chngeSkyWeather(arr) {
	let skyWeather = (arr.map(element => element.main)).join('');
	DETAILS.sky.textContent = `Weather ${skyWeather}`;
};
function chngeTimeSunrise(timeSunrise) {
	DETAILS.sunrise.textContent = `Sunrise: ${timeConverstion(timeSunrise)}`
};

function changeTimeSunset(timeSunset) {
	DETAILS.sunset.textContent = `Sunset: ${timeConverstion(timeSunset)}`
};

function timeConverstion(date) {
	let converstionDate = new Date(+date * 1000).toLocaleTimeString()
	return converstionDate
};



/*.......................................*/

document.addEventListener('DOMContentLoaded', localStorageInList)


function localStorageInList() {
	let citiesArr
	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key)) {
			continue;
		}
		citiesArr = localStorage[key].split(',')
		for (let key of citiesArr) {
			if (key && !cityList.includes(key)) {
				cityList.push(key)
			}
		}
	}
	updateList()
	getNameCity(localStorage.getItem('currentCity'))
}

ELEMENT.FAVORITE.addEventListener('click', () => {
	addCityToList()
	addToLocalstorage()
})

function addCityToList() {
	let cityName = NOW.city.textContent
	if (cityList.includes(cityName)) {
		console.log('already have this city');
		return
	}
	cityList.push(cityName)
	getCurrentCity(cityName)
	updateList()
}

function showCityWeather(e) {
	let name = e.target.textContent;
	getNameCity(name)
	getCurrentCity(name)
}

function removeCity(e) {
	let cityName = e.target.parentNode.textContent;
	let indexOfCiteName = cityList.findIndex(item => item === cityName)
	cityList.splice(indexOfCiteName, 1)
	addToLocalstorage()
	updateList()
}

function updateList() {
	while (ELEMENT.LOCATIONS_LIST
		.firstChild) {
		ELEMENT.LOCATIONS_LIST
			.removeChild(ELEMENT.LOCATIONS_LIST
				.firstChild);
	}
	for (let nameCity of cityList) {
		if (nameCity) {
			let newElementLi = document.createElement("li")
			let newElementImg = document.createElement("img")
			newElementLi.textContent = nameCity
			ELEMENT.LOCATIONS_LIST
				.append(newElementLi)
			newElementLi.classList.add('list__item')
			newElementImg.src = '/img/close-icon.svg';
			newElementLi.append(newElementImg)
			newElementImg.addEventListener('click', removeCity)
			newElementLi.addEventListener('click', showCityWeather)
		}
	}
}

