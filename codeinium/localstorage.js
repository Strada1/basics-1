export function setCurrentCity(value) {
    return localStorage.setItem('currentCity', value);
}

export function getCurrentCity() {
    return localStorage.getItem('currentCity');
}

export function setFavoriteCities(value) {
    return localStorage.setItem('favoriteCities', value);
}

export function getFavoriteCities() {
    return localStorage.getItem('favoriteCities');
}