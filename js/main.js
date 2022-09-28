'use strict'

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const input = document.querySelector('.title__input');
const button = document.querySelector('.button')
const img = document.querySelector('.icon__cloud');
const cityPlace = document.querySelector('.now__city');
const degreePlace = document.querySelector('.now__degrees');
const form = document.querySelector('form')

form.addEventListener('submit', getCity)

function getCity() {
	let cityName = input.value ? input.value : alert('введите город');
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
function changeCity(cityName) {
	cityPlace.textContent = cityName
}




