export function updateCityLocalStorage(db) {
  localStorage.setItem('cityName', db);
}

export function renderLocalStorage(addDatabase) {
  const checkOldLs = localStorage.getItem('cityName');
  if (checkOldLs) {
    const oldArr = checkOldLs.split(',');
    oldArr.forEach((item) => addDatabase(item));
  }
}

export function setCurrentCityLocalStorage(cityName) {
  localStorage.setItem('currentCity', cityName);
}

export function getCurrentCityLocalStorage(request) {
  const checkCurrentCity = localStorage.getItem('currentCity');
  if (checkCurrentCity) {
    request(checkCurrentCity);
  }
}
