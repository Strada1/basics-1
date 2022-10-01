import { showWeatherInfo , showForecastInfo} from "./main.js"
import { getCitiesFromLocalStorage, removeCityFromLocalStorage } from "./localStorage.js"

export const ELEMENTS = {
	SEARCH_FORM: document.querySelector('.search-form'),
	INPUT: document.querySelector('.search-form_input'),
	ADD_TO_FAVORITE_LIST_BUTTON: document.querySelector('.favorite-button'),
	LOCATION: document.querySelector('.now_city'),
	LOCATIONS_LIST: document.querySelector('.locations_list'),
	TABS: {
		NOW: {
			CITY_NAME: document.querySelector('.now_city'),
			TEMPERATURE: document.querySelector('.now_temperature'),
			WEATHER_ICON: document.querySelector('.now_weather-icon img')
		},
		DETAILS: {
			CITY_NAME: document.querySelector('.details_city'),
			TEMPERATURE: document.querySelector('.details_item span'),
			FEELS_LIKE_TEMPERATURE: document.querySelector('#details-feels-like-temperature'),
			WEATHER_TYPE: document.querySelector('#details-weather-type'),
			SUNRISE_TIME: document.querySelector('#details-sunrise'),
			SUNSET_TIME: document.querySelector('#details-sunset'),
		},
		FORECAST: {
			CITY_NAME: document.querySelector('.forecast_city'),
			LIST: document.querySelector('.forecast_list'),
		}
	}
}

export const renderNowTab = ({cityName, temp, iconId}) => {
	const ICON_URL = `http://openweathermap.org/img/wn/${iconId}@2x.png`

	ELEMENTS.TABS.NOW.CITY_NAME.textContent = cityName
	ELEMENTS.TABS.NOW.TEMPERATURE.textContent = temp
	ELEMENTS.TABS.NOW.WEATHER_ICON.src = ICON_URL
}

export const renderDetailsTab = ({cityName, temp, tempFeelsLike, type, sunriseTime, sunsetTime}) => {
	ELEMENTS.TABS.DETAILS.CITY_NAME.textContent = cityName
	ELEMENTS.TABS.DETAILS.TEMPERATURE.textContent = temp
	ELEMENTS.TABS.DETAILS.FEELS_LIKE_TEMPERATURE.textContent = tempFeelsLike
	ELEMENTS.TABS.DETAILS.WEATHER_TYPE.textContent = type
	ELEMENTS.TABS.DETAILS.SUNRISE_TIME.textContent = sunriseTime
	ELEMENTS.TABS.DETAILS.SUNSET_TIME.textContent = sunsetTime
}

export const renderForecastTab = ({cityName, list}) => {
	ELEMENTS.TABS.FORECAST.CITY_NAME.textContent = cityName

	list.forEach(weatherData => {
		const forecastItem = document.createElement('li')
		const forecastHeader = document.createElement('div')
		const forecastDate = document.createElement('div')
		const forecastTime = document.createElement('div')
		const forecastInfo = document.createElement('div')
		const forecastTemperatures = document.createElement('div')
		const forecastWeatherTypeBox = document.createElement('div')
		const forecastTemperatureBox = document.createElement('div')
		const forecastTemperatureCaption = document.createElement('span')
		const forecastTemperature = document.createElement('span')
		const forecastTemperatureFeelsBox = document.createElement('div')
		const forecastTemperatureFeelsCaption = document.createElement('span')
		const forecastTemperatureFeelsLike = document.createElement('span')
		const forecastWeatherType = document.createElement('div')
		const forecastWeatherIconBox = document.createElement('div')
		const forecastWeatherIcon = document.createElement('img')

		forecastItem.classList.add('forecast-item')
		forecastHeader.classList.add('forecast-item_header')
		forecastDate.classList.add('forecast-item_date')
		forecastTime.classList.add('forecast-item_time')
		forecastInfo.classList.add('forecast-item_info')
		forecastTemperatures.classList.add('forecast-item_box')
		forecastWeatherTypeBox.classList.add('forecast-item_box')
		forecastTemperatureBox.classList.add('forecast-item_temperature')
		forecastTemperature.classList.add('temperature')
		forecastTemperatureFeelsBox.classList.add('forecast-item_temperature')
		forecastTemperatureFeelsLike.classList.add('temperature')
		forecastWeatherType.classList.add('forecast-item_weather-type')
		forecastWeatherIconBox.classList.add('forecast-item_weather-icon')

		forecastItem.append(forecastHeader)
		forecastItem.append(forecastInfo)
		forecastHeader.append(forecastDate)
		forecastHeader.append(forecastTime)
		forecastInfo.append(forecastTemperatures)
		forecastInfo.append(forecastWeatherTypeBox)
		forecastTemperatures.append(forecastTemperatureBox)
		forecastTemperatureBox.append(forecastTemperatureCaption)
		forecastTemperatureBox.append(forecastTemperature)
		forecastTemperatures.append(forecastTemperatureFeelsBox)
		forecastTemperatureFeelsBox.append(forecastTemperatureFeelsCaption)
		forecastTemperatureFeelsBox.append(forecastTemperatureFeelsLike)
		forecastWeatherTypeBox.append(forecastWeatherType)
		forecastWeatherTypeBox.append(forecastWeatherIconBox)
		forecastWeatherIconBox.append(forecastWeatherIcon)

		forecastDate.textContent = `${weatherData.day} ${weatherData.month}`
		forecastTime.textContent = weatherData.time
		forecastTemperature.textContent = weatherData.temp
		forecastTemperatureFeelsLike.textContent = weatherData.tempFeelsLike
		forecastWeatherType.textContent = weatherData.weatherType
		forecastWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`

		forecastTemperatureCaption.textContent = 'Temperature:'
		forecastTemperatureFeelsCaption.textContent = 'Feels like:'

		ELEMENTS.TABS.FORECAST.LIST.append(forecastItem)
	})
}

export const renderLocationsList = citiesArray => {
	citiesArray.forEach(location => {
		const locationElement = document.createElement('div')
		const locationName = document.createElement('span')
		const removeButton = document.createElement('button')

		locationElement.classList.add('locations_item')
		locationName.classList.add('locations_city')
		removeButton.classList.add('locations_remove')
		locationName.textContent = location

		locationElement.append(locationName)
		locationElement.append(removeButton)

		locationName.addEventListener('click', () => {
			showWeatherInfo(location)
			showForecastInfo(location)
		})
		
		removeButton.addEventListener('click', () => {
			removeCityFromLocalStorage(location)
			clearLocationsList()
			renderLocationsList(getCitiesFromLocalStorage())			
		})

		ELEMENTS.LOCATIONS_LIST.append(locationElement)
	})
}

export const clearForecastList = () => {
	const forecastItems = document.querySelectorAll('.forecast-item')
	forecastItems.forEach(item => item.remove())
}

export const clearLocationsList = () => {
	const locations = document.querySelectorAll('.locations_item')
	locations.forEach(location => location.remove())
}