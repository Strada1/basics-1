export { сitiesAdded, recordToStorage, getFromStorage, setCurrentCity, getCurrentCity };

let сitiesAdded = [];

// запись списка любимых городов в localStorage
function recordToStorage(сitiesAdded) {
    const citiesStorage = JSON.stringify(сitiesAdded);
    localStorage.setItem('cities', citiesStorage);
}

// извлечение списка любимых городов из localStorage
function getFromStorage() {
    сitiesAdded = JSON.parse(localStorage.getItem('cities'));
    return сitiesAdded;
}

// запись текущего города городов в localStorage
function setCurrentCity(currentCity) {
    const cityStorage = JSON.stringify(currentCity);
    localStorage.setItem('currentCity', cityStorage);
}

// извлечение текущего города из localStorage
function getCurrentCity() {
    let currentCity;
    try {
        currentCity = JSON.parse(localStorage.getItem('currentCity'));
    }
    catch {
        currentCity = 'Moscow';
    }
    return currentCity;
}

// storage.saveFavoriteCities(favoriteCities)
// const favoriteCities = storage.getFavoriteCities();
// const currentCity = storage.getCurrentCity();