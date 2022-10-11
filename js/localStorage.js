export function saveFavoriteCity(city) {
		localStorage.setItem(`${city.id}`, JSON.stringify(city));
	}

export function getFavoriteCities() {
	let list = [];

	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key) || key === 'current') {
      continue;
    }
		
		list.push(JSON.parse(localStorage.getItem(key)));
	}

	return list;
}

export function addCurrentCity(name) {
	return localStorage.setItem('current', name);
}

export function getCurrentCity() {
	return localStorage.getItem('current');
}

export function deleteCity(name) {
	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key) || key === 'current') {
      continue;
		}
		
		const city = localStorage.getItem(key);
		const obj = JSON.parse(city);
		
    if (obj.name === name){
      localStorage.removeItem(key);
    }
  }
}