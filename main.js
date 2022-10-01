import {tabs} from './tabs.js'
import {ELEMENTS, renderNowTab, renderDetailsTab, renderForecastTab, clearLocationsList, renderLocationsList, clearForecastList} from './view.js'
import { addCityToLocalStorage, getCitiesFromLocalStorage, FIRST_CITY_FROM_FAVORITE_LIST } from './localStorage.js';

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/';
const DATA_TYPE = {
	WEATHER: 'weather',
	FORECAST: 'forecast'
}
const API_KEY = '2cb77942f530dd0240db1045c0eb4594';
const UNIT_CELSIUS = 'metric'
const ERROR = {
	ITERNAL_SERVER: {
		CODE: 500,
		MESSAGE: 'Internal Server Error'
	},
	NOT_FOUND: {
		CODE: 404,
		MESSAGE: 'City not found or entered an incorrect city name'
	},
	API_KEY: {
		CODE: 401,
		MESSAGE: 'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
	},
	EMPTY_INPUT: 'Enter the name of the city in the input field',
}

const fetchJson = url => {
	return fetch(url)
		.then(response => {
			if(response.status === ERROR.ITERNAL_SERVER.CODE) {
				throw new Error(ERROR.ITERNAL_SERVER.MESSAGE)
			}

			return response.json()
		})
		.then(result => {
			const resultCode = Number(result.cod)
			switch (resultCode) {
				case 200:
					return result
				case ERROR.NOT_FOUND.CODE:
					throw new Error(ERROR.NOT_FOUND.MESSAGE)
				case ERROR.API_KEY.CODE:
					throw new Error(ERROR.API_KEY.MESSAGE)
			}
		})
}

export const showWeatherInfo = cityName => {
	const url = `${SERVER_URL}${DATA_TYPE.WEATHER}?q=${cityName}&appid=${API_KEY}&units=${UNIT_CELSIUS}`;
	
	fetchJson(url)
		.then(data => {
			const weather = {
				cityName: data.name,
				temp: Math.round(data.main.temp),
				tempFeelsLike: Math.round(data.main.feels_like),
				type: data.weather[0].main,
				iconId: data.weather[0].icon,
				sunriseTime: getTime(data.sys.sunrise),
				sunsetTime: getTime(data.sys.sunset)
			}
			renderNowTab(weather)
			renderDetailsTab(weather)
		})
		.catch(e => {
			alert(e.message)
		})
}

export const showForecastInfo = cityName => {
	const url = `${SERVER_URL}${DATA_TYPE.FORECAST}?q=${cityName}&appid=${API_KEY}&units=${UNIT_CELSIUS}`

	fetchJson(url)
		.then(data => {
			const forecastData = {
				cityName: data.city.name,
				list: []
			}

			data.list.forEach(item => {
				const forecastItem = {
					temp: Math.round(item.main.temp),
					tempFeelsLike: Math.round(item.main.feels_like),
					weatherIcon: item.weather[0].icon,
					weatherType: item.weather[0].main,
					day: getDay(item.dt),
					month: getMonth(item.dt),
					time: getTime(item.dt)
				}

				forecastData.list.push(forecastItem)
			})
			clearForecastList()
			renderForecastTab(forecastData)
		})
		.catch(e => {
			alert(e.message)
		})
}

const getTime = seconds => {
	const milliseconds = seconds * 1000
	const date = new Date(milliseconds)
	const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

	return `${hours}: ${minutes}`
}

const getMonth = seconds => {
	const milliseconds = seconds * 1000
	const date = new Date(milliseconds)
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	const monthIndex = date.getMonth()
	const month = months[monthIndex]

	return month
}

const getDay = seconds => {
	const milliseconds = seconds * 1000
	const date = new Date(milliseconds)
	const day = date.getDate()

	return day
}

const submitHandler = e => {
	e.preventDefault()
	try {
		const cityName = ELEMENTS.INPUT.value

		if(!cityName) {
			throw new Error(ERROR.EMPTY_INPUT)
		}

		showWeatherInfo(cityName)
		showForecastInfo(cityName)
	} catch(e) {
		alert(e.message)
	} finally {
		ELEMENTS.SEARCH_FORM.reset()
	}
}

const addToFavoriteListButtonClickHandler = () => {
	const city = ELEMENTS.LOCATION.textContent
	addCityToLocalStorage(city)
	clearLocationsList()
	renderLocationsList(getCitiesFromLocalStorage())
}

ELEMENTS.SEARCH_FORM.addEventListener('submit', submitHandler)
ELEMENTS.ADD_TO_FAVORITE_LIST_BUTTON.addEventListener('click', addToFavoriteListButtonClickHandler)
showWeatherInfo(FIRST_CITY_FROM_FAVORITE_LIST)
showForecastInfo(FIRST_CITY_FROM_FAVORITE_LIST)
renderLocationsList(getCitiesFromLocalStorage())
tabs('.weather_display', '.tab-button', '.tab-content', 'tab-button--active')