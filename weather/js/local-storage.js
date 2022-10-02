const LOCATIONS_STORAGE_NAME = 'favouriteLocations';
const CURRENT_LOCATION_STORAGE_NAME = 'currentLocation';

const storage = {
  saveFavouriteLocations (favouriteLocations) {
    favouriteLocations =
      (favouriteLocations && favouriteLocations.length > 0)
        ? favouriteLocations
        : [];
    localStorage.setItem(LOCATIONS_STORAGE_NAME, JSON.stringify(favouriteLocations));
  },

  getFavouriteLocations () {
    const data = localStorage.getItem(LOCATIONS_STORAGE_NAME);
    return data ? JSON.parse(data) : [];
  },

  saveCurrentLocation (name) {
    name && localStorage.setItem(CURRENT_LOCATION_STORAGE_NAME, JSON.stringify(name));
  },

  getCurrentLocation () {
    const data = localStorage.getItem(CURRENT_LOCATION_STORAGE_NAME);
    return data ? JSON.parse(data) : '';
  }
};


export { storage };
