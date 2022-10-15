export function saveToStorage(cityArr) {
  const savedCities = JSON.stringify(cityArr);
  localStorage.setItem("savedCities", savedCities);
}

export function showLastCity(city) {
  const lastCity = city;
  localStorage.setItem("lastCity", lastCity);
}
