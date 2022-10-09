import {
	contentWeather,
	navNow,
	temperature,
	img,
	favoriteCity,
} from './const/const.js';

import { addClassHide, removeClassActive } from './more.js';

export function renderNow(data) {
	if (!navNow.classList.contains('active')) {
		
		addClassHide();
		contentWeather.querySelector('.main_weather__city-now').
			classList.remove('hide');

		removeClassActive();
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