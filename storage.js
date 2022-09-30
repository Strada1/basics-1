export function saveCityList(cityList) {
  cityList.forEach((city, cityID) => {
    localStorage.setItem(`city-${cityID}`, city.name);
  })
}

export function getCityList() {
  const list = [];
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key) || key === 'currentCity') {
      continue;
    }
    list.push({ 'name': localStorage.getItem(key) });
  }
  return list;
}

export function deleteCityFromStorage(cityName){
  for (let key in localStorage) {
    const city = localStorage.getItem(key);
    if (city === cityName){
      localStorage.removeItem(key);
    }
  }
}

export function addCurrentCity(cityName){
  localStorage.setItem(`currentCity`, cityName );
}

export function getCurrentCity(){
  return localStorage.getItem('currentCity');
}
