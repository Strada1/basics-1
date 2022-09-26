const form = document.querySelector('form');
const inputSearch = document.querySelector('.nav_search__input');
const contentWeather = document.querySelector('.main_weather');
const temperature = contentWeather.querySelector('.temperature');
const img = contentWeather.querySelector('.cloud');
const nameCity = contentWeather.querySelector('.name_city')


export {
	inputSearch,
	form,
	temperature,
	img,
	nameCity,
}
