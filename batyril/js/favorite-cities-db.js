import { addFavoriteCityUI, UI } from './UI.js';

export const favoriteCities = [];

export function renderFavoriteCities(array, place = UI.FAVORITE_CITIES_LIST) {
  while (place.firstChild) {
    place.firstChild.remove();
  }
  array.forEach((city) => addFavoriteCityUI(city, place));
}

export function addFavoriteCitDatabase(city, db = favoriteCities) {
  if (!db.includes(city)) {
    db.push(city);
  } else {
    throw new Error('city in favorites');
  }
}

export function deleteCitiDatabase(event, db = favoriteCities) {
  if (event.target.classList.contains('favorites__delete')) {
    const cityName = event.target.previousElementSibling.textContent;
    const indexTask = db.findIndex((city) => city === cityName);
    if (indexTask !== -1) {
      db.splice(indexTask, 1);
    }
    renderFavoriteCities(db);
  }
}
