

export function saveFavoriteCities(cities, value) {
    const favoriteCities = cities
    localStorage.setItem(cities, value)
}

export function getCurrentCity(city, value) {
    const currentCity = city
    localStorage.setItem(city)
} 

