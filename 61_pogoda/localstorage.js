export let FavoriteCities = [];

export function saveNowCityLocalStorage(cityName) {
  localStorage.setItem("city", cityName);
}

export function saveCitiesLocalStorage(cityName) {
  FavoriteCities.push(cityName);
  localStorage.setItem("cities", JSON.stringify(FavoriteCities));
}

export function deleteCityLocalStorage(cityName) {
  let index = FavoriteCities.indexOf(cityName);
  if (index !== -1) {
    FavoriteCities.splice(index, 1);
    localStorage.setItem("cities", JSON.stringify(FavoriteCities));
  }
}
