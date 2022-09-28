import {
	inputSearch,
	form,
	temperature,
	favoriteCity,
	img,
	favoriteButton,
	favoirtesCities,
	cities
} from "./const.js";

import { getData } from './fetch.js';

const list = [];

const renderDetails = (data) => {
	return data.then(obj => {
		const temper = obj.main.temp;
		const icon = obj.weather[0].icon;
		const name = obj.name;

		temperature.textContent = temper + '°';
		img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		favoriteCity.textContent = name;
	})
}

form.addEventListener('submit', evt => {
	evt.preventDefault();
	const cityName = inputSearch.value;

	const data = getData(cityName)
	
	renderDetails(data);
	
	inputSearch.value = '';
})

function showDetails(nodeList) {
	return nodeList.forEach(item => {
		item.addEventListener('click', () => {
			const details = getData(item.textContent);

			renderDetails(details);
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
					console.log(list)
				} else {
					throw new Error('Задача не может быть удалена(индекс = -1)')
				}
			} catch (error) {
				console.log(error.message)
			}
		})
}

function addToFavorite(city, arr) {
	const item = getData(city);

	return item.then(data => arr.push(data));
}

function showListner() {
	return showDetails(favoirtesCities.querySelectorAll('.add__city'));
}

function deleteListener() {
	return deleteFavorite(favoirtesCities.querySelector('.delete'), favoriteCity.textContent);
}

favoriteButton.addEventListener('click', () => {
	favoirtesCities.insertAdjacentHTML('afterbegin',
		`<div class="item">
			<li class="add__city">${favoriteCity.textContent}</li>
			<img class="delete" src="./css/img/delete.png" alt="Delete" width="20" height="20">
		</div>`
	)

	addToFavorite(favoriteCity.textContent, list);
	showListner();
	deleteListener();

})

