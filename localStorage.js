const STORAGE_ERROR = {
	CITY_ALREADY_IN_LIST: 'already in list'
}

export const addCityToLocalStorage = cityName => {
	const isCitiesInStorage = localStorage.getItem('cities')
	const citiesArray = isCitiesInStorage ? JSON.parse(localStorage.getItem('cities')) : [];
	const isCityAlreadyInStorage = citiesArray.some(city => city === cityName)

	if(!isCityAlreadyInStorage) {
		citiesArray.push(cityName)
	} else {
		alert(STORAGE_ERROR.CITY_ALREADY_IN_LIST)
	}

	localStorage.setItem('cities', JSON.stringify(citiesArray))
}

export const removeCityFromLocalStorage = cityName => {
	const citiesArray = JSON.parse(localStorage.getItem('cities')).filter(city => city !== cityName)
	localStorage.setItem('cities', JSON.stringify(citiesArray))
}

export const getCitiesFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('cities'))
}

export const FIRST_CITY_FROM_FAVORITE_LIST = getCitiesFromLocalStorage()[0]