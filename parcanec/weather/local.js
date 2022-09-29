export function toStorage(cities) {
    let citiesArray = JSON.stringify(cities)
    localStorage.setItem('citiesArray', citiesArray)
}

export function lastFavoriteViewed(city) {
    let lastCity = city
    localStorage.setItem('lastCity', lastCity)
}