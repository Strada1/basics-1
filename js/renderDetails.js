import {
	contentWeather,
	contentDetails,
	contentForecast,
	navNow,
	navForecast,
	navDetail,
	headerDetails,
	temperatureDetail,
	feelsLikeDetail,
	weatherDetail,
	sunriseDetail,
	sunsetDetail
} from './const/const.js';

import { calcTimeSun } from './date.js';


export function renderDetails(cityName) {
	
	const hideNow = contentWeather.querySelector('.main_weather__city-now');
	
	hideNow.classList.add('hide');
	contentForecast.classList.add('hide');
	contentDetails.classList.remove('hide');

	navNow.classList.remove('active');
	navForecast.classList.remove('active');
	navDetail.classList.add('active');

	return cityName.then(data => {
		const name = data.name;
		const temperature = data.main.temp;
		const feelsLike = data.main.feels_like;
		const weather = data.weather[0].main;
		const sunrise = data.sys.sunrise;
		const sunset = data.sys.sunset;

		headerDetails.textContent = name;
		temperatureDetail.textContent = `Temprature: ${temperature}°`;
		feelsLikeDetail.textContent = `Feels like: ${feelsLike}°`;
		weatherDetail.textContent = `Weather: ${weather}`;
		sunriseDetail.textContent = `Sunrise: ${calcTimeSun(sunrise)}`;
		sunsetDetail.textContent = `Sunset: ${calcTimeSun(sunset)}`;
	})
}