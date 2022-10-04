import { getData } from './fetch.js';

import {
	inputSearch,
	temperature,
	img,
	list,
	favoriteCity,
	favoirtesCities,
	contentWeather,
	contentDetails,
	contentForecast,
	headerDetails,
	listDetails,
	temperatureDetail,
	feelsLikeDetail,
	weatherDetail,
	sunriseDetail,
	sunsetDetail,
	navDetail,
	navForecast,
	navNow,
	contentNow
} from './const/const.js';
import { addCurrentCity, saveFavoriteCity, getFavoriteCities, deleteCity, getCurrentCity } from './localStorage.js';

function render() {
	let favorites = getFavoriteCities();

	favorites ?
		favorites.forEach(favorite => {
			createCityItem(favorite.name);
	
			const deleteButton = favoirtesCities.querySelector('.delete');
			const cities = favoirtesCities.querySelectorAll('.add__city');
	
			addToFavorite(favoriteCity.textContent, list);
			showDetails(cities);
			deleteFavorite(deleteButton, favoriteCity.textContent);
		}) :
		// переделать
		console.log(favorites);
}

function renderDetails(cityName) {
	
	const hideNow = contentWeather.querySelector('.main_weather__city-now');
	
	hideNow.classList.add('hide');

	contentDetails.classList.remove('hide');
	navNow.classList.remove('active');
	navForecast.classList.remove('active');
	navDetail.classList.add('active');

	// const city = getData(cityName);
	return cityName.then(data => {
		const name = data.name;
		const temperature = data.main.temp;
		const feelsLike = data.main.feels_like;
		const weather = data.weather[0].main;
		const sunrise = data.sys.sunrise;
		const sunset = data.sys.sunset;

		function calcTimeSun(time) {
			const result = new Date(time * 1000);
			return result.toLocaleTimeString();
		}

		headerDetails.textContent = name;
		temperatureDetail.textContent = `Temprature: ${temperature}°`;
		feelsLikeDetail.textContent = `Feels like: ${feelsLike}°`;
		weatherDetail.textContent = `Weather: ${weather}`;
		sunriseDetail.textContent = `Sunrise: ${calcTimeSun(sunrise)}`;
		sunsetDetail.textContent = `Sunset: ${calcTimeSun(sunset)}`;
	})
}

function createCityItem(name) {
	return favoirtesCities.insertAdjacentHTML('afterbegin',
		`<div class="item">
		<li class="add__city">${name}</li>
		<img class="delete" src="./css/img/delete.png" alt="Delete" width="20" height="20">
	</div>`
	);
}

const renderNow = (data) => {
	if (!navNow.classList.contains('active')) {
		
		contentDetails.classList.add('hide');
		contentWeather.querySelector('.main_weather__city-now').
			classList.remove('hide');

		navDetail.classList.remove('active');
		navForecast.classList.remove('active');
		navNow.classList.add('active');	
	}
	return data.then(obj => {
		const temper = obj.main.temp;
		const icon = obj.weather[0].icon;
		const name = obj.name;

		temperature.textContent = temper + '°';
		img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		favoriteCity.textContent = name;
	});
		
}

function addToFavorite(city, arr) {
	const item = getData(city);
	item.then(data => {
		arr.push(data);
		
		saveFavoriteCity(arr);
	});
}

function showDetails(nodeList) {
	return nodeList.forEach(item => {
		item.addEventListener('click', () => {
			const details = getData(item.textContent);
			
			if (navNow.classList.contains('active')) {
				renderNow(details);
			} else {
				renderDetails(details)
			}
	 })
 })
}

function deleteFavorite(item, city) {
	item.addEventListener('click', () => {
		const findItem = list.findIndex(item => item.name === city);

		try {
			if (findItem !== -1) {
				list.splice(findItem, 1);
				item.parentElement.remove();
				deleteCity(city);
			} else {
				throw new Error('Задача не может быть удалена(индекс = -1)');
			}
		} catch (error) {
			console.log(error.message);
		}
	})
}

function submit(evt) {
	evt.preventDefault();
	const cityName = inputSearch.value;
	
	const data = getData(cityName);
	
	renderNow(data);

	addCurrentCity(favoriteCity.textContent);

	inputSearch.value = '';
}

export {
	addToFavorite,
	showDetails,
	deleteFavorite,
	submit,
	renderNow,
	render,
	createCityItem,
	renderDetails
}