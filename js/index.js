import {
	inputSearch,
	form,
	temperature,
	nameCity,
	img
} from "./const.js";

import { getData } from './fetch.js';


const render = (data) => {
	return data.then(obj => {
		const temper = obj.main.temp;
		const icon = obj.weather[0].icon;
		const name = obj.name;

		temperature.textContent = temper + '°';
		img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
		nameCity.textContent = name;
	})
}

form.addEventListener('submit', evt => {
	evt.preventDefault();
	const cityName = inputSearch.value;

	const data = getData(cityName)
	
	render(data);
	
	inputSearch.value = '';
})
