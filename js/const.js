const form = document.querySelector('form');
const inputSearch = document.querySelector('.nav_search__input');
const contentWeather = document.querySelector('.main_weather');
const temperature = contentWeather.querySelector('.temperature');
const img = contentWeather.querySelector('.cloud');
const favoriteCity = contentWeather.querySelector('.name_city');
const favoriteButton = contentWeather.querySelector('.favorite_btn');
const favoirtesCities = document.querySelector('.favorites_cities');
const searchButton = document.querySelector('.search');

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
	list
}
