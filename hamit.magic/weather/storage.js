export const storage = {
    saveFavoriteCity: (city) => {
        const cities = localStorage.getItem('cities');
        if (cities) cities.push(city);
        else cities = [city];
        localStorage.setItem('cities', cities);
    },
    getFavoriteCities: () => {
        try{
            return localStorage.getItem('cities');
        }
        catch{error}
    },
    getCurrentCity: () => {
        try{
            return localStorage.getItem('currentCity');
        }
        catch{error}
    },
    saveCurrentCity: (city) => {
        localStorage.setItem('currentCity', city);
    },
}