export {favoriteCities, currentCity};

function getCurrentCity() {
    return localStorage.getItem('currentCity');
}
const currentCity = getCurrentCity();

function getFavoriteCities() {
    return JSON.parse(localStorage.getItem('cities'));
}
const favoriteCities = getFavoriteCities();