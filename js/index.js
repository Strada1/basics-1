import {
	form,
	favoriteCity,
	favoriteButton,
	favoirtesCities,
	searchButton,
	list,
	navDetail,
	navNow,
	navForecast,
	headerDetails
} from "./const/const.js";

import { getCurrentCity } from "./localStorage.js";

import {
	addToFavorite,
	deleteFavorite,
	submit,
	showDetails,
	render,
	createCityItem,
	getCurrentCityName
} from "./more.js";

import { getData, getDataForecast } from './fetch.js';
import { renderNow } from './renderNow.js';
import { renderDetails } from './renderDetails.js';
import { renderForecast } from "./renderForecast.js";

document.addEventListener('DOMContentLoaded', () => {
	const currentCity = getCurrentCity();

	if (currentCity) {
		const city = getData(currentCity);
		renderNow(city);
		render();
	} else {
		const city = getData(favoriteCity.textContent);
		renderNow(city);
	}
})

form.addEventListener('submit', evt => {
	submit(evt);
})

searchButton.addEventListener('submit', evt => {
	submit(evt);
})

favoriteButton.addEventListener('click', () => {
	createCityItem(favoriteCity.textContent);

	const deleteButton = favoirtesCities.querySelector('.delete');
	const cities = favoirtesCities.querySelectorAll('.add__city');

	addToFavorite(favoriteCity.textContent, list);
	showDetails(cities);
	deleteFavorite(deleteButton, favoriteCity.textContent);
})


navNow.addEventListener('click', () => {
	const cityName = getCurrentCityName(headerDetails);
	renderNow(cityName)
})

navDetail.addEventListener('click', () => {
	const cityName = getCurrentCity(favoriteCity);
	renderDetails(cityName);
})

navForecast.addEventListener('click', () => {
	const currentCity = getCurrentCity();
	const name = getDataForecast(currentCity);

	renderForecast(name)
})
