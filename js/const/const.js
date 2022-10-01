const form = document.querySelector('form');
const inputSearch = document.querySelector('.nav_search__input');
const contentWeather = document.querySelector('.main_weather');
const temperature = contentWeather.querySelector('.temperature');
const img = contentWeather.querySelector('.cloud');
const favoriteCity = contentWeather.querySelector('.name_city');
const favoriteButton = contentWeather.querySelector('.favorite_btn');
const favoirtesCities = document.querySelector('.favorites_cities');
const searchButton = document.querySelector('.search');

const contentDetails = contentWeather.querySelector('.main_weather__city-details');
const contentForecast = contentWeather.querySelector('.main_weather__city-forecast');
const contentNow = contentWeather.querySelector('.main_weather__city-now');

const headerDetails = contentDetails.querySelector('.header_details');

const listDetails = contentDetails.querySelector('.list-details');
const temperatureDetail = listDetails.querySelector('.list_item__temprature');
const feelsLikeDetail = listDetails.querySelector('.list_item__feels');
const weatherDetail = listDetails.querySelector('.list_item__weather');
const sunriseDetail = listDetails.querySelector('.list_item__sunrise');
const sunsetDetail = listDetails.querySelector('.list_item__sunset');

const navDetail = document.querySelector('.nav_details');
const navNow = document.querySelector('.nav_now');
const navForecast = document.querySelector('.nav_forecast');

let list = [];


export {
	inputSearch,
	form,
	temperature,
	img,
	favoriteCity,
	favoriteButton,
	favoirtesCities,
	searchButton,
	list,
	contentWeather,
	contentDetails,
	contentForecast,
	headerDetails,
	listDetails,
	temperatureDetail,
	feelsLikeDetail,
	weatherDetail,
	sunriseDetail,
	sunsetDetail,
	navDetail,
	navNow,
	navForecast,
	contentNow

}
