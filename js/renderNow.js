import {
	contentDetails,
	contentWeather,
	contentForecast,
	navDetail,
	navForecast,
	navNow,
	temperature,
	img,
	favoriteCity,
} from './const/const.js'

export function renderNow(data) {
	if (!navNow.classList.contains('active')) {
		
		contentDetails.classList.add('hide');
		contentForecast.classList.add('hide');
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