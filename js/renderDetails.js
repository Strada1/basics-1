import {
	contentDetails,
	navDetail,
	headerDetails,
	temperatureDetail,
	feelsLikeDetail,
	weatherDetail,
	sunriseDetail,
	sunsetDetail
} from './const/const.js';

import { calcTimeSun } from './date.js';
import { addClassHide, removeClassActive } from './more.js';

export function renderDetails(cityName) {
	addClassHide();
	contentDetails.classList.remove('hide');

	removeClassActive();
	navDetail.classList.add('active');

	return cityName.then(data => {
		const name = data.name;
		const temperature = data.main.temp;
		const feelsLike = data.main.feels_like;
		const weather = data.weather[0].main;
		const sunrise = data.sys.sunrise;
		const sunset = data.sys.sunset;

		headerDetails.textContent = name;
		temperatureDetail.textContent = `Temperature: ${temperature}°`;
		feelsLikeDetail.textContent = `Feels like: ${feelsLike}°`;
		weatherDetail.textContent = `Weather: ${weather}`;
		sunriseDetail.textContent = `Sunrise: ${calcTimeSun(sunrise)}`;
		sunsetDetail.textContent = `Sunset: ${calcTimeSun(sunset)}`;
	})
}