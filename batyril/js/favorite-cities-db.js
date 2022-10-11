import { renderFavoriteCities, UI } from './UI.js';
import { updateCityLocalStorage } from './localStorage.js';
import { openPopup } from './popup.js';

export const favoriteCities = new Set();

export function addFavoriteCitDatabase(city, data = favoriteCities) {
  try {
    if (!data.has(city)) {
      data.add(city);
      updateCityLocalStorage([...data]);
    } else {
      throw new Error('city in favorites');
    }
  } catch (error) {
    openPopup(UI.POPUP, error.message);
  }
}

export function deleteCitiDatabase(event, data = favoriteCities) {
  if (event.target.classList.contains('favorites__delete')) {
    const cityName = event.target.previousElementSibling.textContent;
    if (data.has(cityName)) {
      data.delete(cityName);
    }
    updateCityLocalStorage([...data]);
    renderFavoriteCities(data);
  }
}
