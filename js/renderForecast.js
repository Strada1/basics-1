import {
	contentWeather,
	contentForecast,
	navForecast,
} from './const/const.js';

import { getConvertDate, calcTime } from './date.js';
import { addClassHide, removeClassActive } from './more.js';

function createForecastList(element ,data) {
	return element.insertAdjacentHTML('beforeend',
		`<li class="forecast_item">
					<div class="forecast_date">
						<p class="forecast_date__day">${getConvertDate(data.dt)}</p>
						<p class="forecast_date__time">${calcTime(data.dt)}</p>
					</div>
					<div class="forecast_detail">
						<div class="forecast_details" width="136" heigh="42">
							<p class="forecast_details__temperature">Temprature: ${data.main.temp}&deg</p>
							<p class="forecast_details__feels">Feels Like: ${data.main.feels_like}&deg</p>
						</div>
						<div class="forecast_icon">
							<p class="forecast_weather__name">${data.weather[0].main}</p>
							<img class="forecast_weather__icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Rain" width="31" height="31">
						</div>
					</div>
			</li>
			`
	);
}

export function renderForecast(cityName) {
	addClassHide();
	contentWeather.querySelector('.main_weather__city-forecast').
		classList.remove('hide');
	
	removeClassActive();
	navForecast.classList.add('active');

	while (contentForecast.querySelector('.forecast_list').firstChild) {
    contentForecast.querySelector('.forecast_list').firstChild.remove();
  }

	return cityName.then(data => {
		const name = data.city.name;
		const forecastList = contentForecast.querySelector('.forecast_list');
		contentForecast.querySelector('.forecast__header-name').textContent = name;

		for (let i = 0; i < 4; i++) {
			createForecastList(forecastList, data.list[i])
		}
	})
}
