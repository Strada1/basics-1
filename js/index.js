import {
	inputSearch,
	form,
	temperature,
	nameCity,
	img
} from "./const.js";

import { getData } from './fetch.js';


form.addEventListener('submit', evt => {
	evt.preventDefault();
	const cityName = inputSearch.value;

	const data = getData(cityName)
	
	data.then(obj => {
		const temper = obj.main.temp;
		const icon = obj.weather[0].icon;
		const name = obj.name;

		temperature.textContent = temper + '°';
		img.src = icon;
		nameCity.textContent = name;
	})
})
