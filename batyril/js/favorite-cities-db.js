import { renderFavoriteCities } from './UI.js';
import { updateCityLocalStorage } from './localStorage.js';

export const favoriteCities = [];

export function addFavoriteCitDatabase(city, db = favoriteCities) {
  if (!db.includes(city)) {
    db.push(city);
    updateCityLocalStorage(db);
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
    updateCityLocalStorage(db);
    renderFavoriteCities(db);
  }
}
