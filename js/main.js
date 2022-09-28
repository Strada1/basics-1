'use strict'

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const input = document.querySelector('.title__input');
const button = document.querySelector('.button')
const img = document.querySelector('.icon__cloud');
const cityPlace = document.querySelector('.now__city');
const degreePlace = document.querySelector('.now__degrees');
const form = document.querySelector('form')
const locationsList = document.querySelector('.locations__list');
const favorite = document.querySelector('.now__favorite');
const cityList = [];
let cityName

form.addEventListener('submit', getCity)


function getCity(name) {
	cityName = input.value ? input.value : name;
	fetch(`${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
		.then(response => response.json())
		.then(json => {
			changeDegree(json.main.temp)
			changeIcon(json.weather)
			changeCity(json.name)
		})
		.catch(err => console.log(err))
	input.value = ''
};
function changeDegree(degree) {
	degreePlace.textContent = degree;
}
function changeIcon(arr) {
	let icon = (arr.map(element => element.icon)).join('');
	img.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
}
function changeCity(cityNameForChange) {
	cityPlace.textContent = cityNameForChange;
	cityName = cityPlace.textContent
}


favorite.addEventListener('click', addCityToList)



/*.......................................*/

function addCityToList() {
	cityList.push(cityName)
	console.log(cityList);
	updateList()
}


function updateList() {
	while (locationsList.firstChild) {
		locationsList.removeChild(locationsList.firstChild);
	}
	for (let nameCity of cityList) {
		let newElementLi = document.createElement("li")
		let newElementImg = document.createElement("img")
		newElementLi.textContent = nameCity
		locationsList.append(newElementLi)
		newElementLi.classList.add('list__item')
		newElementImg.src = '/img/close-icon.svg';
		newElementLi.append(newElementImg)
		newElementImg.addEventListener('click', removeCity)
		newElementLi.addEventListener('click', showCityWeather)
	}
}

function removeCity(e) {
	let cityName = e.target.parentNode.textContent;
	let indexOfCiteName = cityList.findIndex(item => item === cityName)
	cityList.splice(indexOfCiteName, 1)
	updateList()
}

function showCityWeather(e) {
	let name = e.target.textContent;
	getCity(name)
}

