import {
	form,
	favoriteCity,
	favoriteButton,
	favoirtesCities,
	searchButton,
	list
} from "./const.js";
import { getCurrentCity } from "./localStorage.js";
import {
	addToFavorite,
	deleteFavorite,
	submit,
	showDetails,
	renderNow,
	render,
	createCityItem
} from "./more.js";

import { getData } from './fetch.js';

document.addEventListener('DOMContentLoaded', () => {
	const currentCity = getCurrentCity();

	if (currentCity) {
		const city = getData(currentCity);
		renderNow(city)
		render()
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


