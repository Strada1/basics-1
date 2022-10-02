import { storage } from './local-storage.js';


const findLocation = (name) => {
  const locationsList = getLocationsList();
  return locationsList.find((location) => location === name);
};


const deleteLocation = (name) => {
  const locationsList = getLocationsList();

  storage.saveFavouriteLocations(
    locationsList.filter((location) => location !== name)
  );
};


const addLocation = (name) => {
  const locationsList = getLocationsList();

  if (!findLocation(name)) {
    locationsList.push(name);
    storage.saveFavouriteLocations(locationsList);
  }
};


const getLocationsList = () => {
  return storage.getFavouriteLocations();
};


export { addLocation, deleteLocation, getLocationsList, findLocation };
