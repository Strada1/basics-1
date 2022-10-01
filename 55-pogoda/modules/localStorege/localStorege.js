const STOREGE = {
   STORAGE_KEY: 'arrWeatherLocations',
   SELECTED_CITY_KEY: 'weatherSelectedLocations',
   pullLocalStoregeArr(decodeArray = false) {
      if (decodeArray) {
         return JSON.parse(localStorage.getItem(this.STORAGE_KEY));
      }
      return localStorage.getItem(this.STORAGE_KEY);
   },
   pushLocalStoregeArr(arr) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
   },
   setLastSelectedСity(city) {
      localStorage.setItem(this.SELECTED_CITY_KEY, JSON.stringify(city));
   },
   getLastSelectedСity() {
      if (localStorage.getItem(this.STORAGE_KEY)) {
         return JSON.parse(localStorage.getItem(this.SELECTED_CITY_KEY));
      } else {
         // здесь можно определить геолокацию и передать горрод пользователя )
         return 'Киев';
      }
   },
}

export { STOREGE }