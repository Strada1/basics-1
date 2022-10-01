'use strict'
import { cityList } from "./main.js"

export function addToLocalstorage() {
	localStorage.removeItem('favoriteCities')
	localStorage.setItem('favoriteCities', cityList)
}

export function getCurrentCity(cityName) {
	if (localStorage.getItem('currentCity')) {
		localStorage.setItem('currentCity', cityName)
	}
}